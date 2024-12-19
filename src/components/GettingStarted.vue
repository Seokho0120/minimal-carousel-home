<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { toast } from 'vue-sonner';
import { createHighlighter } from 'shiki';

const installCode = `pnpm i minimal-carousel`;
const usageCode = `<script setup lang='ts'>
import { MinimalCarousel } from "minimal-carousel";
import "minimal-carousel/minimal-carousel.css";

const TEST = [
  { link: 'test1.jpg', id: 1, name: "1" },
  { link: 'test2.jpg', id: 2, name: "2" },
  { link: 'test3.jpg', id: 3, name: "3" },
];
<\/script>

<template>
  <MinimalCarousel :imageItems="TEST"/>
<\/template>
`;

const highlightedInstallCode = ref('');
const highlightedUsageCode = ref('');

onMounted(async () => {
  const highlighter = await createHighlighter({
    themes: ['github-light'],
    langs: ['bash', 'vue'],
  });

  highlightedInstallCode.value = highlighter.codeToHtml(installCode, {
    lang: 'bash',
    theme: 'github-light',
  });

  highlightedUsageCode.value = highlighter.codeToHtml(usageCode, {
    lang: 'vue',
    theme: 'github-light',
  });
});

const copyToInstallText = async () => {
  await navigator.clipboard.writeText(installCode);
  toast.success(`Copy code!`);
  // toast.success(`Copy code: ${installCode}`);
};

const copyToUsageText = async () => {
  await navigator.clipboard.writeText(usageCode);
  toast.success(`Copied code: ${usageCode}`);
};
</script>

<template>
  <div class="py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <div class="flex flex-col gap-4">
        <h1 class="font-semibold text-4xl text-neutral-800">Getting Started</h1>
        <div class="text-neutral-500">
          Minimal Carousel is a carousel component for Vue. You can install
          Minimal Carousel in a simple way.
        </div>
      </div>

      <!-- Installation -->
      <div class="mt-12 w-full">
        <h2 class="font-semibold text-xl mb-4 text-neutral-800">
          Installation
        </h2>
        <div class="text-neutral-500">
          Simply pnpm/npm/yarn install the package.
        </div>

        <div class="text-sm border rounded-lg shadow-sm my-6 overflow-hidden">
          <div
            class="flex justify-between items-center p-2 border-b bg-neutral-50"
          >
            <span class="text-xs flex items-center gap-2">
              <i-mynaui:terminal-solid class="text-neutral-400" />
              <span class="text-neutral-500">Terminal</span>
            </span>
            <button @click="copyToInstallText">
              <i-heroicons:square-2-stack
                class="text-neutral-600 hover:text-neutral-400"
              />
            </button>
          </div>

          <pre class="p-4" v-html="highlightedInstallCode" />
        </div>
      </div>

      <!-- Usage -->
      <div class="mt-12 w-full">
        <h2 class="font-semibold text-xl mb-4 text-neutral-800">Usage</h2>
        <div class="text-neutral-500">Add the following code to your App</div>

        <div class="text-sm border rounded-lg shadow-sm my-6 overflow-hidden">
          <div
            class="flex justify-between items-center p-2 border-b bg-neutral-50"
          >
            <span class="text-xs flex items-center gap-2">
              <i-heroicons:document-solid class="text-neutral-400" />
              <span class="text-neutral-500">App.vue</span>
            </span>
            <button @click="copyToUsageText">
              <i-heroicons:square-2-stack
                class="text-neutral-600 hover:text-neutral-400"
              />
            </button>
          </div>

          <pre class="p-4" v-html="highlightedUsageCode" />
        </div>
      </div>
    </div>
  </div>
</template>
