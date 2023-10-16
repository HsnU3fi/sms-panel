<template>
  <form
    class="new-send-bulk-shipping"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <section class="number form-item">
      <p class="label mt-0">Sender</p>
      <el-select
        v-model="state.sender"
        class="select-box"
        placeholder="Sender"
        size="large"
        id="selectNumber"
      >
        <el-option
          v-for="sender in senderOptions"
          :key="sender.value"
          :label="sender.label"
          :value="sender.value"
        />
      </el-select>
    </section>
    <section class="form-item">
      <p class="label mt-0">Reciver</p>
      <el-select
        v-model="state.reciver"
        class="select-box"
        placeholder="Reciver"
        size="large"
        id="selectNumber"
      >
        <el-option
          v-for="reciver in reciverOptions"
          :key="reciver.value"
          :label="reciver.label"
          :value="reciver.value"
        />
      </el-select>
    </section>
    <div class="form-item">
      <label for="Title" class="labe">Title</label>
      <input type="text" placeholder="Title" id="Title" v-model="state.title" />
    </div>
    <div class="send-text form-item">
      <p class="label">SMS Text</p>
      <textarea
        name="sms-text"
        id="SmsText"
        cols="60"
        rows="10"
        v-model="state.smsText"
      >
      </textarea>
      <p class="counter" :class="state.smsText.length > 160 && 'error'">
        {{ state.smsText.length }} / 160
      </p>
    </div>
    <el-divider />
    <section class="recievers form-item">
      <h4 class="label mt-0">Familiar numbers</h4>
      <p class="label">Import</p>
      <el-select
        v-model="state.importType"
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
        v-if="state.importType !== '' && state.importType !== 'Phone book'"
      >
        <Uploader :file="state.file" />
      </div>

      <div
        class="contact-box mb-0 mt-2"
        v-if="state.importType == 'Phone book'"
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
      <textarea v-model="state.desc" rows="8"></textarea>
    </div>
    <el-divider />
    <div class="form-item">
      <h4 class="label">Contct Group</h4>
      <el-checkbox-group v-model="state.checkbox">
        <el-checkbox
          v-for="(item, index) in checkboxGroup"
          :key="index"
          :label="item"
          >{{ item }}</el-checkbox
        >
      </el-checkbox-group>
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

const state = ref({
  sender: "",
  reciver: "",
  title: "",
  smsText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
  importType: "Phone book",
  file: [],
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
});
const senderOptions = [
  {
    value: "+012548754",
    label: "+012548754",
  },
];
const reciverOptions = [
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
const checkboxGroup = ["N1 Group Name", "N2 Group Name"];

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
