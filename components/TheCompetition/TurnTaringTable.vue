<template>
  <el-table v-if="tableData.length" ref="multipleTableRef" :data="tableData" class="table w-100">
    <el-table-column
        property="order"
        label="order"
        width="70"
    ></el-table-column>

    <el-table-column
        show-overflow-tooltip
        width="100"
        property="Tittle"
        label="Tittle"
    ></el-table-column>
    <el-table-column
        property="StartDate"
        label="Start Date"
    ></el-table-column>
    <el-table-column
        property="EndDate"
        label="End  Date"
    ></el-table-column>
    <el-table-column
        property="ExpirationDate"
        label="Expiration"
    ></el-table-column>
    <el-table-column
        property="Status"
        label="Status"
    ></el-table-column>

    <el-table-column width="20">
      <template #default="scope">
        <el-dropdown placement="left">
          <button class="none">
            <Icon name="dots" />
          </button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handlerInsertDialog">
                <Icon name="sun" />
                Days
              </el-dropdown-item>
              <el-dropdown-item @click="handlerAnswerDialog(scope.$index, scope.row)">
                <Icon name="calendar" />
                Calendar
              </el-dropdown-item>
              <el-dropdown-item @click="handleDelete(scope.$index, scope.row)">
                <Icon name="edit" />
                Edite
              </el-dropdown-item>
              <el-dropdown-item @click="handleDelete(scope.$index, scope.row)">
                <Icon name="trash" />
                Delete
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown></template>
    </el-table-column>
  </el-table>
  <Pagination
      :total="tableData.length"
      v-if="tableData.length"
      :currentPage="currentPage"
      :itemPerPage="itemPerPage"
      @itemPerPage="itemPerPage = $event"
      @currentPage="currentPage = $event"
  />
  <NoData v-else />
  <BaseDialog
    :is-dialog-open="showInsertDayDialog"
    @close="closeInsertDialog"
    title="Inserting New Day"
    class="new-send-dialog Inserting-New-Day"
    >
    <InsertingNewDay />
  </BaseDialog>
</template>

<script setup>
import Pagination from "@/components/ThePagination/Pagination.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
import { ElTable } from "element-plus";

import NoData from "@/components/TheEmptyTable/NoData.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog";
import InsertingNewDay from "./InsertDayDialog";
//state

const itemPerPage = ref(5);
const currentPage = ref(1);
const tableData = ref([
  {
    order: 1,
    Tittle: "Wellcome to store",
    StartDate: '12:56 2023/5/19',
    EndDate: '12:56 2023/5/19',
    ExpirationDate: '3 Hour',
    Status: 'Active',
  },
  {
    order: 1,
    Tittle: "Wellcome to store",
    StartDate: '12:56 2023/5/19',
    EndDate: '12:56 2023/5/19',
    ExpirationDate: '3 Hour',
    Status: 'Active',
  },
  {
    order: 1,
    Tittle: "Wellcome to store",
    StartDate: '12:56 2023/5/19',
    EndDate: '12:56 2023/5/19',
    ExpirationDate: '3 Hour',
    Status: 'Active',
  },
]);
const multipleTableRef = ref();
const showInsertDayDialog = ref(false)


//computed

const test = computed(() => {
  const trimStart = (currentPage.value - 1) * itemPerPage.value;
  const trimEnd = trimStart + itemPerPage.value;
  return tableData.value.slice(trimStart, trimEnd);
});

//methods
const handlerInsertDialog = () => {
  showInsertDayDialog.value = true
}
const closeInsertDialog = () => {
  showInsertDayDialog.value = false
}
</script>
