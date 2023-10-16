<template>
  <form
    class="new-send-bulk-shipping"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <section class="number form-item">
      <p class="label mt-0">Your Number</p>
      <el-select
        v-model="sendSmsState.selectedNumber"
        class="select-box"
        placeholder="Select"
        size="large"
        id="selectNumber"
      >
        <el-option
          v-for="number in numberOptions"
          :key="number.value"
          :label="number.label"
          :value="number.value"
        />
      </el-select>
    </section>
    <div class="send-text form-item">
      <p class="label">SMS Text</p>
      <textarea
        name="sms-text"
        id="SmsText"
        cols="60"
        rows="10"
        v-model="sendSmsState.smsText"
      >
      </textarea>
      <p class="counter" :class="sendSmsState.smsText.length > 160 && 'error'">
        {{ sendSmsState.smsText.length }} / 160
      </p>
    </div>
    <el-divider />
    <section class="recievers form-item">
      <h4 class="label mt-0">Receivers</h4>
      <p class="label">Import</p>
      <el-select
        v-model="sendSmsState.importType"
        class="select-box"
        placeholder="Select"
        size="large"
        @change="changeRecieverType"
      >
        <el-option
          v-for="reciever in recieversOptions"
          :key="reciever.value"
          :label="reciever.label"
          :value="reciever.value"
        />
      </el-select>
      <div class="form-item">
        <InfoBox :infoOptions="infoOptions" :title="'Guide'" />
      </div>
      <div
        class="form-item"
        v-if="
          sendSmsState.importType !== '' &&
          sendSmsState.importType !== 'Phone book'
        "
      >
        <Uploader :file="sendSmsState.file" />
      </div>

      <div
        class="contact-box mb-0 mt-2"
        v-if="sendSmsState.importType == 'Phone book'"
      >
        <button
          @click="openAddContactDialog"
          class="primary pointer mt-0 me-2"
          type="button"
        >
          Add Contact
        </button>
        <button
          @click="openManageGroupDialog"
          class="primary mt-0 pointer"
          type="button"
        >
          Manage Group
        </button>
      </div>
    </section>
    <div class="form-item">
      <textarea v-model="sendSmsState.desc" rows="8"></textarea>
    </div>
    <el-divider />
    <div class="form-item">
      <el-checkbox
        v-model="sendSmsState.isDuplicatedNumberAllowed"
        label="Sending to duplicate numbers is allowed"
        size="large"
      />
    </div>
  </form>
  <BaseDialog
    :title="'Add Contact'"
    :isDialogOpen="isAddContactDialogOpen"
    class="base-modal"
    okText="Add"
    @close="closeAddContactDialog"
    ><AddContactDialog
  /></BaseDialog>
  <BaseDialog
    :title="'Manage Group'"
    :isDialogOpen="isManageGroupDialogOpen"
    okText="Done"
    class="manage-group-dialog asd"
    @close="closeManageGroupDialog"
    ><ManageGroupDialog
  /></BaseDialog>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";
import Uploader from "@/components/TheSendSms/Uploader.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import AddContactDialog from "@/components/TheSendSms/AddContactDialog.vue";
import ManageGroupDialog from "@/components/TheSendSms/ManageGroupDialog.vue";

import { ref } from "vue";

//state

const sendSmsState = ref({
  selectedNumber: "",
  smsText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
  importType: "Phone book",
  isDuplicatedNumberAllowed: false,
  file: [],
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
});
const numberOptions = [
  {
    value: "+012548754",
    label: "+012548754",
  },
];
const recieversOptions = [
  {
    value: "Excel",
    label: "Excel",
  },
  {
    value: "Text",
    label: "Text",
  },
  {
    value: "Phone book",
    label: "Phone book",
  },
  {
    value: "CSV",
    label: "CSV",
  },
  {
    value: "VCF",
    label: "VCF",
  },
];
const testSms = ref("");
const infoOptions = ref([
  "You can select one or several groups or several contacts at the same time",
  "If you select a group, all the numbers in the group will be selected",
  "You can enter your contacts through the phone book menu",
]);
const isAddContactDialogOpen = ref(false);
const isManageGroupDialogOpen = ref(false);

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

const changeRecieverType = (e) => {
  if (e == "Excel") {
    infoOptions.value = [
      "Your input Excel file must contain a number column like the sample file (download the sample file)",
      "Pay attention that the name of the table where the numbers are located should be Sheet1",
      "If this file has been exported from somewhere, copy the number column in a new file",
      "Please note that the first line of the Excel file is not read, so you can use it to insert the title",
    ];
  } else if (e == "Text") {
    infoOptions.value = [
      "The text file containing the numbers should be saved with the extension txt or dat like (sample file).",
      "You can separate the numbers with Enter",
    ];
  } else if (e == "Phone book") {
    infoOptions.value = [
      "You can select one or several groups or several contacts at the same time",
      "If you select a group, all the numbers in the group will be selected",
      "You can enter your contacts through the phone book menu",
    ];
  } else if (e == "CSV") {
    infoOptions.value = ["Choose your desired file."];
  } else if (e == "VCF") {
    infoOptions.value = ["Choose your desired file."];
  }
};

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
</script>
