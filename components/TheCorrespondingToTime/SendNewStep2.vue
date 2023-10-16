<template>
  <div class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200">
    <label for="FullName" class="labe">Full Name</label>
    <input
      type="text"
      placeholder="Full Name"
      id="FullName"
      v-model="state.fullName"
    />
  </div>
  <div class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200">
    <label for="Allonym">Allonym</label>
    <el-select
      v-model="state.allonym"
      class="select-box"
      placeholder="Allonym"
      size="large"
      id="Allonym"
    >
      <el-option
        v-for="allonym in allonymOptions"
        :key="allonym.value"
        :label="allonym.label"
        :value="allonym.value"
      />
    </el-select>
  </div>
  <div class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200">
    <el-checkbox-group v-model="state.checkbox">
      <el-checkbox
        v-for="(item, index) in checkboxGroup"
        :key="index"
        :label="item"
        >{{ item }}</el-checkbox
      >
    </el-checkbox-group>
  </div>
  <el-divider />
  <div class="d-flex g-20 flex-column flex-md-row"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200">
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
          <div class="form-item month">
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
          <client-only>
            <el-time-picker
              format="HH:mm"
              v-model="state.date"
              placeholder="Pick a time"
              class="date-picker"
              id="Birthday"
              :prefix-icon="ClockBlue"
          /></client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CalendarBlue from "@/components/TheIcon/single-icons/CalendarBlue.vue";
import ClockBlue from "@/components/TheIcon/single-icons/ClockBlue.vue";
import { ref } from "vue";

//state

const state = ref({
  fullName: "",
  allonym: "",
  timeMode: 1,
  date: "",
});
const checkboxGroup = [
  "Send as flash",
  "Sending to duplicate numbers is allowed",
];
const allonymOptions = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
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