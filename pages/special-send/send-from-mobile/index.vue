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
      <button @click="isNewSendVisible = true">SMS from New Mobile</button>

      <Icon name="refresh-blue" />
    </div>
    <SendFromMobileTable />
  </BaseLayout>
  <BaseDialog
    :title="'New Send'"
    class="new-send-dialog"
    okText="Next"
    :isDialogOpen="isNewSendVisible"
    cancelText="Back"
    @close="isNewSendVisible = false"
    @cancelClicked="isNewSendVisible = false"
  >
    <NewSendModal />
  </BaseDialog>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import NewSendModal from "@/components/TheSendFromMobile/NewSendModal.vue";
import SendFromMobileTable from "@/components/TheSendFromMobile/SendFromMobileTable.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
const isAdvancedSearchVisible = ref(false);
const isNewSendVisible = ref(false);
const search = ref("");

const infoOptions = ref([]);
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
