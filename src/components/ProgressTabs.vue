<script setup lang="ts">
import {
  computed,
  ref,
  watch,
} from 'vue'

const props = defineProps<{
  tabs: string[]
}>()

const emit = defineEmits<{
  (e: 'tab-updated', tab: string | undefined): void
}>()

// Could v-model this
const currentTabIndex = ref(0)
const currentTab = computed(() => props.tabs[currentTabIndex.value])
watch(currentTab, (newTab) => {
  emit('tab-updated', newTab)
})

const next = () => {
  currentTabIndex.value++
  if (currentTabIndex.value >= props.tabs.length) {
    currentTabIndex.value = props.tabs.length - 1
  }
}
const previous = () => {
  currentTabIndex.value--
  if (currentTabIndex.value < 0) {
    currentTabIndex.value = 0
  }
}

defineExpose({
  next,
  previous,
})
</script>
<template>
  <div class="w-full">
    <div class="w-full flex gap-4">
      <div
        v-for="(tab, index) in tabs"
        :key="tab"
        class="rounded-full bg-orange-100 h-6 w-6 mx-auto flex justify-center items-center cursor-pointer transition-colors"
        :class="{ 'bg-orange-400': currentTabIndex >= index }"
      >
        {{ index }}
      </div>
    </div>
    <template v-for="(tab, index) in tabs" :key="tab">
      <div v-if="currentTabIndex === index">
        <slot :name="tab" />
      </div>
    </template>
  </div>
</template>
