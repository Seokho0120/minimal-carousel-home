<script setup lang="ts">
import { MinimalCarousel } from 'minimal-carousel';
import DocIntro from './docItems/DocIntro.vue';
import DocItem from './docItems/DocItem.vue';
import DocItemType from './docItems/DocItemType.vue';
import { IMAGES } from '@/constants/ImgData';
import type { anchorLinksItemsType } from './GettingStarted.vue';
import { ref } from 'vue';
import SideBar from './docItems/sideBar.vue';
import type { Items } from './nav/NavPagination.vue';
import NavPagination from './nav/NavPagination.vue';

const typeCode = `scrollbar: boolean;`;
const exampleShortCode = `<MinimalCarousel scrollbar/>`;
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
  <MinimalCarousel :imageItems="IMAGES" scrollbar/>
<\/template>
`;

const anchorLinksItems = ref<anchorLinksItemsType[]>([
  { id: 'type-of-scrollbar', title: 'Type of Scrollbar' },
  { id: 'example', title: 'Example' },
]);

const paginationItems = ref<Items[]>([
  { name: 'dynamicBullets', pageName: 'DynamicBullets' },
  { name: 'autoPlayDuration', pageName: 'AutoPlayDuration' },
]);
</script>

<template>
  <div class="flex gap-4 py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <DocIntro
        title="Scrollbar"
        description="The scrollbar feature represents the number of slides, and it allows for the slides to move in sync with the dragging action."
      />

      <div class="mt-12 w-full">
        <DocItemType
          id="type-of-scrollbar"
          title="Type of Scrollbar"
          description="The type of Scrollbar is boolean, and the default value is false."
          :shortCode="typeCode"
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          id="example"
          title="Example"
          description="The default value for the scrollbar is false. When set to true, it will display the scrollbar corresponding to the number of slides."
          :shortCode="exampleShortCode"
          :longCode="exampleFullCode"
          example
        >
          <template #carousel>
            <div class="mt-2 p-6 border-[1px] rounded-xl">
              <MinimalCarousel
                :imageItems="IMAGES"
                class="rounded-lg"
                scrollbar
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
