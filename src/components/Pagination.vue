<script setup lang="ts">
import { MinimalCarousel } from 'minimal-carousel';
import DocIntro from './docItems/DocIntro.vue';
import DocItem from './docItems/DocItem.vue';
import DocItemType from './docItems/DocItemType.vue';
import { IMAGES } from '@/constants/ImgData';

const typeCode = `pagination: boolean;`;
const exampleShortCode = `<MinimalCarousel pagination/>`;
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
  <MinimalCarousel :imageItems="IMAGES" pagination/>
<\/template>
`;
</script>

<template>
  <div class="py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <DocIntro
        title="Pagination"
        description="The pagination feature should display bullets corresponding to the number of slides. When a bullet is clicked, it should navigate to the respective slide."
      />

      <div class="mt-12 w-full">
        <DocItemType
          title="Type of Pagination"
          description="The type of Pagination is boolean, and the default value is false."
          :shortCode="typeCode"
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          title="Example"
          description="The default value for pagination is false. When set to true, the bullets will be displayed."
          :shortCode="exampleShortCode"
          :longCode="exampleFullCode"
          example
        >
          <template #carousel>
            <div class="mt-2 p-6 border-[1px] rounded-xl">
              <MinimalCarousel
                :imageItems="IMAGES"
                class="rounded-lg"
                pagination
              />
            </div>
          </template>
        </DocItem>
      </div>
    </div>
  </div>
</template>
