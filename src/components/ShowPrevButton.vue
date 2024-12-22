<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { toast } from 'vue-sonner';
import { createHighlighter } from 'shiki';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';

const IMAGES = [
  {
    link: img1,
    id: 1,
    name: '1',
  },
  {
    link: img2,
    id: 2,
    name: '2',
  },
  {
    link: img3,
    id: 3,
    name: '3',
  },
  {
    link: img4,
    id: 4,
    name: '4',
  },
  {
    link: img5,
    id: 5,
    name: '5',
  },
];
const isFullAndShort = ref(true);

const typeCode = `showPrevButton: boolean;`;
const exampleShortCode = `<MinimalCarousel showPrevButton/>`;
const exampleShortCode2 = `<MinimalCarousel :showPrevButton="false"/>`;
const exampleFullCode = `<script setup lang='ts'>
import { MinimalCarousel } from "minimal-carousel";
import "minimal-carousel/minimal-carousel.css";
import img1 from '../img1.jpg';
import img2 from '../img2.jpg';
import img3 from '../img3.jpg';

const IMAGES = [
  { link: 'img1.jpg', id: 1, name: 'img1' },
  { link: 'img2.jpg', id: 2, name: 'img2' },
  { link: 'img3.jpg', id: 3, name: 'img3' },
];

<\/script>

<template>
  <MinimalCarousel :imageItems="IMAGES" showPrevButton/>
<\/template>
`;

const highlightedTypeCode = ref('');
const highlightedExampleFullCode = ref('');
const highlightedExampleShortCode = ref('');
const highlightedExampleShortCode2 = ref('');

onMounted(async () => {
  const highlighter = await createHighlighter({
    themes: ['github-light'],
    langs: ['vue', 'tsx'],
  });

  highlightedTypeCode.value = highlighter.codeToHtml(typeCode, {
    lang: 'tsx',
    theme: 'github-light',
  });

  highlightedExampleShortCode.value = highlighter.codeToHtml(exampleShortCode, {
    lang: 'vue',
    theme: 'github-light',
  });

  highlightedExampleShortCode2.value = highlighter.codeToHtml(
    exampleShortCode2,
    {
      lang: 'vue',
      theme: 'github-light',
    },
  );

  highlightedExampleFullCode.value = highlighter.codeToHtml(exampleFullCode, {
    lang: 'vue',
    theme: 'github-light',
  });
});

const copyToExampleShortText = async () => {
  await navigator.clipboard.writeText(exampleShortCode);
  toast.success(`Copy code!`);
};

const copyToExampleShortText2 = async () => {
  await navigator.clipboard.writeText(exampleShortCode2);
  toast.success(`Copy code!`);
};

const copyToExampleFullText = async () => {
  await navigator.clipboard.writeText(exampleFullCode);
  toast.success(`Copy code!`);
};
</script>

<template>
  <div class="py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <div class="flex flex-col gap-4">
        <h1 class="font-semibold text-4xl text-neutral-800">ShowPrevButton</h1>
        <div class="text-neutral-500">
          The showPrevButton feature displays the previous button, allowing
          users to navigate to the previous image in the carousel.
        </div>
      </div>

      <!-- ImageItems 설명 -->
      <div class="mt-12 w-full">
        <h2 class="font-semibold text-xl mb-4 text-neutral-800">
          Type of ShowPrevButton
        </h2>
        <div class="text-neutral-500">
          The type of showPrevButton is boolean, and the default value is true.
        </div>

        <div class="text-sm border rounded-lg shadow-sm my-6 overflow-hidden">
          <div
            class="flex justify-between items-center p-2 border-b bg-neutral-50"
          >
            <span class="text-xs flex items-center gap-2">
              <i-mynaui:terminal-solid class="text-neutral-400" />
              <span class="text-neutral-500">Type</span>
            </span>
          </div>

          <pre class="p-4" v-html="highlightedTypeCode" />
        </div>

        <h2 class="font-semibold text-xl mb-4 text-neutral-800">Example</h2>
        <div class="text-neutral-500">
          The default value of showPrevButton is true, and it will always be
          shown unless additional settings are applied.
        </div>

        <!-- 예시 -->
        <div class="mt-2 p-6 border-[1px] rounded-xl">
          <MinimalCarousel :imageItems="IMAGES" class="rounded-lg" />
        </div>

        <!-- code -->
        <div class="text-sm border rounded-lg shadow-sm my-6 overflow-hidden">
          <div
            class="flex justify-between items-center p-2 border-b bg-neutral-50"
          >
            <span class="text-xs flex items-center gap-2">
              <i-heroicons:document-solid class="text-neutral-400" />
              <span class="text-neutral-500">Example</span>
            </span>

            <div class="flex items-center gap-2">
              <button @click="isFullAndShort = !isFullAndShort">
                <i-heroicons:code-bracket-square
                  class="text-neutral-600 hover:text-neutral-400"
                />
              </button>

              <button v-if="isFullAndShort" @click="copyToExampleShortText">
                <i-heroicons:square-2-stack
                  class="text-neutral-600 hover:text-neutral-400"
                />
              </button>

              <button v-else @click="copyToExampleFullText">
                <i-heroicons:square-2-stack
                  class="text-neutral-600 hover:text-neutral-400"
                />
              </button>
            </div>
          </div>

          <pre
            v-if="isFullAndShort"
            class="p-4"
            v-html="highlightedExampleShortCode"
          />
          <pre v-else class="p-4" v-html="highlightedExampleFullCode" />
        </div>

        <div class="text-neutral-500">
          If showPrevButton is set to false, the previous button will not be
          displayed.
        </div>

        <!-- 예시2 -->
        <div class="mt-2 p-6 border-[1px] rounded-xl">
          <MinimalCarousel
            :imageItems="IMAGES"
            :showPrevButton="false"
            class="rounded-lg"
          />
        </div>

        <!-- code -->
        <div class="text-sm border rounded-lg shadow-sm my-6 overflow-hidden">
          <div
            class="flex justify-between items-center p-2 border-b bg-neutral-50"
          >
            <span class="text-xs flex items-center gap-2">
              <i-heroicons:document-solid class="text-neutral-400" />
              <span class="text-neutral-500">Example</span>
            </span>

            <div class="flex items-center gap-2">
              <button @click="copyToExampleShortText2">
                <i-heroicons:square-2-stack
                  class="text-neutral-600 hover:text-neutral-400"
                />
              </button>
            </div>
          </div>

          <pre class="p-4" v-html="highlightedExampleShortCode2" />
        </div>
      </div>
    </div>
  </div>
</template>
