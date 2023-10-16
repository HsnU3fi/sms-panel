<template>
  <BaseLayout class="dashboard reports-graphic-reports">
    <div
        class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <section class="body">
        <Chart />
      </section>
    </div>
  </BaseLayout>
</template>

<script setup>
import {ref} from "vue";
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import Chart from "@/components/TheReports/GraphicReport/Chart";
const state = ref({
  folder: "",
});
const folderOptions = [
  {
    value: "Send",
    label: "Send",
  },
  {
    value: "Recieve",
    label: "Recieve",
  },
];
const dialogVisible = ref(false)
</script>

<style scoped>

</style>