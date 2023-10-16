<template>
  <BaseLayout class="dashboard employees">
    <div class="d-flex action-bar-table col-12 flex-column">
      <div class="d-flex justify-content-between align-items-center">
        <button type="button" @click="isNewNumbersVisible = true">
          + Add New Numbers
        </button>
      </div>
    </div>
    <el-skeleton style="width: 100%;" :rows="5" :loading="isLoading" animated>
      <NumbersTable  :data="tableData"/>


      <AddNewNumbers
          :title="'Add New Numbers'"
          :isDialogOpen="isNewNumbersVisible"
          okText="Add"
          cancelText="Cancel"
          class="medium-dialog base-modal"
          @close="isNewNumbersVisible = false"
          @cancelClicked="isNewNumbersVisible = false"/>
    </el-skeleton>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import Loading from "@/components/TheLoading/Loading.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import AdvanceSearchModal from "@/components/TheRecieve/AdvanceSearchModal.vue";
import NumbersTable from "@/components/TheNumbers/NumbersTable.vue";
import AddNewNumbers from "@/components/TheNumbers/AddNewNumbers.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import {useNumbersStore} from "../../../store/users";

import {ref} from "vue";
const numbersStore = useNumbersStore()
let isLoading = ref(true)
let tableData = ref([]);
//======================================================================================================================

const getNumbersApi = async () => {
  const result = await numbersStore.getNumbers(1)
  if (result.status === 200) {
    tableData.value = result.data
    isLoading.value = false
  } else {
    isLoading.value = false
  }
};
getNumbersApi()
//======================================================================================================================


const isNewNumbersVisible = ref(false);
const search = ref("");
const state = ref({
  folder: "",
});


//methods
</script>
