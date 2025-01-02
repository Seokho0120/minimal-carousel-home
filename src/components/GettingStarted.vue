<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { toast } from 'vue-sonner';
import { createHighlighter } from 'shiki';
import DocIntro from './docitems/DocIntro.vue';

const installCode = `pnpm i minimal-carousel`;
const usageCode = `<script setup lang='ts'>
import img1 from '../img1.jpg';
import img2 from '../img2.jpg';
import img3 from '../img3.jpg';

const IMAGES = [
  { link: 'img1.jpg' },
  { link: 'img2.jpg' },
  { link: 'img3.jpg' },
];

<\/script>

<template>
  <MinimalCarousel :imageItems="IMAGES"/>
<\/template>
`;
const configCode = `import { createApp } from 'vue';
import { MinimalCarousel } from 'minimal-carousel';
import 'minimal-carousel/minimal-carousel.css';

const app = createApp(App)
app.component('MinimalCarousel', MinimalCarousel);
`;

const highlightedInstallCode = ref('');
const highlightedUsageCode = ref('');
const highlightedConfigCode = ref('');

onMounted(async () => {
  const highlighter = await createHighlighter({
    themes: ['github-light'],
    langs: ['bash', 'vue', 'tsx'],
  });

  highlightedInstallCode.value = highlighter.codeToHtml(installCode, {
    lang: 'bash',
    theme: 'github-light',
  });

  highlightedUsageCode.value = highlighter.codeToHtml(usageCode, {
    lang: 'vue',
    theme: 'github-light',
  });

  highlightedConfigCode.value = highlighter.codeToHtml(configCode, {
    lang: 'tsx',
    theme: 'github-light',
  });
});

const copyToInstallText = async () => {
  await navigator.clipboard.writeText(installCode);
  toast.success(`Copy code!`);
  // toast.success(`Copy code: ${installCode}`);
};

const copyToConfigText = async () => {
  await navigator.clipboard.writeText(configCode);
  toast.success(`Copy code!`);
  // toast.success(`Copied code: ${usageCode}`);
};

const copyToUsageText = async () => {
  await navigator.clipboard.writeText(usageCode);
  toast.success(`Copy code!`);
  // toast.success(`Copied code: ${usageCode}`);
};
</script>

<template>
  <div class="py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <DocIntro
        title="Getting Started"
        description="Minimal Carousel is a carousel component for Vue. You can install Minimal Carousel in a simple way."
      />

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

      <!-- Configuration -->
      <div class="mt-12 w-full">
        <h2 class="font-semibold text-xl mb-4 text-neutral-800">
          Configuration
        </h2>
        <div class="text-neutral-500">
          MinimalCarousel is a required component that needs to be registered
          for use globally in your application. By adding this component, the
          default configuration is set up, allowing you to use it conveniently
          without affecting other parts of the application.
        </div>

        <div class="text-sm border rounded-lg shadow-sm my-6 overflow-hidden">
          <div
            class="flex justify-between items-center p-2 border-b bg-neutral-50"
          >
            <span class="text-xs flex items-center gap-2">
              <i-heroicons:document-solid class="text-neutral-400" />
              <span class="text-neutral-500">main.ts</span>
            </span>
            <button @click="copyToConfigText">
              <i-heroicons:square-2-stack
                class="text-neutral-600 hover:text-neutral-400"
              />
            </button>
          </div>

          <pre class="p-4" v-html="highlightedConfigCode" />
        </div>
      </div>

      <!-- Usage -->
      <div class="mt-12 w-full">
        <h2 class="font-semibold text-xl mb-4 text-neutral-800">
          Add MinimalCarousel to your app
        </h2>
        <div class="text-neutral-500">It can be placed anywhere.</div>

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
