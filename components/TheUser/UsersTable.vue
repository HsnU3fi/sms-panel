<template>

  <el-table
      ref="multipleTableRef"
      :data="tableData"
      class="table  w-100"
      v-if="tableData.length"
      @selection-change="handleSelectionChange"

  >
    <el-table-column property="id" label="Id"
    >
      <template #header v-if="multipleSelection.length">
      </template>
    </el-table-column>

    <el-table-column property="username" label="User name">
      <template #header v-if="multipleSelection.length"></template>
    </el-table-column>
    <el-table-column property="first_name" label="First Name">
      <template #header v-if="multipleSelection.length"></template>
    </el-table-column>
    <el-table-column property="last_name" label="Last Name" show-overflow-tooltip>
      <template #header v-if="multipleSelection.length"></template>
    </el-table-column>
    <el-table-column property="display_name" label="Display Name">
      <template #header v-if="multipleSelection.length"></template>
    </el-table-column>
    <el-table-column property="created_at" label="Created At">
      <template #header v-if="multipleSelection.length"></template>
    </el-table-column>
    <el-table-column property="type" label="Type">
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

              <el-dropdown-item @click="handlePermissions(scope.$index, scope.row)"
              >
                <Icon name="key"/>
                Permissions
              </el-dropdown-item
              >
              <el-dropdown-item @click="handleNumbers(scope.row)"
              >
                <Icon name="mobile"/>
                Numbers
              </el-dropdown-item
              >
              <el-dropdown-item @click="handleSetting(scope.row)"
              >
                <Icon name="gear"/>
                Setting
              </el-dropdown-item>

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
  <Alert :title="alert.title" :show="alert.show" :variant="alert.variant" :alertType="alert.alertType"
         :text="alert.text"/>

</template>
<script setup>


import Loading from "@/components/TheLoading/Loading.vue";
import ConfirmModal from "@/components/TheConfirmModal/ConfirmModal.vue";
import NoData from "@/components/TheUser/NoData.vue";
import Pagination from "@/components/ThePagination/Pagination.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import {ref, computed, defineProps} from "vue";
import {ElTable} from "element-plus";
import {useUsersStore} from "../../store/users";
import Alert from "@/components/TheAlert/Alert.vue";
//======================================================================================================================
//state
const router = useRouter();
const usersStore = useUsersStore()
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
tableData.value = props.data.data
itemPerPage.value = props.data.meta.per_page || 0
totalPage.value = props.data.meta.total || 0
//======================================================================================================================
const confirmDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete User?",
  content: "Are you sure?",
});


//======================================================================================================================
//methods
const handleSelectionChange = (val) => {
  multipleSelection.value = val;
};
//======================================================================================================================
const getUsersApi = async (page) => {
  const result = await usersStore.getUsers(page)
  if (result.status === 200) {
    tableData.value = result.data.data
    currentPage.value = result.data.meta.current_page
  }
}
//======================================================================================================================
const deleteItemHandler = async () => {
  const result = await usersStore.deleteItem(stagedItemToDelete.value.id)
  if (result.status === 200) {
    getUsersApi()
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
      "Are you sure you want to delete ? "
  confirmDeleteState.value.isDialogOpen = true;
};

//======================================================================================================================
const handleSetting = (row) => {
  router.push('/users/setting/' + row.id)

};
//======================================================================================================================
const handleNumbers = (row) => {
  console.log(row)
  router.push('/users/numbers/' + row.id)
};
//======================================================================================================================
const handlePermissions = () => {
  router.push('/users/Permissions/')

};
//======================================================================================================================

</script>
