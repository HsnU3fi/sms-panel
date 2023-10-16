<template>
  <BaseLayout class="dashboard recieve">
    <div
      class="d-flex action-bar-table col-12 flex-column"
      v-motion
      :initial="initial"
      :enter="enter"
      :delay="200"
    >
<!--      <div class="align-items-end d-flex g-20">-->
<!--        <section class="form-item pb-0">-->
<!--          <p class="label">Folder</p>-->
<!--          <el-select-->
<!--            v-model="state.folder"-->
<!--            class="select-box"-->
<!--            placeholder="Folder"-->
<!--            size="large"-->
<!--            id="Folder"-->
<!--          >-->
<!--            <el-option-->
<!--              v-for="folder in folderOptions"-->
<!--              :key="folder.value"-->
<!--              :label="folder.label"-->
<!--              :value="folder.value"-->
<!--            />-->
<!--          </el-select>-->
<!--        </section>-->
<!--        <button @click="isNewSendVisible = true">Manege Folder</button>-->
<!--      </div>-->
<!--      <el-divider />-->
      <div class="d-flex justify-content-between align-items-center">
        <h4/>
<!--        <el-input-->
<!--          v-model="search"-->
<!--          class="w-50 mw-0 search-field"-->
<!--          placeholder="Search"-->
<!--        >-->
<!--          <template #suffix-->
<!--            ><span class="filter" @click="isAdvancedSearchVisible = true"-->
<!--              ><Icon name="filter" /> </span-->
<!--          ></template>-->
<!--          <template #prefix><Icon name="search" /></template>-->
<!--        </el-input>-->
        <Icon name="refresh-blue" />
      </div>
    </div>

    <el-skeleton style="width: 100%;" :rows="5" :loading="isLoading" animated>
    <RecieveMessageTable  :data="tabe" @openMoveModal="handleMoveDialog" />
    </el-skeleton>
<!--    <BaseDialog-->
<!--      :title="'Advanced Search'"-->
<!--      :isDialogOpen="isAdvancedSearchVisible"-->
<!--      okText="Search"-->
<!--      cancelText="Cancel"-->
<!--      class="medium-dialog"-->
<!--      @close="isAdvancedSearchVisible = false"-->
<!--      @cancelClicked="isAdvancedSearchVisible = false"-->
<!--    >-->
<!--      <AdvanceSearchModal />-->
<!--    </BaseDialog>-->
<!--    <BaseDialog-->
<!--      :title="'Manege Folder'"-->
<!--      :isDialogOpen="isNewSendVisible"-->
<!--      class="medium-dialog large-modal"-->
<!--      @close="isNewSendVisible = false"-->
<!--    >-->
<!--      <ManageFolderModal />-->
<!--    </BaseDialog>-->
<!--    <BaseDialog-->
<!--      :title="'Move to Folder'"-->
<!--      okText="Done"-->
<!--      cancelText="Cancel"-->
<!--      :isDialogOpen="isMoveDialogVisible"-->
<!--      class="medium-dialog h-auto"-->
<!--      @close="isMoveDialogVisible = false"-->
<!--      @cancelClicked="isMoveDialogVisible = false"-->
<!--    >-->
<!--      <MoveFolderModal />-->
<!--    </BaseDialog>-->
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import AdvanceSearchModal from "@/components/TheRecieve/AdvanceSearchModal.vue";
import ManageFolderModal from "@/components/TheRecieve/ManageFolderModal.vue";
import MoveFolderModal from "@/components/TheRecieve/MoveFolderModal.vue";
import RecieveMessageTable from "@/components/TheRecieve/RecieveMessageTable.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
import {useReceivedStore} from "../../../store/messages";

//state

const isNewSendVisible = ref(false);
const isAdvancedSearchVisible = ref(false);
const isMoveDialogVisible = ref(false);
const search = ref("");
const state = ref({
  folder: "",
});
const folderOptions = [
  {
    value: "Send",
    label: "Send",
  },
  {
    value: "Recieve",
    label: "Recieve",
  },
];

//animation variables

const initial = {
  x: -50,
  opacity: 0,
  transition: {
    stiffness: 100,
  },
};
const enter = {
  x: 0,
  opacity: 1,
  transition: {
    stiffness: 100,
    ease: "easeInOut",
  },
};

//methods

const handleMoveDialog = () => {
  isMoveDialogVisible.value = !isMoveDialogVisible.value;
};


const receivedStore = useReceivedStore()
let isLoading = ref(true)
let tableData = ref([]);
const getReceiveApi = async () => {
  isLoading.value = true
  const result = await receivedStore.getReceives(1)
  if (result.status === 200) {
    tableData.value = "sasasa"
    isLoading.value = false
  } else {
    isLoading.value = false
  }
}
getReceiveApi()




</script>
