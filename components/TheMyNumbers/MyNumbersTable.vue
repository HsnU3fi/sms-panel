<template>
  <el-table
    ref="multipleTableRef"
    :data="test"
    :class="multipleSelection.length ? 'expanded' : ''"
    class="table base-selction-table w-100"
    @selection-change="handleSelectionChange"
    v-if="tableData.length"
  >
    <el-table-column type="selection"></el-table-column>

    <el-table-column property="order" label="order"
      ><template #header v-if="multipleSelection.length">
        <div class="d-flex align-items-center">
          {{ multipleSelection.length }} SMS Selected
        </div>
      </template></el-table-column
    >
    <el-table-column property="PhoneNumber" label="PhoneNumber"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Group" label="Group"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Link" label="Link"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Type" label="Type"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="SuccessfulSend" label="SuccessfulSend"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="FailedSend" label="FailedSend"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Recive" label="Recive"
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
        </div>
      </template>
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
    :state="confirmMultipleDeleteState"
    @confirm="deleteSelectionHandler"
    @cancel="confirmMultipleDeleteState.isDialogOpen = false"
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
    PhoneNumber: "+15864984198",
    Group: "Send to Canada",
    Link: "TW-LINK",
    Type: "private",
    SuccessfulSend: 0,
    FailedSend: 8,
    Recive: 0,
    Status: "Active",
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
  confirmDeleteState.value.isDialogOpen = true;
};
const deleteSelectionHandler = () => {
  tableData.value = tableData.value.filter(
    (data) => !multipleSelection.value.find((select) => select == data)
  );
  confirmMultipleDeleteState.value.isDialogOpen = false;
};
</script>
