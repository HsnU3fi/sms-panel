<template>
  <BaseLayout class="dashboard recieve">

    <div class="row">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="form-item">
          <label>Receiver Number</label>
          <el-select
              v-model="state.Receiver"
              class="select-box"
              placeholder="Sender"
              size="large"
          >
            <el-option
                v-for="Receiver in ReceiverOptions"
                :key="Receiver.value"
                :label="Receiver.label"
                :value="Receiver.value"
            />
          </el-select>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="double-colun d-flex align-items-end form-item">
          <div class="f-item mb-0 mr-3">
            <label for="FromTime">From</label>
            <el-time-picker
                v-model="state.fromTime"
                format="HH:mm"
                placeholder="Pick a time"
                class="date-picker date-picker-financial"
                id="FromTime"
                :prefix-icon="ClockBlue"
            />
          </div>
          <div class="f-item mb-0">
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
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="double-colun d-flex align-items-end form-item">
          <div class="f-item mb-0">
            <label for="ToTime">To</label>
            <el-time-picker
                v-model="state.toTime"
                format="HH:mm"
                placeholder="Pick a time"
                class="date-picker date-picker-financial"
                id="ToTime"
                :prefix-icon="ClockBlue"
            />
          </div>
          <div class="f-item mb-0">
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
      </div>

      <div class="col-12 col-mg-6 col-lg-1 d-flex align-items-end">
        <div class="action-bar-table filter-btn-table">
          <button>Done</button>
        </div>
      </div>
    </div>

    <Table />

  </BaseLayout>
</template>





<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import Table from "@/components/TheFinancial/Transactions/Table.vue";

import {ref} from "vue";


const state = ref({
  Receiver: '',
});
const ReceiverOptions = [
  {
    value: "+1-32568741",
    label: "+1-32568741",
  },
  {
    value: "+1-32568741",
    label: "+1-32568741",
  },
  {
    value: "+1-32568741",
    label: "+1-32568741",
  },
  {
    value: "+1-32568741",
    label: "+1-32568741",
  },
];

</script>

