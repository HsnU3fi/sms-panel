<template>
  <BaseLayout class="dashboard bulk-shipping">
    <InfoBox
      v-if="currentStep"
      :infoOptions="infoOptions"
      :title="'Tittle'"
      v-motion
      :initial="initial"
      :enter="enter"
      :delay="200"
    />
    <div
      v-if="currentStep"
      v-motion
      :initial="initial"
      :enter="enter"
      :delay="200"
      class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <div class="d-flex">
        <button @click="isNewSendVisible = true">New Send</button>
        <el-input
          v-model="search"
          class="w-50 m-2"
          placeholder="Keyword Search"
        >
          <template #suffix
            ><span class="filter" @click="isAdvancedSearchVisible = true"
              ><Icon name="filter" /> </span
          ></template>
          <template #prefix
            ><Icon name="search" @click="isAdvancedSearchVisible = true"
          /></template>
        </el-input>
      </div>
      <Icon name="refresh-blue" />
    </div>
    <BulkShippingTable />
  </BaseLayout>
  <BaseDialog
    :title="'Advanced Search'"
    :isDialogOpen="isAdvancedSearchVisible"
    okText="Search"
    cancelText="Cancel"
    class="medium-dialog"
    @close="isAdvancedSearchVisible = false"
    @cancelClicked="isAdvancedSearchVisible = false"
  >
    <AdvanceSearchModal />
  </BaseDialog>
  <BaseDialog
    :title="'New Send'"
    :isDialogOpen="isNewSendVisible"
    okText="Send"
    cancelText="Back"
    class="medium-dialog"
    @close="isNewSendVisible = false"
    @cancelClicked="isNewSendVisible = false"
  >
    <NewSendModal />
  </BaseDialog>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import AdvanceSearchModal from "@/components/TheBulkShipping/AdvanceSearchModal.vue";
import NewSendModal from "@/components/TheBulkShipping/NewSendModal.vue";
import BulkShippingTable from "@/components/TheBulkShipping/BulkShippingTable.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
const isAdvancedSearchVisible = ref(false);
const isNewSendVisible = ref(false);
const search = ref("");

const infoOptions = ref([]);
const currentStep = ref(0);

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

//onmounted

onMounted(() => {
  currentStep.value = 1;
});
</script>
