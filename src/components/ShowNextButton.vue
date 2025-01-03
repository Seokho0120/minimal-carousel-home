<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { IMAGES } from '@/constants/ImgData';
import { createHighlighter } from 'shiki';
import DocIntro from './docItems/DocIntro.vue';
import DocItemType from './docItems/DocItemType.vue';
import DocItem from './docItems/DocItem.vue';
import { MinimalCarousel } from 'minimal-carousel';

const typeCode = `showNextButton: boolean;`;
const exampleShortCode = `<MinimalCarousel showNextButton/>`;
const exampleShortCode2 = `<MinimalCarousel :showNextButton="false"/>`;
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
  <MinimalCarousel :imageItems="IMAGES" showNextButton/>
<\/template>
`;
const customShortCode = `<MinimalCarousel :imageItems="IMAGES">
  <template #next-btn="{ defaultClass, goToNext }">
    <span @click="goToNext" class="text-white" :class="defaultClass">
      next button
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
    <template #next-btn="{ defaultClass, goToNext }">
      <span @click="goToNext" class="text-white" :class="defaultClass">
        next button
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
</script>

<template>
  <div class="py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <DocIntro
        title="ShowNextButton"
        description="The showNextButton feature displays the next button, allowing users to
          navigate to the next image in the carousel."
      />

      <div class="mt-12 w-full">
        <DocItemType
          title="Type of ShowNextButton"
          description="The type of showNextButton is boolean, and the default value is true."
          :shortCode="typeCode"
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          title="Example"
          description="The default value of showNextButton is true, and it will always be
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
          description="If showNextButton is set to false, the previous button will not be
          displayed."
          :shortCode="exampleShortCode2"
          example
        >
          <template #carousel>
            <div class="mt-2 p-6 border-[1px] rounded-xl">
              <MinimalCarousel
                :imageItems="IMAGES"
                :showNextButton="false"
                class="rounded-lg"
              />
            </div>
          </template>
        </DocItem>
      </div>

      <div class="mt-12 w-full">
        <DocItem
          title="Custom"
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
                <template #next-btn="{ defaultClass, goToNext }">
                  <span
                    @click="goToNext"
                    class="text-white"
                    :class="defaultClass"
                  >
                    next button
                  </span>
                </template>
              </MinimalCarousel>
            </div>
          </template>
        </DocItem>

        <h3 class="font-bold text-xl my-4 text-neutral-800">Usage</h3>
        <div class="text-neutral-500">
          <p class="font-bold text-neutral-800">#next-btn</p>
          <p>
            This slot can be used to customize the next button. By defining the
            content of the slot, you can use a custom button instead of the
            default provided next button.
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

            <p class="font-semibold text-neutral-800 mb-1">goToNext</p>
            <p>
              This is a method for showing the next image. You can call this
              method when the button is clicked to navigate the carousel to the
              next image.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
