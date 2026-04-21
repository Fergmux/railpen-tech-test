<template>
  <h2 class="text-header3 font-black mt-12">{{ title }}</h2>
  <p v-if="subtitle" class="text-sm opacity-70 mt-2">{{ subtitle }}</p>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>
