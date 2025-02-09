<script setup lang="ts">
import { MinimalCarousel } from 'minimal-carousel';
import DocIntro from './docItems/DocIntro.vue';
import DocItem from './docItems/DocItem.vue';
import DocItemType from './docItems/DocItemType.vue';
import { IMAGES } from '@/constants/ImgData';
import { ref } from 'vue';
import type { anchorLinksItemsType } from './GettingStarted.vue';
import SideBar from './docItems/sideBar.vue';
import NavPagination, { type Items } from './nav/NavPagination.vue';

const typeCode = `autoPlayDuration: number;`;
const exampleShortCode = `<MinimalCarousel :autoPlayDuration="3500" autoplay/>`;
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
  <MinimalCarousel 
    :imageItems="IMAGES" 
    :autoPlayDuration="3500" 
    autoplay
  />
<\/template>
`;

const anchorLinksItems = ref<anchorLinksItemsType[]>([
  { id: 'type-of-autoPlayDuration', title: 'Type of AutoPlayDuration' },
  { id: 'example', title: 'Example' },
]);

const paginationItems = ref<Items[]>([
  { name: 'autoPlay', pageName: 'AutoPlay' },
  { name: 'disableOnInteraction', pageName: 'DisableOnInteraction' },
]);
</script>

<template>
  <div class="flex gap-4 py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <DocIntro
        title="AutoPlayDuration"
        description="The autoPlayDuration feature is an option that sets the interval for autoplay."
      />

      <div class="mt-12 w-full">
        <DocItemType
          id="type-of-autoPlayDuration"
          title="Type of AutoPlayDuration"
          description="The type of autoPlayDuration is number, and the default value is 2500(2.5sec)."
          :shortCode="typeCode"
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          id="example"
          title="Example"
          description="The default value for autoPlayDuration is 2500(2.5sec), and users can customize it to their preferred duration."
          :shortCode="exampleShortCode"
          :longCode="exampleFullCode"
          example
        >
          <template #carousel>
            <div class="mt-2 p-6 border-[1px] rounded-xl">
              <MinimalCarousel
                :imageItems="IMAGES"
                class="rounded-lg"
                autoPlay
                :autoPlayDuration="3500"
              />
            </div>
          </template>
        </DocItem>
      </div>

      <NavPagination :items="paginationItems" />
    </div>

    <SideBar :anchorLinksItems="anchorLinksItems" />
  </div>
</template>
