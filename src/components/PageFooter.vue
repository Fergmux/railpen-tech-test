<script setup lang="ts">
import CompanyLogo from './CompanyLogo.vue'
import SubscribeForm from './form/SubscribeForm.vue'
</script>

<template>
  <footer
    class="w-full h-full flex flex-col-reverse md:flex-row gap-10 justify-between items-center py-4 px-6 md:py-10 md:px-16"
  >
    <div class="shrink-0 self-start">
      <CompanyLogo />
      <p class="text-sm text-navy/60">Copyright © 2026 All Rights Reserved</p>
    </div>
    <SubscribeForm class="md:m-0 w-md max-w-full" />
  </footer>
</template>
