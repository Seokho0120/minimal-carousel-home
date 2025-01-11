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

const activeIndex = ref<number>(0);
const itemHeight = ref<number>(28);
const anchorLinksItems = ref([
  { id: 'installation', title: 'Installation' },
  { id: 'configuration', title: 'Configuration' },
  {
    id: 'add-minimal-carousel-to-your-app',
    title: 'Add MinimalCarousel to your app',
  },
]);

function scrollToSection(sectionId: string, index: number) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    activeIndex.value = index;
    window.history.pushState(null, '', `#${sectionId}`);
  }
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
          id="installation"
          description="Simply pnpm/npm/yarn install the package."
          :shortCode="installCode"
          clipboardTitle="Terminal"
          langBash
          @click="scrollToSection('installation', 0)"
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
          @click="scrollToSection('configuration', 1)"
        />
      </div>

      <div class="mt-12 w-full">
        <DocItem
          title="Add MinimalCarousel to your app"
          id="add-minimal-carousel-to-your-app"
          description="It can be placed anywhere."
          :shortCode="usageCode"
          clipboardTitle="App.vue"
          @click="scrollToSection('add-minimal-carousel-to-your-app', 2)"
        />
      </div>
    </div>

    <!-- aside 스타일 다시 체크해보기, 이해가 안감 -->
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

      <div class="relative">
        <div
          v-if="activeIndex !== null"
          aria-hidden="true"
          class="w-[3px] h-5 bg-black absolute left-0 rounded-full"
          :style="{
            top: `${activeIndex * itemHeight}px`,
            transition: 'top 0.3s',
          }"
        />

        <ul class="flex flex-col gap-2 mt-4 border-l-[1px] border-dotted">
          <li
            v-for="(item, index) in anchorLinksItems"
            :key="item.id"
            class="h-fit flex"
          >
            <a
              :href="`#${item.id}`"
              class="text-[13px] ml-5 h-5"
              @click="scrollToSection(item.id, index)"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>
