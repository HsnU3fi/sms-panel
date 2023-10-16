<template>
  <BaseLayout class="dashboard occasional-send">
    <div
      v-if="isShow"
      v-motion
      :initial="initial"
      :enter="enter"
      :delay="200"
      class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <div class="d-flex">
        <button @click="dialogVisible = true">New Special Message</button>
      </div>
      <Icon name="refresh-blue" />
    </div>
    <OccasialSendTable />
  </BaseLayout>
  <BaseDialog
    :title="'New Special Message'"
    :isDialogOpen="dialogVisible"
    okText="Submit"
    class="new-send-dialog occasional-send-dialog"
    @close="dialogVisible = false"
  >
    <OccasialNewSend />
  </BaseDialog>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import OccasialSendTable from "@/components/TheOccasionalSend/OccasialSendTable.vue";
import OccasialNewSend from "@/components/TheOccasionalSend/OccasialNewSend.vue";
import Icon from "@/components/TheIcon/Icon.vue";

import { ref } from "vue";

//state

const dialogVisible = ref(false);
const isShow = ref(false);

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

//mounted

onMounted(() => {
  isShow.value = true;
});



</script>
