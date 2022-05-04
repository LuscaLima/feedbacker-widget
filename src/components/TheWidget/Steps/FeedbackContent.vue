<script setup lang="ts">
import { computed } from 'vue'
import { PhCamera, PhCircleNotch, PhTrash } from 'phosphor-vue'
import { reactive } from 'vue'
import {
  takeScreenshot,
  isTakingScreenshot
} from '../../../composables/screenshot'

const emits = defineEmits<{ (e: 'sent'): void }>()
const state = reactive({
  feedback: '',
  screenshot: ''
})
const hasFeedback = computed(() => !!state.feedback)
const backgroundScreenshot = computed(
  () => `url(${state.screenshot}) center center`
)

async function handleScreenshot() {
  state.screenshot = await takeScreenshot()
}

function handleSubmit() {
  console.log({ ...state })
  emits('sent')
}
</script>

<template>
  <form class="w-full py-5" @submit.prevent="handleSubmit">
    <textarea
      v-model="state.feedback"
      class="min-w-[304px] w-full h-28 text-sm p-2 placeholder-zinc-400 text-zinc-100 bg-transparent border-2 border-zinc-600 rounded-md resize-none transition-colors duration-500 focus:border-brand-400 focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
      placeholder="Tell in detail what's going on..."
    />
    <footer class="flex gap-2 mt-2">
      <button
        v-if="state.screenshot"
        type="button"
        class="flex justify-end items-end w-10 h-10 p-1 rounded-md transition-colors duration-500 text-zinc-400 hover:text-zinc-100"
        :style="{ background: backgroundScreenshot }"
        @click="state.screenshot = ''"
      >
        <PhTrash weight="fill" />
      </button>
      <button
        v-else
        type="button"
        class="p-2 rounded-md border-transparent bg-zinc-800 transition-colors duration-500 hover:bg-zinc-600 focus:outline-none focus:bg-zinc-600 disabled:opacity-75 disabled:hover:bg-zinc-800 disabled:cursor-not-allowed"
        :disabled="!hasFeedback"
        @click="handleScreenshot"
      >
        <PhCircleNotch v-if="isTakingScreenshot" class="w-6 h-6 animate-spin" />
        <PhCamera v-else class="w-6 h-6" />
      </button>
      <button
        type="submit"
        class="flex justify-center items-center flex-1 p-2 text-sm bg-brand-400 rounded-md border-transparent transition-colors duration-500 hover:bg-brand-300 focus:outline-none focus:bg-brand-300 disabled:opacity-75 disabled:hover:bg-brand-400 disabled:cursor-not-allowed"
        :disabled="!hasFeedback"
      >
        Send feedback
      </button>
    </footer>
  </form>
</template>
