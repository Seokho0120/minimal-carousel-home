<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="font-semibold text-4xl text-neutral-800">
      {{ title }}
    </h1>
    <div class="text-neutral-500">
      {{ description }}
    </div>
  </div>
</template>
