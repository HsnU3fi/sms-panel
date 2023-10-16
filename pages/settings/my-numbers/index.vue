<template>
  <BaseLayout class="dashboard setting-keywords">
    <div class="d-flex action-bar-table col-12 flex-column">
      <div class="align-items-end d-flex g-20">
        <section class="form-item pb-0">
          <p class="label">Number</p>
          <el-select
            v-model="state.number"
            class="select-box"
            placeholder="Number"
            size="large"
          >
            <el-option
              v-for="number in numberOptions"
              :key="number.value"
              :label="number.label"
              :value="number.value"
            />
          </el-select>
        </section>
        <section class="form-item pb-0">
          <p class="label">Type</p>
          <el-select
            v-model="state.status"
            class="select-box"
            placeholder="Type"
            size="large"
          >
            <el-option
              v-for="status in statusOptions"
              :key="status.value"
              :label="status.label"
              :value="status.value"
            />
          </el-select>
        </section>
        <button class="d-flex align-items-center g-8">
          <Icon name="search-blue" /> Search
        </button>
      </div>
    </div>
    <MyNumbersTable />
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import MyNumbersTable from "@/components/TheMyNumbers/MyNumbersTable.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const state = ref({
  number: "",
  status: "",
});
const numberOptions = [
  {
    value: "+15864984198",
    label: "+15864984198",
  },
  {
    value: "+15864984197",
    label: "+15864984197",
  },
  {
    value: "+15864984196",
    label: "+15864984196",
  },
];
const statusOptions = [
  {
    value: "Active",
    label: "Active",
  },
  {
    value: "DeActive",
    label: "DeActive",
  },
];
</script>
