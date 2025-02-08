<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
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

// 첫번째 섹션은 최상단, 마지막 섹션은 바닥, 나머지는 화면 중앙
function determineActiveSection() {
  const sections = props.anchorLinksItems.map((item) =>
    document.getElementById(item.id),
  );

  const top = window.scrollY; // 현재 스크롤 Y 값
  const viewportHeight = window.innerHeight; // 뷰포트 높이
  const documentHeight = document.body.scrollHeight; // 문서 전체 높이
  const centerY = top + viewportHeight / 4; // 화면 중앙 Y 값

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
}

onMounted(() => {
  const handleScroll = () => {
    determineActiveSection();
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
});

// TODO: smooth기능과 브라우저 상단과 타이틀에 간격을 주기 위해 scrollToSection 함수 사용
// TODO: 함수를 사용안하고, a태그의 href를 사용할 수 있는 방법이 있다면 변경 예정
function scrollToSection(id: string) {
  // 참고: https://www.moonkorea.dev/React-%EC%A0%91%EA%B7%BC%EC%84%B1-%EA%B0%9C%EC%84%A0%EC%9D%84-%EC%9C%84%ED%95%9C-%ED%95%B4%EC%8B%9C-%EB%A7%81%ED%81%AC
  const section = document.getElementById(id);

  if (section) {
    const yOffset = 70;
    const offsetPosition = section.offsetTop - yOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    // 참고: https://velog.io/@kymkjh2002/IntersectionObserver%EC%9D%98-%EC%82%AC%EC%9A%A9%EB%B2%95
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // history.pushState는 페이지 리로드 하지 않고 페이지 주소만 변경할때 사용함
            window.history.pushState(window.history.state, '', `#${id}`);
            observer.disconnect(); // 완료 후 관찰자 해제
          }
        });
      },
      { threshold: 0.1 },
    ); // 10%가 보일 때 트리거

    observer.observe(section); // 관찰할 dom 설정
  }
}
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
        class="w-[3px] h-5 bg-black absolute left-0 rounded-full"
        :style="{
          top: `${activeIndex * itemHeight}px`,
          transition: 'top 0.3s',
        }"
      />

      <ul class="flex flex-col gap-2 mt-4 border-l-[1px] border-dotted">
        <li v-for="item in anchorLinksItems" :key="item.id" class="h-fit flex">
          <p
            @click.prevent="scrollToSection(item.id)"
            class="text-[13px] ml-5 h-5 cursor-pointer"
          >
            {{ item.title }}
          </p>

          <!-- <a
            :href="`#${item.id}`"
            @click.prevent="scrollToSection(item.id)"
            class="text-[13px] ml-5 h-5"
          >
            {{ item.title }}
          </a> -->
        </li>
      </ul>
    </div>
  </aside>
</template>
