<script setup lang="ts">
import {
  onMounted,
  useTemplateRef,
} from 'vue'

import {
  Form,
  type FormContext,
} from 'vee-validate'

import type { ContactFormValues } from '@/types/form'

import TextField from './TextField.vue'

const emit = defineEmits<{
  submit: [values: ContactFormValues]
}>()

const props = defineProps<{
  readonly?: boolean
  defaultValues?: ContactFormValues
}>()

const form = useTemplateRef<FormContext<ContactFormValues>>('form')

const submit = async () => {
  const result = await form.value?.validate()
  if (result?.valid) emit('submit', form.value?.values ?? {})
}

onMounted(() => {
  if (props.defaultValues) {
    form.value?.setValues(props.defaultValues)
  }
})

defineExpose({
  submit,
})
</script>

<template>
  <Form ref="form">
    <div class="grid grid-cols-2 gap-4">
      <TextField name="Name" rules="required" :readonly />
      <TextField name="Email" rules="email|required" :readonly />
      <TextField name="Phone Number" rules="integer|digits:10" :readonly />
      <TextField name="Message" :readonly />
    </div>
  </Form>
</template>
