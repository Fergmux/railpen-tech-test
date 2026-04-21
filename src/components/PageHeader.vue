<script setup lang="ts">
import CompanyLogo from './CompanyLogo.vue'
import TextButton from './TextButton.vue'
</script>

<template>
  <header
    class="w-full h-full flex flex-wrap gap-y-10 items-center justify-between py-4 px-6 md:py-10 md:px-16"
  >
    <CompanyLogo />
    <TextButton class="mx-auto sm:mx-0" text="Log In" />
  </header>
</template>
