<template>
  <template v-for="(step, index) in stepList" :key="index"
    ><component :is="step.component" v-if="step.index === currentStep" />
  </template>
</template>

<script setup>
import SendNewStep1 from "@/components/TheGradualSend/SendNewStep1.vue";
import SendNewStep2 from "@/components/TheGradualSend/SendNewStep2.vue";
import SendNewStep3 from "@/components/TheGradualSend/SendNewStep3.vue";
import { ref, defineProps } from "vue";

//props

const props = defineProps({
  totalStep: {
    type: Number,
    default: 3,
  },
  currentStep: {
    type: Number,
    default: 1,
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
  {
    index: 3,
    component: SendNewStep3,
  },
]);
</script>