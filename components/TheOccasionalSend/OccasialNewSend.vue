<template>
  <div
    class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <label for="Title" class="labe">Title</label>
    <input type="text" placeholder="Title" id="Title" v-model="state.Title" />
  </div>
  <div
    class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <label for="YourNumber">Your Number</label>
    <el-select
      v-model="state.selectedNumber"
      class="select-box"
      placeholder="Your Number"
      size="large"
      id="YourNumber"
    >
      <el-option
        v-for="number in numberOptions"
        :key="number.value"
        :label="number.label"
        :value="number.value"
      />
    </el-select>
  </div>
  <div
    class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <label for="SendTime">Send Time</label>
    <el-time-picker
      v-model="state.time"
      format="HH:mm"
      placeholder="Pick a time"
      class="date-picker"
      id="SendTime"
      :prefix-icon="ClockBlue"
    />
  </div>
  <div
    class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <label for="SendDate">Send Date</label>
    <el-date-picker
      v-model="state.date"
      type="date"
      placeholder="Send Date"
      :default-value="new Date(2010, 9, 1)"
      class="date-picker"
      id="SendDate"
      :prefix-icon="CalendarBlue"
    />
  </div>
  <div
    class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <h4 class="label">The columns in the Excel file</h4>
    <el-radio-group
      v-model="state.column"
      size="large"
      class="radio-button-group"
      @change="addToSmsText"
    >
      <el-radio-button label="Lorem Columns 1" />
      <el-radio-button label="Lorem Columns 2" />
      <el-radio-button label="Lorem Columns 3" />
    </el-radio-group>
  </div>
  <div
    class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <label for="smsText">SMS Text</label>
    <textarea
      v-model="state.desc"
      rows="8"
      placeholder="SMS Text"
      id="smsText"
    ></textarea>
  </div>
  <div
    class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <h4 class="label">Contct Group</h4>
    <el-checkbox-group v-model="state.checkbox">
      <el-checkbox
        v-for="(item, index) in checkboxGroup"
        :key="index"
        :label="item"
        >{{ item }}</el-checkbox
      >
    </el-checkbox-group>
  </div>
  <div
    class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <button class="primary pointer" type="button">Refresh List</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ClockBlue from "@/components/TheIcon/single-icons/ClockBlue.vue";
import CalendarBlue from "@/components/TheIcon/single-icons/CalendarBlue.vue";

//state

const state = ref({
  Title: "",
  selectedNumber: "",
  time: "",
  date: "",
  desc: "",
  column: 0,
});
const checkboxGroup = ["N1 Group Name", "N2 Group Name"];
const numberOptions = [
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

//animation variables

const initial = {
  x: -50,
  opacity: 0,
  transition: {
    stiffness: 100,
  },
};
const enter = {
  x: 0,
  opacity: 1,
  transition: {
    stiffness: 100,
    ease: "easeInOut",
  },
};

//methods

const addToSmsText = (e) => {
  state.value.desc += e + " ";
  state.value.column = 0;
};
</script>
