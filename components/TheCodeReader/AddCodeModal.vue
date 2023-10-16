<template>
  <InfoBox :infoOptions="infoOptions" :title="'Guide'" class="mb-3 mt-0" />
  <h4 class="label mb-0">Excel file Codes</h4>
  <Uploader />
  <h4 class="label mb-0">Text file Codes</h4>
  <Uploader />
</template>

<script setup>
import Uploader from "@/components/TheSendSms/Uploader.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";
import { ref } from "vue";

//state

const infoOptions = ref([]);
</script>

<style>
</style>