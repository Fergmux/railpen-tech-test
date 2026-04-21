<template>
  <h3 class="text-header3 font-black mt-12">{{ title }}</h3>
  <p class="text-sm opacity-70 mt-2">{{ subtitle }}</p>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>
