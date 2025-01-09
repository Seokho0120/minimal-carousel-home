<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { toast } from 'vue-sonner';
import { createHighlighter, type Highlighter } from 'shiki';

const props = defineProps<{
  title?: string;
  description?: string;
  shortCode?: string;
  longCode?: string;
  example?: boolean;
  clipboardTitle?: string;
  langTsx?: boolean;
  langBash?: boolean;
  id?: string;
}>();

const emit = defineEmits<{
  'update:clickTitle': [value: string];
}>();

const highlightedLongCode = ref<string>('');
const highlightedShortCode = ref<string>('');
const isShortCodeVisible = ref<boolean>(true);
const langType = props.langTsx ? 'tsx' : props.langBash ? 'bash' : 'vue';

async function highlightCode(code: string, highlighter: Highlighter) {
  return highlighter.codeToHtml(code, {
    lang: langType,
    theme: 'github-light',
  });
}

onMounted(async () => {
  const highlighter = await createHighlighter({
    themes: ['github-light'],
    langs: ['vue', 'tsx', 'bash', 'jsx'],
  });

  highlightedShortCode.value = await highlightCode(
    props.shortCode || '',
    highlighter,
  );

  highlightedLongCode.value = await highlightCode(
    props.longCode || '',
    highlighter,
  );
});

async function copyToClipBoard(type: 'short' | 'long') {
  const codeToCopy = type === 'short' ? props.shortCode : props.longCode;

  await navigator.clipboard.writeText(codeToCopy || '');
  toast.success(`Copy code!`);
}

function scrollToSection(sectionId: string) {
  console.log('sectionId??', sectionId);

  const section = document.getElementById(sectionId);

  console.log('section', section);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${sectionId}`); // URL에 앵커 추가
  }

  emit('update:clickTitle', props.title || '');
}
</script>

<template>
  <div>
    <div
      v-if="title"
      class="font-bold text-xl mb-4 text-neutral-800 flex items-center gap-2 group hover:cursor-pointer"
      :id="id"
      @click="scrollToSection(id || '')"
    >
      <h2>{{ title }}</h2>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        class="text-neutral-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
        />
      </svg>
    </div>
    <div v-if="description" class="text-neutral-500">
      {{ description }}
    </div>

    <!-- carousel example -->
    <slot name="carousel" />

    <!-- clipboard -->
    <div
      v-if="shortCode || longCode"
      class="text-sm border rounded-lg shadow-sm my-6 overflow-hidden"
    >
      <div class="flex justify-between items-center p-2 border-b bg-neutral-50">
        <span class="text-xs flex items-center gap-2">
          <i-mynaui:terminal-solid class="text-neutral-400" />
          <span class="text-neutral-500">{{
            clipboardTitle ? clipboardTitle : 'Example'
          }}</span>
        </span>

        <div class="flex items-center gap-2">
          <button
            v-if="longCode"
            @click="isShortCodeVisible = !isShortCodeVisible"
          >
            <i-heroicons:code-bracket-square
              class="text-neutral-600 hover:text-neutral-400"
            />
          </button>

          <button v-if="isShortCodeVisible" @click="copyToClipBoard('short')">
            <i-heroicons:square-2-stack
              class="text-neutral-600 hover:text-neutral-400"
            />
          </button>

          <button v-else @click="copyToClipBoard('long')">
            <i-heroicons:square-2-stack
              class="text-neutral-600 hover:text-neutral-400"
            />
          </button>
        </div>
      </div>

      <pre
        v-if="shortCode && isShortCodeVisible"
        class="p-4"
        v-html="highlightedShortCode"
      />
      <pre v-else class="p-4" v-html="longCode && highlightedLongCode" />
    </div>
  </div>
</template>
