<template>
  <el-upload
    v-model:file-list="props.file"
    class="upload-demo"
    :action="props.file"
    :limit="1"
    drag
    :on-success="handleSuccess"
    :on-error="handleError"
  >
    <el-button type="light" class="upload-btn"
      ><Icon name='upload' /> Click to upload</el-button
    > <div class="divider"></div> or Drag and Drop File Here
  </el-upload>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";

import { defineProps } from "vue";

const props = defineProps();
const handleSuccess=async (response, file, fileList)=> {
  // Handle successful upload

}

const handleError=(err, file, fileList)=> {
  // Handle upload error
}

</script>

<style>
</style>