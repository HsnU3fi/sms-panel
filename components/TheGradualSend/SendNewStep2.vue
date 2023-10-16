<template>
  <form v-motion :initial="initial" :enter="enter" :delay="200">
    <h4 class="label mt-0">Start & End Sending</h4>
    <div class="double-colun">
      <div class="f-item w-50">
        <label for="FromDate">From</label>
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
      <div class="f-item w-50">
        <label for="ToDate">To</label>
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
    <h4 class="label mt-0">Clock</h4>
    <div class="double-colun">
      <div class="f-item w-50">
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
      <div class="f-item w-50">
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
    </div>
    <div class="double-colun align-items-end">
      <div class="f-item w-50">
        <label for="Break">Break</label>
        <input
          class="input"
          type="number"
          min="0"
          placeholder=""
          id="breakNumber"
          v-model="state.breakNumber"
        />
      </div>
      <div class="f-item w-50">
        <el-select
          v-model="state.breakMode"
          class="select-box"
          placeholder="Break"
          size="large"
          id="Break"
        >
          <el-option
            v-for="mode in breakModes"
            :key="mode.value"
            :label="mode.label"
            :value="mode.value"
          />
        </el-select>
      </div>
    </div>
    <div class="f-item">
      <label
        for="firstName"
        class="d-flex align-items-center justify-content-between"
        >First Name <Icon name="info"
      /></label>
      <input
        type="text"
        placeholder="First Name"
        id="firstName"
        v-model="state.firstName"
      />
    </div>
    <div class="f-item">
      <label
        for="lastName"
        class="d-flex align-items-center justify-content-between"
        >Last Name <Icon name="info"
      /></label>
      <input
        type="text"
        placeholder="Last Name"
        id="lastName"
        v-model="state.lastName"
      />
    </div>
    <div class="f-item">
      <label for="Transmissions">Number of transmissions per interval</label>
      <input
        type="number"
        min="0"
        placeholder="Number of transmissions per interval"
        id="Transmissions"
        v-model="state.transmissionCount"
      />
    </div>

    <div class="f-item">
      <el-checkbox-group v-model="state.advanceSetting">
        <el-checkbox
          v-for="(advanceSetting, index) in advanceSettings"
          :key="index"
          :label="advanceSetting"
          >{{ advanceSetting }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
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
  breakNumber: 1,
  breakMode: "",
  firstName: "",
  lastName: "",
  transmissionCount: 0,
});
const breakModes = [
  {
    value: "Min",
    label: "Min",
  },
  {
    value: "Max",
    label: "Max",
  },
];
const advanceSettings = [
  "Notification via SMS By selecting this option, you will be notified when each package starts",
  "Sending to duplicate numbers is allowed",
  "Send as flash",
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

<style></style>
