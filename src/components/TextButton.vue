<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string
    secondary?: boolean
    thin?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  { type: 'button' },
)
</script>

<template>
  <button
    :type="type"
    class="py-4 px-10 bg-orange text-white rounded-full cursor-pointer flex items-center justify-center font-semibold text-lg shadow-lg hover:bg-orange/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
    :class="{
      'bg-white text-orange! font-normal! border-orange border hover:bg-orange/10!': secondary,
      'py-[12px]! px-8! font-normal! text-sm!': thin,
    }"
  >
    {{ text }}
  </button>
</template>
