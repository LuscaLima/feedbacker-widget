<script setup lang="ts">
import { PopoverButton } from '@headlessui/vue'
import { computed } from '@vue/reactivity'
import { PhArrowLeft, PhX } from 'phosphor-vue'
import { feedbackOptions, FeedbackTypes } from '../../composables/feedback'

const props = defineProps<{
  feedbackType: FeedbackTypes | undefined
  feedbackSent: boolean
}>()

defineEmits<{ (e: 'back'): void }>()

const headerTitle = computed(() =>
  props.feedbackType
    ? feedbackOptions[props.feedbackType].title
    : 'Give us your feedback'
)

const headerIcon = computed(() =>
  props.feedbackType ? feedbackOptions[props.feedbackType].icon : null
)
</script>

<template>
  <header class="flex w-full justify-between">
    <button
      v-if="feedbackType && !feedbackSent"
      class="text-zinc-400 hover:text-zinc-200"
      title="Back to feedback types"
      @click="$emit('back')"
    >
      <PhArrowLeft weight="bold" class="w-4 h-4" />
    </button>
    <h2
      v-if="!feedbackSent"
      class="flex justify-center items-center flex-1 gap-1 text-xl leading-6 capitalize"
    >
      <component :is="headerIcon" />
      {{ headerTitle }}
    </h2>
    <PopoverButton
      class="text-zinc-400 hover:text-zinc-200 ml-auto"
      title="Close feedback form"
    >
      <PhX weight="bold" class="w-4 h-4" />
    </PopoverButton>
  </header>
</template>
