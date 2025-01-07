<script setup lang="ts">
import { ref } from 'vue';
import DocIntro from './docItems/DocIntro.vue';
import DocItem from './docItems/DocItem.vue';
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

const clickedTitle = ref('');

function handleClick(title: string) {
  console.log('title', title);
  clickedTitle.value = title;

  console.log('clickedTitle.value', clickedTitle.value);
}
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
          id="Installation"
          @update:clickTitle="handleClick('Installation')"
          description="Simply pnpm/npm/yarn install the package."
          :shortCode="installCode"
          clipboardTitle="Terminal"
          langBash
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          title="Configuration"
          id="Configuration"
          @handleClick="handleClick('Configuration')"
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
          id="Add MinimalCarousel to your app"
          @handleClick="handleClick('Add MinimalCarousel to your app')"
          description="It can be placed anywhere."
          :shortCode="usageCode"
          clipboardTitle="App.vue"
        />
      </div>
    </div>

    <aside class="w-[240px] hidden xl:block sticky top-16 h-[calc(100vh-8rem)]">
      <div class="flex items-center gap-2 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8m0 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
            clip-rule="evenodd"
          />
        </svg>
        <p>On this page</p>
      </div>

      <ul class="flex flex-col gap-2 mt-4 border-l-[1px] border-dotted">
        <li class="h-fit flex">
          <a href="#installation" class="text-[13px] ml-5 h-5">
            Installation
          </a>
        </li>
        <li class="h-fit flex">
          <a href="#configuration" class="text-[13px] ml-5 h-5">
            Configuration
          </a>
        </li>
        <li class="h-fit flex">
          <a href="#add-minimal-carousel" class="text-[13px] ml-5 h-5">
            Add MinimalCarousel to your app
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>
