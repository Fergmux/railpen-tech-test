<script setup lang="ts">
import {
  type ComponentInstance,
  ref,
  type Ref,
} from 'vue'

import ContactForm from '../components/ContactForm.vue'
import FloatingCard from '../components/FloatingCard.vue'
import ProgressTabs from '../components/ProgressTabs.vue'
import TextButton from '../components/TextButton.vue'

// Use alias imports

const slot1 = 'contact'
const slot2 = 'confirm'
const tabs = [slot1, slot2]
const currentTab = ref('contact')
const tabsComponent = ref(null) as Ref<ComponentInstance<typeof ProgressTabs> | null>
</script>

<template>
  <div class="size-full bg-green-200">
    <div class="flex flex-col items-center gap-4 max-w-md mx-auto">
      <h1>Get Quote</h1>
      <FloatingCard>
        <ProgressTabs
          ref="tabsComponent"
          :tabs="tabs"
          @tab-updated="currentTab = $event ? $event : 'contact'"
        >
          <template #[slot1]>
            <h2 class="text-2xl font-bold">Contact Details</h2>
            <p class="text-sm text-gray-500">Enter your details below</p>
            <ContactForm />
          </template>
          <template #[slot2]>
            <h2 class="text-2xl font-bold">Confirm Details</h2>
            <p class="text-sm text-gray-500">Confirm your details below</p>
            <ContactForm readonly />
            <input type="checkbox" /><span>I confirm my details are correct</span>
          </template>
        </ProgressTabs>
      </FloatingCard>
      <div class="w-full flex justify-between">
        <TextButton @click="tabsComponent?.previous()" />
        <TextButton @click="tabsComponent?.next()" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
