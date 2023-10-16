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
        <button type="button" @click="isNewUserVisible = true">
          + Add New Users
        </button>
      </div>
    </div>
    <el-skeleton style="width: 100%;" :rows="6" :loading="isLoading" animated>

      <UserTable :data="tableData"/>

      <AddNewUser
          :title="'Add New User'"
          :isDialogOpen="isNewUserVisible"
          okText="Add"
          cancelText="Cancel"
          class="medium-dialog base-modal"
          @close="isNewUserVisible = false"
          @cancelClicked="isNewUserVisible = false"/>

    </el-skeleton>

  </BaseLayout>

</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import UserTable from "@/components/TheUser/UsersTable.vue";
import AddNewUser from "@/components/TheUser/AddNewUsers.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import {useUsersStore} from "../../../store/users";

import {ref} from "vue";


const usersStore = useUsersStore()

let isLoading = ref(true)
let tableData = ref([])

const getUsersApi = async () => {
  const result = await usersStore.getUsers(1)
  if (result.status === 200) {
    tableData.value = result.data
    isLoading.value = false
  } else {
    isLoading.value = false
  }
};
getUsersApi()


const isNewUserVisible = ref(false);
const search = ref("");
const state = ref({
  folder: "",
});


//methods
</script>
