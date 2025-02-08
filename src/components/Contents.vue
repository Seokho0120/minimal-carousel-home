<script setup lang="ts">
import { MinimalCarousel } from 'minimal-carousel';
import DocIntro from './docItems/DocIntro.vue';
import DocItem from './docItems/DocItem.vue';
import DocItemType from './docItems/DocItemType.vue';
import { IMAGES } from '@/constants/ImgData';
import { ref } from 'vue';
import type { anchorLinksItemsType } from './GettingStarted.vue';
import SideBar from './docItems/sideBar.vue';

const typeCode = `contents: {
  title: string;
  subTitle?: string;
  content?: string;
}`;
const exampleShortCode = `<MinimalCarousel :contents="sliderContents" />`;
const exampleFullCode = `<script setup lang='ts'>
import img1 from '../img1.jpg';
import img2 from '../img2.jpg';
import img3 from '../img3.jpg';

const IMAGES = [
  { link: 'img1.jpg', id: 1, name: 'img1' },
  { link: 'img2.jpg', id: 2, name: 'img2' },
  { link: 'img3.jpg', id: 3, name: 'img3' },
];

const sliderContents = [
  { title: 'Title 1', subTitle: 'Subtitle 1', content: 'Content 1' },
  { title: 'Title 2', subTitle: 'Subtitle 2' },
  { title: 'Title 3',  content: 'Content 3' },
  { title: 'Title 4', subTitle: 'Subtitle 4', content: 'Content 4' },
  { title: 'Title 5', subTitle: 'Subtitle 5', content: 'Content 5' },
];
<\/script>

<template>
  <MinimalCarousel :imageItems="IMAGES" :contents="sliderContents" />
<\/template>
`;

const sliderContents = [
  { title: 'Title 1', subTitle: 'Subtitle 1', content: 'Content 1' },
  { title: 'Title 2', subTitle: 'Subtitle 2' },
  { title: 'Title 3', content: 'Content 3' },
  { title: 'Title 4', subTitle: 'Subtitle 4', content: 'Content 4' },
  { title: 'Title 5', subTitle: 'Subtitle 5', content: 'Content 5' },
];

const anchorLinksItems = ref<anchorLinksItemsType[]>([
  { id: 'type-of-contents', title: 'Type of Contents' },
  { id: 'example', title: 'Example' },
]);
</script>

<template>
  <div class="flex gap-4 py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <DocIntro
        title="Contents"
        description="The contents option allows you to add a title, subtitle, and content for each slide's image, and it also enables the Parallax effect."
      />

      <div class="mt-12 w-full">
        <DocItemType
          id="type-of-contents"
          title="Type of Contents"
          description="The title in contents is required, while both subTitle and content are optional and must be of type string."
          :shortCode="typeCode"
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          id="example"
          title="Example"
          description="Users can add the desired title, subtitle, and content for each image, with the title being mandatory."
          :shortCode="exampleShortCode"
          :longCode="exampleFullCode"
          example
        >
          <template #carousel>
            <div class="mt-2 p-6 border-[1px] rounded-xl">
              <MinimalCarousel
                :imageItems="IMAGES"
                class="rounded-lg text-white"
                :contents="sliderContents"
              />
            </div>
          </template>
        </DocItem>
      </div>
    </div>

    <SideBar :anchorLinksItems="anchorLinksItems" />
  </div>
</template>
