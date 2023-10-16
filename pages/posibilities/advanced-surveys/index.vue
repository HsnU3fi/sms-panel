<template>
  <BaseLayout class="dashboard advanced-surveys">
    <div class="d-flex action-bar-table col-12 flex-column">
      <div class="d-flex justify-content-between align-items-center">
        <button type="button" @click="isNewPollsVisible = true">
          + Add New Pool
        </button>
      </div>
    </div>
    <AdvancedSurveyTable @showSurveyModal="isSurveyOptionVisible = true" />

    <!-- add new poll -->

    <BaseDialog
      :title="'Add a new poll'"
      :isDialogOpen="isNewPollsVisible"
      okText="Submit"
      cancelText="Cancel"
      class="medium-dialog base-modal"
      @close="isNewPollsVisible = false"
      @cancelClicked="isNewPollsVisible = false"
    >
      <AddNewPollModal />
    </BaseDialog>

    <!-- survey list option  -->

    <BaseDialog
      title="Options"
      :isDialogOpen="isSurveyOptionVisible"
      okText="Done"
      class="manage-group-dialog"
      @close="isSurveyOptionVisible = false"
      @cancelClicked="isSurveyOptionVisible = false"
    >
      <SurveyListOptionModal />
    </BaseDialog>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import AdvanceSearchModal from "@/components/TheRecieve/AdvanceSearchModal.vue";
import AdvancedSurveyTable from "@/components/TheAdvancedSurvey/AdvancedSurveyTable.vue";
import AddNewPollModal from "@/components/TheAdvancedSurvey/AddNewPollModal.vue";
import SurveyListOptionModal from "@/components/TheAdvancedSurvey/SurveyListOptionModal.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const isNewPollsVisible = ref(false);
const isSurveyOptionVisible = ref(false);
const isAdvancedSearchVisible = ref(false);
const search = ref("");
const state = ref({
  folder: "",
});

//methods
</script>
