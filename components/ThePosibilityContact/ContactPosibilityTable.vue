<template>
  <el-skeleton style="width: 100%;" :rows="6" :loading="isLoading" animated>
  <el-table
      ref="multipleTableRef"
      :data="tableData"
      :class="multipleSelection.length ? 'expanded' : ''"
      class="table w-100 base-selction-table"
      @selection-change="handleSelectionChange"
      v-if="tableData.length"
  >
<!--    <el-table-column type="selection"></el-table-column>-->

    <el-table-column property="id" label="id"
    >
      <template #header v-if="multipleSelection.length">
        <div class="d-flex align-items-center">
          {{ multipleSelection.length }} SMS Selected
        </div>
      </template>
    </el-table-column
    >
<!--    <el-table-column property="SMS" label="SMS" show-overflow-tooltip-->
<!--    >-->
<!--      <template #header v-if="multipleSelection.length"></template>-->
<!--      <template #default="scope">-->
<!--        {{ sliceSmsHandler(scope.$index, scope.row.SMS.count) }}-->
<!--        ...<br/><a-->
<!--          class="show-more"-->
<!--          href="javascript:void(0)"-->
<!--          @click="-->
<!--            sliceSmsHandler(scope.$index, scope.row.SMS.count == 21 ? 42 : 21)-->
<!--          "-->
<!--      >{{ scope.row.SMS.count == 21 ? "Show More" : "Show Less" }}</a-->
<!--      >-->
<!--      </template>-->
<!--    </el-table-column>-->
    <el-table-column property="fullname" label="Full Name"
    >
      <template #header v-if="multipleSelection.length"></template
      >
    </el-table-column>
    <el-table-column property="allonym" label="Allonym"
    >
      <template #header v-if="multipleSelection.length"></template
      >
    </el-table-column>
    <el-table-column property="email" label="Email"
    >
      <template #header v-if="multipleSelection.length"></template
      >
    </el-table-column>
    <el-table-column property="mobile" label="Mobile"
    >
      <template #header v-if="multipleSelection.length"></template
      >
    </el-table-column>
    <el-table-column property="telephone" label="Telephone"
    >
      <template #header v-if="multipleSelection.length"></template
      >
    </el-table-column>
    <el-table-column property="fax" label="Fax"
    >
      <template #header v-if="multipleSelection.length"></template
      >
    </el-table-column>
    <el-table-column property="company" label="Company"
    >
      <template #header v-if="multipleSelection.length"></template
      >
    </el-table-column>
    <el-table-column property="postal_code" label="Postal Code"
    >
      <template #header v-if="multipleSelection.length"></template
      >
    </el-table-column>
    <el-table-column property="state" label="State"
    >
      <template #header v-if="multipleSelection.length"></template
      >
    </el-table-column>
    <el-table-column property="city" label="City"
    >
      <template #header v-if="multipleSelection.length"></template
      >
    </el-table-column>
    <el-table-column property="birth_day" label="Birth Day"
    >
      <template #header v-if="multipleSelection.length"></template
      >
    </el-table-column>
    <el-table-column property="occasion_date" label="Occasion Date"
    >
      <template #header v-if="multipleSelection.length"></template
      >
    </el-table-column>
    <el-table-column property="address" label="Address"
    >
      <template #header v-if="multipleSelection.length"></template
      >
    </el-table-column>
    <el-table-column property="description" label="Description"
    >
      <template #header v-if="multipleSelection.length"></template
      >
    </el-table-column>
    <el-table-column property="created_at" label="Created At"
    >
      <template #header v-if="multipleSelection.length"></template
      >
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

  <Pagination
      v-if="tableData.length"
      :total="tableData.length"
      :currentPage="currentPage"
      @changeHandler="getContactApi"
      :itemPerPage="itemPerPage"
      @itemPerPage="itemPerPage = $event"
      @currentPage="currentPage = $event"
  />
  </el-skeleton>
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
import Pagination from "@/components/ThePagination/Pagination.vue";
import ConfirmModal from "@/components/TheConfirmModal/ConfirmModal.vue";
import NoData from "@/components/TheEmptyTable/NoData.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import {ref, computed, defineEmits} from "vue";
import {ElTable} from "element-plus";

//state
import {useContactStore} from "../../store/posibilities";
const contactStore = useContactStore()
const isLoading = ref(true);
const itemPerPage = ref(5);
const currentPage = ref(1);
const multipleTableRef = ref();
const multipleSelection = ref([]);
const stagedItemToEdit = ref(null);
const tableData = ref([
  {
    order: 1,
    SMS: {
      text: "Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply",
      count: 21,
    },
    DateHour: "12:56 2023/5/19",
    Sender: "+1451585625",
    Reciver: "+1451585625",
    credit: "$0.0025",
    FullName: "Donald Rayman",
  },
]);
const confirmDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete Contact?",
  content: "Are you sure?",
});
const confirmMultipleDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete Contact?",
  content: `Are you sure to delete ${multipleSelection.value.length} message?`,
});
const stagedItemToDelete = ref(null);
const confirmReplyState = ref({
  type: "primary",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Reply SMS",
  content: "Are you sure about sending SMS to selected users?",
});

//emits

const emit = defineEmits("openMoveModal");


//methods

const handleSelectionChange = (val) => {
  multipleSelection.value = val;
};
const deleteItemHandler = async () => {
  const result = await contactStore.deleteItem(stagedItemToDelete.value.id)
    if (result.status === 200) {
      getContactApi()
      okAlert()
    } else {
      errorAlert()
    }
  confirmDeleteState.value.isDialogOpen = false

};
const sliceSmsHandler = (index, count) => {
  tableData.value[index].SMS.count = count;
  return tableData.value[index].SMS.text.slice(0, count);
};
const handleMoveFolder = (x, y) => {
  emit("openMoveModal");
};
const deleteRow = (row) => {
  stagedItemToDelete.value = row;
  confirmDeleteState.value.isDialogOpen = true;
};
const deleteSelectionHandler = () => {
  tableData.value = tableData.value.filter(
      (data) => !multipleSelection.value.find((select) => select == data)
  );
  confirmMultipleDeleteState.value.isDialogOpen = false;
};


const getContactApi = async (page) => {
  isLoading.value = true
  const result = await contactStore.getContact(page)
  if (result.status === 200) {
    tableData.value = result.data.data
    currentPage.value = result.data.meta.current_page
    isLoading.value = false
  } else {
    isLoading.value = false
  }
}
getContactApi(1)
</script>
