<template>
  <BaseLayout class="dashboard">
    <!-- <InfoBox :infoOptions="infoOptions" :title="'Tittle'" /> -->
    <div
      v-if="isShow"
      v-motion
      :initial="initial"
      :enter="enter"
      :delay="200"
      class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <button @click="isNewSendVisible = true">New reminder</button>

      <Icon name="refresh-blue" />
    </div>
    <TimeReminderTable />
  </BaseLayout>
  <TheDialogBaseDialog
    :title="'New Send'"
    class="new-send-dialog"
    okText="Send"
    :isDialogOpen="isNewSendVisible"
    cancelText="Back"
    @close="isNewSendVisible = false"
    @cancelClicked="isNewSendVisible = false"
  >
    <TheTimerReminderNewTimerReminder />
  </TheDialogBaseDialog>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import TimeReminderTable from "@/components/TheTimerReminder/TimeReminderTable.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
const isAdvancedSearchVisible = ref(false);
const isNewSendVisible = ref(false);
const search = ref("");
const isShow = ref(false);

const infoOptions = ref([]);

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
