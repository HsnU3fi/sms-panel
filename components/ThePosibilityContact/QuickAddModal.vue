<template>
  <form class="new-send-bulk-shipping"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200">
    <div class="number form-item">
      <p class="label mt-0">Select Group</p>
      <el-select
        v-model="state.selectedGroup"
        class="select-box"
        placeholder="Select Group"
        size="large"
      >
        <el-option
          v-for="number in groupOptions"
          :key="number.value"
          :label="number.label"
          :value="number.value"
        />
      </el-select>
    </div>
    <div class="number form-item">
      <p class="label mt-0">Numbers</p>
      <el-select
        v-model="state.selectedNumber"
        class="select-box"
        placeholder="Select Group"
        size="large"
      >
        <el-option
          v-for="number in groupOptions"
          :key="number.value"
          :label="number.label"
          :value="number.value"
        />
      </el-select>
    </div>
    <Uploader class="w-100" />
    <div class="send-text form-item">
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
  selectedGroup: "",
  selectedNumber: "",
  smsText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
});
const groupOptions = [
  {
    value: "Excel",
    label: "Excel",
  },
  {
    value: "Text",
    label: "Text",
  },
  {
    value: "Phone book",
    label: "Phone book",
  },
  {
    value: "CSV",
    label: "CSV",
  },
  {
    value: "VCF",
    label: "VCF",
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
