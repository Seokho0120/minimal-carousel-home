<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createHighlighter } from 'shiki';
import { IMAGES } from '@/constants/ImgData';
import DocIntro from './docItems/DocIntro.vue';
import DocItem from './docItems/DocItem.vue';
import DocItemType from './docItems/DocItemType.vue';
import { MinimalCarousel } from 'minimal-carousel';
import type { anchorLinksItemsType } from './GettingStarted.vue';
import SideBar from './docItems/sideBar.vue';

const typeCode = `showPrevButton: boolean;`;
const exampleShortCode = `<MinimalCarousel showPrevButton/>`;
const exampleShortCode2 = `<MinimalCarousel :showPrevButton="false"/>`;
const exampleFullCode = `<script setup lang='ts'>
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
const customShortCode = `<MinimalCarousel :imageItems="IMAGES">
  <template #prev-btn="{ defaultClass, goToPrev }">
    <span @click="goToPrev" class="text-white" :class="defaultClass">
      prev button
    </span>
  </template>
</MinimalCarousel>
`;
const customCode = `<script setup lang='ts'>
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
  <MinimalCarousel :imageItems="IMAGES">
    <template #prev-btn="{ defaultClass, goToPrev }">
      <span @click="goToPrev" class="text-white" :class="defaultClass">
        prev button
      </span>
    </template>
  </MinimalCarousel>
<\/template>
`;
const defaultCode = `defaultClass="absolute left-4 top-1/2"`;

const highlightedDefaultClassCode = ref('');

onMounted(async () => {
  const highlighter = await createHighlighter({
    themes: ['github-light'],
    langs: ['vue', 'tsx', 'bash', 'jsx'],
  });

  highlightedDefaultClassCode.value = highlighter.codeToHtml(defaultCode, {
    lang: 'vue',
    theme: 'github-light',
  });
});

const anchorLinksItems = ref<anchorLinksItemsType[]>([
  { id: 'type-of-showPrevButton', title: 'Type of ShowPrevButton' },
  { id: 'example', title: 'Example' },
  { id: 'custom', title: 'Custom' },
  { id: 'usage', title: 'Usage' },
]);
</script>

<template>
  <div class="flex gap-4 py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <DocIntro
        title="ShowPrevButton"
        description="The showPrevButton feature displays the previous button, allowing
          users to navigate to the previous image in the carousel."
      />

      <div class="mt-12 w-full">
        <DocItemType
          id="type-of-showPrevButton"
          title="Type of ShowPrevButton"
          description="The type of showPrevButton is boolean, and the default value is true."
          :shortCode="typeCode"
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          title="Example"
          id="example"
          description="The default value of showPrevButton is true, and it will always be
          shown unless additional settings are applied."
          :shortCode="exampleShortCode"
          :longCode="exampleFullCode"
          example
        >
          <template #carousel>
            <div class="mt-2 p-6 border-[1px] rounded-xl">
              <MinimalCarousel :imageItems="IMAGES" class="rounded-lg" />
            </div>
          </template>
        </DocItem>

        <DocItem
          description="If showPrevButton is set to false, the previous button will not be
          displayed."
          :shortCode="exampleShortCode2"
          example
        >
          <template #carousel>
            <div class="mt-2 p-6 border-[1px] rounded-xl">
              <MinimalCarousel
                :imageItems="IMAGES"
                :showPrevButton="false"
                class="rounded-lg"
              />
            </div>
          </template>
        </DocItem>
      </div>

      <div class="gap-36 mt-12 w-full">
        <DocItem
          title="Custom"
          id="custom"
          description="MinimalCarousel provides the ability to customize buttons. This allows
          users to implement buttons with their own styles and behaviors instead
          of using the default buttons."
          :shortCode="customShortCode"
          :longCode="customCode"
          example
        >
          <template #carousel>
            <div class="mt-2 p-6 border-[1px] rounded-xl">
              <MinimalCarousel :imageItems="IMAGES" class="rounded-xl">
                <template #prev-btn="{ defaultClass, goToPrev }">
                  <span
                    @click="goToPrev"
                    class="text-white"
                    :class="defaultClass"
                  >
                    prev button
                  </span>
                </template>
              </MinimalCarousel>
            </div>
          </template>
        </DocItem>

        <div id="usage" class="group hover:cursor-pointer">
          <a
            href="#usage"
            class="flex items-center gap-2 font-bold text-xl my-4 text-neutral-800"
          >
            <h2>Usage</h2>
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

          <div class="text-neutral-500">
            <p class="font-bold text-neutral-800">#prev-btn</p>
            <p>
              This slot can be used to customize the previous button. By
              defining the content of the slot, you can use a custom button
              instead of the default provided previous button.
            </p>

            <div class="flex flex-col">
              <p class="font-bold text-neutral-800 mt-6 mb-2">Properties</p>
              <p class="font-semibold text-neutral-800 mb-1">defaultClass</p>
              <p>
                This is the default button class. You can easily apply styles to
                the button, and you can also choose to customize it directly
                without using this class.
              </p>

              <div
                class="text-sm border rounded-lg shadow-sm mt-1 mb-6 overflow-hidden"
              >
                <pre class="p-4" v-html="highlightedDefaultClassCode" />
              </div>

              <p class="font-semibold text-neutral-800 mb-1">goToPrev</p>
              <p>
                This is a method for showing the previous image. You can call
                this method when the button is clicked to navigate the carousel
                to the previous image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SideBar :anchorLinksItems="anchorLinksItems" />
  </div>
</template>
