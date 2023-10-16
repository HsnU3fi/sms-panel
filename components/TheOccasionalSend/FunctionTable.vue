<template>
  <el-table ref="multipleTableRef" :data="test" class="table w-100">
    <el-table-column
      property="ReportCode"
      label="ReportCode"
      width="70"
    ></el-table-column>

    <el-table-column
      show-overflow-tooltip
      width="100"
      property="ReportDate"
      label="ReportDate"
    ></el-table-column>
    <el-table-column
      property="Submissions"
      label="Submissions"
    ></el-table-column>
    <el-table-column
      property="SuccessSend"
      label="SuccessSend"
    ></el-table-column>
    <el-table-column property="FailedSend" label="FailedSend"></el-table-column>
    <el-table-column property="Description" label="Description"></el-table-column>
    <el-table-column property="Reciver" label="Reciver"></el-table-column>
  </el-table>
  <Pagination
    :total="tableData.length"
    :currentPage="currentPage"
    :itemPerPage="itemPerPage"
    @itemPerPage="itemPerPage = $event"
    @currentPage="currentPage = $event"
  />
</template>

<script setup>
import Pagination from "@/components/ThePagination/Pagination.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
import { ElTable } from "element-plus";

//state

const itemPerPage = ref(5);
const currentPage = ref(1);
const tableData = ref([
  {
    ReportCode: 1,
    ReportDate: "12:56 2023/5/19",
    Submissions: 0,
    SuccessSend: 1,
    FailedSend: 0,
    Description: "-",
    Reciver: "+68412134",
  },
  {
    ReportCode: 1,
    ReportDate: "12:56 2023/5/19",
    Submissions: 0,
    SuccessSend: 1,
    FailedSend: 0,
    Description: "-",
    Reciver: "+68412134",
  },
  {
    ReportCode: 1,
    ReportDate: "12:56 2023/5/19",
    Submissions: 0,
    SuccessSend: 1,
    FailedSend: 0,
    Description: "-",
    Reciver: "+68412134",
  },
]);
const multipleTableRef = ref();

//computed

const test = computed(() => {
  const trimStart = (currentPage.value - 1) * itemPerPage.value;
  const trimEnd = trimStart + itemPerPage.value;
  return tableData.value.slice(trimStart, trimEnd);
});

//methods
</script>
