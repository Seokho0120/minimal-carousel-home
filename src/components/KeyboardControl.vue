<script setup lang="ts">
import { MinimalCarousel } from 'minimal-carousel';
import DocIntro from './docItems/DocIntro.vue';
import DocItem from './docItems/DocItem.vue';
import DocItemType from './docItems/DocItemType.vue';
import { IMAGES } from '@/constants/ImgData';
import { ref } from 'vue';
import type { anchorLinksItemsType } from './GettingStarted.vue';
import SideBar from './docItems/sideBar.vue';

const typeCode = `keyboardControl: boolean;`;
const exampleShortCode = `<MinimalCarousel keyboardControl />`;
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
  <MinimalCarousel :imageItems="IMAGES" keyboardControl />
<\/template>
`;

const anchorLinksItems = ref<anchorLinksItemsType[]>([
  { id: 'type-of-keyboardControl', title: 'Type of KeyboardControl' },
  { id: 'example', title: 'Example' },
]);
</script>

<template>
  <div class="flex gap-4 py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <DocIntro
        title="KeyboardControl"
        description="The keyboardControl feature allows users to control the slides using the keyboard arrow keys."
      />

      <div class="mt-12 w-full">
        <DocItemType
          id="type-of-keyboardControl"
          title="Type of KeyboardControl"
          description="The type of KeyboardControl is boolean, and the default value is false."
          :shortCode="typeCode"
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          id="example"
          title="Example"
          description="The default value for keyboardControl is false, and when set to true, users can control the slides with the keyboard."
          :shortCode="exampleShortCode"
          :longCode="exampleFullCode"
          example
        >
          <template #carousel>
            <div class="mt-2 p-6 border-[1px] rounded-xl">
              <MinimalCarousel
                :imageItems="IMAGES"
                class="rounded-lg"
                keyboardControl
              />
            </div>
          </template>
        </DocItem>
      </div>
    </div>

    <SideBar :anchorLinksItems="anchorLinksItems" />
  </div>
</template>
