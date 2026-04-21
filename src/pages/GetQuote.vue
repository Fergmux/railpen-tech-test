<script setup lang="ts">
import { type ComponentInstance, computed, ref, useTemplateRef, watch } from 'vue'

import type { ContactFormValues } from '@/types/form'

import ContactForm from '../components/form/ContactForm.vue'
import FloatingCard from '../components/FloatingCard.vue'
import ProgressTabs from '../components/form/ProgressTabs.vue'
import TextButton from '../components/TextButton.vue'
import FormHeader from '../components/FormHeader.vue'
import CheckboxField from '@/components/form/CheckboxField.vue'

const config = {
  contact: {
    title: 'Get a project quote',
    subtitle: 'Enter your details below',
    formTitle: 'Contact Details',
    formSubtitle: 'Enter your details below',
    buttonText: 'Next step',
  },
  confirm: {
    title: 'Complete your quote',
    subtitle: 'Please check your details below and submit your quote',
    buttonText: 'Submit',
    formTitle: 'Confirm your details',
    readonly: true,
    checkboxLabel: 'I confirm that the above details are both up to date and correct.',
    secondaryButtonText: 'Previous step',
  },
}

const tab1 = 'contact'
const tab2 = 'confirm'
const tabs = [tab1, tab2]
const currentTab = ref(tab1)
const tabsComponent = useTemplateRef<ComponentInstance<typeof ProgressTabs>>('tabsComponent')
const contactForm = useTemplateRef<ComponentInstance<typeof ContactForm>>('contactForm')

const checkboxChecked = ref(false)
const errorMessage = ref('')
watch(checkboxChecked, (newVal) => {
  if (newVal) errorMessage.value = ''
})

const currentConfig = computed(() => config[currentTab.value])

const formValues = ref<ContactFormValues>({})

const submitForm = () => {
  contactForm.value?.submit()
}

const onSubmit = async (values: ContactFormValues) => {
  if (currentConfig.value.checkboxLabel && !checkboxChecked.value) {
    errorMessage.value = 'Please confirm your details are correct'
    return
  }
  errorMessage.value = ''
  formValues.value = values
  if (currentTab.value === tab2) {
    alert(`Your quote will be sent to ${formValues.value.email}`)
    return
  }
  tabsComponent.value?.next()
}

const previousPage = () => {
  tabsComponent.value?.previous()
}
</script>

<template>
  <div class="size-full">
    <div
      class="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto h-full px-4 md:px-0"
    >
      <h2 class="text-header2 font-black">{{ currentConfig.title }}</h2>
      <p class="opacity-70 text-center">{{ currentConfig.subtitle }}</p>

      <FloatingCard class="mt-4 px-12 pb-16 w-full md:w-[calc(100%+120px)]">
        <ProgressTabs
          ref="tabsComponent"
          :tabs="tabs"
          @tab-updated="currentTab = $event ? $event : 'contact'"
        >
          <template #[currentTab]>
            <FormHeader :title="currentConfig.formTitle" :subtitle="currentConfig.formSubtitle" />
            <ContactForm
              class="mt-8"
              ref="contactForm"
              :readonly="currentConfig.readonly"
              :default-values="formValues"
              @submit="onSubmit"
            />
            <CheckboxField
              v-if="currentConfig.checkboxLabel"
              v-model="checkboxChecked"
              :label="currentConfig.checkboxLabel"
              :error-message="errorMessage"
            />
          </template>
        </ProgressTabs>
      </FloatingCard>

      <div
        class="flex mt-4 justify-end w-full gap-y-4 flex-wrap md:w-[calc(100%+120px)]"
        :class="{ 'justify-between!': currentConfig.secondaryButtonText }"
      >
        <TextButton
          class="w-full md:w-auto"
          v-show="currentConfig.secondaryButtonText"
          :text="currentConfig.secondaryButtonText"
          secondary
          @click="previousPage"
        />
        <TextButton class="w-full md:w-auto" :text="currentConfig.buttonText" @click="submitForm" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
