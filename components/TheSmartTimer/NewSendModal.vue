<template>
  <template v-for="(step, index) in stepList" :key="index"
    ><component :is="step.component" v-if="step.index === currentStep" />
  </template>
</template>

<script setup>
import NewSendModalStep2 from "@/components/TheSmartTimer/NewSendModalStep2.vue";
import NewSendModalStep1 from "@/components/TheSmartTimer/NewSendModalStep1.vue";
import { ref, defineProps } from "vue";

//props

const props = defineProps({
  totalStep: {
    type: Number,
  },
  currentStep: {
    type: Number,
  },
});

//state

const stepList = ref([
  {
    index: 1,
    component: NewSendModalStep1,
  },
  {
    index: 2,
    component: NewSendModalStep2,
  },
]);
</script>

<style>
</style>