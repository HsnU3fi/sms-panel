<template>
  <form
    class="new-send-bulk-shipping"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <div class="number form-item">
      <p class="label mt-0">Your Number</p>
      <el-select
        v-model="state.selectedNumber"
        class="select-box"
        placeholder="Select"
        size="large"
        id="selectNumber"
      >
        <el-option
          v-for="number in numberOptions"
          :key="number.value"
          :label="number.label"
          :value="number.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label for="Title">Title</label>
      <input type="text" id="Title" placeholder="Title" v-model="state.title" />
    </div>
    <div class="form-item">
      <h4 class="label mb-0 mt-0">Upload Excel file numbers and information</h4>
      <Uploader />
    </div>
    <div class="send-text form-item">
      <p class="label">SMS Text</p>
      <textarea
        name="sms-text"
        id="SmsText"
        cols="60"
        rows="10"
        v-model="state.smsText"
      >
      </textarea>
      <p class="counter" :class="state.smsText.length > 160 && 'error'">
        {{ state.smsText.length }} / 160
      </p>
    </div>
    <div class="form-item">
      <label for="PhoneNumber">Phone Number</label>
      <input
        type="text"
        id="PhoneNumber"
        placeholder="Phone  Number"
        v-model="state.number"
      />
    </div>
    <div class="form-item">
      <label for="">Send Date</label>
      <div class="d-flex double-column g-20">
        <div class="date">
          <el-date-picker
            v-model="state.date"
            type="date"
            placeholder="From Date"
            :default-value="new Date(2010, 9, 1)"
            class="date-picker"
            id="FromDate"
            :prefix-icon="CalendarBlue"
          />
        </div>
        <div class="time">
          <el-time-picker
            v-model="state.time"
            format="HH:mm"
            arrow-control
            placeholder="Pick a time"
            class="time-picker"
            :prefix-icon="ClockBlue"
          />
        </div>
      </div>
    </div>
    <div class="form-item">
      <button class="primary px-5 py-3">Add</button>
    </div>
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
  </form>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";
import Uploader from "@/components/TheSendSms/Uploader.vue";
import ClockBlue from "@/components/TheIcon/single-icons/ClockBlue.vue";
import CalendarBlue from "@/components/TheIcon/single-icons/CalendarBlue.vue";

import { ref } from "vue";

//state

const state = ref({
  selectedNumber: "",
  title: "",
  number: "",
  smsText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
  importType: "Phone book",
  isDuplicatedNumberAllowed: false,
  file: [],
  time: "",
  date: "",
});
const numberOptions = [
  {
    value: "+012548754",
    label: "+012548754",
  },
];
const checkboxGroup = [
  "Send as flash",
  "Sending to duplicate numbers is allowed",
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
</script>
