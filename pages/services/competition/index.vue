<template>
  <BaseLayout class="dashboard occasional-send">
    <div
        class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <div class="d-flex">
        <button @click="dialogVisible = true">New Competition</button>
      </div>
      <Icon name="refresh-blue" />
    </div>
    <CompetionTable />
  </BaseLayout>
  <BaseDialog
      title="New Competition"
      :isDialogOpen="dialogVisible"
      okText="Submit"
      cancelText="Cancel"
      class="new-send-dialog new-competition-dialog"
      @close="dialogVisible = false"
      @cancel-clicked="dialogVisible = false"
  >
    <NewCompetition />
  </BaseDialog>
</template>

<script setup>
import {ref} from "vue";
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import CompetionTable from "@/components/TheCompetition/CompetitionTable.vue"
import BaseDialog from '@/components/TheDialog/BaseDialog.vue'
import NewCompetition from "@/components/TheCompetition/NewCompetition.vue";
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