<template>
  <div class="reponsive-table">
    <table class="table inline-editable-table" :key="counter">
      <tr>
        <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        <th></th>
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
              data[index][dataKey].type !== 'select'
            "
            v-model="data[index][dataKey].label"
            class="input"
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
            class="primary"
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
const columns = ["Folder Name", "Status"];
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