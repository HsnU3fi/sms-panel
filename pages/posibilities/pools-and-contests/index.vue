<template>
  <BaseLayout class="dashboard employees">
    <div class="d-flex action-bar-table col-12 flex-column">
      <div class="d-flex justify-content-between align-items-center">
        <button type="button" @click="isNewPollsVisible = true">
          + Add New Pool
        </button>
      </div>
    </div>
    <PoolsAndContestsTable @showChart="isChartVisible = true" />

    <!-- add new poll modal  -->

    <BaseDialog
      :title="'Add a new poll'"
      :isDialogOpen="isNewPollsVisible"
      okText="Submit"
      cancelText="Cancel"
      class="medium-dialog base-modal"
      @close="isNewPollsVisible = false"
      @cancelClicked="isNewPollsVisible = false"
    >
      <AddNewPollsModal />
    </BaseDialog>

    <!-- chart modal  -->

    <BaseDialog
      title="Chart"
      :isDialogOpen="isChartVisible"
      class="medium-dialog base-modal"
      @close="isChartVisible = false"
    >
      <ChartModal />
    </BaseDialog>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import AdvanceSearchModal from "@/components/TheRecieve/AdvanceSearchModal.vue";
import PoolsAndContestsTable from "@/components/ThePoolsAndContests/PoolsAndContestsTable.vue";
import AddNewPollsModal from "@/components/ThePoolsAndContests/AddNewPollsModal.vue";
import ChartModal from "@/components/ThePoolsAndContests/ChartModal.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const isNewPollsVisible = ref(false);
const isAdvancedSearchVisible = ref(false);
const isChartVisible = ref(false);
const search = ref("");
const state = ref({
  folder: "",
});

//methods
</script>
