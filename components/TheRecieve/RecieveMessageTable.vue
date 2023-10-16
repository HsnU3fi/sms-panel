<template>
  <el-table
    ref="multipleTableRef"
    :data="tableData"
    :class="multipleSelection.length ? 'expanded' : ''"
    class="table w-100 base-selction-table"
    @selection-change="handleSelectionChange"
    v-if="tableData.length"
  >
    <el-table-column type="selection"></el-table-column>

    <el-table-column property="order" label="order"
      ><template #header v-if="multipleSelection.length">
        <div class="d-flex align-items-center">
          {{ multipleSelection.length }} SMS Selected
        </div>
      </template></el-table-column
    >
    <el-table-column property="SMS" label="SMS" show-overflow-tooltip
      ><template #header v-if="multipleSelection.length"> </template>
      <template #default="scope">
        {{ sliceSmsHandler(scope.$index, scope.row.SMS.count) }}
        ...<br /><a
          class="show-more"
          href="javascript:void(0)"
          @click="
            sliceSmsHandler(scope.$index, scope.row.SMS.count == 21 ? 42 : 21)
          "
          >{{ scope.row.SMS.count == 21 ? "Show More" : "Show Less" }}</a
        >
      </template>
    </el-table-column>
    <el-table-column property="DateHour" label="Date/Hour"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Sender" label="Sender"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Reciver" label="Reciver"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="credit" label="credit ($)"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="FullName" label="Full Name"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column width="20">
      <template #header v-if="multipleSelection.length">
        <div class="flex-row d-flex actions">
          <span class="d-flex align-items-center">
            <Icon name="printer" /> Print
          </span>
          <div class="divider"></div>
          <span class="d-flex align-items-center">
            <Icon name="upload" /> Export Excel
          </span>
          <div class="divider"></div>
          <span
            class="d-flex align-items-center pointer"
            @click="confirmMultipleDeleteState.isDialogOpen = true"
          >
            <Icon name="trash-blue" /> Delete
          </span>
        </div>
      </template>
      <template #default="scope">
        <el-dropdown placement="left">
          <button class="none">
            <Icon name="dots" />
          </button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                @click="handleMoveFolder(scope.$index, scope.row)"
                ><Icon name="left-right" /> Move
              </el-dropdown-item>

              <el-dropdown-item @click="confirmReplyState.isDialogOpen = true"
                ><Icon name="messages" /> Reply</el-dropdown-item
              >
              <el-dropdown-item @click="deleteRow(scope.row)"
                ><Icon name="trash" /> Delete</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown></template
      >
    </el-table-column>
  </el-table>
  <NoData v-if="tableData.length == 0" />

  <Pagination
    v-if="tableData.length"
    :total="tableData.length"
    :currentPage="currentPage"
    :itemPerPage="itemPerPage"
    @itemPerPage="itemPerPage = $event"
    @currentPage="currentPage = $event"
  />
  <ConfirmModal
    :state="confirmDeleteState"
    @confirm="deleteItemHandler"
    @cancel="confirmDeleteState.isDialogOpen = false"
  />
  <ConfirmModal
    :state="confirmMultipleDeleteState"
    @confirm="deleteSelectionHandler"
    @cancel="confirmMultipleDeleteState.isDialogOpen = false"
  />
  <ConfirmModal
    :state="confirmReplyState"
    @cancel="confirmReplyState.isDialogOpen = false"
  />
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import UserTable from "@/components/TheUser/UsersTable.vue";
import AddNewUser from "@/components/TheUser/AddNewUsers.vue";
import Icon from "@/components/TheIcon/Icon.vue";

import {ref} from "vue";
import {useReceivedStore} from "../../store/messages";


const receivedStore = useReceivedStore()
let isLoading = ref(true)
let tableData = ref([])

const getRecieveApi = async () => {
  const result = await receivedStore.getUsers(1)
  if (result.status === 200) {
    tableData.value = result.data
    isLoading.value = false
  } else {
    isLoading.value = false
  }
};
getRecieveApi()


const isNewUserVisible = ref(false);
const search = ref("");
const state = ref({
  folder: "",
});
</script>
