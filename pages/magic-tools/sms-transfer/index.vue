<template>
  <BaseLayout class="dashboard recieve">
    <div class="action-bar-table">
      <button
          @click="isSendNewFileVisible = true"
          type="button"
          class="manage-group mb-4"
      >
        Insert New SMS Transfer
      </button>
    </div>

      <Table />


    <BaseDialog
        :title="'Insert New SMS Transfer'"
        :isDialogOpen="isSendNewFileVisible"
        okText="Add"
        cancelText="Cancel"
        class="base-modal"
        @close="isSendNewFileVisible = false"
        @cancelClicked="isSendNewFileVisible = false"
    >
      <BodyModal />
    </BaseDialog>


  </BaseLayout>
</template>





<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import Table from "@/components/TheMagicTools/SMSTransfer/Table.vue";
import BodyModal from "@/components/TheMagicTools/SMSTransfer/BodyNewSMSModal.vue";

import {ref} from "vue";


const isSendNewFileVisible = ref(false);

</script>

