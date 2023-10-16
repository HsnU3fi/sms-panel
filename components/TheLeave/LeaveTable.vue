<template>
  <el-table
    ref="multipleTableRef"
    :data="test"
    :class="multipleSelection.length ? 'expanded' : ''"
    class="table w-100 leave-table"
    @selection-change="handleSelectionChange"
    v-if="tableData.length"
  >
    <el-table-column property="order" label="order"></el-table-column>
    <el-table-column property="Type" label="Type"></el-table-column>
    <el-table-column property="Title" label="Title"></el-table-column>
    <el-table-column property="Keyword" label="Keyword"></el-table-column>
    <el-table-column
      property="Leaveformat"
      label="Leave format"
    ></el-table-column>
    <el-table-column property="Accepted" label="Accepted">
      <template #default="scope"
        ><a href="javascript:void(0)" @click="showAccepted(scope.$index)">{{
          scope.row.Accepted
        }}</a></template
      >
    </el-table-column>
    <el-table-column property="notconfirmed" label="not confirmed">
      <template #default="scope"
        ><a href="javascript:void(0)" @click="showNotConfirmed(scope.$index)">{{
          scope.row.notconfirmed
        }}</a></template
      >
    </el-table-column>
    <el-table-column property="waiting" label="waiting">
      <template #default="scope"
        ><a href="javascript:void(0)" @click="showWaiting(scope.$index)">{{
          scope.row.waiting
        }}</a></template
      >
    </el-table-column>
    <el-table-column property="Status" label="Status"></el-table-column>
    <el-table-column width="20">
      <template #default="scope">
        <el-dropdown placement="left">
          <button class="none">
            <Icon name="dots" />
          </button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleDelete(scope.$index, scope.row)"
                ><Icon name="edit" /> Edit</el-dropdown-item
              >
              <el-dropdown-item @click="deleteRow(scope.row)"
                ><Icon name="trash" /> Delete</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown></template
      >
    </el-table-column>
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
  <ConfirmModal
    :state="confirmSendSmsState"
    @confirm="confirmSendSmsState.isDialogOpen = false"
    @cancel="confirmSendSmsState.isDialogOpen = false"
  />
</template>

<script setup>
import ConfirmModal from "@/components/TheConfirmModal/ConfirmModal.vue";
import NoData from "@/components/TheEmptyTable/NoData.vue";
import Pagination from "@/components/ThePagination/Pagination.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref, computed, defineEmits } from "vue";
import { ElTable } from "element-plus";

//state

const itemPerPage = ref(5);
const currentPage = ref(1);
const multipleTableRef = ref();
const multipleSelection = ref([]);
const stagedItemToEdit = ref(null);
const tableData = ref([
  {
    order: 1,
    Type: "Daily",
    Title: "Test1",
    Keyword: "Test1",
    Leaveformat: "@start day@end day",
    Accepted: "Show (0)",
    notconfirmed: "Show (0)",
    waiting: "Show (0)",
    Status: "Deactive",
  },
  {
    order: 1,
    Type: "Daily",
    Title: "Test1",
    Keyword: "Test1",
    Leaveformat: "@start day@end day",
    Accepted: "Show (0)",
    notconfirmed: "Show (0)",
    waiting: "Show (0)",
    Status: "Deactive",
  },
  {
    order: 1,
    Type: "Daily",
    Title: "Test1",
    Keyword: "Test1",
    Leaveformat: "@start day@end day",
    Accepted: "Show (0)",
    notconfirmed: "Show (0)",
    waiting: "Show (0)",
    Status: "Deactive",
  },
  {
    order: 1,
    Type: "Daily",
    Title: "Test1",
    Keyword: "Test1",
    Leaveformat: "@start day@end day",
    Accepted: "Show (0)",
    notconfirmed: "Show (0)",
    waiting: "Show (0)",
    Status: "Deactive",
  },
]);
const confirmDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete collection?",
  content: "Are you sure?",
});
const confirmSendSmsState = ref({
  type: "primary",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Send SMS",
  content: "Are you sure to send messages to these contacts?",
});
const confirmMultipleDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete message",
  content: `Are you sure to delete ${multipleSelection.value.length} message?`,
});
const stagedItemToDelete = ref(null);

// computed

const test = computed(() => {
  const trimStart = (currentPage.value - 1) * itemPerPage.value;
  const trimEnd = trimStart + itemPerPage.value;
  return tableData.value.slice(trimStart, trimEnd);
});

//emits

const emit = defineEmits("showAccepted", "showNotConfirmed", "showWaiting");

//methods

const handleSelectionChange = (val) => {
  multipleSelection.value = val;
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
const showAccepted = (index) => {
  console.log(index);
  emit("showAccepted", "index");
};
const showNotConfirmed = (index) => {
  console.log(index);
  emit("showNotConfirmed", "index");
};
const showWaiting = (index) => {
  console.log(index);
  emit("showWaiting", "index");
};
</script>
