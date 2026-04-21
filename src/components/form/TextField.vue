<script setup lang="ts">
import { ErrorMessage, Field } from 'vee-validate'
import { computed, useId } from 'vue'
import TextButton from '../TextButton.vue'

const props = defineProps<{
  name: string
  label?: string
  ariaLabel?: string
  rules?: string
  readonly?: boolean
  placeholder?: string
  rounded?: boolean
  buttonText?: string
  type?: 'text' | 'email' | 'tel' | 'url' | 'password'
  autocomplete?: string
}>()

const emit = defineEmits<{
  (e: 'buttonClick'): void
}>()

const required = computed(() => props.rules?.includes('required'))
const inputId = useId()
const errorId = `${inputId}-error`
</script>

<template>
  <div class="relative">
    <label v-if="label" :for="inputId" class="font-medium mb-3 block">
      {{ label }}<span v-if="required" class="text-red-500" aria-hidden="true"> *</span>
      <span v-if="required" class="sr-only"> (required)</span>
    </label>
    <div class="relative">
      <Field v-slot="{ field, errorMessage }" :name="name" :rules="rules">
        <input
          v-bind="field"
          :id="inputId"
          :type="type ?? 'text'"
          :autocomplete="autocomplete"
          class="w-full border shadow-md p-4 border-gray-200 text-navy/60 focus:outline-gray-300"
          :class="{
            'border-none! shadow-none! p-0!': readonly,
            'border-red-500': errorMessage,
            'rounded-full px-6': rounded,
            'py-5': buttonText,
          }"
          :disabled="readonly"
          :placeholder="readonly ? '-' : placeholder"
          :aria-label="label ? undefined : ariaLabel"
          :aria-invalid="errorMessage ? 'true' : undefined"
          :aria-describedby="errorMessage ? errorId : undefined"
        />
      </Field>
      <TextButton
        v-if="buttonText"
        class="absolute right-3 top-1/2 -translate-y-1/2"
        :text="buttonText"
        thin
        @click="emit('buttonClick')"
      />
    </div>
    <ErrorMessage
      :id="errorId"
      class="text-sm text-red-500 absolute -bottom-1 translate-y-full leading-tight"
      :name="name"
      role="alert"
    />
  </div>
</template>
