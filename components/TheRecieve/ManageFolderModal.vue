<template>
  <div class="form-item">
    <label for="FolderName">Folder Name</label>
    <div>
      <input
        type="text"
        id="FolderName"
        placeholder="Folder Name"
        v-model="state.folderName"
      />
      <button
        :disabled="state.folderName === ''"
        class="primary"
        @click="addFolderHandler"
      >
        Add
      </button>
    </div>
  </div>
  <NoData v-if="data.length == 0" />
  <ManageFolderTable
    v-if="data.length !== 0"
    :data="data"
    :key="counter"
    @data="updateDataHandler"
  />
</template>

<script setup>
import NoData from "@/components/TheEmptyTable/NoData.vue";
import ManageFolderTable from "@/components/TheRecieve/ManageFolderTable.vue";
import { ref } from "vue";

//state

const state = ref({
  folderName: "",
});
const data = ref([
  {
    folderName: {
      value: "Lorem 1",
      label: "Lorem 1",
      editable: true,
      type: "text",
    },
    status: {
      value: 1,
      editable: true,
      type: "select",
      label: "Active",
      options: [
        {
          value: 0,
          label: "DeActive",
        },
        {
          value: 1,
          label: "Active",
        },
      ],
    },
    isEditMode: false,
  },
]);
const counter = ref(0);

//methods

const addFolderHandler = () => {
  data.value.push({
    folderName: {
      value: state.value.folderName,
      label: state.value.folderName,
      editable: true,
      type: "text",
    },
    status: {
      value: 1,
      editable: true,
      type: "select",
      label: "Active",
      options: [
        {
          value: 0,
          label: "DeActive",
        },
        {
          value: 1,
          label: "Active",
        },
      ],
    },
    isEditMode: false,
  });
  state.value.folderName = "";
  counter.value++;
};
const updateDataHandler = (val) => {
  data.value = val;
  counter.value++;
};
</script>

<style>
</style>