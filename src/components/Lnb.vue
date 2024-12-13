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
      //   path: 'docs/showPrevButton', // showPrevButton에 대한 경로
      // },
      // {
      //   name: 'showNextButton',
      //   path: 'docs/showNextButton', // showNextButton에 대한 경로
      // },
      // {
      //   name: 'pagination',
      //   path: 'docs/pagination', // pagination에 대한 경로
      // },
      // {
      //   name: 'scrollbar',
      //   path: 'docs/scrollbar', // scrollbar에 대한 경로
      // },
      // {
      //   name: 'autoPlay',
      //   path: 'docs/autoPlay', // autoPlay에 대한 경로
      // },
      // {
      //   name: 'autoPlayDuration',
      //   path: 'docs/autoPlayDuration', // autoPlayDuration에 대한 경로
      // },
      // {
      //   name: 'disableOnInteraction',
      //   path: 'docs/disableOnInteraction', // disableOnInteraction에 대한 경로
      // },
      // {
      //   name: 'pauseOnMouseEnter',
      //   path: 'docs/pauseOnMouseEnter', // pauseOnMouseEnter에 대한 경로
      // },
      // {
      //   name: 'stopOnLastSlide',
      //   path: 'docs/stopOnLastSlide', // stopOnLastSlide에 대한 경로
      // },
      // {
      //   name: 'effectFade',
      //   path: 'docs/effectFade', // effectFade에 대한 경로
      // },
      // {
      //   name: 'keyboardControl',
      //   path: 'docs/keyboardControl', // keyboardControl에 대한 경로
      // },
      // {
      //   name: 'parallax',
      //   path: 'docs/parallax', // parallax에 대한 경로
      // },
      // {
      //   name: 'contents',
      //   path: 'docs/contents', // contents에 대한 경로
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
