<template>

  <div class="d-flex bg">
    <LoginUi v-if="route.path==='/auth/login'"/>

    <BaseSidebar v-if="route.path!=='/auth/login'"></BaseSidebar>
    <el-container class="d-flex">
      <el-header v-if="route.path!=='/auth/login'" class="layout-header" :class="isSidebarCollapsed && 'fix-wrapper'">
        <BaseHeader/>
      </el-header>
      <el-main :class="isSidebarCollapsed && route.path!=='/auth/login'?'fix-wrapper':''">
        <NuxtPage/>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import BaseSidebar from "@/components/TheSidebar/BaseSidebar.vue";
import BaseHeader from "@/components/TheHeader/BaseHeader.vue";
import LoginUi from "@/components/TheLoginUi/LoginUi.vue";

const route = useRoute()
const isSidebarCollapsed = useSidebar();
</script>

<style>

</style>