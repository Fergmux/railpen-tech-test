<script setup lang="ts" generic="T extends string">
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  steps: T[]
}>()

const emit = defineEmits<{
  (e: 'step-updated', step: T): void
}>()

// NOTE: Might be easier to just v-model this
const currentStepIndex = ref(0)
const currentStep = computed(() => props.steps[currentStepIndex.value])
watch(currentStep, (newStep) => {
  if (newStep !== undefined) emit('step-updated', newStep)
})

const next = () => {
  currentStepIndex.value++
  if (currentStepIndex.value >= props.steps.length) {
    currentStepIndex.value = props.steps.length - 1
  }
}
const previous = () => {
  currentStepIndex.value--
  if (currentStepIndex.value < 0) {
    currentStepIndex.value = 0
  }
}

defineExpose({
  next,
  previous,
})
</script>
<template>
  <div class="w-full">
    <ol
      class="w-full gap-[25%] flex py-4 justify-center border-b-2 border-gray-200"
      aria-label="Progress"
    >
      <li
        v-for="(step, index) in steps"
        :key="step"
        class="rounded-full bg-gray-100 h-8 w-8 flex justify-center items-center transition-colors text-navy/60"
        :class="{ 'bg-orange text-white': currentStepIndex >= index }"
        :aria-current="currentStepIndex === index ? 'step' : undefined"
      >
        <span class="sr-only">
          Step {{ index + 1 }} of {{ steps.length }}: {{ step }}
          <template v-if="currentStepIndex === index"> (current)</template>
          <template v-else-if="currentStepIndex > index"> (completed)</template>
        </span>
        <span aria-hidden="true">{{ index + 1 }}</span>
      </li>
    </ol>
    <template v-for="(step, index) in steps" :key="step">
      <div v-if="currentStepIndex === index">
        <slot :name="step" />
      </div>
    </template>
  </div>
</template>
