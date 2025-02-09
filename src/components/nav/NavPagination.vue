<script setup lang="ts">
defineProps<{
  items: Items[];
}>();

export interface Items {
  pageName: string;
  name: string;
}
</script>

<template>
  <div class="flex items-center border-t my-16 pt-8 group">
    <router-link
      v-if="items.length > 1 || items[0].name === 'keyboardControl'"
      :to="{ name: items[0].name }"
      :key="items[0].name"
      class="items-end"
    >
      <div class="flex flex-col">
        <span class="text-xs text-neutral-400 ml-auto">Previous</span>
        <div class="flex gap-1 items-center text-sm">
          <svg
            class="text-neutral-400 group-hover:text-neutral-800"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0"
              clip-rule="evenodd"
            />
          </svg>
          <span>{{ items[0].pageName }}</span>
        </div>
      </div>
    </router-link>

    <router-link
      v-if="items.length > 0 && items[0].name !== 'keyboardControl'"
      :to="{ name: items[items.length - 1].name }"
      :key="items[items.length - 1].name"
      class="flex items-end ml-auto"
    >
      <div class="flex flex-col">
        <span class="text-xs text-neutral-400">Next</span>
        <div class="flex gap-1 items-center text-sm">
          <span>{{ items[items.length - 1].pageName }}</span>
          <svg
            class="text-neutral-400 group-hover:text-neutral-800"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </router-link>
  </div>
</template>
