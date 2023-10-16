<template>
  <div class="reponsive-table">
    <table class="table inline-editable-table" v-if="dataList.length">
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
        <td>
          <el-dropdown placement="left" v-if="!data[index]['isEditMode']">
            <button class="none">
              <Icon name="dots" />
            </button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="editRow(index)">
                  <Icon name="edit" />
                  Edite
                </el-dropdown-item>
                <el-dropdown-item @click="handleDelete(scope.$index, scope.row)">
                  <Icon name="trash" />
                  Delete
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <section class="actions">
          <button
              v-if="data[index]['isEditMode']"
              class="done-btn"
              @click="editRow(index)"
          >
            <Icon name="tick-circle" />
          </button>
          <button
              v-if="data[index]['isEditMode']"
              class="done-btn"
              @click="discardRow(index)"
          >
            <Icon name="close-circle" />
          </button>
          </section>
        </td>
      </tr>
    </table>
    <NoData v-if="!dataList.length" />
  </div>
</template>

<script setup>
import ConfirmModal from "@/components/TheConfirmModal/ConfirmModal.vue";
import NoData from "@/components/TheEmptyTable/NoData.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const columns = [
  "Question",
  "Answer",
  "Order",
];
const data = ref([
  {
    Question: {
      value: 'Lorem 1',
      editable: true,
      type: "text",
    },
    Answer: {
      value: 4,
      editable: true,
      type: "number",
    },
    Order: {
      value: 1,
      editable: true,
      type: "number",
    },
    isEditMode: false,
  },
  {
    Question: {
      value: 'Lorem 1',
      editable: true,
      type: "text",
    },
    Answer: {
      value: 4,
      editable: true,
      type: "number",
    },
    Order: {
      value: 1,
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
const stagedItemToDelete = ref(null);
const orginalData = ref([])
//methods

const editRow = (row) => {
  orginalData.value.push({
    id: row,
    data: Object.assign(data.value[row])
  })
  data.value[row].isEditMode = !data.value[row].isEditMode;
};
const discardRow = (row) => {
  let item = orginalData.value.find(item=>item.id == row)
  if (item) {
    data.value[row] = item.data
    data.value[row].isEditMode = false
    let index = orginalData.value.findIndex(item=>item.id == row)
    orginalData.value.splice(index, 1)
  }
}
</script>