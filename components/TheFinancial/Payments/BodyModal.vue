<template>
  <form>
    <div class="form-item">
      <label>payment type</label>
      <el-select
          v-model="state.type"
          class="select-box"
          size="large"
          id="type"
      >
        <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label>for</label>
      <el-select
          v-model="state.for"
          class="select-box"
          size="large"
          id="for"
      >
        <el-option
            v-for="item in forOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label>Payment status</label>
      <el-select
          v-model="state.status"
          class="select-box"
          size="large"
          id="status"
      >
        <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label>Bank</label>
      <el-select
          v-model="state.Bank"
          class="select-box"
          size="large"
          id="Bank"
      >
        <el-option
            v-for="item in BankOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label>Payment code</label>
      <el-select
          v-model="state.code"
          class="select-box"
          size="large"
          id="code"
      >
        <el-option
            v-for="item in codeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label>User information</label>
      <el-select
          v-model="state.information"
          class="select-box"
          size="large"
          id="information"
      >
        <el-option
            v-for="item in informationOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>


    <h4 class="mt-3 mb-3">Apply Period of Time</h4>

    <div class="double-colun align-items-end form-item">
      <div class="f-item w-25 mb-0">
        <label>From</label>
        <el-time-picker
            v-model="state.fromTime"
            format="HH:mm"
            placeholder="Pick a time"
            class="date-picker"
            id="FromTime"
            :prefix-icon="ClockBlue"
        />
      </div>
      <div class="f-item w-75 mb-0">
        <el-date-picker
            v-model="state.fromDate"
            type="date"
            placeholder="From Date"
            :default-value="new Date(2010, 9, 1)"
            class="date-picker"
            id="FromDate"
            :prefix-icon="CalendarBlue"
        />
      </div>
    </div>
    <div class="double-colun align-items-end form-item">
      <div class="f-item w-25 mb-0">
        <label>To</label>
        <el-time-picker
            v-model="state.toTime"
            format="HH:mm"
            placeholder="Pick a time"
            class="date-picker"
            id="ToTime"
            :prefix-icon="ClockBlue"
        />
      </div>
      <div class="f-item w-75 mb-0">
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
    </div>

  </form>
</template>





<script setup>
import {ref} from 'vue'

const state = ref({
  type: "",
  for: "",
  status: "",
  Bank: "",
  code: "",
  information: "",
  fromDate: "",
  toDate: "",
  fromTime: "",
  toTime: "",
});


const typeOptions = [
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
const forOptions = [
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
const statusOptions = [
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
const BankOptions = [
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
const codeOptions = [
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
const informationOptions = [
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





