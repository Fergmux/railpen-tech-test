<script setup lang="ts">
import PageFooter from './components/PageFooter.vue'
import PageHeader from './components/PageHeader.vue'
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <PageHeader class="basis-20" />
    <router-view />
    <PageFooter class="basis-20" />
  </div>
</template>

<style scoped></style>
