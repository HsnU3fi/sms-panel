<template>
  <BaseLayout class="dashboard recieve">
    <div class="action-bar-table">
      <button
          @click="isNewSMSEmailVisible = true"
          type="button"
          class="manage-group mb-4"
      >
        New SMS Email
      </button>
    </div>

      <Table />


    <BaseDialog
        :title="'New SMS Email'"
        :isDialogOpen="isNewSMSEmailVisible"
        okText="Add"
        cancelText="Cancel"
        class="base-modal"
        @close="isNewSMSEmailVisible = false"
        @cancelClicked="isNewSMSEmailVisible = false"
    >
      <BodyModal />
    </BaseDialog>


  </BaseLayout>
</template>





<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import Table from "@/components/TheMagicTools/SMSEmail/Table.vue";
import BodyModal from "@/components/TheMagicTools/SMSEmail/BodyNewSMSEmailModal.vue";

import {ref} from "vue";


const isNewSMSEmailVisible = ref(false);

</script>

