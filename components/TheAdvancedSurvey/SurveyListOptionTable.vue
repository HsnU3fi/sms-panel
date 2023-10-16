<template>
  <div class="reponsive-table">
    <table class="table inline-editable-table" v-if="dataList.length">
      <tr>
        <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        <th>action</th>
      </tr>
      <tr v-for="(dataItem, index) in dataList" :key="index">
        <td
          v-for="dataKey in dataItem"
          :key="dataKey"
          v-show="data[index][dataKey].type"
        >
          <span
            v-if="
              !data[index]['isEditMode'] ||
              (data[index]['isEditMode'] && !data[index][dataKey].editable)
            "
          >
            {{ data[index][dataKey].value }}
          </span>
          <el-input
            type="text"
            v-if="
              data[index]['isEditMode'] &&
              data[index][dataKey].editable &&
              data[index][dataKey].type !== 'select'
            "
            v-model="data[index][dataKey].value"
            class="input"
          />
          <el-select
            v-model="data[index][dataKey].value"
            class="select-box"
            placeholder="Select"
            size="large"
            v-if="
              data[index]['isEditMode'] &&
              data[index][dataKey].editable &&
              data[index][dataKey].type == 'select'
            "
          >
            <el-option
              v-for="item in data[index][dataKey].options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </td>
        <td class="actions">
          <span
            @click="editRow(index)"
            v-if="!data[index]['isEditMode']"
            class="pointer"
          >
            <Icon name="edit-bg" />
          </span>
          <span
            v-if="!data[index]['isEditMode']"
            @click="openDeleteDialog(index)"
          >
            <Icon name="trash-bg" />
          </span>
          <button
            class="primary"
            v-if="data[index]['isEditMode']"
            @click="editRow(index)"
          >
            Done
          </button>
        </td>
      </tr>
    </table>
    <NoData v-if="!dataList.length" />
  </div>
  <ConfirmModal
    :state="confirmDeleteState"
    @confirm="deleteRow"
    @cancel="confirmDeleteState.isDialogOpen = false"
  />
</template>

<script setup>
import ConfirmModal from "@/components/TheConfirmModal/ConfirmModal.vue";
import NoData from "@/components/TheEmptyTable/NoData.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const columns = ["Option", "Keyword", "True Answer", "Sender", "Text Answer"];
const data = ref([
  {
    Option: {
      value: 1,
      editable: false,
      type: "number",
    },
    Keyword: {
      value: "Lorem 1",
      editable: true,
      type: "text",
    },
    TrueAnswer: {
      value: "Lorem Ipsum is simply ",
      editable: true,
      type: "text",
    },
    Sender: {
      value: "+9598465",
      editable: false,
      type: "text",
    },
    TextAnswer: {
      value: "Lorem Ipsum is simply ",
      editable: true,
      type: "number",
    },
    isEditMode: false,
  },
]);
const dataList = ref(
  data.value.map((item) => {
    return Object.keys(item);
  })
);
const confirmDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete message",
  content: "Are you sure to delete this option?",
});
const stagedItemToDelete = ref(null);

//methods

const editRow = (row) => {
  data.value[row].isEditMode = !data.value[row].isEditMode;
};
const deleteRow = () => {
  data.value = data.value.filter(
    (d, index) => index !== stagedItemToDelete.value
  );
  dataList.value = data.value.map((item) => {
    return Object.keys(item);
  });
  confirmDeleteState.value.isDialogOpen = false;
};
const openDeleteDialog = (row) => {
  stagedItemToDelete.value = row;
  confirmDeleteState.value.isDialogOpen = true;
};
</script>