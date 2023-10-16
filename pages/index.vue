<template>

  <Loading class="m-t" :value="isLoading"/>
</template>

<script setup>
import Loading from "@/components/TheLoading/Loading.vue";
import {useLoginStore} from "../store/auth";

import {ref} from "vue";

const isLoading = ref(true)


const loading = () => {
  setTimeout(() => {
    isLoading.value = false
  }, 3000);
}


loading()
</script>

<style>
.m-t {
  margin-top: 150px;
}
</style>