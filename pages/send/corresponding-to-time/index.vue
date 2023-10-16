<template>
  <BaseLayout class="dashboard send-correspondence">
    <div
      v-if="isShow"
      v-motion
      :initial="initial"
      :enter="enter"
      :delay="200"
      class="d-flex justify-content-between align-items-center actions action-bar-table col-12"
    >
      <button
        @click="
          dialogVisible = true;
          currentStep = 1;
        "
      >
        New Send
      </button>
      <Icon name="refresh-blue" />
    </div>
    <CorrespondingTable />
  </BaseLayout>
  <BaseDialog
    :title="'New Send'"
    :isDialogOpen="dialogVisible"
    :okText="currentStep == 1 ? 'Next' : 'Send'"
    cancelText="Back"
    @okClicked="okHandler"
    @cancelClicked="cancelHandler"
    class="new-send-dialog"
    @close="dialogVisible = false"
  >
    <NewSendModal :totalStep="totalStep" :currentStep="currentStep" />
  </BaseDialog>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import CorrespondingTable from "@/components/TheCorrespondingToTime/CorrespondingTable.vue";
import NewSendModal from "@/components/TheCorrespondingToTime/NewSendModal.vue";
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
