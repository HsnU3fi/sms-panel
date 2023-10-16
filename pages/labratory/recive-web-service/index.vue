<template>
  <BaseLayout class="dashboard occasional-send">
    <div
        class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <div class="d-flex">
        <button @click="dialogVisible = true">Insert New URL</button>
      </div>
      <Icon name="refresh-blue" />
    </div>
    <NoData />
  </BaseLayout>
  <BaseDialog
      title="New URL"
      :isDialogOpen="dialogVisible"
      okText="Add"
      cancelText="Cancel"
      class="new-send-dialog new-recive-web-service-dialog"
      @close="dialogVisible = false"
      @cancel-clicked="dialogVisible = false"
  >
    <NewWebService />
  </BaseDialog>
</template>

<script setup>
import {ref} from "vue";
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import NoData from "@/components/TheEmptyTable/NoData.vue";
import BaseDialog from '@/components/TheDialog/BaseDialog.vue'
import NewWebService from "@/components/TheLabratory/NewWebService";
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