<script setup lang="ts">
import { Form } from 'vee-validate'

import TextField from './TextField.vue'

type SubscribeValues = {
  email?: string
}

const onSubmit = (values: SubscribeValues) => {
  alert(`${values.email} has been subscribed`)
}
</script>

<template>
  <Form v-slot="{ handleSubmit }">
    <TextField
      buttonText="Subscribe"
      @buttonClick="handleSubmit(onSubmit)"
      name="email"
      type="email"
      autocomplete="email"
      rules="email|required"
      aria-label="Email address for newsletter subscription"
      placeholder="Enter your email"
      rounded
    />
  </Form>
</template>
