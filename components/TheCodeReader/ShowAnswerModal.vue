<template>
  <section class="number form-item">
    <label for="">Show Answer</label>
    <el-select
      v-model="state.sortType"
      class="select-box"
      placeholder="Select"
      size="large"
      id="selectNumber"
      @change="handleChangeSort"
    >
      <el-option
        v-for="sortType in sortTypeOptions"
        :key="sortType.value"
        :label="sortType.label"
        :value="sortType.value"
      />
    </el-select>
  </section>
  <NoData v-if="data.length == 0" />
  <ShowAnswerTable
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
import ShowAnswerTable from "@/components/TheCodeReader/ShowAnswerTable.vue";
import NoData from "@/components/TheEmptyTable/NoData.vue";
import Pagination from "@/components/ThePagination/Pagination.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const state = ref({
  sortType: 0,
});
const data = ref([
  {
    ITEM1: {
      value: "True Code 1",
      label: "True Code 1",
      editable: true,
      type: "textarea",
    },
    ITEM2: {
      value: "True Code 2",
      label: "True Code 2",
      editable: true,
      type: "textarea",
    },
    ITEM3: {
      value: "True Code 3",
      label: "True Code 3",
      editable: true,
      type: "textarea",
    },
    isEditMode: false,
  },
  {
    ITEM1: {
      value: "False Code 1",
      label: "False Code 1",
      editable: true,
      type: "textarea",
    },
    ITEM2: {
      value: "False Code 2",
      label: "False Code 2",
      editable: true,
      type: "textarea",
    },
    ITEM3: {
      value: "False Code 3",
      label: "False Code 3",
      editable: true,
      type: "textarea",
    },
    isEditMode: false,
  },
  {
    ITEM1: {
      value: "Duplicate Code 1",
      label: "Duplicate Code 1",
      editable: true,
      type: "textarea",
    },
    ITEM2: {
      value: "Duplicate Code 2",
      label: "Duplicate Code 2",
      editable: true,
      type: "textarea",
    },
    ITEM3: {
      value: "Duplicate Code 3",
      label: "Duplicate Code 3",
      editable: true,
      type: "textarea",
    },
    isEditMode: false,
  },
  {
    ITEM1: {
      value: "Duplicate Phone number 1",
      label: "Duplicate Phone number 1",
      editable: true,
      type: "textarea",
    },
    ITEM2: {
      value: "Duplicate Phone number 2",
      label: "Duplicate Phone number 2",
      editable: true,
      type: "textarea",
    },
    ITEM3: {
      value: "Duplicate Phone number 3",
      label: "Duplicate Phone number 3",
      editable: true,
      type: "textarea",
    },
    isEditMode: false,
  },
]);
const counter = ref(0);
const itemPerPage = ref(5);
const currentPage = ref(1);
const sortTypeOptions = [
  {
    value: 0,
    label: "All",
  },
  {
    value: 1,
    label: "True Codes",
  },
  {
    value: 2,
    label: "False Codes",
  },
  {
    value: 3,
    label: "Duplicate Codes",
  },
  {
    value: 4,
    label: "Duplicate Phone number",
  },
];

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
const handleChangeSort = (e) => {
  if (e === 0) {
    data.value = [
      {
        ITEM1: {
          value: "True Code 1",
          label: "True Code 1",
          editable: true,
          type: "textarea",
        },
        ITEM2: {
          value: "True Code 2",
          label: "True Code 2",
          editable: true,
          type: "textarea",
        },
        ITEM3: {
          value: "True Code 3",
          label: "True Code 3",
          editable: true,
          type: "textarea",
        },
        isEditMode: false,
      },
      {
        ITEM1: {
          value: "False Code 1",
          label: "False Code 1",
          editable: true,
          type: "textarea",
        },
        ITEM2: {
          value: "False Code 2",
          label: "False Code 2",
          editable: true,
          type: "textarea",
        },
        ITEM3: {
          value: "False Code 3",
          label: "False Code 3",
          editable: true,
          type: "textarea",
        },
        isEditMode: false,
      },
      {
        ITEM1: {
          value: "Duplicate Code 1",
          label: "Duplicate Code 1",
          editable: true,
          type: "textarea",
        },
        ITEM2: {
          value: "Duplicate Code 2",
          label: "Duplicate Code 2",
          editable: true,
          type: "textarea",
        },
        ITEM3: {
          value: "Duplicate Code 3",
          label: "Duplicate Code 3",
          editable: true,
          type: "textarea",
        },
        isEditMode: false,
      },
      {
        ITEM1: {
          value: "Duplicate Phone number 1",
          label: "Duplicate Phone number 1",
          editable: true,
          type: "textarea",
        },
        ITEM2: {
          value: "Duplicate Phone number 2",
          label: "Duplicate Phone number 2",
          editable: true,
          type: "textarea",
        },
        ITEM3: {
          value: "Duplicate Phone number 3",
          label: "Duplicate Phone number 3",
          editable: true,
          type: "textarea",
        },
        isEditMode: false,
      },
    ];
  } else if (e === 1) {
    data.value = [
      {
        ITEM1: {
          value: "True Code 1",
          label: "True Code 1",
          editable: true,
          type: "textarea",
        },
        ITEM2: {
          value: "True Code 2",
          label: "True Code 2",
          editable: true,
          type: "textarea",
        },
        ITEM3: {
          value: "True Code 3",
          label: "True Code 3",
          editable: true,
          type: "textarea",
        },
        isEditMode: false,
      },
    ];
  } else if (e === 2) {
    data.value = [
      {
        ITEM1: {
          value: "False Code 1",
          label: "False Code 1",
          editable: true,
          type: "textarea",
        },
        ITEM2: {
          value: "False Code 2",
          label: "False Code 2",
          editable: true,
          type: "textarea",
        },
        ITEM3: {
          value: "False Code 3",
          label: "False Code 3",
          editable: true,
          type: "textarea",
        },
        isEditMode: false,
      },
    ];
  } else if (e === 3) {
    data.value = [
      {
        ITEM1: {
          value: "Duplicate Code 1",
          label: "Duplicate Code 1",
          editable: true,
          type: "textarea",
        },
        ITEM2: {
          value: "Duplicate Code 2",
          label: "Duplicate Code 2",
          editable: true,
          type: "textarea",
        },
        ITEM3: {
          value: "Duplicate Code 3",
          label: "Duplicate Code 3",
          editable: true,
          type: "textarea",
        },
        isEditMode: false,
      },
    ];
  } else if (e === 4) {
    data.value = [
      {
        ITEM1: {
          value: "Duplicate Phone number 1",
          label: "Duplicate Phone number 1",
          editable: true,
          type: "textarea",
        },
        ITEM2: {
          value: "Duplicate Phone number 2",
          label: "Duplicate Phone number 2",
          editable: true,
          type: "textarea",
        },
        ITEM3: {
          value: "Duplicate Phone number 3",
          label: "Duplicate Phone number 3",
          editable: true,
          type: "textarea",
        },
        isEditMode: false,
      },
    ];
  }
  counter.value++;
};
</script>

<style>
</style>