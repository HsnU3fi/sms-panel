<template>
  <BaseLayout class="dashboard smart-timer">
    <div
        class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <div class="d-flex">
        <button @click="dialogVisible = true">New Smart Secretary</button>
      </div>
    </div>
    <Table />
  </BaseLayout>
  <BaseDialog
      :title="'New Smart Secretary'"
      :isDialogOpen="dialogVisible"
      :okText="currentStep == 1 ? 'Next' : 'Add'"
      cancelText="Back"
      class="base-modal new-send-dialog smart-timer-dialog"
      @close="dialogVisible = false"
      @okClicked="okHandler"
      @cancelClicked="cancelHandler"
  >
    <BodyModal :totalStep="totalStep" :currentStep="currentStep" />
  </BaseDialog>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import Table from "@/components/TheMagicTools/SmartSecretary/Table.vue";
import BodyModal from "@/components/TheMagicTools/SmartSecretary/BodyModal.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const dialogVisible = ref(false);
const totalStep = ref(2);
const currentStep = ref(1);

//methods

const okHandler = () => {
  if (totalStep.value > currentStep.value) currentStep.value++;
};
const cancelHandler = () => {
  if (currentStep.value > 1) currentStep.value--;
  else dialogVisible.value = false;
};
</script>
