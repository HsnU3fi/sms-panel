<template>
  <BaseLayout class="dashboard employees">
    <div class="d-flex action-bar-table col-12 flex-column">
      <div class="d-flex justify-content-between align-items-center">
        <el-skeleton style="width: 100%;" :rows="6" :loading="isLoading" animated>

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
          <el-table-column property="name" label="Name">
            <template #header v-if="multipleSelection.length"></template>
          </el-table-column>
          <el-table-column property="title" label="Title">
            <template #header v-if="multipleSelection.length"></template>
          </el-table-column>
          <el-table-column property="created_at" label="Created At">
            <template #header v-if="multipleSelection.length"></template>
          </el-table-column>

        </el-table>

        <NoData v-if="tableData.length == 0"/>
        </el-skeleton>
      </div>
    </div>
            <Pagination
                v-if="tableData.length"
                :total="totalPage"
                :currentPage="currentPage"
                :itemPerPage="itemPerPage"
                @changeHandler="getPermissionApi"
                @itemPerPage="itemPerPage = $event"
                @currentPage="currentPage = $event"
            />
  </BaseLayout>
</template>

<script setup>

import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import Loading from "@/components/TheLoading/Loading.vue";
import ConfirmModal from "@/components/TheConfirmModal/ConfirmModal.vue";
import NoData from "@/components/TheUser/NoData.vue";
import Pagination from "@/components/ThePagination/Pagination.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import {ref} from "vue";
import {ElTable} from "element-plus";
import {usePermissionStore} from "../../../store/users";
//======================================================================================================================
//state
const router = useRouter();
const permissionStore = usePermissionStore()
const isLoading = ref(true);
const itemPerPage = ref(2);
const totalPage = ref(2);
const currentPage = ref(1);
const multipleTableRef = ref();
const multipleSelection = ref([]);
const stagedItemToEdit = ref(null);
const tableData = ref([]);
const stagedItemToDelete = ref(null);

//======================================================================================================================
const alert = ref({
  text: "",
  show: false,
  alertType: "",
  variant: "",
  title: ''
})

//methods
const handleSelectionChange = (val) => {
  multipleSelection.value = val;
};
//======================================================================================================================
const getPermissionApi = async (page) => {
  isLoading.value = true
  const result = await permissionStore.getPermission(page)
  if (result.status === 200) {
    tableData.value = result.data.data
    currentPage.value = result.data.meta.current_page
    isLoading.value = false
  } else {
    isLoading.value = false
  }
}
getPermissionApi()
//======================================================================================================================
const handleSetting = (row) => {
  router.push('/users/setting/' + row.id)
};
</script>
