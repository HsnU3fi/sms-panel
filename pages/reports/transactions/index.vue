<template>
  <BaseLayout class="dashboard employees">
    <div class="d-flex action-bar-table col-12 flex-column">
      <div class="d-flex justify-content-between align-items-center">
        <el-skeleton style="width: 100%;" :rows="6" :loading="isLoading" animated>

          <el-table
              ref="multipleTableRef"
              :data="tableData"
              class="table  w-100"
              v-if="tableData.length"
              @selection-change="handleSelectionChange"

          >
            <el-table-column property="id" label="Id"
            >
              <template #header v-if="multipleSelection.length">
              </template>
            </el-table-column>
            <el-table-column property="name" label="Name">
              <template #header v-if="multipleSelection.length"></template>
            </el-table-column>
            <el-table-column property="title" label="Title">
              <template #header v-if="multipleSelection.length"></template>
            </el-table-column>
            <el-table-column property="created_at" label="Created At">
              <template #header v-if="multipleSelection.length"></template>
            </el-table-column>


            <el-table-column width="20">
              <template #default="scope">
                <el-dropdown placement="left">
                  <button class="none">
                    <Icon name="dots"/>
                  </button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item @click="deleteRow(scope.row)"
                      >
                        <Icon name="trash"/>
                        Delete
                      </el-dropdown-item
                      >

                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </template
              >
            </el-table-column>


          </el-table>

          <NoData v-if="tableData.length == 0"/>
        </el-skeleton>
      </div>
    </div>
    <Pagination
        v-if="tableData.length"
        :total="totalPage"
        :currentPage="currentPage"
        :itemPerPage="itemPerPage"
        @changeHandler="getPermissionApi"
        @itemPerPage="itemPerPage = $event"
        @currentPage="currentPage = $event"
    />
    <ConfirmModal
        :state="confirmDeleteState"
        @confirm="deleteItemHandler"
        @cancel="confirmDeleteState.isDialogOpen = false"
    />
  </BaseLayout>
</template>

<script setup>

import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import Loading from "@/components/TheLoading/Loading.vue";
import ConfirmModal from "@/components/TheConfirmModal/ConfirmModal.vue";
import NoData from "@/components/TheUser/NoData.vue";
import Pagination from "@/components/ThePagination/Pagination.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import {ref} from "vue";
import {ElTable} from "element-plus";
import {useReportsStore} from "../../../store/reports";
//======================================================================================================================
//state
const router = useRouter();
const reportsStore = useReportsStore()
const isLoading = ref(true);
const itemPerPage = ref(2);
const totalPage = ref(2);
const currentPage = ref(1);
const multipleTableRef = ref();
const multipleSelection = ref([]);
const stagedItemToEdit = ref(null);
const tableData = ref([]);
const stagedItemToDelete = ref(null);
const confirmDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete Contact?",
  content: "Are you sure?",
});
//======================================================================================================================
//methods
const handleSelectionChange = (val) => {
  multipleSelection.value = val;
};
//======================================================================================================================
const getTransactionsApi = async (page) => {
  isLoading.value = true
  const result = await reportsStore.getTransactions(page)
  if (result.status === 200) {
    tableData.value = result.data.data
    currentPage.value = result.data.meta.current_page
    isLoading.value = false
  } else {
    isLoading.value = false
  }
}
getTransactionsApi(1)
//======================================================================================================================
const deleteItemHandler = () => {
  tableData.value = tableData.value.filter(
      (data) => data !== stagedItemToDelete.value
  );
  confirmDeleteState.value.isDialogOpen = false;
};
const deleteRow = (row) => {
  stagedItemToDelete.value = row;
  confirmDeleteState.value.isDialogOpen = true;
};
const deleteSelectionHandler = () => {
  tableData.value = tableData.value.filter(
      (data) => !multipleSelection.value.find((select) => select == data)
  );
  confirmMultipleDeleteState.value.isDialogOpen = false;
};

</script>
