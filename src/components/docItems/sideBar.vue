<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { anchorLinksItemsType } from '../GettingStarted.vue';

const props = defineProps<{
  anchorLinksItems: anchorLinksItemsType[];
}>();

const itemHeight = ref(28);

const route = useRoute();
const hash = computed(() => route.hash);

const activeIndex = computed(() => {
  if (hash.value) {
    const index = props.anchorLinksItems.findIndex(
      (item) => item.id === hash.value.slice(1),
    );
    return index !== -1 ? index : 0;
  }
  return 0;
});

watch(
  activeIndex,
  () => {
    console.log('activeIndex.value', activeIndex.value);
  },
  { immediate: true },
);
</script>

<template>
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
        class="w-[3px] h-5 bg-black absolute left-0 rounded-full"
        :style="{
          top: `${activeIndex * itemHeight}px`,
          transition: 'top 0.3s',
        }"
      />

      <ul class="flex flex-col gap-2 mt-4 border-l-[1px] border-dotted">
        <li v-for="item in anchorLinksItems" :key="item.id" class="h-fit flex">
          <a :href="`#${item.id}`" class="text-[13px] ml-5 h-5">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
