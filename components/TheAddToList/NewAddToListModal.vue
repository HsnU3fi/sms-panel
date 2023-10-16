<template>
  <form>
    <div class="form-item">
      <label class="d-flex align-items-center justify-content-between"
        >Tittle
      </label>
      <input type="text" placeholder="Tittle " v-model="state.title" />
    </div>
    <div class="form-item">
      <label for="Sender">Sender</label>
      <el-select
        v-model="state.sender"
        class="select-box"
        placeholder="Sender"
        size="large"
        id="sender"
      >
        <el-option
          v-for="sender in senderOptions"
          :key="sender.value"
          :label="sender.label"
          :value="sender.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label for="Reciver">Reciver</label>
      <el-select
        v-model="state.reciver"
        class="select-box"
        placeholder="Reciver"
        size="large"
        id="Reciver"
      >
        <el-option
          v-for="reciver in reciverOptions"
          :key="reciver.value"
          :label="reciver.label"
          :value="reciver.value"
        />
      </el-select>
    </div>
    <el-divider />
    <h4 class="label">Apply time frame</h4>
    <div class="double-colun align-items-end form-item">
      <div class="f-item w-25 mb-0">
        <label for="FromTime">From</label>
        <el-time-picker
          v-model="state.fromTime"
          format="HH:mm"
          placeholder="Pick a time"
          class="date-picker"
          id="FromTime"
          :prefix-icon="ClockBlue"
        />
      </div>
      <div class="f-item w-75 mb-0">
        <el-date-picker
          v-model="state.fromDate"
          type="date"
          placeholder="From Date"
          :default-value="new Date(2010, 9, 1)"
          class="date-picker"
          id="FromDate"
          :prefix-icon="CalendarBlue"
        />
      </div>
    </div>
    <div class="double-colun align-items-end form-item">
      <div class="f-item w-25 mb-0">
        <label for="ToTime">To</label>
        <el-time-picker
          v-model="state.toTime"
          format="HH:mm"
          placeholder="Pick a time"
          class="date-picker"
          id="ToTime"
          :prefix-icon="ClockBlue"
        />
      </div>
      <div class="f-item w-75 mb-0">
        <el-date-picker
          v-model="state.toDate"
          type="date"
          placeholder="To Date"
          :default-value="new Date(2010, 9, 1)"
          class="date-picker"
          id="ToDate"
          :prefix-icon="CalendarBlue"
        />
      </div>
    </div>
    <InfoBox :infoOptions="infoOptions" :title="'Guide'" class="mb-3" />

    <el-divider />
    <h4 class="label">Contct Group</h4>
    <div class="form-item">
      <el-checkbox-group v-model="state.checkbox">
        <el-checkbox
          v-for="(item, index) in checkboxGroup"
          :key="index"
          :label="item"
          >{{ item }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
    <button class="primary">Refresh List</button>
    <el-divider />
    <div class="d-flex double-column align-items-end">
      <div class="form-item">
        <label for="Sender">Sender Phone Number</label>
        <el-select
          v-model="state.senderNumber"
          class="select-box"
          placeholder="Sender"
          size="large"
          id="sender"
        >
          <el-option
            v-for="sender in senderOptions"
            :key="sender.value"
            :label="sender.label"
            :value="sender.value"
          />
        </el-select>
      </div>
      <div class="form-item w-50">
        <input
          type="text"
          placeholder=" "
          v-model="state.tisenderNumberTxttle"
        />
      </div>
    </div>
    <div class="d-flex double-column align-items-end">
      <div class="form-item">
        <label for="SMSText">SMS Text</label>
        <el-select
          v-model="state.smsText"
          class="select-box"
          placeholder="SMS Text"
          size="large"
          id="SMSText"
        >
          <el-option
            v-for="smsText in smsTextOptions"
            :key="smsText.value"
            :label="smsText.label"
            :value="smsText.value"
          />
        </el-select>
      </div>
      <div class="form-item w-50">
        <input type="text" placeholder=" " v-model="state.smsTextTxt" />
      </div>
    </div>
    <div class="d-flex double-column align-items-end">
      <div class="form-item">
        <label for="saveTo">Save SMS to</label>
        <el-select
          v-model="state.saveTo"
          class="select-box"
          placeholder="Save SMS to"
          size="large"
          id="saveTo"
        >
          <el-option
            v-for="saveTo in saveToOptions"
            :key="saveTo.value"
            :label="saveTo.label"
            :value="saveTo.value"
          />
        </el-select>
      </div>
      <div class="form-item w-50"></div>
    </div>
    <InfoBox :infoOptions="infoOptions2" :title="'Guide'" class="mb-3" />
    <el-divider />
    <div class="form-item">
      <label>SMS text </label>
      <textarea placeholder="SMS text " rows="8" v-model="state.sms"></textarea>
    </div>
  </form>
</template>

<script setup>
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import CalendarBlue from "@/components/TheIcon/single-icons/CalendarBlue.vue";
import ClockBlue from "@/components/TheIcon/single-icons/ClockBlue.vue";

//state

const state = ref({
  fromDate: "",
  toDate: "",
  fromTime: "",
  toTime: "",
  title: "",
  reciver: "",
  sender: "",
  senderNumber: "",
  senderNumberTxt: "",
  smsText: "",
  smsTextTxt: "",
  saveTo: "",
  sms: "",
});
const reciverOptions = [
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
];
const senderOptions = [
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
];
const smsTextOptions = [
  {
    value: "SMS Text 1",
    label: "SMS Text 1",
  },
  {
    value: "SMS Text 2",
    label: "SMS Text 2",
  },
  {
    value: "SMS Text 3",
    label: "SMS Text 3",
  },
];
const saveToOptions = [
  {
    value: "Recieve",
    label: "Recieve",
  },
  {
    value: "Send",
    label: "Send",
  },
];
const infoOptions = ref([
  "Your input Excel file must contain a number column like the sample file (download the sample file)",
  "Pay attention that the name of the table where the numbers are located should be Sheet1",
  "f this file has been exported from somewhere, copy the number column in a new file",
  "Please note that the first line of the Excel file is not read, so you can use it to insert the title",
]);
const infoOptions2 = ref([
  "Your input Excel file must contain a number column like the sample file (download the sample file)",
]);
const checkboxGroup = ["N1 Group Name", "N2 Group Name"];
</script>

<style>
</style>