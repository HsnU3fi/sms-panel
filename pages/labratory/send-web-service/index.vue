<template>
  <BaseLayout class="dashboard send-web-service">
    <div
        class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <section class="body">
        <h1 class="title">Guide to using SMS web service</h1>
        <section class="items">
          <section v-for="index in 3" :key="index" class="item">
            <img src="~/assets/images/lock.png">
            <p>PHP</p>
          </section>
        </section>
      </section>
    </div>
  </BaseLayout>
</template>

<script setup>
import {ref} from "vue";
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import NoData from "@/components/TheEmptyTable/NoData.vue";
import BaseDialog from '@/components/TheDialog/BaseDialog.vue'
import NewWebService from "@/components/TheLabratory/NewWebService";

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