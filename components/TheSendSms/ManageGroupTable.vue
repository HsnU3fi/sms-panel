<template>
  <el-skeleton style="width: 100%;" :rows="6" :loading="isLoading" animated>


    <el-table
      :data="tableData"
      class="table inline-editable-table"
      v-if="tableData.length"
      @selection-change="handleSelectionChange"

  >
    <el-table-column property="id" label="Id"
    >
      <template #header v-if="multipleSelection.length">
      </template>
    </el-table-column>
    <el-table-column property="name" label="Name">
      <template #header v-if="multipleSelection.length"></template>
    </el-table-column>
    <el-table-column property="description" label="Description">
      <template #header v-if="multipleSelection.length"></template>
    </el-table-column>
    <el-table-column property="status" label="Status">
      <template #header v-if="multipleSelection.length"></template>
    </el-table-column>
    <el-table-column property="created_at" label="Created At">
      <template #header v-if="multipleSelection.length"></template>
    </el-table-column>


    <el-table-column width="20">
      <template #default="scope">
        <el-dropdown placement="left">
          <button class="none">
            <Icon name="dots"/>
          </button>
          <template #dropdown>
            <el-dropdown-menu>


<!--              <el-dropdown-item @click="handleDelete(scope.$index, scope.row)"-->
<!--              >-->

<!--                <Icon name="eye"/>-->
<!--                Edit-->
<!--              </el-dropdown-item>-->


              <el-dropdown-item @click="deleteRow(scope.row)"
              >
                <Icon name="trash"/>
                Delete
              </el-dropdown-item
              >

            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template
      >
    </el-table-column>
  </el-table>
  <NoData v-if="tableData.length == 0"/>
  <ConfirmModal
      :state="confirmDeleteState"
      @confirm="deleteItemHandler"
      @cancel="confirmDeleteState.isDialogOpen = false"
  />

  <Alert :title="alert.title" :show="alert.show" :variant="alert.variant" :alertType="alert.alertType"
         :text="alert.text"/>

  </el-skeleton>

</template>
<script setup>


import Loading from "@/components/TheLoading/Loading.vue";
import ConfirmModal from "@/components/TheConfirmModal/ConfirmModal.vue";
import NoData from "@/components/TheUser/NoData.vue";
import Pagination from "@/components/ThePagination/Pagination.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import {ref, computed, defineProps} from "vue";
import {ElTable} from "element-plus";
import Alert from "@/components/TheAlert/Alert.vue";
import {useGContactStore} from "../../store/posibilities";

//======================================================================================================================
//state
const router = useRouter();
const gContactStore = useGContactStore()
const isLoading = ref(false);
const itemPerPage = ref(2);
const totalPage = ref(2);
const currentPage = ref(1);
const multipleTableRef = ref();
const multipleSelection = ref([]);
const stagedItemToEdit = ref(null);
const data = ref(props.data);
const tableData = ref([]);
const stagedItemToDelete = ref(null);
//======================================================================================================================

const props = defineProps({
  data: {
    default: () => [],
    type: Array,
  },
});
//======================================================================================================================
const alert = ref({
  text: "",
  show: false,
  alertType: "",
  variant: "",
  title: ''
})
//======================================================================================================================
const okAlert = () => {
  confirmDeleteState.value.isDialogOpen = false
  alert.value.show = true
  alert.value.text = "Done successfully"
  alert.value.title = "Success"
  alert.value.alertType = "success"
  alert.value.variant = "outlined"
  setTimeout(() => {
    alert.value.show = false
  }, 3000);
};
//======================================================================================================================
const errorAlert = () => {
  confirmDeleteState.value.isDialogOpen = false
  alert.value.show = true
  alert.value.text = "An error was encountered"
  alert.value.title = "Error"
  alert.value.alertType = "error"
  alert.value.variant = "outlined"
  setTimeout(() => {
    alert.value.show = false
  }, 3000);
};

//======================================================================================================================
const confirmDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete Group Contact?",
  content: "Are you sure?",
});
//======================================================================================================================
//methods
const handleSelectionChange = (val) => {
  multipleSelection.value = val;
};
//======================================================================================================================
const getGContactApi = async () => {
  isLoading.value = true
  const result = await gContactStore.getGContact()
  if (result.status === 200) {
    tableData.value = result.data.data
    isLoading.value = false
  } else {
    isLoading.value = false
  }
}
getGContactApi()
//======================================================================================================================
const deleteItemHandler = async () => {
  const result = await gContactStore.deleteItem(stagedItemToDelete.value.id)
  if (result.status === 200) {
    getGContactApi()
    okAlert()
  } else {
    errorAlert()
  }
  confirmDeleteState.value.isDialogOpen = false

};
//======================================================================================================================
const deleteRow = (row) => {
  stagedItemToDelete.value = row;
  confirmDeleteState.value.content =
      "Are you sure you want to delete?"
  confirmDeleteState.value.isDialogOpen = true;
};

</script>













<!--<template>-->
<!--  <div class="reponsive-table">-->
<!--    <table class="table inline-editable-table" v-if="dataList.length">-->
<!--      <tr>-->
<!--        <th v-for="(column, index) in columns" :key="index">{{ column }}</th>-->
<!--        <th>action</th>-->
<!--      </tr>-->
<!--      <tr v-for="(dataItem, index) in dataList" :key="index">-->
<!--        <td-->
<!--          v-for="dataKey in dataItem"-->
<!--          :key="dataKey"-->
<!--          v-show="data[index][dataKey].type"-->
<!--        >-->
<!--          <span-->
<!--            v-if="-->
<!--              !data[index]['isEditMode'] ||-->
<!--              (data[index]['isEditMode'] && !data[index][dataKey].editable)-->
<!--            "-->
<!--          >-->
<!--            {{ data[index][dataKey].value }}-->
<!--          </span>-->
<!--          <el-input-->
<!--            type="text"-->
<!--            v-if="-->
<!--              data[index]['isEditMode'] &&-->
<!--              data[index][dataKey].editable &&-->
<!--              data[index][dataKey].type !== 'select'-->
<!--            "-->
<!--            v-model="data[index][dataKey].value"-->
<!--            class="input"-->
<!--          />-->
<!--          <el-select-->
<!--            v-model="data[index][dataKey].value"-->
<!--            class="select-box"-->
<!--            placeholder="Select"-->
<!--            size="large"-->
<!--            v-if="-->
<!--              data[index]['isEditMode'] &&-->
<!--              data[index][dataKey].editable &&-->
<!--              data[index][dataKey].type == 'select'-->
<!--            "-->
<!--          >-->
<!--            <el-option-->
<!--              v-for="item in data[index][dataKey].options"-->
<!--              :key="item.value"-->
<!--              :label="item.label"-->
<!--              :value="item.value"-->
<!--            />-->
<!--          </el-select>-->
<!--        </td>-->
<!--        <td class="actions">-->
<!--          <span-->
<!--            @click="editRow(index)"-->
<!--            v-if="!data[index]['isEditMode']"-->
<!--            class="pointer"-->
<!--          >-->
<!--            <Icon name="edit-bg" />-->
<!--          </span>-->
<!--          <span-->
<!--            v-if="!data[index]['isEditMode']"-->
<!--            @click="openDeleteDialog(index)"-->
<!--          >-->
<!--            <Icon name="trash-bg" />-->
<!--          </span>-->
<!--          <button-->
<!--            class="primary"-->
<!--            v-if="data[index]['isEditMode']"-->
<!--            @click="editRow(index)"-->
<!--          >-->
<!--            Done-->
<!--          </button>-->
<!--        </td>-->
<!--      </tr>-->
<!--    </table>-->
<!--    <NoData v-if="!dataList.length" />-->
<!--  </div>-->
  <ConfirmModal
    :state="confirmDeleteState"
    @confirm="deleteRow"
    @cancel="confirmDeleteState.isDialogOpen = false"
  />
<!--</template>-->

<!--<script setup>-->
<!--import ConfirmModal from "@/components/TheConfirmModal/ConfirmModal.vue";-->
<!--import NoData from "@/components/TheEmptyTable/NoData.vue";-->
<!--import Icon from "@/components/TheIcon/Icon.vue";-->
<!--import { ref } from "vue";-->

<!--//state-->

<!--const columns = [-->
<!--  "Code",-->
<!--  "Group Name",-->
<!--  "Description",-->
<!--  "Status",-->
<!--  "Members",-->
<!--  "Access",-->
<!--];-->
<!--const data = ref([-->
<!--  {-->
<!--    code: {-->
<!--      value: 1,-->
<!--      editable: false,-->
<!--      type: "number",-->
<!--    },-->
<!--    groupName: {-->
<!--      value: "Lorem 1",-->
<!--      editable: true,-->
<!--      type: "text",-->
<!--    },-->
<!--    description: {-->
<!--      value: "Lorem Ipsum is simply ",-->
<!--      editable: true,-->
<!--      type: "text",-->
<!--    },-->
<!--    status: {-->
<!--      value: 1,-->
<!--      editable: true,-->
<!--      type: "select",-->
<!--      options: [-->
<!--        {-->
<!--          value: 0,-->
<!--          label: "DeActive",-->
<!--        },-->
<!--        {-->
<!--          value: 1,-->
<!--          label: "Active",-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--    members: {-->
<!--      value: 50,-->
<!--      editable: false,-->
<!--      type: "number",-->
<!--    },-->
<!--    access: {-->
<!--      value: 0,-->
<!--      editable: true,-->
<!--      type: "select",-->
<!--      options: [-->
<!--        {-->
<!--          value: 0,-->
<!--          label: "No",-->
<!--        },-->
<!--        {-->
<!--          value: 1,-->
<!--          label: "Yes",-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--    isEditMode: false,-->
<!--  },-->
<!--  {-->
<!--    code: {-->
<!--      value: 1,-->
<!--      editable: false,-->
<!--      type: "number",-->
<!--    },-->
<!--    groupName: {-->
<!--      value: "Lorem 1",-->
<!--      editable: true,-->
<!--      type: "text",-->
<!--    },-->
<!--    description: {-->
<!--      value: "Lorem Ipsum is simply ",-->
<!--      editable: true,-->
<!--      type: "text",-->
<!--    },-->
<!--    status: {-->
<!--      value: 1,-->
<!--      editable: true,-->
<!--      type: "select",-->
<!--      options: [-->
<!--        {-->
<!--          value: 0,-->
<!--          label: "DeActive",-->
<!--        },-->
<!--        {-->
<!--          value: 1,-->
<!--          label: "Active",-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--    members: {-->
<!--      value: 50,-->
<!--      editable: false,-->
<!--      type: "number",-->
<!--    },-->
<!--    access: {-->
<!--      value: 0,-->
<!--      editable: true,-->
<!--      type: "select",-->
<!--      options: [-->
<!--        {-->
<!--          value: 0,-->
<!--          label: "No",-->
<!--        },-->
<!--        {-->
<!--          value: 1,-->
<!--          label: "Yes",-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--    isEditMode: false,-->
<!--  },-->
<!--  {-->
<!--    code: {-->
<!--      value: 1,-->
<!--      editable: false,-->
<!--      type: "number",-->
<!--    },-->
<!--    groupName: {-->
<!--      value: "Lorem 1",-->
<!--      editable: true,-->
<!--      type: "text",-->
<!--    },-->
<!--    description: {-->
<!--      value: "Lorem Ipsum is simply ",-->
<!--      editable: true,-->
<!--      type: "text",-->
<!--    },-->
<!--    status: {-->
<!--      value: 1,-->
<!--      editable: true,-->
<!--      type: "select",-->
<!--      options: [-->
<!--        {-->
<!--          value: 0,-->
<!--          label: "DeActive",-->
<!--        },-->
<!--        {-->
<!--          value: 1,-->
<!--          label: "Active",-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--    members: {-->
<!--      value: 50,-->
<!--      editable: false,-->
<!--      type: "number",-->
<!--    },-->
<!--    access: {-->
<!--      value: 0,-->
<!--      editable: true,-->
<!--      type: "select",-->
<!--      options: [-->
<!--        {-->
<!--          value: 0,-->
<!--          label: "No",-->
<!--        },-->
<!--        {-->
<!--          value: 1,-->
<!--          label: "Yes",-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--    isEditMode: false,-->
<!--  },-->
<!--  {-->
<!--    code: {-->
<!--      value: 1,-->
<!--      editable: false,-->
<!--      type: "number",-->
<!--    },-->
<!--    groupName: {-->
<!--      value: "Lorem 1",-->
<!--      editable: true,-->
<!--      type: "text",-->
<!--    },-->
<!--    description: {-->
<!--      value: "Lorem Ipsum is simply ",-->
<!--      editable: true,-->
<!--      type: "text",-->
<!--    },-->
<!--    status: {-->
<!--      value: 1,-->
<!--      editable: true,-->
<!--      type: "select",-->
<!--      options: [-->
<!--        {-->
<!--          value: 0,-->
<!--          label: "DeActive",-->
<!--        },-->
<!--        {-->
<!--          value: 1,-->
<!--          label: "Active",-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--    members: {-->
<!--      value: 50,-->
<!--      editable: false,-->
<!--      type: "number",-->
<!--    },-->
<!--    access: {-->
<!--      value: 0,-->
<!--      editable: true,-->
<!--      type: "select",-->
<!--      options: [-->
<!--        {-->
<!--          value: 0,-->
<!--          label: "No",-->
<!--        },-->
<!--        {-->
<!--          value: 1,-->
<!--          label: "Yes",-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--    isEditMode: false,-->
<!--  },-->
<!--]);-->
<!--const dataList = ref(-->
<!--  data.value.map((item) => {-->
<!--    return Object.keys(item);-->
<!--  })-->
<!--);-->
<!--const confirmDeleteState = ref({-->
<!--  type: "danger",-->
<!--  confirmText: "Yes",-->
<!--  cancelText: "Cancel",-->
<!--  isDialogOpen: false,-->
<!--  title: "Delete message",-->
<!--  content: "Are you sure to delete this group?",-->
<!--});-->
<!--const stagedItemToDelete = ref(null);-->

<!--//methods-->

<!--const editRow = (row) => {-->
<!--  data.value[row].isEditMode = !data.value[row].isEditMode;-->
<!--};-->
<!--const deleteRow = () => {-->
<!--  data.value = data.value.filter(-->
<!--    (d, index) => index !== stagedItemToDelete.value-->
<!--  );-->
<!--  dataList.value = data.value.map((item) => {-->
<!--    return Object.keys(item);-->
<!--  });-->
<!--  confirmDeleteState.value.isDialogOpen = false;-->
<!--};-->
<!--const openDeleteDialog = (row) => {-->
<!--  stagedItemToDelete.value = row;-->
<!--  confirmDeleteState.value.isDialogOpen = true;-->
<!--};-->
<!--</script>-->