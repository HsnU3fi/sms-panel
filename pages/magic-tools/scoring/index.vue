<template>
  <BaseLayout class="dashboard recieve">
    <div class="action-bar-table">
      <button
          @click="isNewScoringVisible = true"
          type="button"
          class="manage-group mb-4"
      >
        New Scoring
      </button>
    </div>

      <Table />


    <BaseDialog
        :title="'New Scoring'"
        :isDialogOpen="isNewScoringVisible"
        okText="Add"
        cancelText="Cancel"
        class="base-modal"
        @close="isNewScoringVisible = false"
        @cancelClicked="isNewScoringVisible = false"
    >
      <BodyModal />
    </BaseDialog>


  </BaseLayout>
</template>





<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import Table from "@/components/TheMagicTools/Scoring/Table.vue";
import BodyModal from "@/components/TheMagicTools/Scoring/BodyNewScoringModal.vue";

import {ref} from "vue";


const isNewScoringVisible = ref(false);

</script>

