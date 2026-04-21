<script setup lang="ts">
import { useTemplateRef } from 'vue'

import { Form, type FormContext } from 'vee-validate'

import type { ContactFormValues } from '@/types/form'

import TextField from './TextField.vue'

const emit = defineEmits<{
  submit: [values: ContactFormValues]
}>()

defineProps<{
  readonly?: boolean
  defaultValues: ContactFormValues
}>()

const form = useTemplateRef<FormContext<ContactFormValues>>('form')

const submit = async () => {
  const result = await form.value?.validate()
  // Emit a shallow clone to avoid component unmount resetting the object
  if (result?.valid) emit('submit', { ...(form.value?.values ?? {}) })
}

defineExpose({
  submit,
})
</script>

<template>
  <Form ref="form" :initial-values="defaultValues">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
      <TextField name="name" label="Name" rules="required" :readonly placeholder="John Carter" />
      <TextField
        name="email"
        label="Email"
        rules="email|required"
        :readonly
        placeholder="Email address"
      />
      <TextField
        name="phone"
        label="Phone Number"
        rules="integer|digits:11"
        :readonly
        placeholder="07712345678"
      />
      <TextField name="company" label="Company" :readonly placeholder="Company name" />
    </div>
  </Form>
</template>
