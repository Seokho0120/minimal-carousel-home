<script setup lang="ts">
import { ref } from 'vue';
import DocIntro from './docItems/DocIntro.vue';
import DocItem from './docItems/DocItem.vue';
import SideBar from './docItems/sideBar.vue';
const installCode = `pnpm i minimal-carousel`;
const usageCode = `<script setup lang='ts'>
import img1 from '../img1.jpg';
import img2 from '../img2.jpg';
import img3 from '../img3.jpg';

const IMAGES = [
  { link: 'img1.jpg' },
  { link: 'img2.jpg' },
  { link: 'img3.jpg' },
];

<\/script>

<template>
  <MinimalCarousel :imageItems="IMAGES"/>
<\/template>
`;
const configCode = `import { createApp } from 'vue';
import { MinimalCarousel } from 'minimal-carousel';
import 'minimal-carousel/minimal-carousel.css';

const app = createApp(App)
app.component('MinimalCarousel', MinimalCarousel);
`;

export interface anchorLinksItemsType {
  id: string;
  title: string;
}

const anchorLinksItems = ref<anchorLinksItemsType[]>([
  { id: 'installation', title: 'Installation' },
  { id: 'configuration', title: 'Configuration' },
  {
    id: 'add-minimal-carousel-to-your-app',
    title: 'Add MinimalCarousel to your app',
  },
]);
</script>

<template>
  <div class="flex gap-4 py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <DocIntro
        title="Getting Started"
        description="Minimal Carousel is a carousel component for Vue. You can install Minimal Carousel in a simple way."
      />

      <div class="mt-12 w-full">
        <DocItem
          title="Installation"
          id="installation"
          description="Simply pnpm/npm/yarn install the package."
          :shortCode="installCode"
          clipboardTitle="Terminal"
          langBash
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          title="Configuration"
          id="configuration"
          description="MinimalCarousel is a required component that needs to be registered
          for use globally in your application. By adding this component, the
          default configuration is set up, allowing you to use it conveniently
          without affecting other parts of the application."
          :shortCode="configCode"
          clipboardTitle="main.ts"
          langTsx
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          title="Add MinimalCarousel to your app"
          id="add-minimal-carousel-to-your-app"
          description="It can be placed anywhere."
          :shortCode="usageCode"
          clipboardTitle="App.vue"
        />
      </div>
    </div>

    <SideBar :anchorLinksItems="anchorLinksItems" />
  </div>
</template>
