<template>
  <div
    class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <label for="Sender">Sender</label>
    <el-select
      v-model="state.sender"
      class="select-box"
      placeholder="Sender"
      size="large"
      id="Sender"
    >
      <el-option
        v-for="sender in senderOptions"
        :key="sender.value"
        :label="sender.label"
        :value="sender.value"
      />
    </el-select>
  </div>
  <div
    class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
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
  <div
    class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
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

  <div
    class="form-item"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
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
  sender: "",
  archive: "",
  folder: "",
  isSMS: false,
  isSendNumber: false,
});
const senderOptions = [
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
</script>
