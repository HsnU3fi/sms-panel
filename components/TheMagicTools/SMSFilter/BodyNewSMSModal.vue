<template>
  <form>
    <div class="f-item">
      <label for="title">Title</label>
      <input
          type="text"
          id="title"
          v-model="state.title"
      />
    </div>

    <div class="form-item">
      <label for="Sender">Sender Number</label>
      <el-select
          v-model="state.sender"
          class="select-box"
          size="large"
          id="Sender"
      >
        <el-option
            v-for="Sender in senderOptions"
            :key="Sender.value"
            :label="Sender.label"
            :value="Sender.value"
        />
      </el-select>
    </div>

    <div class="form-item">
      <label for="Receiver">Receiver Number</label>
      <el-select
          v-model="state.receiver"
          class="select-box"
          size="large"
          id="Receiver"
      >
        <el-option
            v-for="receiver in receiverOptions"
            :key="receiver.value"
            :label="receiver.label"
            :value="receiver.value"
        />
      </el-select>
    </div>


    <h4 class="mt-3 mb-3">Apply Period of Time</h4>

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

    <div class="form-item">
      <label for="Sender">Sender Phone number</label>
      <el-select
          v-model="state.sender"
          class="select-box"
          size="large"
          id="Sender"
      >
        <el-option
            v-for="Sender in senderOptions"
            :key="Sender.value"
            :label="Sender.label"
            :value="Sender.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label for="Sender">SMS Text</label>
      <el-select
          v-model="state.sender"
          class="select-box"
          size="large"
          id="Sender"
      >
        <el-option
            v-for="Sender in senderOptions"
            :key="Sender.value"
            :label="Sender.label"
            :value="Sender.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label for="Sender">Save SMS to</label>
      <el-select
          v-model="state.sender"
          class="select-box"
          size="large"
          id="Sender"
      >
        <el-option
            v-for="Sender in senderOptions"
            :key="Sender.value"
            :label="Sender.label"
            :value="Sender.value"
        />
      </el-select>
    </div>

    <InfoBox :infoOptions="infoOptions" title="" class="mb-3 mt-0" />




    <div class="send-text form-item">
      <label for="SMS">SMS Text</label>
      <textarea
          id="SMS"
          cols="30"
          rows="10"
          v-model="state.SMS"
      ></textarea>
      <p class="counter" :class="state.SMS.length > 160 && 'error'">
        {{ state.SMS.length }} / 160
      </p>
    </div>


    <h4 class="mt-3 mb-3">Receivers</h4>

    <div class="form-item">
      <label for="Import">Import</label>
      <el-select
          v-model="state._import"
          class="select-box"
          size="large"
          id="Import"
      >
        <el-option
            v-for="Import in importOptions"
            :key="Import.value"
            :label="Import.label"
            :value="Import.value"
        />
      </el-select>
    </div>

    <Uploader/>
    <div class="send-text form-item">
    <textarea
        cols="30"
        rows="10"
        v-model="state.textarea"
    ></textarea>
    </div>


    <div class="send-text form-item">
      <label for="Emails">Emails</label>
      <textarea
          id="Emails"
          cols="30"
          rows="10"
          v-model="state.Emails"
      ></textarea>
      <p class="counter" :class="state.Emails.length > 160 && 'error'">
        {{ state.Emails.length }} / 160
      </p>
    </div>

    <div class="f-item">
      <label for="Address">URL Address</label>
      <input
          type="text"
          id="Address"
          v-model="state.address"
      />
    </div>
  </form>
</template>





<script setup>
import {ref} from 'vue'
import Uploader from "@/components/TheSendSms/Uploader.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";

const state = ref({
  title: "",
  receiver: "",
  sender: "",
  fromDate: "",
  toDate: "",
  fromTime: "",
  toTime: "",
  _import: '',
  SMS: '',
  Emails: '',
  address: '',
});

const infoOptions = ref([
 "Your input Excel file must contain a number column like the sample file (download the sample file)",
]);

const receiverOptions = [
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
const importOptions = [
  {
    value: "excel",
    label: "excel",
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

</script>





