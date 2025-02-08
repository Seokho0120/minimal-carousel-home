<script setup lang="ts">
import { ref } from 'vue';
import { IMAGES } from '@/constants/ImgData';
import DocIntro from './docItems/DocIntro.vue';
import DocItemType from './docItems/DocItemType.vue';
import DocItem from './docItems/DocItem.vue';
import { MinimalCarousel } from 'minimal-carousel';
import type { anchorLinksItemsType } from './GettingStarted.vue';
import SideBar from './docItems/sideBar.vue';

const typeCode = `imageItems: {
  link: string;
  id?: number;
  name?: string;
}
`;
const exampleShortCode = `<MinimalCarousel :imageItems="IMAGES"/>`;
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
  <MinimalCarousel :imageItems="IMAGES"/>
<\/template>
`;

const anchorLinksItems = ref<anchorLinksItemsType[]>([
  { id: 'type-of-imageItems', title: 'Type of ImageItems' },
  { id: 'example', title: 'Example' },
]);
</script>

<template>
  <div class="flex gap-4 py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <DocIntro
        title="ImageItems"
        description="ImageItems is a required value for Minimal Carousel, and you can
          configure it according to the type with the images you want."
      />

      <div class="mt-12 w-full">
        <DocItemType
          title="Type of ImageItems"
          id="type-of-imageItems"
          description="link is a required value, while id and name are optional values."
          :shortCode="typeCode"
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          title="Example"
          id="example"
          description="If you set id and name as shown in the example, you can use the
          carousel with higher quality."
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
      </div>
    </div>

    <SideBar :anchorLinksItems="anchorLinksItems" />
  </div>
</template>
