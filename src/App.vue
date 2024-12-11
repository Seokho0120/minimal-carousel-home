<script setup lang="ts">
import { ref } from 'vue';
import { toast } from 'vue-sonner';

const installText = ref('pnpm i minimal-carousel');

const copyToInstallText = async () => {
  await navigator.clipboard.writeText(installText.value);
  toast.success(`Copy code: ${installText.value}`);
};
</script>

<template>
  <Toaster position="top-center" />

  <div class="pt-44">
    <div
      class="flex flex-col justify-center items-center gap-4 max-w-[642px] m-auto"
    >
      <h1 class="text-5xl font-bold text-center text-neutral-900">
        Minimal Carousel
      </h1>
      <h2 class="text-center text-lg text-neutral-900">
        A user-friendly carousel library with essential features for quick
        implementation.
      </h2>

      <div class="flex gap-2">
        <button
          class="bg-neutral-900 hover:bg-neutral-800 text-neutral-50 text-xs px-8 font-semibold rounded-md w-[152px] h-[42px]"
        >
          Document
        </button>

        <button
          class="bg-gradient-to-r from-white to-neutral-100 text-neutral-900 text-xs px-8 font-semibold rounded-md w-[152px] h-[42px] shadow-md border border-neutral-100 hover:bg-gradient-to-br hover:from-neutral-100 hover:to-white"
        >
          Github
        </button>
      </div>

      <div class="flex flex-col gap-14 mt-14 w-full">
        <div>
          <h2 class="pb-3">Installation</h2>
          <code
            @click="copyToInstallText"
            class="w-full flex items-center p-2 pl-3 pr-4 rounded-lg border border-neutral-100 text-neutral-800 bg-gradient-to-b from-white to-neutral-100 text-sm cursor-pointer justify-between"
          >
            <p>{{ installText }}</p>
            <button>
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
          </code>
        </div>
      </div>
    </div>
  </div>
</template>
