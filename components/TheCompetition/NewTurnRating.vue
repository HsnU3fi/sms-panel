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
    <section class="form-item">
      <label for="SenderNumber" class="label">Sender Number</label>
      <el-select
          v-model="state.senderNumber"
          class="select-box"
          placeholder="Sender Number"
          size="large"
          id="SenderNumber"
      >
        <el-option
            v-for="number in numberOptions"
            :key="number.value"
            :label="number.label"
            :value="number.value"
        />
      </el-select>
    </section>
    <section class="form-item">
      <label class="label">Turn announcement text</label>
      <textarea
          v-model="state.description"
          rows="10"
      />
    </section>
    <section class="form-item">
      <label class="label">Description</label>
      <textarea
          v-model="state.description"
          rows="10"
      />
    </section>
    <section class="form-item">
      <label class="label">Appointment reservation text</label>
      <textarea
          v-model="state.description"
          rows="10"
      />
    </section>
    <section class="form-item">
      <label class="label">Text of Turn Cancellation</label>
      <textarea
          v-model="state.description"
          rows="10"
      />
    </section>
    <section class="form-item">
      <label class="label">Repeated turn text</label>
      <textarea
          v-model="state.description"
          rows="10"
      />
    </section>
    <section class="form-item">
      <label class="label">The text of the lack of free time
      </label>
      <textarea
          v-model="state.description"
          rows="10"
      />
    </section>
    <el-divider />
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
              <Icon name="clock" />
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
              <Icon name="calendar" />
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
              <Icon name="clock" />
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
              <Icon name="calendar" />
            </template>
          </el-date-picker>
        </section>
      </section>
    </section>
    <el-divider />
    <h3 class="period-time-title">Contact Group</h3>
    <section class="form-item">
      <el-checkbox-group v-model="state.contactGroup">
        <el-checkbox
            v-for="(item, index) in checkboxGroup"
            :key="index"
            :label="item"
        >{{ item }}</el-checkbox
        >
      </el-checkbox-group>
    </section>

    <div class="form-item">
      <button class="primary px-5 py-3">Refresh List</button>
    </div>
  </form>
</template>

<script setup>
import {ref} from "vue";
import Icon from '@/components/TheIcon/Icon.vue'

const state = ref({
  Title: '',
  reciverNumber: '+1-32568741',
  senderNumber: '+1-32568742',
  duplicateCheck: true,
  duplicateText: '',
  description: '',
  email: '',
  phone: '',
  timeFrom: '',
  timeFromDate: '',
  timeTill: '',
  timeTillDate: '',
  contactGroup: ''
})

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

const checkboxGroup = [
  "N1 Group Name",
  "N2 Group Name",
];
</script>

<style scoped>

</style>