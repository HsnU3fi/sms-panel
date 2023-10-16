<template>
  <el-table
    ref="multipleTableRef"
    :data="test"
    class="table w-100"
    :class="multipleSelection.length ? 'expanded' : ''"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection"></el-table-column>
    <el-table-column property="order" label="order"
      ><template #header v-if="multipleSelection.length">
        <div class="d-flex align-items-center">
          {{ multipleSelection.length }} SMS Selected
        </div>
      </template></el-table-column
    >
    <el-table-column property="SMS" label="SMS"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Period" label="Period" show-overflow-tooltip
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Send" label="Send"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="SendTime" label="SendTime"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Status" label="Status"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column
      :property="!multipleSelection.length && 'Description'"
      :label="!multipleSelection.length && 'Description'"
    ></el-table-column>
    <el-table-column width="20"
      ><span v-if="!multipleSelection.length" @click="showContextMenu"
        ><Icon name="dots" /> </span
      ><template #header v-if="multipleSelection.length">
        <div class="flex-row d-flex actions">
          <span class="d-flex align-items-center">
            <Icon name="printer" /> Print
          </span>
          <div class="divider"></div>
          <span class="d-flex align-items-center">
            <Icon name="upload" /> Export Excel
          </span>
          <div class="divider"></div>
          <span class="d-flex align-items-center" @click="deleteHandler">
            <Icon name="trash-blue" /> Delete
          </span>
        </div>
      </template>
    </el-table-column>
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
import { ref, computed } from "vue";
import { ElTable } from "element-plus";
// state
const itemPerPage = ref(5);
const currentPage = ref(1);
const multipleTableRef = ref();
const multipleSelection = ref([]);
const tableData = ref([
  {
    order: "1",
    SMS: "Send Timer",
    Period: "Once",
    Send: "1",
    SendTime: "12:56 2023/5/19",
    Status: "Active",
    Description: "Done",
    id: 1,
  },
  {
    order: "1",
    SMS: "Send Timer",
    Period: "Once",
    Send: "1",
    SendTime: "12:56 2023/5/19",
    Status: "Active",
    Description: "Done",
    id: 2,
  },
  {
    order: "1",
    SMS: "Send Timer",
    Period: "Once",
    Send: "1",
    SendTime: "12:56 2023/5/19",
    Status: "Active",
    Description: "Done",
    id: 3,
  },
  {
    order: "1",
    SMS: "Send Timer",
    Period: "Once",
    Send: "1",
    SendTime: "12:56 2023/5/19",
    Status: "Active",
    Description: "Done",
    id: 4,
  },
  {
    order: "1",
    SMS: "Send Timer",
    Period: "Once",
    Send: "1",
    SendTime: "12:56 2023/5/19",
    Status: "Active",
    Description: "Done",
    id: 5,
  },
  {
    order: "1",
    SMS: "Send Timer",
    Period: "Once",
    Send: "1",
    SendTime: "12:56 2023/5/19",
    Status: "Active",
    Description: "Done",
    id: 6,
  },
  {
    order: "1",
    SMS: "Send Timer",
    Period: "Once",
    Send: "1",
    SendTime: "12:56 2023/5/19",
    Status: "Active",
    Description: "Done",
    id: 7,
  },
]);

//computed

const test = computed(() => {
  const trimStart = (currentPage.value - 1) * itemPerPage.value;
  const trimEnd = trimStart + itemPerPage.value;
  return tableData.value.slice(trimStart, trimEnd);
});

// methods

const handleSelectionChange = (val) => {
  multipleSelection.value = val;
};
const showContextMenu = (e) => {
  console.log(e);
};
const deleteHandler = () => {
  tableData.value = tableData.value.filter(
    (data) => !multipleSelection.value.find((select) => select == data)
  );
};
</script>
