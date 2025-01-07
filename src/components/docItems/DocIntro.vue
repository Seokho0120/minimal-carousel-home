<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  id: string;
}>();

const scrollToSection = (sectionId: string) => {
  console.log('sectionId??', sectionId);

  const section = document.getElementById(sectionId);

  console.log('section', section);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${sectionId}`);
  }
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1
      class="font-semibold text-4xl text-neutral-800"
      :id="id"
      @click="scrollToSection(id)"
    >
      {{ title }}
    </h1>
    <div class="text-neutral-500">
      {{ description }}
    </div>
  </div>
</template>
