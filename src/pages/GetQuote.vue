<script setup lang="ts">
import FloatingCard from '../components/FloatingCard.vue'
import ProgressTabs from '../components/ProgressTabs.vue'
import TextButton from '../components/TextButton.vue'
import TextField from '../components/TextField.vue'
</script>

<template>
  <div class="size-full bg-green-200">
    <div class="flex flex-col items-center gap-4 max-w-md mx-auto">
      <h1>Get Quote</h1>
      <FloatingCard>
        <ProgressTabs>
          <h2>Contact Details</h2>
          <TextField />
          <TextField />
        </ProgressTabs>
      </FloatingCard>
      <div class="w-full flex justify-between">
        <TextButton />
        <TextButton />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
