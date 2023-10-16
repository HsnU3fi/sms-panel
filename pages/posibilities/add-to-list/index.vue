<template>
  <BaseLayout class="dashboard employees">
    <div class="d-flex action-bar-table col-12 flex-column">
      <div class="d-flex justify-content-between align-items-center">
        <button type="button" @click="isNewAddToListVisible = true">
          + New Add to list
        </button>
      </div>
    </div>
    <AddToListTable />

    <!-- add new poll modal  -->

    <BaseDialog
      title="Add to list"
      :isDialogOpen="isNewAddToListVisible"
      okText="Submit"
      class="medium-dialog base-modal"
      @close="isNewAddToListVisible = false"
    >
      <NewAddToListModal />
    </BaseDialog>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import AddToListTable from "@/components/TheAddToList/AddToListTable.vue";
import NewAddToListModal from "@/components/TheAddToList/NewAddToListModal.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const isNewAddToListVisible = ref(false);

//methods
</script>
