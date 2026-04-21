<script setup lang="ts">
import { useId } from 'vue'

import CheckIcon from '@/assets/check.svg'

defineProps<{
  label: string
  errorMessage?: string
}>()
const model = defineModel<boolean>({ required: true })
const inputId = useId()
const errorId = `${inputId}-error`
</script>

<template>
  <div class="mt-8 mb-4">
    <label :for="inputId" class="flex items-center gap-2 cursor-pointer">
      <span class="relative inline-flex shrink-0">
        <input
          :id="inputId"
          v-model="model"
          type="checkbox"
          class="appearance-none cursor-pointer h-4 w-4 rounded border-gray-300 border-2 hover:bg-orange/50 checked:bg-orange hover:checked:bg-orange checked:border-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          :aria-invalid="errorMessage ? 'true' : undefined"
          :aria-describedby="errorMessage ? errorId : undefined"
        />
        <img
          v-if="model"
          :src="CheckIcon"
          class="absolute inset-0 h-4 w-4 pointer-events-none"
          alt="check"
        />
      </span>
      <span class="ml-1 font-semibold">
        {{ label }}
      </span>
    </label>
    <p
      v-if="errorMessage"
      :id="errorId"
      class="mt-2 text-sm text-red-500 leading-tight"
      role="alert"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>
