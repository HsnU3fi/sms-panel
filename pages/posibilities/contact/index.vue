<template>
  <BaseLayout class="dashboard posibility-contact">
    <div class="d-flex action-bar-table col-12 flex-column"
         v-motion
         :initial="initial"
         :enter="enter"
         :delay="200">
      <InfoBox :infoOptions="infoOptions" :title="'Tittle'"/>
      <el-divider/>
      <div class="d-flex align-items-center contact-count">
        <Icon name="border-profile"/>
        <span class="mw-2">Total number of contacts: {{ countContacts }}</span>
      </div>
      <el-divider/>
      <div class="d-flex justify-content-between align-items-center g-20">
        <div class="d-flex w-100 left">
          <!--          <el-input-->
          <!--            v-model="search"-->
          <!--            class="w-50 mw-0 search-field"-->
          <!--            placeholder="Search"-->
          <!--          >-->
          <!--            <template #suffix-->
          <!--              ><span class="filter" @click="isAdvancedSearchVisible = true"-->
          <!--                ><Icon name="filter" /> </span-->
          <!--            ></template>-->
          <!--            <template #prefix><Icon name="search" /></template>-->
          <!--          </el-input>-->
          <el-dropdown>
            <el-button class="add-contact">
              Add
              <Icon name="arrow-down-blue"/>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="openAddContactDialog"
                >
                  <Icon name="profile"/>
                  Add New Contact
                </el-dropdown-item
                >
                <el-dropdown-item @click="openAddFileDialog"
                >
                  <Icon name="folder-add"/>
                  Add File
                </el-dropdown-item
                >
                <el-dropdown-item @click="openQuickAddDialog"
                >
                  <Icon name="add-square"/>
                  Quick Add
                </el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <button
              @click="openManageGroupDialog"
              type="button"
              class="manage-group"
          >
            Manage Group
          </button>
        </div>
        <!--        <el-dropdown split-button type="primary">-->
        <!--          Send-->
        <!--          <template #dropdown>-->
        <!--            <el-dropdown-menu>-->
        <!--              <el-dropdown-item>Smart Send to Contacts</el-dropdown-item>-->
        <!--              <el-dropdown-item>Send to Contact Selected</el-dropdown-item>-->
        <!--            </el-dropdown-menu>-->
        <!--          </template>-->
        <!--        </el-dropdown>-->
      </div>
    </div>
    <ContactPosibilityTable/>

    <!-- advance search dialog -->

    <BaseDialog
        :title="'Advanced Search'"
        :isDialogOpen="isAdvancedSearchVisible"
        okText="Search"
        cancelText="Cancel"
        class="medium-dialog"
        @close="isAdvancedSearchVisible = false"
        @cancelClicked="isAdvancedSearchVisible = false"
    >
      <AdvanceSearchModal/>
    </BaseDialog>

    <!-- add contact dialog  -->

    <AddContactDialog :title="'Add Contact'"

                      :isDialogOpen="isAddContactDialogOpen"
                      okText="Add"
                      cancelText="Cancel"
                      class="medium-dialog base-modal"
                      @close="closeAddContactDialog"
    />
    <!-- manage group dialog  -->

    <BaseDialog
        :title="'Manage GSend to Contact Selectedroup'"
        :isDialogOpen="isManageGroupDialogOpen"
        class="manage-group-dialog asd"
        @close="closeManageGroupDialog"
    >
      <ManageGroupDialog
      />
    </BaseDialog>

    <!-- add file dialog  -->

    <BaseDialog
        :title="'Add File'"
        :isDialogOpen="isAddFileDialogOpen"
        okText="Add"
        class="base-modal"
        @close="closeAddFileDialog"
    >
      <AddFileModal
      />
    </BaseDialog>

    <!-- quick add dialog  -->

    <BaseDialog
        :title="'Quick Add'"
        :isDialogOpen="isQuickAddDialogOpen"
        okText="Add"
        cancelText="Cancel"
        class="base-modal"
        @close="closeQuickAddDialog"
        @cancelClicked="closeQuickAddDialog"
    >
      <QuickAddModal
      />
    </BaseDialog>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import AdvanceSearchModal from "@/components/ThePosibilityContact/AdvanceSearchModal.vue";
import ContactPosibilityTable from "@/components/ThePosibilityContact/ContactPosibilityTable.vue";
import AddFileModal from "@/components/ThePosibilityContact/AddFileModal.vue";
import QuickAddModal from "@/components/ThePosibilityContact/QuickAddModal.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";
import AddContactDialog from "@/components/TheSendSms/AddContactDialog.vue";
import ManageGroupDialog from "@/components/TheSendSms/ManageGroupDialog.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import {ref} from "vue";
import {useContactStore} from "../../../store/posibilities";

const contactStore = useContactStore()

//state

const isNewSendVisible = ref(false);
const isAdvancedSearchVisible = ref(false);
const isMoveDialogVisible = ref(false);
const search = ref("");
const state = ref({
  folder: "",
});
const isAddContactDialogOpen = ref(false);
const isManageGroupDialogOpen = ref(false);
const isAddFileDialogOpen = ref(false);
const isQuickAddDialogOpen = ref(false);
const infoOptions = ref([]);
const countContacts = ref(0);

//animation variables

const initial = {
  x: -50,
  opacity: 0,
  transition: {
    stiffness: 100,
  },
};
const enter = {
  x: 0,
  opacity: 1,
  transition: {
    stiffness: 100,
    ease: "easeInOut",
  },
};

//methods

const openAddContactDialog = () => {
  isAddContactDialogOpen.value = true;
};
const closeAddContactDialog = () => {
  isAddContactDialogOpen.value = false;
};

const openManageGroupDialog = () => {
  isManageGroupDialogOpen.value = true;
};
const closeManageGroupDialog = () => {
  isManageGroupDialogOpen.value = false;
};
const openAddFileDialog = () => {
  isAddFileDialogOpen.value = true;
};
const closeAddFileDialog = () => {
  isAddFileDialogOpen.value = false;
};
const openQuickAddDialog = () => {
  isQuickAddDialogOpen.value = true;
};
const closeQuickAddDialog = () => {
  isQuickAddDialogOpen.value = false;
};


const getContactApi = async () => {
  const result = await contactStore.getContact()
  if (result.status === 200) {
    countContacts.value = result.data.data.length
    console.log(countContacts.value)
  }
}
getContactApi()
</script>
