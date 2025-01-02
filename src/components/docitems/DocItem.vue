<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { toast } from 'vue-sonner';
import { IMAGES } from '@/constants/ImgData';
import { createHighlighter, type Highlighter } from 'shiki';

const props = defineProps<{
  title: string;
  description: string;
  shortCode?: string;
  longCode?: string;
}>();

const highlightedLongCode = ref<string>('');
const highlightedShortCode = ref<string>('');
const isShortCodeVisible = ref<boolean>(true);

async function highlightCode(code: string, highlighter: Highlighter) {
  return highlighter.codeToHtml(code, { lang: 'vue', theme: 'github-light' });
}

async function copyToClipBoard(type: 'short' | 'long') {
  const codeToCopy = type === 'short' ? props.shortCode : props.longCode;

  await navigator.clipboard.writeText(codeToCopy || '');
  toast.success(`Copy code!`);
}

onMounted(async () => {
  const highlighter = await createHighlighter({
    themes: ['github-light'],
    langs: ['vue', 'tsx', 'bash', 'jsx'],
  });

  highlightedShortCode.value = await highlightCode(
    props.shortCode || '',
    highlighter,
  );

  highlightedLongCode.value = await highlightCode(
    props.longCode || '',
    highlighter,
  );
});
</script>

<template>
  <div>
    <h2 class="font-bold text-xl mb-4 text-neutral-800">{{ title }}</h2>
    <div class="text-neutral-500">
      {{ description }}
    </div>

    <div class="mt-2 p-6 border-[1px] rounded-xl">
      <MinimalCarousel :imageItems="IMAGES" class="rounded-xl">
        <template #prev-btn="{ defaultClass, goToPrev }">
          <span @click="goToPrev" class="text-white" :class="defaultClass">
            prev button
          </span>
        </template>
      </MinimalCarousel>
    </div>

    <div class="text-sm border rounded-lg shadow-sm my-6 overflow-hidden">
      <div class="flex justify-between items-center p-2 border-b bg-neutral-50">
        <span class="text-xs flex items-center gap-2">
          <i-mynaui:terminal-solid class="text-neutral-400" />
          <span class="text-neutral-500">Example</span>
        </span>

        <div class="flex items-center gap-2">
          <button @click="isShortCodeVisible = !isShortCodeVisible">
            <i-heroicons:code-bracket-square
              class="text-neutral-600 hover:text-neutral-400"
            />
          </button>

          <button v-if="isShortCodeVisible" @click="copyToClipBoard('short')">
            <i-heroicons:square-2-stack
              class="text-neutral-600 hover:text-neutral-400"
            />
          </button>

          <button v-else @click="copyToClipBoard('long')">
            <i-heroicons:square-2-stack
              class="text-neutral-600 hover:text-neutral-400"
            />
          </button>
        </div>
      </div>

      <pre
        v-if="isShortCodeVisible"
        class="p-4"
        v-html="highlightedShortCode"
      />
      <pre v-else class="p-4" v-html="highlightedLongCode" />
    </div>
  </div>
</template>
