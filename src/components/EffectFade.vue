<script setup lang="ts">
import { MinimalCarousel } from 'minimal-carousel';
import DocIntro from './docItems/DocIntro.vue';
import DocItem from './docItems/DocItem.vue';
import DocItemType from './docItems/DocItemType.vue';
import { IMAGES } from '@/constants/ImgData';

const typeCode = `effectFade: boolean;`;
const exampleShortCode = `<MinimalCarousel effectFade />`;
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
  <MinimalCarousel :imageItems="IMAGES" effectFade />
<\/template>
`;
</script>

<template>
  <div class="py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <DocIntro
        title="EffectFade"
        description="The effectFade feature activates a fade effect between slides."
      />

      <div class="mt-12 w-full">
        <DocItemType
          title="Type of EffectFade"
          description="The type of EffectFade is boolean, and the default value is false."
          :shortCode="typeCode"
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          title="Example"
          description="The default value for effectFade is false, and when set to true, it will be enabled."
          :shortCode="exampleShortCode"
          :longCode="exampleFullCode"
          example
        >
          <template #carousel>
            <div class="mt-2 p-6 border-[1px] rounded-xl">
              <MinimalCarousel
                :imageItems="IMAGES"
                class="rounded-lg"
                effectFade
              />
            </div>
          </template>
        </DocItem>
      </div>
    </div>
  </div>
</template>
