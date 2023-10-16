<template>
  <form>
    <div class="form-item">
      <label class="d-flex align-items-center justify-content-between"
        >Tittle
      </label>
      <input type="text" placeholder="Tittle " v-model="state.title" />
    </div>
    <div class="form-item">
      <label for="Reciver">Reciver Number</label>
      <el-select
        v-model="state.reciver"
        class="select-box"
        placeholder="Reciver"
        size="large"
        id="Reciver"
      >
        <el-option
          v-for="reciver in reciverOptions"
          :key="reciver.value"
          :label="reciver.label"
          :value="reciver.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label>Correct answer text </label>
      <textarea
        placeholder="Correct answer text "
        rows="8"
        v-model="state.correntAnswer"
      ></textarea>
    </div>
    <div class="form-item">
      <label>Wrong answer text </label>
      <textarea
        placeholder="Wrong answer text "
        rows="8"
        v-model="state.wrongAnswer"
      ></textarea>
    </div>
    <div class="form-item">
      <label>Duplicate answer text </label>
      <textarea
        placeholder="Duplicate answer text "
        rows="8"
        v-model="state.duplicateAnswer"
      ></textarea>
    </div>
    <div class="form-item">
      <label>Duplicate mobile number text </label>
      <textarea
        placeholder="Duplicate mobile number text "
        rows="8"
        v-model="state.duplicateNumber"
      ></textarea>
    </div>
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
    <h4 class="label">Contct Group</h4>
    <div class="form-item">
      <el-checkbox-group v-model="state.checkbox">
        <el-checkbox
          v-for="(item, index) in checkboxGroup"
          :key="index"
          :label="item"
          >{{ item }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
    <button class="primary">Refresh List</button>
  </form>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import CalendarBlue from "@/components/TheIcon/single-icons/CalendarBlue.vue";
import ClockBlue from "@/components/TheIcon/single-icons/ClockBlue.vue";

//state

const state = ref({
  fromDate: "",
  toDate: "",
  fromTime: "",
  toTime: "",
  title: "",
  reciver: "",
  correntAnswer: "",
  wrongAnswer: "",
  duplicateAnswer: "",
  duplicateNumber: "",
});
const reciverOptions = [
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
const checkboxGroup = ["N1 Group Name", "N2 Group Name"];
</script>

<style>
</style>