<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { toast } from 'vue-sonner';
import { createHighlighter } from 'shiki';

const installCode = `pnpm i minimal-carousel`;
const usageCode = `import { MinimalCarousel } from "minimal-carousel";
import "minimal-carousel/minimal-carousel.css";

const TEST = [
  { link: 'test1.jpg', id: 1, name: "1" },
  { link: 'test2.jpg', id: 2, name: "2" },
  { link: 'test3.jpg', id: 3, name: "3" },
];

<MinimalCarousel :imageItems="TEST"/>
`;

const highlightedInstallCode = ref('');
const highlightedUsageCode = ref('');

onMounted(async () => {
  const highlighter = await createHighlighter({
    themes: ['github-light'],
    langs: ['bash'],
  });

  highlightedInstallCode.value = highlighter.codeToHtml(installCode, {
    lang: 'bash',
    theme: 'github-light',
  });

  highlightedUsageCode.value = highlighter.codeToHtml(usageCode, {
    lang: 'bash',
    theme: 'github-light',
  });
});

const copyToInstallText = async () => {
  await navigator.clipboard.writeText(installCode);
  toast.success(`Copy code: ${installCode}`);
};

const copyToUsageText = async () => {
  await navigator.clipboard.writeText(usageCode);
  toast.success(`Copied code: ${usageCode}`);
};
</script>

<template>
  <div class="py-16">
    <div class="max-w-[642px] w-full mx-auto">
      <div class="flex flex-col gap-4">
        <h1 class="font-semibold text-4xl text-neutral-800">Getting Started</h1>
        <div class="text-neutral-500">
          Minimal Carousel is a carousel component for Vue. You can install
          Minimal Carousel in a simple way.
        </div>
      </div>

      <!-- Installation -->
      <div class="mt-12 w-full">
        <h2 class="font-semibold text-xl mb-4 text-neutral-800">
          Installation
        </h2>
        <div class="text-neutral-500">
          Simply pnpm/npm/yarn install the package.
        </div>

        <div class="text-sm border rounded-lg shadow-sm my-6 overflow-hidden">
          <div
            class="flex justify-between items-center p-2 border-b bg-neutral-50"
          >
            <span class="text-xs flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-neutral-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 3.83333C2 2.82081 2.82081 2 3.83333 2H12.1667C13.1792 2 14 2.82081 14 3.83333V12.1667C14 13.1792 13.1792 14 12.1667 14H3.83333C2.82081 14 2 13.1792 2 12.1667V3.83333ZM4.47978 4.81311C4.67504 4.61785 4.99163 4.61785 5.18689 4.81311L6.35355 5.97978C6.54881 6.17504 6.54881 6.49163 6.35355 6.68687L5.18689 7.85353C4.99163 8.0488 4.67504 8.0488 4.47978 7.85353C4.28452 7.65827 4.28452 7.34173 4.47978 7.14647L5.29289 6.33333L4.47978 5.52022C4.28452 5.32496 4.28452 5.00837 4.47978 4.81311ZM7.16667 7C6.89053 7 6.66667 7.22387 6.66667 7.5C6.66667 7.77613 6.89053 8 7.16667 8H8.5C8.77613 8 9 7.77613 9 7.5C9 7.22387 8.77613 7 8.5 7H7.16667Z"
                  fill="currentColor"
                />
              </svg>
              <span class="text-neutral-500">Terminal</span>
            </span>
            <button @click="copyToInstallText">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                class="text-neutral-600 hover:text-neutral-500"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                />
              </svg>
            </button>
          </div>

          <pre class="p-2" v-html="highlightedInstallCode" />
        </div>
      </div>

      <!-- Usage -->
      <div class="mt-12 w-full">
        <h2 class="font-semibold text-xl mb-4 text-neutral-800">Usage</h2>
        <div class="text-neutral-500">Add to your app</div>

        <div class="text-sm border rounded-lg shadow-sm my-6 overflow-hidden">
          <div
            class="flex justify-between items-center p-2 border-b bg-neutral-50"
          >
            <span class="text-xs flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-neutral-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 3.83333C2 2.82081 2.82081 2 3.83333 2H12.1667C13.1792 2 14 2.82081 14 3.83333V12.1667C14 13.1792 13.1792 14 12.1667 14H3.83333C2.82081 14 2 13.1792 2 12.1667V3.83333ZM4.47978 4.81311C4.67504 4.61785 4.99163 4.61785 5.18689 4.81311L6.35355 5.97978C6.54881 6.17504 6.54881 6.49163 6.35355 6.68687L5.18689 7.85353C4.99163 8.0488 4.67504 8.0488 4.47978 7.85353C4.28452 7.65827 4.28452 7.34173 4.47978 7.14647L5.29289 6.33333L4.47978 5.52022C4.28452 5.32496 4.28452 5.00837 4.47978 4.81311ZM7.16667 7C6.89053 7 6.66667 7.22387 6.66667 7.5C6.66667 7.77613 6.89053 8 7.16667 8H8.5C8.77613 8 9 7.77613 9 7.5C9 7.22387 8.77613 7 8.5 7H7.16667Z"
                  fill="currentColor"
                />
              </svg>
              <span class="text-neutral-500">App.vue</span>
            </span>
            <button @click="copyToUsageText">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                class="text-neutral-600 hover:text-neutral-500"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                />
              </svg>
            </button>
          </div>

          <pre class="p-2" v-html="highlightedUsageCode" />
        </div>
      </div>
    </div>
  </div>
</template>
