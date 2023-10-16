<template>
  <el-table
    ref="multipleTableRef"
    :data="test"
    :class="multipleSelection.length ? 'expanded' : ''"
    class="table w-100"
    @selection-change="handleSelectionChange"
    v-if="tableData.length"
  >
    <!-- <el-table-column type="selection"></el-table-column> -->

    <el-table-column
      property="order"
      label="order"
      width="70"
    ></el-table-column>

    <el-table-column property="Title" label="Title"></el-table-column>
    <el-table-column property="SMS" label="SMS"></el-table-column>
    <el-table-column
      property="SendTime"
      label="SendTime"
      show-overflow-tooltip
      width="100"
    ></el-table-column>
    <el-table-column property="Status" label="Status"></el-table-column>
    <el-table-column width="20">
      <template #default="scope">
        <el-dropdown placement="left">
          <button class="none">
            <Icon name="dots" />
          </button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item><Icon name="edit" /> Edit</el-dropdown-item>
              <el-dropdown-item @click="handleFunction(scope.$index, scope.row)"
                ><Icon name="status-up" /> Function</el-dropdown-item
              >
              <el-dropdown-item @click="deleteRow(scope.row)"
                ><Icon name="trash" /> Delete</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown></template
      ></el-table-column
    >
  </el-table>
  <Pagination
    v-if="tableData.length"
    :total="tableData.length"
    :currentPage="currentPage"
    :itemPerPage="itemPerPage"
    @itemPerPage="itemPerPage = $event"
    @currentPage="currentPage = $event"
  />
  <NoData v-if="tableData.length == 0" />
  <ConfirmModal
    :state="confirmDeleteState"
    @confirm="deleteItemHandler"
    @cancel="confirmDeleteState.isDialogOpen = false"
  />
  <BaseDialog
    :title="'Function'"
    :isDialogOpen="isFunctionDialogVisible"
    class="large-dialog"
    @close="handleFunctionClose"
    ><FunctionTable
  /></BaseDialog>
</template>

<script setup>
import ConfirmModal from "@/components/TheConfirmModal/ConfirmModal.vue";
import NoData from "@/components/TheEmptyTable/NoData.vue";
import Pagination from "@/components/ThePagination/Pagination.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import FunctionTable from "@/components/TheOccasionalSend/FunctionTable.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref, computed } from "vue";
import { ElTable } from "element-plus";

//state

const itemPerPage = ref(5);
const currentPage = ref(1);
const tableData = ref([
  {
    order: 1,
    Title: "Test2241",
    SMS: "Smart Send",
    SendTime: "12:56 2023/5/19",
    Status: "Active",
  },
  {
    order: 1,
    Title: "Test2241",
    SMS: "Smart Send",
    SendTime: "12:56 2023/5/19",
    Status: "Active",
  },
]);
const multipleTableRef = ref();
const multipleSelection = ref([]);
const stagedItemToEdit = ref(null);
const isFunctionDialogVisible = ref(false);
const confirmDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete message",
  content: "Are you sure?",
});
const stagedItemToDelete = ref(null);

//computed

const test = computed(() => {
  const trimStart = (currentPage.value - 1) * itemPerPage.value;
  const trimEnd = trimStart + itemPerPage.value;
  return tableData.value.slice(trimStart, trimEnd);
});

//methods

const handleSelectionChange = (val) => {
  multipleSelection.value = val;
};
const handleFunction = () => {
  isFunctionDialogVisible.value = true;
};
const handleFunctionClose = () => {
  isFunctionDialogVisible.value = false;
};
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
