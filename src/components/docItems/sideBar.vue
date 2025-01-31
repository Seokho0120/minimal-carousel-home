<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import type { anchorLinksItemsType } from '../GettingStarted.vue';

const props = defineProps<{
  anchorLinksItems: anchorLinksItemsType[];
}>();

const route = useRoute();
const itemHeight = ref(28);
const hash = computed(() => route.hash);
const activeIndex = ref(0);

watch(
  hash,
  (newHash) => {
    if (newHash) {
      const index = props.anchorLinksItems.findIndex(
        (item) => item.id === newHash.slice(1),
      );

      activeIndex.value = index !== -1 ? index : 0;
    } else {
      activeIndex.value = 0;
    }
  },
  { immediate: true },
);

// TODO: rect 부분이 잘못된건지 모르겠음, embla-carousel도 나랑 같은 현상 발생하긴함..
// const determineActiveSection = () => {
//   for (let i = props.anchorLinksItems.length - 1; i >= 0; i--) {
//     const section = document.getElementById(props.anchorLinksItems[i].id);

//     console.log('section', section);

//     if (section) {
//       const rect = section.getBoundingClientRect();
//       console.log('rect.top', rect.top);
//       console.log('rect.bottom', rect.bottom);

//       if (rect.top <= 120 && rect.bottom >= 120) {
//         console.log('i', i);
//         activeIndex.value = i;
//         break;
//       }
//     }
//   }
// };

// 첫번째 섹션은 최상단, 마지막 섹션은 바닥, 나머지는 화면 중앙

const determineActiveSection = () => {
  const sections = props.anchorLinksItems.map((item) =>
    document.getElementById(item.id),
  );

  const top = window.scrollY; // 현재 스크롤 Y 값
  const viewportHeight = window.innerHeight; // 뷰포트 높이
  const documentHeight = document.body.scrollHeight; // 문서 전체 높이
  const centerY = top + viewportHeight / 2; // 화면 중앙 Y 값

  // 최상단에 닿았을 때 첫 번째 섹션
  if (top === 0) {
    activeIndex.value = 0;
    return;
  }

  // 바닥에 닿았을 때 마지막 섹션
  if (top + viewportHeight >= documentHeight) {
    activeIndex.value = sections.length - 1; // 마지막 섹션
    return;
  }

  sections.forEach((section, index) => {
    if (section) {
      const sectionTop = section.offsetTop; // 섹션의 상단 Y값
      const sectionHeight = section.offsetHeight; // 섹션 높이
      const sectionBottom = sectionTop + sectionHeight; // 섹션의 하단 Y값

      // 화면의 중앙이 섹션의 범위 안에 있을 때
      if (centerY >= sectionTop && centerY < sectionBottom) {
        activeIndex.value = index; // 활성 인덱스 업데이트
      }
    }
  });
};

// 최상단에 닿았을때 스크롤스파이 움직이게
// const determineActiveSection2 = () => {
//   const sections = props.anchorLinksItems.map((item) =>
//     document.getElementById(item.id),
//   );

//   const top = window.scrollY; // 현재 스크롤 Y 값
//   const viewportHeight = window.innerHeight; // 뷰포트 높이
//   const documentHeight = document.body.scrollHeight; // 문서 전체 높이
//   const centerY = top + viewportHeight / 2; // 화면 중앙 Y 값

//   sections.forEach((section, index) => {
//     if (section) {
//       const sectionTop = section.offsetTop; // 섹션의 상단 Y값
//       const sectionHeight = section.offsetHeight; // 섹션 높이
//       const sectionBottom = sectionTop + sectionHeight; // 섹션의 하단 Y값

//       // 화면의 중앙이 섹션의 범위 안에 있을 때
//       if (centerY >= sectionTop && centerY < sectionBottom) {
//         activeIndex.value = index; // 활성 인덱스 업데이트
//       }

//       // 마지막 섹션 처리
//       if (
//         index === sections.length - 1 &&
//         top + viewportHeight >= documentHeight
//       ) {
//         activeIndex.value = index; // 스크롤이 맨 바닥에 닿았을 때 마지막 섹션 활성화
//       }
//     }
//   });
// };

onMounted(() => {
  const handleScroll = () => {
    determineActiveSection();
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
});
</script>

<template>
  <aside class="w-[240px] sticky top-16 h-[calc(100vh-8rem)]">
    <!-- FIXME: 개발편하게 hidden 지워놨음 -->
    <!-- <aside class="w-[240px] hidden xl:block sticky top-16 h-[calc(100vh-8rem)]"> -->
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
