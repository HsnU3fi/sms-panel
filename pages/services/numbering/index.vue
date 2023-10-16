<template>
  <BaseLayout class="dashboard services-numbering">
    <div
        class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <div class="d-flex">
        <button @click="dialogVisible = true">New Numbering</button>
      </div>
      <Icon name="refresh-blue" />
    </div>
    <NumberingTable />
  </BaseLayout>
  <BaseDialog
      title="Add New"
      :isDialogOpen="dialogVisible"
      okText="Add"
      cancelText="Cancel"
      class="new-send-dialog new-numbering-dialog"
      @close="dialogVisible = false"
      @cancel-clicked="dialogVisible = false"
  >
    <NewNumbering />
  </BaseDialog>
</template>

<script setup>
import {ref} from "vue";
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from '@/components/TheDialog/BaseDialog.vue'
import NumberingTable from "@/components/TheCompetition/NumberingTable.vue";
import NewNumbering from "@/components/TheCompetition/NewNumbering";
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