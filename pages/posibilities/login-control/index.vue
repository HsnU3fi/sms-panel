<template>
  <BaseLayout class="dashboard">
    <div
      v-if="isShow"
      v-motion
      :initial="initial"
      :enter="enter"
      :delay="200"
      class="d-flex justify-content-start align-items-center g-20 action-bar-table col-12"
    >
      <button type="button">Excel Export</button>
      <button type="button">Print</button>
    </div>
    <LoginControlTable />
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import LoginControlTable from "@/components/TheLoginControl/LoginControlTable.vue";
import Icon from "@/components/TheIcon/Icon.vue";

import { ref } from "vue";

//state
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
