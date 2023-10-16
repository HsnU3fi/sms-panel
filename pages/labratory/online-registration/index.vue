<template>
  <BaseLayout class="dashboard labratory-online-registration">
    <div
        class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <section class="body">
        <h1 class="title">Online registration guide</h1>
        <section class="items">
          <section class="item">
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