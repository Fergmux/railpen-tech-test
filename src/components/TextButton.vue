<script setup lang="ts">
defineProps<{
  text: string
  secondary?: boolean
  thin?: boolean
}>()
</script>

<template>
  <div
    class="py-4 px-10 bg-orange text-white rounded-full cursor-pointer flex items-center justify-center font-semibold text-lg shadow-lg hover:bg-orange/80 transition-colors"
    :class="{
      'bg-white text-orange! font-normal! border-orange border hover:bg-orange/10!': secondary,
      'py-[12px]! px-8! font-normal! text-sm!': thin,
    }"
  >
    {{ text }}
  </div>
</template>
