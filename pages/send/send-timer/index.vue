<template>
  <BaseLayout class="dashboard send-timer">
    <div
      v-if="isShow"
      v-motion
      :initial="initial"
      :enter="enter"
      :delay="200"
      class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <div class="d-flex">
        <button @click="dialogVisible = true">New Send</button>
      </div>
      <Icon name="refresh-blue" />
    </div>
    <SendTimerTable />
  </BaseLayout>
  <BaseDialog
    :title="'New Send'"
    :isDialogOpen="dialogVisible"
    okText="Send"
    cancelText="Back"
    class="new-send-dialog"
    @close="dialogVisible = false"
    @cancelClicked="dialogVisible = false"
  >
    <NewSendModal />
  </BaseDialog>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import SendTimerTable from "@/components/TheSendTimer/SendTimerTable.vue";
import NewSendModal from "@/components/TheSendTimer/NewSendModal.vue";
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
