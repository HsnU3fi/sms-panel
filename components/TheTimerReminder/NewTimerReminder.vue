<template>
  <form
    class="new-send-bulk-shipping"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  >
    <div class="form-item">
      <p class="label mt-0">Sender</p>
      <el-select
        v-model="state.sender"
        class="select-box"
        placeholder="Sender"
        size="large"
      >
        <el-option
          v-for="sender in senderOptions"
          :key="sender.value"
          :label="sender.label"
          :value="sender.value"
        />
      </el-select>
    </div>
    <div class="number form-item">
      <p class="label mt-0">Reciver</p>
      <el-select
        v-model="state.reciever"
        class="select-box"
        placeholder="Reciver"
        size="large"
      >
        <el-option
          v-for="reciver in recieverOptions"
          :key="reciver.value"
          :label="reciver.label"
          :value="reciver.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label for="Title">Title</label>
      <input type="text" id="Title" placeholder="Title" v-model="state.title" />
    </div>
    <div class="form-item">
      <label for="Keyword">Keyword</label>
      <input
        type="text"
        id="Keyword"
        placeholder="Keyword"
        v-model="state.keyword"
      />
    </div>
    <div class="form-item">
      <label for="snooz_keyword">Snooz Keyword</label>
      <input
        type="text"
        id="snooz_keyword"
        placeholder="Snooz Keyword"
        v-model="state.snoozKeyword"
      />
    </div>
    <div class="form-item">
      <label for="cancel_keyword">Cancel Keyword</label>
      <input
        type="text"
        id="cancel_keyword"
        placeholder="Cancel Keyword"
        v-model="state.cancelKeyword"
      />
    </div>
    <div class="form-item">
      <label for="number_of_reminders">Number of reminders</label>
      <input
        type="text"
        id="number_of_reminders"
        placeholder="Number of reminders"
        v-model="state.remindersNumber"
      />
    </div>
    <div class="form-item">
      <label for="number_of_reminders_min">Reminder after (min)</label>
      <input
        type="text"
        id="number_of_reminders_min"
        placeholder="Reminder after (min)"
        v-model="state.minRemindersNumber"
      />
    </div>
    <div class="send-text form-item">
      <p class="label mt-0">SMS Text</p>
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
      <h4 class="label">Recivers</h4>
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
          class="primary pointer me-2 mt-0"
          type="button"
        >
          Add Contact
        </button>
        <button
          @click="openManageGroupDialog"
          class="primary pointer mt-0"
          type="button"
        >
          Manage Group
        </button>
      </div>
    </section>
    <div class="send-text form-item">
      <textarea
        name="sms-text"
        id="SmsText"
        cols="60"
        rows="10"
        v-model="state.desc"
      >
      </textarea>
    </div>
    <el-divider />
    <div class="d-flex g-20 flex-column flex-md-row">
      <div class="choose-time-mode">
        <el-radio-group
          v-model="state.timeMode"
          class="flex-row flex-md-column"
          @change="handleTimeMode"
        >
          <div class="form-item">
            <el-radio :label="0">Once</el-radio>
          </div>
          <div class="form-item">
            <el-radio :label="1">Daily</el-radio>
          </div>
          <div class="form-item">
            <el-radio :label="2">Weekly</el-radio>
          </div>
          <div class="form-item">
            <el-radio :label="3">Mountly</el-radio>
          </div>
          <div class="form-item">
            <el-radio :label="4">Yearly</el-radio>
          </div>
          <div class="form-item">
            <label class="el-radio hourly-label">Hourly</label>
          </div>
        </el-radio-group>
      </div>
      <div class="w-100 d-flex flex-column justify-content-between">
        <div class="form-item">
          <el-date-picker
            v-model="state.date"
            type="date"
            placeholder="Pick a date"
            :default-value="new Date(2010, 9, 1)"
            class="date-picker"
            id="Birthday"
            :prefix-icon="CalendarBlue"
            :disabled="disableList.includes(1)"
          />
        </div>
        <div>
          <div class="form-item">
            <el-select
              v-model="state.day"
              class="select-box"
              placeholder="Day"
              size="large"
              id="Day"
              :disabled="disableList.includes(2)"
            >
              <el-option
                v-for="day in dayOptions"
                :key="day.value"
                :label="day.label"
                :value="day.value"
              />
            </el-select>
          </div>
          <div class="form-item">
            <el-select
              v-model="state.month"
              class="select-box"
              placeholder="Month"
              size="large"
              id="Month"
              :disabled="disableList.includes(3)"
            >
              <el-option
                v-for="month in monthOptions"
                :key="month.value"
                :label="month.label"
                :value="month.value"
              />
            </el-select>
          </div>
          <div class="d-flex double-column">
            <div class="form-item day">
              <el-select
                v-model="state.monthDay"
                class="select-box"
                placeholder="Day"
                size="large"
                :disabled="disableList.includes(4)"
              >
                <el-option
                  v-for="day in 30"
                  :key="day"
                  :label="day"
                  :value="day"
                />
              </el-select>
            </div>
            <div class="form-item">
              <el-select
                v-model="state.month"
                class="select-box"
                placeholder="Month"
                size="large"
                id="Month"
                :disabled="disableList.includes(4)"
              >
                <el-option
                  v-for="month in monthOptions"
                  :key="month.value"
                  :label="month.label"
                  :value="month.value"
                />
              </el-select>
            </div>
          </div>
          <div class="form-item">
            <el-time-picker
              v-model="state.date"
              format="HH:mm"
              placeholder="Pick a time"
              class="date-picker"
              id="Birthday"
              :prefix-icon="ClockBlue"
            />
          </div>
        </div>
      </div>
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
import ClockBlue from "@/components/TheIcon/single-icons/ClockBlue.vue";
import CalendarBlue from "@/components/TheIcon/single-icons/CalendarBlue.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import AddContactDialog from "@/components/TheSendSms/AddContactDialog.vue";
import ManageGroupDialog from "@/components/TheSendSms/ManageGroupDialog.vue";
import { ref } from "vue";

//state

const state = ref({
  sender: "",
  title: "",
  reciever: "",
  keyword: "",
  snoozKeyword: "",
  cancelKeyword: "",
  remindersNumber: 0,
  minRemindersNumber: 10,
  smsText: "",
  desc: "",
  importType: "Phone book",
  file: [],
  timeMode: 1,
  date: "",
});
const senderOptions = [
  {
    value: "+012548754",
    label: "+012548754",
  },
];
const recieverOptions = [
  {
    value: "+012548754",
    label: "+012548754",
  },
  {
    value: "+012548754",
    label: "+012548754",
  },
  {
    value: "+012548754",
    label: "+012548754",
  },
  {
    value: "+012548754",
    label: "+012548754",
  },
  {
    value: "+012548754",
    label: "+012548754",
  },
];
const infoOptions = ref([
  "You can select one or several groups or several contacts at the same time",
  "If you select a group, all the numbers in the group will be selected",
  "You can enter your contacts through the phone book menu",
]);
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
const dayOptions = [
  {
    value: "Saturday",
    label: "Saturday",
  },
  {
    value: "Sunday",
    label: "Sunday",
  },
  {
    value: "Monday",
    label: "Monday",
  },
  {
    value: "Tuesday",
    label: "Tuesday",
  },
  {
    value: "Wednesday",
    label: "Wednesday",
  },
  {
    value: "Friday",
    label: "Friday",
  },
  {
    value: "Thursday",
    label: "Thursday",
  },
];
const monthOptions = [
  {
    value: "January",
    label: "January",
  },
  {
    value: "February",
    label: "February",
  },
  {
    value: "March",
    label: "March",
  },
  {
    value: "April",
    label: "April",
  },
  {
    value: "May",
    label: "May",
  },
  {
    value: "June",
    label: "June",
  },
  {
    value: "July",
    label: "July",
  },
  {
    value: "August",
    label: "August",
  },
  {
    value: "September",
    label: "September",
  },
  {
    value: "October",
    label: "October",
  },
  {
    value: "November",
    label: "November",
  },
  {
    value: "December",
    label: "December",
  },
];
const isAddContactDialogOpen = ref(false);
const isManageGroupDialogOpen = ref(false);
const disableList = ref([1, 2, 3, 4]);

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

const handleTimeMode = (e) => {
  if (e !== 1 && e !== 0) {
    disableList.value = [1, 2, 3, 4];
    disableList.value = disableList.value.filter((data) => data !== e);
  } else if (e == 0) {
    disableList.value = [1, 2, 3, 4];
    disableList.value = disableList.value.filter((data) => data !== e + 1);
  } else {
    disableList.value = [1, 2, 3, 4];
  }
};
</script>
