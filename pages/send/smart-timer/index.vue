<template>
  <BaseLayout class="dashboard smart-timer">
    <div
      v-if="isShow"
      v-motion
      :initial="initial"
      :enter="enter"
      :delay="200"
      class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <div class="d-flex">
        <button
          @click="
            dialogVisible = true;
            currentStep = 1;
          "
        >
          New Send
        </button>
      </div>
      <Icon name="refresh-blue" />
    </div>
    <SmartTimerTable />
  </BaseLayout>
  <BaseDialog
    :title="'New Send'"
    :isDialogOpen="dialogVisible"
    :okText="currentStep == 1 ? 'Next' : 'Send'"
    cancelText="Back"
    class="new-send-dialog smart-timer-dialog"
    @close="dialogVisible = false"
    @okClicked="okHandler"
    @cancelClicked="cancelHandler"
  >
    <NewSendModal :totalStep="totalStep" :currentStep="currentStep" />
  </BaseDialog>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import SmartTimerTable from "@/components/TheSmartTimer/SmartTimerTable.vue";
import NewSendModal from "@/components/TheSmartTimer/NewSendModal.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const dialogVisible = ref(false);
const totalStep = ref(2);
const currentStep = ref(0);
const isShow = ref(false);

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

//methods

const okHandler = () => {
  if (totalStep.value > currentStep.value) currentStep.value++;
};
const cancelHandler = () => {
  if (currentStep.value > 1) currentStep.value--;
  else dialogVisible.value = false;
};

//mounted

onMounted(() => {
  isShow.value = true;
});
</script>
