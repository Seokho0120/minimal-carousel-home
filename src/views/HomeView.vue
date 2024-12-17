<script setup lang="ts">
import { MinimalCarousel } from 'minimal-carousel';
import 'minimal-carousel/minimal-carousel.css';
import { createHighlighter } from 'shiki';
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue-sonner';

const test11 = ref(false);

const installCode = `pnpm i minimal-carousel`;
const usageCode = computed(
  () => `
<script setup lang='ts'>
import { MinimalCarousel } from "minimal-carousel";
import "minimal-carousel/minimal-carousel.css";

const TEST = [
  { link: 'test1.jpg', id: 1, name: "1" },
  { link: 'test2.jpg', id: 2, name: "2" },
  { link: 'test3.jpg', id: 3, name: "3" },
];
<\/script>

<template>
  <MinimalCarousel :imageItems="TEST" ${test11.value ? 'pagination' : ''}/>
<\/template>
`,
);

const highlightedInstallCode = ref('');
const highlightedUsageCode = ref('');

const highlighter = ref();

watch(usageCode, () => {
  highlightedUsageCode.value = highlighter.value.codeToHtml(usageCode.value, {
    lang: 'vue',
    theme: 'github-light',
  });
});

onMounted(async () => {
  highlighter.value = await createHighlighter({
    themes: ['github-light'],
    langs: ['bash', 'vue'],
  });

  highlightedInstallCode.value = highlighter.value.codeToHtml(installCode, {
    lang: 'bash',
    theme: 'github-light',
  });

  highlightedUsageCode.value = highlighter.value.codeToHtml(usageCode.value, {
    lang: 'vue',
    theme: 'github-light',
  });
});

import test1 from '../assets/Abstract Wavy Sculptures.jpeg';
import test2 from '../assets/859-536x354.jpg';
import test3 from '../assets/Translucent Trio_ Fluid Earth and Fire.jpeg';

const TEST = [
  {
    link: test1,
    id: 1,
    name: '1',
  },
  {
    link: test2,
    id: 2,
    name: '2',
  },
  {
    link: test3,
    id: 3,
    name: '3',
  },
];
const router = useRouter();

const installText = ref('pnpm i minimal-carousel');

const copyToInstallText = async () => {
  await navigator.clipboard.writeText(installText.value);
  toast.success(`Copy code: ${installText.value}`);
};

const goToDocs = () => {
  // a, router-link
  router.push('/docs/getting-started');
};

const goToGithub = () => {
  window.open('https://github.com/Seokho0120/minimal-carousel', '_blank');
};

function test22() {
  test11.value = !test11.value;
}
</script>

<template>
  <div class="pt-44">
    <div
      class="flex flex-col justify-center items-center gap-4 max-w-[642px] m-auto"
    >
      <h1 class="text-5xl font-bold text-center text-neutral-900">
        Minimal Carousel
      </h1>
      <p class="text-center text-lg text-neutral-900">
        A user-friendly carousel library with essential features for quick
        implementation.
      </p>

      <div class="flex gap-2">
        <button
          @click="goToDocs"
          class="bg-neutral-900 hover:bg-neutral-800 text-neutral-50 text-xs px-8 font-semibold rounded-md w-[152px] h-[42px]"
        >
          Document
        </button>

        <button
          @click="goToGithub"
          class="bg-gradient-to-r from-white to-neutral-100 text-neutral-900 text-xs px-8 font-semibold rounded-md w-[152px] h-[42px] shadow-md border border-neutral-100 hover:bg-gradient-to-br hover:from-neutral-100 hover:to-white"
        >
          Github
        </button>
      </div>

      <MinimalCarousel :imageItems="TEST" :pagination="test11" />
      <button @click="test22">test</button>

      <pre class="p-2" v-html="highlightedUsageCode" />

      <div class="flex flex-col gap-14 mt-14 w-full">
        <div>
          <h2 class="pb-3">Installation</h2>
          <code
            @click="copyToInstallText"
            class="w-full flex items-center p-2 pl-3 pr-4 rounded-lg border border-neutral-100 text-neutral-800 bg-gradient-to-b from-white to-neutral-100 text-sm cursor-pointer justify-between"
          >
            <p>{{ installText }}</p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                class="text-neutral-600 hover:text-neutral-500"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                />
              </svg>
            </button>
          </code>
        </div>
      </div>
    </div>
  </div>
</template>
