<script setup lang="ts">
import { ErrorMessage, Field } from 'vee-validate'
import { computed } from 'vue'
import TextButton from '../TextButton.vue'

const props = defineProps<{
  name: string
  label?: string
  rules?: string
  readonly?: boolean
  placeholder?: string
  rounded?: boolean
  buttonText?: string
}>()

const emit = defineEmits<{
  (e: 'buttonClick'): void
}>()

const required = computed(() => props.rules?.includes('required'))
</script>

<template>
  <label class="relative">
    <p v-if="label" class="font-medium mb-3">
      {{ label }}<span v-if="required" class="text-red-500"> *</span>
    </p>
    <div class="relative">
      <Field v-slot="{ field, errorMessage }" :name="name" :rules="rules">
        <input
          v-bind="field"
          type="text"
          class="w-full border shadow-md p-4 border-gray-200 text-navy/60 focus:outline-gray-300"
          :class="{
            'border-none! shadow-none! p-0!': readonly,
            'border-red-500': errorMessage,
            'rounded-full px-6': rounded,
            'py-5': buttonText,
          }"
          :disabled="readonly"
          :placeholder="readonly ? '-' : placeholder"
          :aria-label="label ? undefined : name"
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
      class="text-sm text-red-500 absolute -bottom-1 translate-y-full leading-tight"
      :name="name"
    />
  </label>
</template>
