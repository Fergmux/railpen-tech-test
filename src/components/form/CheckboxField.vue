<script setup lang="ts">
defineProps<{
  label: string
  errorMessage?: string
}>()
const model = defineModel<boolean>({ required: true })
</script>

<template>
  <div class="mt-8 mb-4">
    <div class="flex items-center gap-2">
      <input
        v-model="model"
        type="checkbox"
        class="appearance-none cursor-pointer basis-4 shrink-0 h-4 w-4 rounded border-gray-300 border-2 hover:bg-orange/50 checked:bg-orange! checked:border-orange-400!"
      />
      <span class="ml-1 font-semibold">
        {{ label }}
      </span>
    </div>
    <p v-if="errorMessage" class="mt-2 text-sm text-red-500 leading-tight">
      {{ errorMessage }}
    </p>
  </div>
</template>
