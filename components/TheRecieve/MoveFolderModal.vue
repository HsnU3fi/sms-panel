<template>
  <div class="form-item">
    <label for="Move_to">Move to</label>
    <el-select
      v-model="state.moveTo"
      class="select-box"
      placeholder="Move to"
      size="large"
      id="Move to"
    >
      <el-option
        v-for="moveTo in moveToOptions"
        :key="moveTo.value"
        :label="moveTo.label"
        :value="moveTo.value"
      />
    </el-select>
  </div>
</template>

<script setup>
import { ref } from "vue";

//state

const state = ref({
  moveTo: "",
});
const moveToOptions = [
  {
    value: "Recive",
    label: "Recive",
  },
  {
    value: "Sends",
    label: "Sends",
  },
  {
    value: "Deletes",
    label: "Deletes",
  },
  {
    value: "Lorem Folder 1",
    label: "Lorem Folder 1",
  },
  {
    value: "Lorem Folder 2",
    label: "Lorem Folder 2",
  },
];
</script>