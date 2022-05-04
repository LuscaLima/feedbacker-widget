<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { PhChatTeardropDots } from 'phosphor-vue'
import WidgetContent from './WidgetContent.vue'
</script>

<template>
  <Popover class="flex flex-col items-end gap-1 absolute bottom-5 right-5">
    <PopoverPanel>
      <WidgetContent />
    </PopoverPanel>

    <PopoverButton
      class="flex items-center px-3 h-12 text-white bg-brand-400 rounded-3xl rounded-tr-md group transition-all duration-500 ease-linear hover:bg-brand-300"
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
