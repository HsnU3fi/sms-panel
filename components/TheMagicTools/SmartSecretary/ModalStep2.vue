<template>
  <form>
    <div class="form-item">
      <label for="Title" class="labe">Title</label>
      <input type="text" placeholder="Title" id="Title" v-model="state.Title"/>
    </div>

    <div class="form-item">
      <label for="Receiver">Receiver Number</label>
      <el-select
          v-model="state.Receiver"
          class="select-box"
          placeholder="Sender"
          size="large"
          id="Receiver"
      >
        <el-option
            v-for="Receiver in ReceiverOptions"
            :key="Receiver.value"
            :label="Receiver.label"
            :value="Receiver.value"
        />
      </el-select>
    </div>

    <div class="form-item">
      <label for="Sender">Sender</label>
      <el-select
          v-model="state.Sender"
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
      <h4 class="label">The columns in the Excel file</h4>
      <el-radio-group
          v-model="state.column"
          size="large"
          class="radio-button-group"
          @change="addToSmsText"
      >
        <el-radio-button label="Lorem Columns 1"/>
        <el-radio-button label="Lorem Columns 2"/>
        <el-radio-button label="Lorem Columns 3"/>
        <el-radio-button label="Lorem Columns 4"/>
        <el-radio-button label="Lorem Columns 5"/>
      </el-radio-group>
    </div>
    <div class="form-item">
      <label for="smsText">SMS Text</label>
      <textarea
          v-model="state.desc"
          rows="8"
          placeholder="SMS Text"
          id="smsText"
      ></textarea>
    </div>


    <h4 class="mt-3 mb-3">Apply Period of Time</h4>

    <div class="double-colun align-items-end form-item">
      <div class="f-item w-25 mb-0">
        <label for="FromTime">From</label>
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
        <label for="ToTime">To</label>
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
import {ref} from "vue";

//state

const state = ref({
  Title: "",
  Sender: "",
  Receiver: "",
  timeMode: 1,
  fromDate: "",
  toDate: "",
  fromTime: "",
  toTime: "",
  date: "",
  desc: "",
  column: 0,
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
const senderOptions = [
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

//methods

const addToSmsText = (e) => {
  state.value.desc += e + " ";
  state.value.column = 0;
};

</script>
