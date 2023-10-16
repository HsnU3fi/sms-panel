<template>
  <BaseLayout class="dashboard code-reader">
    <div class="d-flex action-bar-table col-12 flex-column">
      <div class="d-flex justify-content-between align-items-center">
        <button type="button" @click="isNewCodeReaderVisible = true">
          + New code reader
        </button>
      </div>
    </div>
    <CodeReaderTable
      @showCodeModal="isShowCodeModalVisible = true"
      @addCodeModal="isAddCodeModalVisible = true"
      @showAnswerModal="isShowAnswerModalVisible = true"
    />

    <!-- add new code reader -->

    <BaseDialog
      title="Add New code reader"
      :isDialogOpen="isNewCodeReaderVisible"
      okText="Submit"
      cancelText="Cancel"
      class="medium-dialog base-modal"
      @close="isNewCodeReaderVisible = false"
      @cancelClicked="isNewCodeReaderVisible = false"
    >
      <AddNewCodeReader />
    </BaseDialog>

    <!-- add code modal  -->

    <BaseDialog
      title="Add Codes"
      :isDialogOpen="isAddCodeModalVisible"
      okText="Add"
      cancelText="Cancel"
      class="medium-dialog base-modal"
      @close="isAddCodeModalVisible = false"
      @cancelClicked="isAddCodeModalVisible = false"
    >
      <AddCodeModal />
    </BaseDialog>

    <!-- show code modal  -->

    <BaseDialog
      title="Show Codes"
      :isDialogOpen="isShowCodeModalVisible"
      class="semi-large-modal"
      @close="isShowCodeModalVisible = false"
    >
      <ShowCodeModal />
    </BaseDialog>

    <!-- show ansert modal  -->

    <BaseDialog
      title="Show Answers"
      :isDialogOpen="isShowAnswerModalVisible"
      class="semi-large-modal"
      @close="isShowAnswerModalVisible = false"
    >
      <ShowAnswerModal />
    </BaseDialog>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import CodeReaderTable from "@/components/TheCodeReader/CodeReaderTable.vue";
import AddNewCodeReader from "@/components/TheCodeReader/AddNewCodeReader.vue";
import AddCodeModal from "@/components/TheCodeReader/AddCodeModal.vue";
import ShowCodeModal from "@/components/TheCodeReader/ShowCodeModal.vue";
import ShowAnswerModal from "@/components/TheCodeReader/ShowAnswerModal.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const isNewCodeReaderVisible = ref(false);
const isShowCodeModalVisible = ref(false);
const isAddCodeModalVisible = ref(false);
const isShowAnswerModalVisible = ref(false);

//methods
</script>
