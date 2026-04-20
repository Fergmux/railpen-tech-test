<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  tabs: string[]
}>()

const currentTab = ref(0)
</script>
<template>
  <div class="w-full">
    <div class="w-full flex gap-4">
      <div
        v-for="(tab, index) in tabs"
        :key="tab"
        class="rounded-full h-6 w-6 bg-orange-400 mx-auto flex justify-center items-center cursor-pointer"
        @click="currentTab = index"
      >
        {{ index }}
      </div>
    </div>
    <template v-for="(tab, index) in tabs" :key="tab">
      <div v-if="currentTab === index">
        <slot :name="tab" />
      </div>
    </template>
  </div>
</template>
