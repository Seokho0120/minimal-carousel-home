<script setup lang="ts">
import { MinimalCarousel } from 'minimal-carousel';
import DocIntro from './docItems/DocIntro.vue';
import DocItem from './docItems/DocItem.vue';
import DocItemType from './docItems/DocItemType.vue';
import { IMAGES } from '@/constants/ImgData';
import { ref } from 'vue';
import type { anchorLinksItemsType } from './GettingStarted.vue';
import SideBar from './docItems/sideBar.vue';
import type { Items } from './nav/NavPagination.vue';
import NavPagination from './nav/NavPagination.vue';

const typeCode = `autoPlay: boolean;`;
const exampleShortCode = `<MinimalCarousel autoPlay/>`;
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
  <MinimalCarousel :imageItems="IMAGES" autoPlay/>
<\/template>
`;

const anchorLinksItems = ref<anchorLinksItemsType[]>([
  { id: 'type-of-autoPlay', title: 'Type of AutoPlay' },
  { id: 'example', title: 'Example' },
]);

const paginationItems = ref<Items[]>([
  { name: 'scrollbar', pageName: 'Scrollbar' },
  { name: 'autoPlayDuration', pageName: 'AutoPlayDuration' },
]);
</script>

<template>
  <div class="flex gap-4 py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <DocIntro
        title="AutoPlay"
        description="The AutoPlay feature automatically drags the slides to the right."
      />

      <div class="mt-12 w-full">
        <DocItemType
          id="type-of-autoPlay"
          title="Type of AutoPlay"
          description="The type of AutoPlay is boolean, and the default value is false."
          :shortCode="typeCode"
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          id="example"
          title="Example"
          description="The default value for autoplay is false. When set to true, the slides will automatically transition every 2500(2.5sec) seconds. If the user drags the slides or clicks a button, the autoplay will pause automatically."
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
