<script setup lang="ts">
import { PhCheck } from 'phosphor-vue'

defineEmits<{ (e: 'sendAnother'): void }>()
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-6 w-[304px] p-10">
    <div class="flex flex-col items-center">
      <PhCheck class="w-8 h-8 text-green-600" />
      <p>We appreciate your feedback</p>
    </div>
    <button
      class="py-2 px-6 rounded-md border-transparent bg-zinc-800 transition-colors duration-500 hover:bg-zinc-600 focus:outline-none focus:bg-zinc-600"
      @click="$emit('sendAnother')"
    >
      I want to send another
    </button>
  </div>
</template>
