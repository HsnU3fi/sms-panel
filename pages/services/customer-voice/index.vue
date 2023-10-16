<template>
  <BaseLayout class="dashboard services-customer-send">
    <div
        class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <div class="d-flex">
        <button @click="dialogVisible = true">Add New</button>
      </div>
      <Icon name="refresh-blue" />
    </div>
    <NoData />
  </BaseLayout>
  <BaseDialog
      title="Add New"
      :isDialogOpen="dialogVisible"
      okText="Add"
      cancelText="Cancel"
      class="new-send-dialog new-customer-voice-dialog"
      @close="dialogVisible = false"
      @cancel-clicked="dialogVisible = false"
  >
    <NewCustomerVoice />
  </BaseDialog>
</template>

<script setup>
import {ref} from "vue";
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from '@/components/TheDialog/BaseDialog.vue'
import NewCustomerVoice from "@/components/TheCustomerVoice/NewCustomerVoice.vue";
import NoData from "@/components/TheEmptyTable/NoData.vue";
const state = ref({
  folder: "",
});
const folderOptions = [
  {
    value: "Send",
    label: "Send",
  },
  {
    value: "Recieve",
    label: "Recieve",
  },
];
const dialogVisible = ref(false)
</script>

<style scoped>

</style>