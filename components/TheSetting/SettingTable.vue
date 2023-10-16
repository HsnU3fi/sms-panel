<template>
  <el-table
      ref="multipleTableRef"
      :data="tableData"
      class="table  w-100"
      v-if="tableData.length"
      @selection-change="handleSelectionChange"

  >

    <el-table-column property="key" label="Key">
      <template #header v-if="multipleSelection.length"></template>
    </el-table-column>
    <el-table-column property="value" label="Value">
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
              <el-dropdown-item @click="handleDelete(scope.$index, scope.row)"
              >
                <Icon name="eye"/>
                Edit
              </el-dropdown-item>

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
  <Pagination
      v-if="tableData.length"
      :total="totalPage"
      :currentPage="currentPage"
      :itemPerPage="itemPerPage"
      @changeHandler="getUsersApi"
      @itemPerPage="itemPerPage = $event"
      @currentPage="currentPage = $event"
  />
  <NoData v-if="tableData.length == 0"/>
  <ConfirmModal
      :state="confirmDeleteState"
      @confirm="deleteItemHandler"
      @cancel="confirmDeleteState.isDialogOpen = false"
  />
  <ConfirmModal
      :state="confirmSendSmsState"
      @confirm="confirmSendSmsState.isDialogOpen = false"
      @cancel="confirmSendSmsState.isDialogOpen = false"
  />
  <Alert :title="alert.title" :show="alert.show" :variant="alert.variant" :alertType="alert.alertType"
         :text="alert.text"/>
  <Loading :value="isLoading"/>

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
import {useSettingStore} from "../../store/users";

const settingStore = useSettingStore();
const isLoading = ref(false);
const itemPerPage = ref(2);
const totalPage = ref(2);
const currentPage = ref(1);
const multipleTableRef = ref();
const multipleSelection = ref([]);
const stagedItemToEdit = ref(null);
const props = defineProps({
  data: {
    default: () => [],
    type: Array,
  },

});
const data = ref(props.data);
const tableData = ref([]);
const alert = ref({
  text: "",
  show: false,
  alertType: "",
  variant: "",
  title: ''
})

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


  tableData.value = props.data.data;
  console.log('tableData')
  console.log(tableData.value)
  currentPage.value = props.data.meta.current_page
  console.log(currentPage.value)
  itemPerPage.value = props.data.meta.per_page
  totalPage.value = props.data.meta.total

const confirmDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete collection?",
  content: "Are you sure?",
});
const confirmSendSmsState = ref({
  type: "primary",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Send SMS",
  content: "Are you sure to send messages to these contacts?",
});
const confirmMultipleDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete message",
  content: `Are you sure to delete ${multipleSelection.value.length} message?`,
});
const stagedItemToDelete = ref(null);

//methods

const handleSelectionChange = (val) => {
  multipleSelection.value = val;
};
const getUsersApi = async (page) => {
  isLoading.value = true
  const result = await settingStore.getSetting(page)
  if (result.status === 200) {
    tableData.value = result.data.data
    currentPage.value = result.data.meta.current_page
    isLoading.value = false
  } else {
    isLoading.value = false
  }
}

const deleteItemHandler = async () => {
  const result = await settingStore.deleteItem(stagedItemToDelete.value.id)
  if (result.status === 200) {
    okAlert()
  } else {
    errorAlert()
  }
  confirmDeleteState.value.isDialogOpen = false

};
const deleteRow = (row) => {
  stagedItemToDelete.value = row;
  confirmDeleteState.value.content =
      "Are you sure you want to delete the " +
      row.Username +
      " collection? Any elements connected to this collection will no longer be connected. Create a collection with the same name in the next 7 days to restore its content.";
  confirmDeleteState.value.isDialogOpen = true;
};
const deleteSelectionHandler = () => {
  tableData.value = tableData.value.filter(
      (data) => !multipleSelection.value.find((select) => select == data)
  );
  confirmMultipleDeleteState.value.isDialogOpen = false;
};


</script>
