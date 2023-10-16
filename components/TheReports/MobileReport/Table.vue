<template>
  <section class="mobile-reports-table">
  <el-table v-if="tableData.length"
            ref="multipleTable"  @selection-change="handleSelectionChange" :data="tableData" class="table w-100 services-coding-table">
    <el-table-column
        type="selection"
        :width="multipleSelection.length ? 10 : 60">
    </el-table-column>
    <el-table-column
        width="50"
        v-if="multipleSelection.length"
    >
      <template #header="scope">
        <p class="table-selected-counter">
        {{ multipleSelection.length }} SMS Selected
        </p>
      </template>
    </el-table-column>
    <el-table-column
        property="order"
        :label="multipleSelection.length ? '' : 'order'"
        width="70"
    ></el-table-column>

    <el-table-column
        show-overflow-tooltip
        width="100"
        property="sms_type"
        :label="multipleSelection.length ? '' : 'SMS Type'"
    ></el-table-column>
    <el-table-column
        property="sms"
        :label=" multipleSelection.length ? '' : 'SMS'"
    ></el-table-column>
    <el-table-column
        property="time"
        :label=" multipleSelection.length ? '' : 'Time'"
    ></el-table-column>
    <el-table-column
        property="phone_number"
        :label="multipleSelection.length ? '' : 'Phone Number'"
    >
    </el-table-column>
    <el-table-column
        property="sms_number"
        :label="multipleSelection.length ? '' : 'SMS Number'"
    >
    </el-table-column>
    <el-table-column
        property="credit"
        :label="multipleSelection.length ? '' : 'Credit ($)'"
    >
    </el-table-column>
    <el-table-column
        property="status"
        :label="multipleSelection.length ? '' : 'Status'"
    >
      <template #header="scope">
      <section class="table-options" v-if="multipleSelection.length">
        <button class="export">
          <Icon name="direct-send" />
          Export Excel
        </button>
      </section>
        <template v-else>Status</template>
      </template>
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
    order: 1,
    sms_type: "TestSendSMS",
    sms: 'Enter the code 15741 to enter the site.',
    time: '2023/04/18 10:30:04',
    phone_number: '6473212477',
    sms_number: '6473212477',
    credit: '959$',
    status: 'Active',
  },
  {
    order: 2,
    sms_type: "TestSendSMS",
    sms: 'Enter the code 15741 to enter the site.',
    time: '2023/04/18 10:30:04',
    phone_number: '6473212477',
    sms_number: '6473212477',
    credit: '959$',
    status: 'Active',
  },
  {
    order: 3,
    sms_type: "TestSendSMS",
    sms: 'Enter the code 15741 to enter the site.',
    time: '2023/04/18 10:30:04',
    phone_number: '6473212477',
    sms_number: '6473212477',
    credit: '959$',
    status: 'Active',
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
