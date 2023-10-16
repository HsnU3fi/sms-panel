<template>
  <div class="wrapper">
    <div class="info">
      <span @click="handleCollapse" v-if="!isSidebarCollapsed" class="close">
        <Icon name="arrow-left-bg" />
      </span>
      <div class="template-header">
        {{ templateHeader }}
      </div>
      <span class="d-none d-md-inline">|</span>
      <div class="date">
        <Icon name="calendar" />
        {{ today }}
      </div>
    </div>
    <div class="actions">
      <div class="notifications"><Icon name="notification" /></div>
      <div class="avatar">
        <el-avatar :size="36" :src="userInfo.avatar" />
        <Icon name="arrow-down" />
      </div>
    </div>
  </div>
</template>


<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
const userInfo = ref({
  avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
});
const templateHeader = ref("SMS Dashboard");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
let today = new Date();
today = today.toLocaleDateString("en-US", options);
const isSidebarCollapsed = useSidebar();
const handleCollapse = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};
</script>

<style>
</style>