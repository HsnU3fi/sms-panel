<template>
  <section class="numbering-table">
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
        property="Tittle"
        :label="multipleSelection.length ? '' : 'Tittle'"
    ></el-table-column>
    <el-table-column
        property="StartDate"
        :label=" multipleSelection.length ? '' : 'Start Date'"
    ></el-table-column>
    <el-table-column
        property="EndDate"
        :label=" multipleSelection.length ? '' : 'End Date'"
    ></el-table-column>
    <el-table-column
        property="ExpirationDate"
        :label="multipleSelection.length ? '' : 'Expiration'"
    >

      <template #header="scope">
        <section class="table-options" v-if="multipleSelection.length">
          <button class="print">
            <Icon name="printer" />
            Print
          </button>
        </section>
        <template v-else>Expiration</template>
      </template>
    </el-table-column>
    <el-table-column
        property="Status"
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
    <el-table-column
        property="Description"
        :label="multipleSelection.length ? '' : 'Description'"
    >
      <template #header="scope">
        <section class="table-options" v-if="multipleSelection.length">
          <button class="export">
            <Icon name="trash" />
            Delete
          </button>
        </section>
        <template v-else>Description</template>
      </template>
    </el-table-column>
    <el-table-column width="20">
      <template #default="scope">
        <el-dropdown placement="left">
          <button class="none">
            <Icon name="dots" />
          </button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <Icon name="mobile" />
                Numbers
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
    Tittle: "Wellcome to store",
    StartDate: '12:56 2023/5/19',
    EndDate: '12:56 2023/5/19',
    ExpirationDate: '3 Hour',
    Status: 'Active',
    Description: 'Active',
  },
  {
    order: 1,
    Tittle: "Wellcome to store",
    StartDate: '12:56 2023/5/19',
    EndDate: '12:56 2023/5/19',
    ExpirationDate: '3 Hour',
    Status: 'Active',
    Description: 'Active',
  },
  {
    order: 1,
    Tittle: "Wellcome to store",
    StartDate: '12:56 2023/5/19',
    EndDate: '12:56 2023/5/19',
    ExpirationDate: '3 Hour',
    Status: 'Active',
    Description: 'Active',
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
