<template>
  <div class="base-layout-wrapper" :key="counter">
    <div class="" :key="counter">
      <div class="breadcrumbs col-12" :key="counter">
        <el-skeleton style="width: 20%;" :rows="1" :loading="isLoading" animated>

        <span
            v-for="(breadcrumb, index) in breadcrumbs"
            :key="index"
            class="breadcrumb"
        >{{ breadcrumb.title }}
          <Icon name="arrow-right" v-if="isArrowAllowed(index)"
          /></span>
        </el-skeleton>
      </div>

    </div>
    <div class="wrapper col12">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import {ref, reactive} from "vue";
import {useRoute} from "vue-router";

//state

const breadcrumbs = reactive([]);
const route = useRoute();
const counter = ref(0);
const isLoading = ref(true);

//mounted

onMounted(() => {
  let fullPath = route.fullPath.split("/").slice(1);
  fullPath.forEach((path) => {
    // if (path.replace("-", " ")) {
    //   debugger
    //   let secondPart = path.split("-");
    //   path = "";
    //   secondPart.map((item) => {
    //     path += item.charAt(0).toUpperCase() + item.slice(1);
    //   });
    //   return path;
    // }
    breadcrumbs.push({
      route: "",
      title: path.charAt(0).toUpperCase() + path.slice(1),
    });
  });
  counter.value++;
  isLoading.value = false
});

//methods

const isArrowAllowed = (index) => {
  if (index == breadcrumbs.length - 1) return false;
  return true;
};
</script>

<style>
</style>