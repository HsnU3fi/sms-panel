<template>
  <el-table
    ref="multipleTableRef"
    :data="test"
    :class="multipleSelection.length ? 'expanded' : ''"
    class="table base-selction-table w-100"
    @selection-change="handleSelectionChange"
    v-if="tableData.length"
  >
    <el-table-column property="order" label="order"
      ><template #header v-if="multipleSelection.length">
        <div class="d-flex align-items-center">
          {{ multipleSelection.length }} SMS Selected
        </div>
      </template></el-table-column
    >
    <el-table-column property="Tittle" label="Tittle"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="StartDate" label="Start Date" show-overflow-tooltip
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="EndDate" label="End Date"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Keyword" label="Keyword"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Expiration" label="Expiration"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Status" label="Status"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column width="20">
      <template #header v-if="multipleSelection.length">
        <div class="flex-row d-flex actions">
          <span class="d-flex align-items-center">
            <Icon name="printer" /> Print
          </span>
          <div class="divider"></div>
          <span class="d-flex align-items-center">
            <Icon name="upload" /> Export Excel
          </span>
          <div class="divider"></div>
          <span
            class="d-flex align-items-center pointer"
            @click="confirmSendSmsState.isDialogOpen = true"
          >
            <Icon name="message-blue" /> Send SMS
          </span>
        </div>
      </template>
      <template #default="scope">
        <el-dropdown placement="left">
          <button class="none">
            <Icon name="dots" />
          </button>
          <template #dropdown>
            <el-dropdown-menu>

              <el-dropdown-item @click="confirmReplyState.isDialogOpen = true"
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
import { ref, computed } from "vue";
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
    Tittle: "Wellcome to store",
    StartDate: "12:56 2023/5/19",
    EndDate: "12:56 2023/5/19",
    Keyword: "test1245",
    Expiration: "3 Hour",
    Status: "Active",
  },
  {
    order: 2,
    Tittle: "Wellcome to store",
    StartDate: "12:56 2023/5/19",
    EndDate: "12:56 2023/5/19",
    Keyword: "test1245",
    Expiration: "3 Hour",
    Status: "Active",
  },
  {
    order: 3,
    Tittle: "Wellcome to store",
    StartDate: "12:56 2023/5/19",
    EndDate: "12:56 2023/5/19",
    Keyword: "test1245",
    Expiration: "3 Hour",
    Status: "Active",
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
  confirmDeleteState.value.content =
    "Are you sure you want to delete the " +
    row.Username +
    " collection? Any elements connected to this collection will no longer be connected. Create a collection with the same name in the next 7 days to restore its content.";
  confirmDeleteState.value.isDialogOpen = true;
};
const deleteSelectionHandler = () => {
  tableData.value = tableData.value.filter(
    (data) => !multipleSelection.value.find((select) => select == data)
  );
  confirmMultipleDeleteState.value.isDialogOpen = false;
};
</script>
