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
      <label>Receiver Number</label>
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
        <label>From</label>
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
        <label>To</label>
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

  </form>
</template>





<script setup>
import {ref} from 'vue'
import Uploader from "@/components/TheSendSms/Uploader.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";

const state = ref({
  title: "",
  receiver: "",
  fromDate: "",
  toDate: "",
  fromTime: "",
  toTime: "",
  Emails: '',
});


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

</script>





