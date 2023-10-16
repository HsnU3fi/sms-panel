<template>
  <form class="new-send-bulk-shipping"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200">
    <div class="form-item">
      <h4 class="label mb-0 mt-0">Contact Group</h4>
      <el-checkbox-group v-model="state.contactGroup">
        <el-checkbox
          v-for="(item, index) in checkboxGroupContactGroup"
          :key="index"
          :label="item"
          >{{ item }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
    <div class="form-item">
      <button class="primary" type="button">Refresh List</button>
    </div>
    <el-divider />
    <div class="form-item">
      <h4 class="label mb-0 mt-0">Contact Excel file</h4>
      <Uploader />
    </div>
    <el-divider />
    <div class="form-item">
      <h4 class="label mb-0 mt-0">Advanced Setting</h4>
      <el-checkbox-group v-model="state.addvanceCheckbox">
        <el-checkbox
          v-for="(item, index) in checkboxGroupAdvanceSetting"
          :key="index"
          :label="item"
          class="mb-3"
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

const state = ref({});
const checkboxGroupContactGroup = ref(["N1 Group Name", "N2 Group Name"]);
const checkboxGroupAdvanceSetting = ref([
  "If the contact number was in the phone book, the new information should be replaced",
  "Not including the number if the number is available in other groups",
]);

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
