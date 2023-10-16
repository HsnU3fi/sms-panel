<template>
  <BaseLayout class="dashboard services-coding">
    <div
        class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <div class="d-flex">

        <button @click="openNewCodingDialog">New Coding</button>
      </div>
      <Icon name="refresh-blue" />
    </div>
    <CodingTable />
  </BaseLayout>
  <BaseDialog
    :is-dialog-open="showNewCodingDialog"
    @close="closeNewCodingDialog"
    cancel-text="Cancel"
    @cancel-clicked="closeNewCodingDialog"
    ok-text="Add"
    class="new-send-dialog new-coding-dialog"
    >
    <NewCoding />
  </BaseDialog>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import CodingTable from '@/components/TheCoding/CodingTable.vue'
import BaseDialog from '@/components/TheDialog/BaseDialog.vue'
import NewCoding from '@/components/TheCoding/NewCoding.vue'
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
const showNewCodingDialog = ref(false)
const closeNewCodingDialog = () => {
  showNewCodingDialog.value = false
}
const openNewCodingDialog = () => {
  showNewCodingDialog.value = true
}
</script>

<style scoped>

</style>