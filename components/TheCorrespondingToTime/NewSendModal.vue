<template>
  <template v-for="(step, index) in stepList" :key="index"
    ><component :is="step.component" v-if="step.index === currentStep" />
  </template>
</template>

<script setup>
import SendNewStep1 from "@/components/TheCorrespondingToTime/SendNewStep1.vue";
import SendNewStep2 from "@/components/TheCorrespondingToTime/SendNewStep2.vue";
import { ref, defineProps } from "vue";

//props

const props = defineProps({
  totalStep: {
    type: Number,
    default: 2,
  },
  currentStep: {
    type: Number,
    default: 0,
  },
});

//state

const stepList = ref([
  {
    index: 1,
    component: SendNewStep1,
  },
  {
    index: 2,
    component: SendNewStep2,
  },
]);

//animation variables

const initial = {
  x: -50,
  opacity: 0,
  transition: {
    stiffness: 100,
  },
};
const enter = {
  x: 0,
  opacity: 1,
  transition: {
    stiffness: 100,
    ease: "easeInOut",
  },
};
</script>
