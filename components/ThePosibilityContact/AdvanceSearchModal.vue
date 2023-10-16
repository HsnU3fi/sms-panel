<template>
  <div class="form-item">
    <label for="Reciever">Reciever</label>
    <el-select
      v-model="state.reciever"
      class="select-box"
      placeholder="Reciever"
      size="large"
      id="Reciever"
    >
      <el-option
        v-for="reciever in recieverOptions"
        :key="reciever.value"
        :label="reciever.label"
        :value="reciever.value"
      />
    </el-select>
  </div>
  <div class="form-item">
    <label for="Archive">Archive</label>
    <el-select
      v-model="state.archive"
      class="select-box"
      placeholder="Archive"
      size="large"
      id="Archive"
    >
      <el-option
        v-for="archive in archiveOptions"
        :key="archive.value"
        :label="archive.label"
        :value="archive.value"
      />
    </el-select>
  </div>
  <div class="form-item">
    <label for="Folder">Folder</label>
    <el-select
      v-model="state.folder"
      class="select-box"
      placeholder="Folder"
      size="large"
      id="Folder"
    >
      <el-option
        v-for="folder in folderOptions"
        :key="folder.value"
        :label="folder.label"
        :value="folder.value"
      />
    </el-select>
  </div>

  <div class="form-item">
    <el-checkbox v-model="state.isSMS" label="SMS text" size="large" />
    <el-checkbox
      v-model="state.isSendNumber"
      label="Sender number"
      size="large"
    />
  </div>
</template>

<script setup>
import CalendarBlue from "@/components/TheIcon/single-icons/CalendarBlue.vue";
import { ref } from "vue";

//state

const state = ref({
  reciever: "",
  archive: "",
  folder: "",
  isSMS: false,
  isSendNumber: false,
});
const recieverOptions = [
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
];
const archiveOptions = [
  {
    value: "none",
    label: "none",
  },
  {
    value: "Lorem 1",
    label: "Lorem 1",
  },
  {
    value: "Lorem 2",
    label: "Lorem 2",
  },
];
const folderOptions = [
  {
    value: "Recive",
    label: "Recive",
  },
  {
    value: "Sends",
    label: "Sends",
  },
  {
    value: "Deletes",
    label: "Deletes",
  },
  {
    value: "Lorem Folder 1",
    label: "Lorem Folder 1",
  },
  {
    value: "Lorem Folder 2",
    label: "Lorem Folder 2",
  },
];
</script>