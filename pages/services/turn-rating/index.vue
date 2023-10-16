<template>
  <BaseLayout class="dashboard turn-rating">
    <div
        class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <div class="d-flex">
        <button @click="dialogVisible = true">New Turn Ratings</button>
      </div>
      <Icon name="refresh-blue" />
    </div>
    <TurnTaringTable />
  </BaseLayout>
  <BaseDialog
      title="Add New"
      :isDialogOpen="dialogVisible"
      okText="Add"
      cancelText="Cancel"
      class="new-send-dialog new-turn-rating-dialog"
      @close="dialogVisible = false"
      @cancel-clicked="dialogVisible = false"
  >
    <NewTurnRating />
  </BaseDialog>
</template>

<script setup>
import {ref} from "vue";
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from '@/components/TheDialog/BaseDialog.vue'
import TurnTaringTable from "@/components/TheCompetition/TurnTaringTable.vue";
import NewTurnRating from "@/components/TheCompetition/NewTurnRating";
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