<template>
  <el-table
    ref="multipleTableRef"
    :data="test"
    :class="multipleSelection.length ? 'expanded' : ''"
    class="table w-100 base-selction-table"
    @selection-change="handleSelectionChange"
    v-if="tableData.length"
  >

    <el-table-column property="Tariffs" label="Tariffs" width="100"
      ><template #header v-if="multipleSelection.length">
        <div class="d-flex align-items-center">
          {{ multipleSelection.length }}
        </div>
      </template></el-table-column
    >
    <el-table-column property="From" label="From ($)">
      <template #header v-if="multipleSelection.length"> </template>
    </el-table-column>
    <el-table-column property="To" label="To ($)"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column width="100">
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
            @click="confirmMultipleDeleteState.isDialogOpen = true"
          >
            <Icon name="trash-blue" /> Delete
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
  <NoData v-if="tableData.length == 0" />

  <Pagination
    v-if="tableData.length"
    :total="tableData.length"
    :currentPage="currentPage"
    :itemPerPage="itemPerPage"
    @itemPerPage="itemPerPage = $event"
    @currentPage="currentPage = $event"
  />
  <ConfirmModal
    :state="confirmDeleteState"
    @confirm="deleteItemHandler"
    @cancel="confirmDeleteState.isDialogOpen = false"
  />
  <ConfirmModal
    :state="confirmMultipleDeleteState"
    @confirm="deleteSelectionHandler"
    @cancel="confirmMultipleDeleteState.isDialogOpen = false"
  />
  <ConfirmModal
    :state="confirmReplyState"
    @cancel="confirmReplyState.isDialogOpen = false"
  />
</template>

<script setup>
import Pagination from "@/components/ThePagination/Pagination.vue";
import ConfirmModal from "@/components/TheConfirmModal/ConfirmModal.vue";
import NoData from "@/components/TheEmptyTable/NoData.vue";
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
    Tariffs: 'Package1',
    From: '1',
    To: '10,000,000',
  },
  {
    Tariffs: 'Package1',
    From: '1',
    To: '10,000,000',
  },
  {
    Tariffs: 'Package1',
    From: '1',
    To: '10,000,000',
  },
]);
const confirmDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete message",
  content: "Are you sure?",
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
const confirmReplyState = ref({
  type: "primary",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Reply SMS",
  content: "Are you sure about sending SMS to selected users?",
});

//emits

const emit = defineEmits("openMoveModal");

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
const sliceSmsHandler = (index, count) => {
  tableData.value[index].SMS.count = count;
  return tableData.value[index].SMS.text.slice(0, count);
};
const handleMoveFolder = (x, y) => {
  emit("openMoveModal");
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
