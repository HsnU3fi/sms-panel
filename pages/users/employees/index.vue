<template>
  <BaseLayout class="dashboard employees">
    <div class="d-flex action-bar-table col-12 flex-column">
      <div class="d-flex justify-content-between align-items-center">
        <!--        <el-input-->
        <!--            v-model="search"-->
        <!--            class="w-50 mw-0 search-field"-->
        <!--            placeholder="Search"-->
        <!--        >-->
        <!--          <template #suffix-->
        <!--          ><span class="filter"><Icon name="filter"/> </span-->
        <!--          ></template>-->
        <!--          <template #prefix>-->
        <!--            <Icon name="search"/>-->
        <!--          </template>-->
        <!--        </el-input>-->
        <button type="button" @click="isNewEmployeeVisible = true">
          + Add New Employees
        </button>
      </div>
    </div>
    <el-skeleton style="width: 100%;" :rows="5" :loading="isLoading" animated>
      <EmployeeTable  :data="tableData"/>


      <AddNewEmployee
          :title="'Add New Employee'"
          :isDialogOpen="isNewEmployeeVisible"
          okText="Add"
          cancelText="Cancel"
          class="medium-dialog base-modal"
          @close="isNewEmployeeVisible = false"
          @cancelClicked="isNewEmployeeVisible = false"/>
    </el-skeleton>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import Loading from "@/components/TheLoading/Loading.vue";
import AdvanceSearchModal from "@/components/TheRecieve/AdvanceSearchModal.vue";
import EmployeeTable from "@/components/TheEmployee/EmployeeTable.vue";
import AddNewEmployee from "@/components/TheEmployee/AddNewEmployee.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import {useEmployeesStore} from "../../../store/users";

import {ref} from "vue";



const employeesStore = useEmployeesStore()
let isLoading = ref(true)
let tableData = ref([]);
//======================================================================================================================

const getEmployeesApi = async () => {
  const result = await employeesStore.getEmployees(1)
  if (result.status === 200) {
    tableData.value = result.data
    isLoading.value = false
  } else {
    isLoading.value = false
  }
};
getEmployeesApi()
//======================================================================================================================


const isNewEmployeeVisible = ref(false);
const search = ref("");
const state = ref({
  folder: "",
});


//methods
</script>
