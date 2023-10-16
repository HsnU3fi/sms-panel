<template>
  <form class="new-competition">
    <section class="form-item">
      <label for="Title" class="label">Title</label>
      <input type="text" placeholder="Title" id="Title" v-model="state.Title"/>
    </section>
    <section class="form-item">
      <label for="reciverNumber" class="label">Receiver Number</label>
      <el-select
          v-model="state.reciverNumber"
          class="select-box"
          placeholder="Receiver Number"
          size="large"
          id="reciverNumber"
      >
        <el-option
            v-for="number in numberOptions"
            :key="number.value"
            :label="number.label"
            :value="number.value"
        />
      </el-select>
    </section>
    <el-divider/>
    <h3 class="period-time-title">Apply Period of Time</h3>
    <section class="form-item time">
      <label class="label">From</label>
      <section class="row">
        <section class="col-12 col-md-4">
          <el-time-picker
              v-model="state.timeFrom"
              format="HH:mm"
              arrow-control
              placeholder="Pick a time"
              class="time-picker"
          >
            <template v-slot:prefix>
              <Icon name="clock"/>
            </template>
          </el-time-picker>
        </section>
        <section class="col-12 col-md-8">
          <el-date-picker
              v-model="state.timeFromDate"
              type="date"
              placeholder="From Date"
              :default-value="new Date(2010, 9, 1)"
              class="date-picker"
              id="FromDate"
          >
            <template v-slot:prefix>
              <Icon name="calendar"/>
            </template>
          </el-date-picker>
        </section>
      </section>
    </section>
    <section class="form-item time">
      <label class="label">Till</label>
      <section class="row">
        <section class="col-12 col-md-4">
          <el-time-picker
              v-model="state.timeTill"
              format="HH:mm"
              arrow-control
              placeholder="Pick a time"
              class="time-picker"
          >
            <template v-slot:prefix>
              <Icon name="clock"/>
            </template>
          </el-time-picker>
        </section>
        <section class="col-12 col-md-8">
          <el-date-picker
              v-model="state.timeTillDate"
              type="date"
              placeholder="From Date"
              :default-value="new Date(2010, 9, 1)"
              class="date-picker"
              id="FromDate"
          >
            <template v-slot:prefix>
              <Icon name="calendar"/>
            </template>
          </el-date-picker>
        </section>
      </section>
    </section>
    <section class="form-item">
      <InfoBox :infoOptions="infoOptions" :isCollapsed="isCollapsed" />
    </section>
    <section class="form-item">
      <label class="label">Receiving Internet address (URL) :</label>
      <textarea v-model="state.url" rows="10" />
    </section>
  </form>
</template>

<script setup>
import {ref} from "vue";
import Icon from '@/components/TheIcon/Icon.vue'
import InfoBox from '@/components/TheInfoBox/InfoBox.vue'

const state = ref({
  Title: '',
  reciverNumber: '+1-32568741',
  timeFrom: '',
  timeFromDate: '',
  timeTill: '',
  timeTillDate: '',
  url: ''
})
const isCollapsed = ref('1')

const numberOptions = [
  {
    value: "+1-32568741",
    label: "+1-32568741",
  },
  {
    value: "+1-32568742",
    label: "+1-32568742",
  },
  {
    value: "+1-32568743",
    label: "+1-32568743",
  },
  {
    value: "+1-32568744",
    label: "+1-32568744",
  },
];
const infoOptions = ref([
  'A copy of each received SMS will be transferred to your desired URL address',
  'Be careful when entering the Internet address, if it is wrong, the service will be disabled',
  'Enter the address with "http://" and "www" for example "http://www.yoursite.com/getsms.php"',
  'Use the "$TEXT$" and "$TO$" and "$FROM$" parameters for the SMS text, recipient number, and sender number, respectively.',
  'Separate the parameters with "&" character',
  'The information will be sent to the desired address by the "GET" method',
  'for example : http://www.yoursite.com/getsms.php?to=$TO$&body=$TEXT$&from=$FROM$&retid=$ID$',
  'You can also add your additional information for example : http://www.yoursite.com/getsms.php?to=$TO$&body=$TEXT$&from=$FROM$&retid=$ID$&name=yourname&app=sms',
  'In addition, you can separate multiple URLs with characters such as "; , |" separate to send the SMS to several addresses at the same time',
  'Dear users, please note that the parameters are received in the destination link as follows (PHP code example):  $Message=$_GET["body"]; // Message text $Message=$_GET["to"]; //Recipient number $Message=$_GET["from"]; //Sender number $Message=$_GET["retid"]; // The code received in the system',
  'Dear users, to define multiple URLs on a receiving number, be sure to use separator characters; do not use the option to insert a new URL.',
])
</script>

<style scoped>

</style>