<script setup lang="ts">
import Lnb from '@/components/Lnb.vue';
</script>

<template>
  <div class="flex">
    <Lnb />
    <div class="flex-1 p-4">
      <RouterView />
    </div>
  </div>
</template>
