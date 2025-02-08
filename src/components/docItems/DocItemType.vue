<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createHighlighter, type Highlighter } from 'shiki';

const props = defineProps<{
  id?: string;
  title: string;
  description: string;
  shortCode: string;
}>();

const highlightedShortCode = ref<string>('');

async function highlightCode(code: string, highlighter: Highlighter) {
  return highlighter.codeToHtml(code, { lang: 'tsx', theme: 'github-light' });
}

onMounted(async () => {
  const highlighter = await createHighlighter({
    themes: ['github-light'],
    langs: ['vue', 'tsx', 'bash', 'jsx'],
  });

  highlightedShortCode.value = await highlightCode(
    props.shortCode,
    highlighter,
  );
});
</script>

<template>
  <div :id="id">
    <div
      v-if="title"
      class="font-bold text-xl mb-4 text-neutral-800 flex items-center gap-2 group hover:cursor-pointer"
    >
      <a :href="`#${id}`" class="flex items-center gap-2">
        <h2>{{ title }}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          class="text-neutral-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
      </a>
    </div>

    <div class="text-neutral-500">
      {{ description }}
    </div>

    <div class="text-sm border rounded-lg shadow-sm my-6 overflow-hidden">
      <div class="flex justify-between items-center p-2 border-b bg-neutral-50">
        <span class="text-xs flex items-center gap-2">
          <i-mynaui:terminal-solid class="text-neutral-400" />
          <span class="text-neutral-500">Type</span>
        </span>
      </div>

      <pre class="p-4" v-html="highlightedShortCode" />
    </div>
  </div>
</template>
