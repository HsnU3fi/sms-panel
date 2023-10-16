<template>
  <BaseLayout class="dashboard posibility-contact">
    <div class="action-bar-table">
      <button
          @click="isSendNewFileVisible = true"
          type="button"
          class="manage-group mb-4"
      >
        Send New File
      </button>

      <Table />

    </div>

    <BaseDialog
        :title="'Send New File'"
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
import Table from "@/components/TheMagicTools/CatalogEmail/Table.vue";
import BodyModal from "@/components/TheMagicTools/CatalogEmail/BodySendFileModal.vue";

import {ref} from "vue";


const isSendNewFileVisible = ref(false);

</script>

