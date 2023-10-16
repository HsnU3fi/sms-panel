<template>
  <div class="form-item">
    <label for="Sender">Sender</label>
    <el-select
      v-model="state.sender"
      class="select-box"
      placeholder="Sender"
      size="large"
      id="Sender"
    >
      <el-option
        v-for="sender in senderOptions"
        :key="sender.value"
        :label="sender.label"
        :value="sender.value"
      />
    </el-select>
  </div>
  <div class="form-item">
    <label for="FromDate">From Date</label>
    <el-date-picker
      v-model="state.formDate"
      type="date"
      placeholder="From Date"
      :default-value="new Date(2010, 9, 1)"
      class="date-picker"
      id="FromDate"
      :prefix-icon="CalendarBlue"
    />
  </div>
  <div class="form-item">
    <label for="ToDate">To Date</label>
    <el-date-picker
      v-model="state.toDate"
      type="date"
      placeholder="To Date"
      :default-value="new Date(2010, 9, 1)"
      class="date-picker"
      id="ToDate"
      :prefix-icon="CalendarBlue"
    />
  </div>

  <div class="form-item">
    <el-checkbox v-model="state.isSMS" label="SMS text" size="large" />
  </div>
</template>

<script setup>
import CalendarBlue from "@/components/TheIcon/single-icons/CalendarBlue.vue";
import { ref } from "vue";

//state

const state = ref({
  sender: "",
  formDate: "",
  toDate: "",
  isSMS: false,
});
const senderOptions = [
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
];
</script>