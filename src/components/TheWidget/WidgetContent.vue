<script setup lang="ts">
import { ref } from 'vue'
import WidgetHeader from './WidgetHeader.vue'
import FeedbackType from './Steps/FeedbackType.vue'
import FeedbackContent from './Steps/FeedbackContent.vue'
import { feedbackOptions, FeedbackTypes } from '../../composables/feedback'
import FeedbackSuccess from './Steps/FeedbackSuccess.vue'

const selectedFeedbackType = ref<FeedbackTypes | undefined>()
const feedbackSent = ref(false)

function handleSelection(key: FeedbackTypes | undefined) {
  selectedFeedbackType.value = key
}

function handleSendAnother() {
  feedbackSent.value = false
  selectedFeedbackType.value = undefined
}
</script>

<template>
  <div
    class="flex flex-col items-center w-[calc(100vw-2rem)] p-4 bg-zinc-900 text-zinc-100 rounded-2xl rounded-br-md shadow-lg md:w-auto"
  >
    <WidgetHeader
      :feedback-type="selectedFeedbackType"
      :feedback-sent="feedbackSent"
      @back="handleSelection"
    />

    <FeedbackType
      v-if="!selectedFeedbackType"
      v-bind="{ feedbackOptions }"
      @select-type="handleSelection"
    />
    <FeedbackContent
      v-else-if="selectedFeedbackType && !feedbackSent"
      @sent="feedbackSent = true"
    />
    <FeedbackSuccess v-else @send-another="handleSendAnother" />

    <footer class="flex justify-center items-center h-4 text-zinc-400 text-sm">
      Made with 💙 by&nbsp;
      <a
        class="text-brand-400 font-semibold hover:text-brand-300"
        href="https://www.github.com/LuscaLima"
        target="__blank"
      >
        Lusca Lima
      </a>
    </footer>
  </div>
</template>
