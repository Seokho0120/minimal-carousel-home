<script setup lang="ts">
import { MinimalCarousel } from 'minimal-carousel';
import DocIntro from './docItems/DocIntro.vue';
import DocItem from './docItems/DocItem.vue';
import DocItemType from './docItems/DocItemType.vue';
import { IMAGES } from '@/constants/ImgData';

const typeCode = `disableOnInteraction: boolean;`;
const exampleShortCode = `<MinimalCarousel :disableOnInteraction="false" autoPlay/>`;
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
  <MinimalCarousel :imageItems="IMAGES" :disableOnInteraction="false" autoPlay/>
<\/template>
`;
</script>

<template>
  <div class="py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <DocIntro
        title="DisableOnInteraction"
        description="The disableOnInteraction feature is an option that disables autoplay when the user interacts with the carousel."
      />

      <div class="mt-12 w-full">
        <DocItemType
          title="Type of DisableOnInteraction"
          description="The type of DisableOnInteraction is boolean, and the default value is true."
          :shortCode="typeCode"
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          title="Example"
          description="The default value for disableOnInteraction is true, and when set to false, autoplay will not be disabled during interactions."
          :shortCode="exampleShortCode"
          :longCode="exampleFullCode"
          example
        >
          <template #carousel>
            <div class="mt-2 p-6 border-[1px] rounded-xl">
              <MinimalCarousel
                :imageItems="IMAGES"
                class="rounded-lg"
                :disableOnInteraction="false"
                autoPlay
              />
            </div>
          </template>
        </DocItem>
      </div>
    </div>
  </div>
</template>
