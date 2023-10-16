<template>
  <el-table
      ref="multipleTableRef"
      :data="test"
      :class="multipleSelection.length ? 'expanded' : ''"
      class="table w-100 base-selction-table"
      @selection-change="handleSelectionChange"
      v-if="tableData.length"
  >
    <el-table-column property="Group" label="Group"
    ><template #header v-if="multipleSelection.length"></template>
    </el-table-column
    >
    <el-table-column property="DomesticShipping" label="Domestic Shipping Price ($)">
      <template #header v-if="multipleSelection.length"> </template>
    </el-table-column>
    <el-table-column property="ForeignShipping" label="Foreign shipping price ($)"
    ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="DomesticReceiving" label="Domestic receiving price ($)"
    ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="ForeignReceiving" label="Foreign receiving price ($)"
    ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>

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
    Group: 'Send to Canada',
    DomesticShipping: '0.0079',
    ForeignShipping: "0.0079",
    DomesticReceiving: "0.0079",
    ForeignReceiving: "0.0079",
  },
  {
    Group: 'Send to Canada',
    DomesticShipping: '0.0079',
    ForeignShipping: "0.0079",
    DomesticReceiving: "0.0079",
    ForeignReceiving: "0.0079",
  },
  {
    Group: 'Send to Canada',
    DomesticShipping: '0.0079',
    ForeignShipping: "0.0079",
    DomesticReceiving: "0.0079",
    ForeignReceiving: "0.0079",
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
