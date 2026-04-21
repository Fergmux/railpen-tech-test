<script setup lang="ts">
import CompanyLogo from './CompanyLogo.vue'
import TextField from './form/TextField.vue'
import { useForm } from 'vee-validate'

const { values, validate } = useForm()

const subscribe = async () => {
  const result = await validate()
  if (!result?.valid || !values.email) return
  alert(`${values.email} has been subscribed`)
}
</script>

<template>
  <footer
    class="w-full h-full flex flex-col-reverse md:flex-row gap-10 justify-between items-center py-4 px-6 md:py-10 md:px-16"
  >
    <div class="shrink-0 self-start">
      <CompanyLogo />
      <p class="text-sm text-navy/60">Copyright © 2026 All Rights Reserved</p>
    </div>
    <TextField
      buttonText="Subscribe"
      @buttonClick="subscribe"
      class="md:m-0 w-md max-w-full"
      name="email"
      type="email"
      autocomplete="email"
      rules="email"
      aria-label="Email address for newsletter subscription"
      placeholder="Enter your email"
      rounded
    />
  </footer>
</template>
