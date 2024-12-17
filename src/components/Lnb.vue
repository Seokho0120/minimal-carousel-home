<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const currentPath = ref(route.path.replace('/docs/', ''));

watch(route, (newRoute) => {
  currentPath.value = newRoute.path.replace('/docs/', '');
});

const categories = ref([
  {
    category: '',
    items: [
      {
        name: 'home',
        path: '/',
      },
    ],
  },
  {
    category: 'Basics',
    items: [
      {
        name: 'Getting Started',
        path: 'getting-started',
      },
    ],
  },
  {
    category: 'API',
    items: [
      {
        name: 'imageItems',
        path: 'image-items',
      },
      // {
      //   name: 'showPrevButton',
      //   path: 'docs/showPrevButton',
      // },
      // {
      //   name: 'showNextButton',
      //   path: 'docs/showNextButton',
      // },
      // {
      //   name: 'pagination',
      //   path: 'docs/pagination',
      // },
      // {
      //   name: 'scrollbar',
      //   path: 'docs/scrollbar',
      // },
      // {
      //   name: 'autoPlay',
      //   path: 'docs/autoPlay',
      // },
      // {
      //   name: 'autoPlayDuration',
      //   path: 'docs/autoPlayDuration',
      // },
      // {
      //   name: 'disableOnInteraction',
      //   path: 'docs/disableOnInteraction',
      // },
      // {
      //   name: 'pauseOnMouseEnter',
      //   path: 'docs/pauseOnMouseEnter',
      // },
      // {
      //   name: 'stopOnLastSlide',
      //   path: 'docs/stopOnLastSlide',
      // },
      // {
      //   name: 'effectFade',
      //   path: 'docs/effectFade',
      // },
      // {
      //   name: 'keyboardControl',
      //   path: 'docs/keyboardControl',
      // },
      // {
      //   name: 'parallax',
      //   path: 'docs/parallax',
      // },
      // {
      //   name: 'contents',
      //   path: 'docs/contents',
      // },
    ],
  },
]);
</script>

<template>
  <div
    class="flex flex-col gap-10 bg-neutral-50 py-6 px-4 h-screen w-[240px] border-r border-neutral-300 border-dotted"
  >
    <div v-for="category in categories" :key="category.category">
      <h2 class="text-xs text-neutral-400 mb-2">{{ category.category }}</h2>

      <ul class="text-sm text-neutral-800 space-y-1">
        <li
          v-for="item in category.items"
          :key="item.name"
          class="h-7 flex items-center"
        >
          <RouterLink
            :to="{
              name: item.name,
            }"
            :class="[
              'h-7 flex items-center px-2 rounded-md ',
              currentPath === item.path
                ? 'bg-[#f0f0f0] w-full'
                : 'hover:bg-el-hover-bg',
            ]"
          >
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
