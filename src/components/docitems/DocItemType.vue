<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createHighlighter, type Highlighter } from 'shiki';

const props = defineProps<{
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
  <h2 class="font-semibold text-xl mb-4 text-neutral-800">
    {{ title }}
  </h2>
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
</template>
