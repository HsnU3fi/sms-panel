<template>
  <el-table
      ref="multipleTableRef"
      :data="test"
      :class="multipleSelection.length ? 'expanded' : ''"
      class="table w-100 base-selction-table"
      @selection-change="handleSelectionChange"
      v-if="tableData.length"
  >
    <el-table-column type="selection"></el-table-column>

    <el-table-column property="order" label="order">
      <template #header v-if="multipleSelection.length">
      <div class="d-flex align-items-center">
        {{ multipleSelection.length }} SMS Selected
      </div>
    </template></el-table-column
    >
    <el-table-column property="Type" label="Type"
    ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Tarrif" label="Tarrif" show-overflow-tooltip
    ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Amount" label="Amount"
    ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="RemainingCredit" label="Remaining credit"
    ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="currency" label="currency"
    ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Date" label="Date"
    ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Description" label="Description"
    ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Module" label="Module"
    ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>

    <el-table-column width="20">
      <template #header v-if="multipleSelection.length">
        <div class="flex-row d-flex actions">
          <span class="d-flex">
            <Icon name="upload" /> Export Excel
          </span>
        </div>
      </template>
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
    order: 1,
    Type: 'Send SMS',
    Tarrif: 'Package 1',
    Amount: '-0.0079',
    RemainingCredit: '9.9368',
    currency: '$',
    Date: '12:56 2023/5/19',
    Description: 'Send SMS to 1 number',
    Module: 'WebServiceSendSms',
  },
  {
    order: 2,
    Type: 'Send SMS',
    Tarrif: 'Package 1',
    Amount: '-0.0079',
    RemainingCredit: '9.9368',
    currency: '$',
    Date: '12:56 2023/5/19',
    Description: 'Send SMS to 1 number',
    Module: 'WebServiceSendSms',
  },
  {
    order: 3,
    Type: 'Send SMS',
    Tarrif: 'Package 1',
    Amount: '-0.0079',
    RemainingCredit: '9.9368',
    currency: '$',
    Date: '12:56 2023/5/19',
    Description: 'Send SMS to 1 number',
    Module: 'WebServiceSendSms',
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
