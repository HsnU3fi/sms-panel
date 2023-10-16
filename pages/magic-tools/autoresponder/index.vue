<template>
  <BaseLayout class="dashboard recieve">
    <div class="action-bar-table">
      <button
          @click="dialogVisible = true"
          type="button"
          class="manage-group mb-4"
      >
        New Autoresponder
      </button>
    </div>

    <Table />

  <BaseDialog
      :title="'New Autoresponder'"
      :isDialogOpen="dialogVisible"
      okText="Add"
      cancelText="Cancel"
      class="base-modal"
      @close="dialogVisible = false"
      @cancelClicked="dialogVisible = false"
  >
    <BodyModal />
  </BaseDialog>

  </BaseLayout>

</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import Table from "@/components/TheMagicTools/Autoresponder/Table.vue";
import BodyModal from "@/components/TheMagicTools/Autoresponder/BodyModal.vue";
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

