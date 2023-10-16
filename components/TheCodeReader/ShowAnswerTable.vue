<template>
  <div class="reponsive-table">
    <table class="table inline-editable-table show-code-table" :key="counter">
      <tr class="position-relative">
        <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        <th></th>
        <th class="action-bar">
          <span class="d-flex align-items-center action">
            <Icon name="upload" /> Export Excel</span
          >
        </th>
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
            {{ data[index][dataKey].label }}
          </span>
          <el-input
            type="text"
            v-if="
              data[index]['isEditMode'] &&
              data[index][dataKey].editable &&
              data[index][dataKey].type == 'text'
            "
            v-model="data[index][dataKey].label"
            class="input"
          />
          <textarea
            v-if="
              data[index]['isEditMode'] &&
              data[index][dataKey].editable &&
              data[index][dataKey].type == 'textarea'
            "
            v-model="data[index][dataKey].label"
            class="input"
            rows="5"
          />
          <el-select
            v-model="data[index][dataKey].label"
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
              :value="item.label"
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
          <span v-if="!data[index]['isEditMode']" @click="deleteRow(index)">
            <Icon name="trash-bg" />
          </span>
          <button
            class="primary done-btn"
            v-if="data[index]['isEditMode']"
            @click="editRow(index)"
          >
            Done
          </button>
        </td>
      </tr>
    </table>
  </div>
  <ConfirmModal
    :state="confirmDeleteState"
    @confirm="deleteHandler"
    @cancel="confirmDeleteState.isDialogOpen = false"
  />
</template>

<script setup>
import ConfirmModal from "@/components/TheConfirmModal/ConfirmModal.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref, defineProps, defineEmits, watch } from "vue";

//emits

const emit = defineEmits("data");

//props

const props = defineProps({
  data: {
    default: [],
    type: Array,
  },
});

//state

const data = ref(props.data);
const columns = ["ITEM1", "ITEM2", "ITEM1"];
const dataList = ref(
  data.value.map((item) => {
    return Object.keys(item);
  })
);
const counter = ref(0);
const confirmDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete Folder",
  content: "Are you sure to delete this record?",
});
const stagedItemToDelete = ref(null);

//methods

const editRow = (row) => {
  data.value[row].isEditMode = !data.value[row].isEditMode;
};
const deleteRow = (row) => {
  stagedItemToDelete.value = row;
  confirmDeleteState.value.isDialogOpen = true;
};
const deleteHandler = () => {
  data.value = data.value.filter(
    (d, index) => index !== stagedItemToDelete.value
  );
  dataList.value = data.value.map((item) => {
    return Object.keys(item);
  });
};
//watch

watch(
  () => data.value,
  (newVal) => {
    emit("data", newVal);
  }
);
</script>