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
      <el-radio-button label="Lorem Columns 4" />
      <el-radio-button label="Lorem Columns 5" />
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
  <el-divider />
  <div
    class="d-flex g-20 flex-column flex-md-row"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <div class="choose-time-mode">
      <el-radio-group
        v-model="state.timeMode"
        class="flex-row flex-md-column"
        @change="handleTimeMode"
      >
        <div class="form-item">
          <el-radio :label="0">Once</el-radio>
        </div>
        <div class="form-item">
          <el-radio :label="1">Daily</el-radio>
        </div>
        <div class="form-item">
          <el-radio :label="2">Weekly</el-radio>
        </div>
        <div class="form-item">
          <el-radio :label="3">Mountly</el-radio>
        </div>
        <div class="form-item">
          <el-radio :label="4">Yearly</el-radio>
        </div>
        <div class="form-item">
          <label class="el-radio hourly-label">Hourly</label>
        </div>
      </el-radio-group>
    </div>
    <div class="w-100 d-flex flex-column justify-content-between">
      <div class="form-item">
        <el-date-picker
          v-model="state.date"
          type="date"
          placeholder="Pick a date"
          :default-value="new Date(2010, 9, 1)"
          class="date-picker"
          id="Birthday"
          :prefix-icon="CalendarBlue"
          :disabled="disableList.includes(1)"
        />
      </div>
      <div>
        <div class="form-item">
          <el-select
            v-model="state.day"
            class="select-box"
            placeholder="Day"
            size="large"
            id="Day"
            :disabled="disableList.includes(2)"
          >
            <el-option
              v-for="day in dayOptions"
              :key="day.value"
              :label="day.label"
              :value="day.value"
            />
          </el-select>
        </div>
        <div class="form-item">
          <el-select
            v-model="state.month"
            class="select-box"
            placeholder="Month"
            size="large"
            id="Month"
            :disabled="disableList.includes(3)"
          >
            <el-option
              v-for="month in monthOptions"
              :key="month.value"
              :label="month.label"
              :value="month.value"
            />
          </el-select>
        </div>
        <div class="d-flex double-column">
          <div class="form-item day">
            <el-select
              v-model="state.monthDay"
              class="select-box"
              placeholder="Day"
              size="large"
              :disabled="disableList.includes(4)"
            >
              <el-option
                v-for="day in 30"
                :key="day"
                :label="day"
                :value="day"
              />
            </el-select>
          </div>
          <div class="form-item">
            <el-select
              v-model="state.month"
              class="select-box"
              placeholder="Month"
              size="large"
              id="Month"
              :disabled="disableList.includes(4)"
            >
              <el-option
                v-for="month in monthOptions"
                :key="month.value"
                :label="month.label"
                :value="month.value"
              />
            </el-select>
          </div>
        </div>
        <div class="form-item">
          <el-time-picker
            v-model="state.date"
            placeholder="Pick a time"
            format="HH:mm"
            class="date-picker"
            id="Birthday"
            :prefix-icon="ClockBlue"
          />
        </div>
      </div>
    </div>
  </div>
  <el-divider />

  <div
    class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <el-checkbox-group v-model="state.checkbox">
      <el-checkbox
        v-for="(item, index) in checkboxGroup"
        :key="index"
        :label="item"
        >{{ item }}</el-checkbox
      >
    </el-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ClockBlue from "@/components/TheIcon/single-icons/ClockBlue.vue";
import CalendarBlue from "@/components/TheIcon/single-icons/CalendarBlue.vue";

//state

const state = ref({
  Title: "",
  Sender: "",
  timeMode: 1,
  date: "",
  desc: "",
  column: 0,
});
const checkboxGroup = [
  "Send as flash",
  "Sending to duplicate numbers is allowed",
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
const dayOptions = [
  {
    value: "Saturday",
    label: "Saturday",
  },
  {
    value: "Sunday",
    label: "Sunday",
  },
  {
    value: "Monday",
    label: "Monday",
  },
  {
    value: "Tuesday",
    label: "Tuesday",
  },
  {
    value: "Wednesday",
    label: "Wednesday",
  },
  {
    value: "Friday",
    label: "Friday",
  },
  {
    value: "Thursday",
    label: "Thursday",
  },
];
const monthOptions = [
  {
    value: "January",
    label: "January",
  },
  {
    value: "February",
    label: "February",
  },
  {
    value: "March",
    label: "March",
  },
  {
    value: "April",
    label: "April",
  },
  {
    value: "May",
    label: "May",
  },
  {
    value: "June",
    label: "June",
  },
  {
    value: "July",
    label: "July",
  },
  {
    value: "August",
    label: "August",
  },
  {
    value: "September",
    label: "September",
  },
  {
    value: "October",
    label: "October",
  },
  {
    value: "November",
    label: "November",
  },
  {
    value: "December",
    label: "December",
  },
];
const disableList = ref([1, 2, 3, 4]);

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
const handleTimeMode = (e) => {
  if (e !== 1 && e !== 0) {
    disableList.value = [1, 2, 3, 4];
    disableList.value = disableList.value.filter((data) => data !== e);
  } else if (e == 0) {
    disableList.value = [1, 2, 3, 4];
    disableList.value = disableList.value.filter((data) => data !== e + 1);
  } else {
    disableList.value = [1, 2, 3, 4];
  }
};
</script>
