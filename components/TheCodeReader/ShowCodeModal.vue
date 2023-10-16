<template>
  <h4 class="label">Search Codes</h4>
  <div class="action-bar-table">
    <el-input
      v-model="state.search"
      class="w-50 m-2"
      placeholder="Keyword Search"
    >
      <template #prefix><Icon name="search" /></template>
    </el-input>
  </div>
  <NoData v-if="data.length == 0" />
  <ShowCodeTable
    v-if="data.length !== 0"
    :data="test"
    :key="counter"
    @data="updateDataHandler"
  />
  <Pagination
    v-if="data.length"
    :total="data.length"
    :currentPage="currentPage"
    :itemPerPage="itemPerPage"
    @itemPerPage="
      itemPerPage = $event;
      counter++;
    "
    @currentPage="
      currentPage = $event;
      counter++;
    "
  />
</template>

<script setup>
import ShowCodeTable from "@/components/TheCodeReader/ShowCodeTable.vue";
import NoData from "@/components/TheEmptyTable/NoData.vue";
import Pagination from "@/components/ThePagination/Pagination.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const state = ref({
  search: "",
});
const data = ref([
  {
    code: {
      value: "1",
      label: "1",
      editable: true,
      type: "text",
    },
    answer: {
      value: "test 1",
      label: "test 1",
      editable: true,
      type: "textarea",
    },
    isEditMode: false,
  },
  {
    code: {
      value: "1",
      label: "1",
      editable: true,
      type: "text",
    },
    answer: {
      value: "test 1",
      label: "test 1",
      editable: true,
      type: "textarea",
    },
    isEditMode: false,
  },
  {
    code: {
      value: "2",
      label: "2",
      editable: true,
      type: "text",
    },
    answer: {
      value: "test 1",
      label: "test 1",
      editable: true,
      type: "textarea",
    },
    isEditMode: false,
  },
  {
    code: {
      value: "1",
      label: "1",
      editable: true,
      type: "text",
    },
    answer: {
      value: "test 1",
      label: "test 1",
      editable: true,
      type: "textarea",
    },
    isEditMode: false,
  },
]);
const counter = ref(0);
const itemPerPage = ref(5);
const currentPage = ref(1);

// computed

const test = computed(() => {
  const trimStart = (currentPage.value - 1) * itemPerPage.value;
  const trimEnd = trimStart + itemPerPage.value;
  return data.value.slice(trimStart, trimEnd);
});

//methods

const updateDataHandler = (val) => {
  data.value = val;
  counter.value++;
};
</script>

<style>
</style>