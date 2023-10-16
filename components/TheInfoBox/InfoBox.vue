<template>
  <ul class="info-box">
    <el-collapse accordion @change="test" v-model="isCollapsed">
      <el-collapse-item name="1">
        <template #title>
          <span class="d-flex align-items-center">
            <Icon name="info-red" />
            <span v-if="title !== ''" class="title">{{ title }}</span>
          </span>
          <div class="icon">
            <Icon name="arrow-up-fill" />
          </div>
        </template>
        <li v-for="(option, index) in infoOptions" :key="index">
          {{ option }}
        </li>
      </el-collapse-item>
    </el-collapse>
  </ul>
</template>

<script setup>
import { defineProps, ref } from "vue";
import Icon from "@/components/TheIcon/Icon.vue";
const props = defineProps({
  infoOptions: {
    default: [],
  },
  title: {
    default: "",
  },
  isCollapsed: {
    default: false
  }
});
const emit = defineEmits()
const isCollapsed = computed({
  set(value) {
    emit('update:isCollapsed', value)
  },
  get() {
    return props.isCollapsed
  }
})
const test = (e) => {
  if (e) {
    isCollapsed.value = false;
    console.log(e);
  } else {
    isCollapsed.value = true;
    console.log("f");
  }
  // console.log(isCollapsed.value);
};
</script>

<style>
</style>