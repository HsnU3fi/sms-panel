<template>
  <InfoBox
    :infoOptions="infoOptions"
    :title="'Guide'"
    class="mb-3 mt-0"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  />
  <h4
    class="label mb-0"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    Excel file number and information
  </h4>
  <Uploader v-motion :initial="initial" :enter="enter" :delay="200" />
</template>

<script setup>
import Uploader from "@/components/TheSendSms/Uploader.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";
import { ref } from "vue";

//state

const infoOptions = ref([
  "This section allows you to consider a corresponding text for each number and send it at once",
  "Your input Excel file should contain two columns of numbers and SMS text like the sample file (download the sample file)",
  "Pay attention that the name of the table where the numbers are located should be Sheet1",
  "If this file has been exported from somewhere, copy the number column in a new file",
  "Please note that the first line of the Excel file is not read, so you can use it for the title",
  "After selecting the file, click the Send button to send each SMS to its corresponding number",
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

<style></style>
