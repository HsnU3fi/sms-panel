<template>
  <section class="mobile-reports-table">
  <el-table v-if="tableData.length"
            ref="multipleTable"  :data="tableData" class="table w-100 services-coding-table">
    <el-table-column
        property="date"
        label="Date"
        width="70"
    ></el-table-column>

    <el-table-column
        show-overflow-tooltip
        width="100"
        property="all_sent"
        label="All sent"
    ></el-table-column>
    <el-table-column
        property="successful"
        label="Successful"
    ></el-table-column>
    <el-table-column
        property="unsuccessful"
        label="Unsuccessful"
    ></el-table-column>
    <el-table-column
        property="non_english"
        label="Non english"
    >
    </el-table-column>
    <el-table-column
        property="english"
        label="English"
    >
    </el-table-column>
    <el-table-column
        property="internal_numbers"
        label="Internal numbers"
    >
    </el-table-column>
    <el-table-column
        property="foreign_numbers"
        label="Foreign numbers"
    >
    </el-table-column>
    <el-table-column
        property="recieve"
        label="Receive"
    >
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
  </section>
</template>

<script setup>
import Pagination from "@/components/ThePagination/Pagination.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
import { ElTable } from "element-plus";

import NoData from "@/components/TheEmptyTable/NoData.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog";
//state

const itemPerPage = ref(5);
const currentPage = ref(1);
const tableData = ref([
  {
    date: '2023/5/19',
    all_sent: 1000,
    successful: 1000,
    unsuccessful: 0,
    non_english: 50,
    english: 950,
    internal_numbers: 1000,
    foreign_numbers: 0,
    recieve: 0,
  },
  {
    date: '2023/5/19',
    all_sent: 1000,
    successful: 1000,
    unsuccessful: 0,
    non_english: 50,
    english: 950,
    internal_numbers: 1000,
    foreign_numbers: 0,
    recieve: 0,
  },
]);
const multipleSelection = ref([])
const multipleTableRef = ref();
const showQuestionDialog = ref(false)
const showAnswerDialog = ref(false)
const showScoreDialog = ref(false)


//computed

const test = computed(() => {
  const trimStart = (currentPage.value - 1) * itemPerPage.value;
  const trimEnd = trimStart + itemPerPage.value;
  return tableData.value.slice(trimStart, trimEnd);
});

//methods
const handlerQuestionDialog = () => {
  showQuestionDialog.value = true
}
const closeQuestionDialog = () => {
  showQuestionDialog.value = false
}
const handlerAnswerDialog = () => {
  showAnswerDialog.value = true
}
const closeAnswerDialog = () => {
  showAnswerDialog.value = false
}
const handlerScoreDialog = () => {
  showScoreDialog.value = true
}
const closeScoreDialog = () => {
  showScoreDialog.value = false
}
const handleSelectionChange = (val) => {
  console.log('here')
  console.log(val)
  multipleSelection.value = val;
}
</script>
