<template>
  <BaseLayout class="dashboard employees">
    <div class="d-flex action-bar-table col-12 flex-column">
      <div class="d-flex justify-content-between align-items-center">
        <button type="button" @click="isAddNewLeaveVisible = true">
          + Add New Leave
        </button>
      </div>
    </div>
    <LeaveTable
      @showAccepted="
        isShowCountModalVisible = true;
        modalType = 'accepted';
      "
      @showNotConfirmed="
        isShowCountModalVisible = true;
        modalType = 'notConfirmed';
      "
      @showWaiting="
        isShowCountModalVisible = true;
        modalType = 'waiting';
      "
    />

    <!-- add new leave -->

    <BaseDialog
      title="Add New Leave"
      :isDialogOpen="isAddNewLeaveVisible"
      okText="Submit"
      cancelText="Cancel"
      class="medium-dialog base-modal"
      @close="isAddNewLeaveVisible = false"
    >
      <AddNewLeave />
    </BaseDialog>

    <!-- show Count -->

    <BaseDialog
      :title="'Show ' + modalType"
      :isDialogOpen="isShowCountModalVisible"
      class="semi-large-modal"
      @close="isShowCountModalVisible = false"
    >
    <NoData />
    </BaseDialog>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import LeaveTable from "@/components/TheLeave/LeaveTable.vue";
import AddNewLeave from "@/components/TheLeave/AddNewLeave.vue";
import NoData from "@/components/TheEmptyTable/NoData.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const isAddNewLeaveVisible = ref(false);
const isShowCountModalVisible = ref(false);
const modalType = ref("");

//methods
</script>
