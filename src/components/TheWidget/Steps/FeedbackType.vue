<script setup lang="ts">
import {
  FeedbackTypes,
  FeedbackOptionsType
} from '../../../composables/feedback'

defineProps<{
  feedbackOptions: FeedbackOptionsType
}>()

defineEmits<{
  (e: 'selectType', key: FeedbackTypes): void
}>()
</script>

<template>
  <div class="flex w-full py-8 gap-2">
    <button
      v-for="(option, key) in feedbackOptions"
      :key="option.title"
      type="button"
      @click="$emit('selectType', key as any)"
      class="flex flex-1 flex-col items-center gap-2 w-24 p-5 bg-zinc-800 border-2 border-transparent rounded-lg transition-colors duration-500 hover:border-brand-400 focus:border-brand-400 focus:outline-none"
    >
      <component :is="option.icon" class="w-8 h-8" />
      <span>{{ option.title }}</span>
    </button>
  </div>
</template>
