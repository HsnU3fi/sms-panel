<template>
  <BaseLayout class="dashboard recieve">
    <div class="action-bar-table">
      <button
          @click="isNewSMSSecretaryVisible = true"
          type="button"
          class="manage-group mb-4"
      >
        New SMS Secretary
      </button>
    </div>

      <Table />


    <BaseDialog
        :title="'New SMS Secretary'"
        :isDialogOpen="isNewSMSSecretaryVisible"
        okText="Add"
        cancelText="Cancel"
        class="base-modal"
        @close="isNewSMSSecretaryVisible = false"
        @cancelClicked="isNewSMSSecretaryVisible = false"
    >
      <BodyModal />
    </BaseDialog>


  </BaseLayout>
</template>





<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import Table from "@/components/TheMagicTools/SMSSecretary/Table.vue";
import BodyModal from "@/components/TheMagicTools/SMSSecretary/BodyNewSMSSecretaryModal.vue";

import {ref} from "vue";


const isNewSMSSecretaryVisible = ref(false);

</script>

