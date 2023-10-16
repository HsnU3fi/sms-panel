<template>
  <BaseLayout class="dashboard recieve">
    <div class="action-bar-table">
      <button
          @click="isNewSpecialListVisible = true"
          type="button"
          class="manage-group mb-4"
      >
        New Special list
      </button>
    </div>

      <Table />


    <BaseDialog
        :title="'New Special list'"
        :isDialogOpen="isNewSpecialListVisible"
        okText="Add"
        cancelText="Cancel"
        class="base-modal"
        @close="isNewSpecialListVisible = false"
        @cancelClicked="isNewSpecialListVisible = false"
    >
      <BodyModal />
    </BaseDialog>


  </BaseLayout>
</template>





<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import Table from "@/components/TheMagicTools/SpecialList/Table.vue";
import BodyModal from "@/components/TheMagicTools/SpecialList/BodyNewSpecialListModal.vue";

import {ref} from "vue";


const isNewSpecialListVisible = ref(false);

</script>

