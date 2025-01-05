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
        lnbName: 'Home',
        name: 'home',
        path: '/',
      },
    ],
  },
  {
    category: 'Basics',
    items: [
      {
        lnbName: 'Getting Started',
        name: 'getting started',
        path: 'getting-started',
      },
    ],
  },
  {
    category: 'API',
    items: [
      { lnbName: 'ImageItems', name: 'imageItems', path: 'image-items' },
      {
        lnbName: 'ShowPrevButton',
        name: 'showPrevButton',
        path: 'show-prev-button',
      },
      {
        lnbName: 'ShowNextButton',
        name: 'showNextButton',
        path: 'show-next-button',
      },
      { lnbName: 'Pagination', name: 'pagination', path: 'pagination' },
      {
        lnbName: 'DynamicBullets',
        name: 'dynamicBullets',
        path: 'dynamicBullets',
      },
      { lnbName: 'Scrollbar', name: 'scrollbar', path: 'scrollbar' },
      { lnbName: 'AutoPlay', name: 'autoPlay', path: 'auto-play' },
      {
        lnbName: 'AutoPlayDuration',
        name: 'autoPlayDuration',
        path: 'auto-play-duration',
      },
      {
        lnbName: 'DisableOnInteraction',
        name: 'disableOnInteraction',
        path: 'disable-on-interaction',
      },
      {
        lnbName: 'PauseOnMouseEnter',
        name: 'pauseOnMouseEnter',
        path: 'pause-on-mouse-enter',
      },
      {
        lnbName: 'StopOnLastSlide',
        name: 'stopOnLastSlide',
        path: 'stop-on-last-slide',
      },
      { lnbName: 'EffectFade', name: 'effectFade', path: 'effect-fade' },
      {
        lnbName: 'KeyboardControl',
        name: 'keyboardControl',
        path: 'keyboard-control',
      },
      { lnbName: 'Contents', name: 'contents', path: 'contents' },

      // TODO:
      // { lnbName: 'Parallax', name: 'parallax', path: 'parallax' },
    ],
  },
]);
</script>

<template>
  <div
    class="flex flex-col gap-10 bg-neutral-50 py-6 px-4 h-screen w-[240px] border-r border-neutral-300 border-dotted sticky top-0"
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
            {{ item.lnbName }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
