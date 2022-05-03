<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { PhChatTeardropDots } from 'phosphor-vue'
</script>

<template>
  <Popover class="absolute bottom-5 right-5">
    <PopoverPanel>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </PopoverPanel>

    <PopoverButton
      class="flex items-center px-3 h-12 text-white bg-brand-400 rounded-full hover:bg-brand-300 group transition-all duration-500 ease-linear"
    >
      <PhChatTeardropDots class="w-6 h-6" />
      <span
        class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"
      >
        <span class="pl-2"></span>
        Feedback
      </span>
    </PopoverButton>
  </Popover>
</template>
