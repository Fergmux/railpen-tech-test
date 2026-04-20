<script setup lang="ts">
import {
  ErrorMessage,
  Field,
} from 'vee-validate'

defineProps<{
  name: string
  rules?: string
  readonly?: boolean
}>()
</script>
<template>
  <label v-if="name">
    <span>{{ name }}</span>
    <Field
      :name="name"
      :rules="rules"
      as="input"
      type="text"
      class="w-full bg-gray-200"
      :disabled="readonly"
    />
    <ErrorMessage :name="name" />
  </label>
</template>
