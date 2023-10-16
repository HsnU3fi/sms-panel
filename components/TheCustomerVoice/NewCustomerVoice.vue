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
      <el-checkbox v-model="state.duplicateCheck">Sending code to duplicate numbers is allowed</el-checkbox>
    </section>
    <section class="form-item">
      <label class="label">Duplicate numbers Text</label>
      <el-input
          max-length="160"
          v-model="state.duplicateText"
          type="textarea"
          :rows="10"
      />
      <section class="duplicate-options">
        <span class="counter">{{ state.duplicateText.length }} / 160</span>
        <section class="options">
        <button class="emoji-options">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDD67"/>
            <path d="M7.39844 11.8398C8.50301 11.8398 9.39844 10.9444 9.39844 9.83984C9.39844 8.73527 8.50301 7.83984 7.39844 7.83984C6.29387 7.83984 5.39844 8.73527 5.39844 9.83984C5.39844 10.9444 6.29387 11.8398 7.39844 11.8398Z" fill="#664E27"/>
            <path d="M16.5977 11.8398C17.7022 11.8398 18.5977 10.9444 18.5977 9.83984C18.5977 8.73527 17.7022 7.83984 16.5977 7.83984C15.4931 7.83984 14.5977 8.73527 14.5977 9.83984C14.5977 10.9444 15.4931 11.8398 16.5977 11.8398Z" fill="#664E27"/>
            <path d="M17.0372 15.3196C13.7972 17.5996 10.1972 17.5596 6.9572 15.3196C6.5572 15.0396 6.2372 15.5196 6.4772 15.9596C7.4772 17.5596 9.4372 19.0396 11.9972 19.0396C14.5572 19.0396 16.5172 17.5996 17.5172 15.9596C17.7572 15.5196 17.4372 15.0396 17.0372 15.3196Z" fill="#664E27"/>
          </svg>
        </button>
        <button>
          <Icon name="dots" />
        </button>
        </section>
      </section>
    </section>
    <section class="form-item">
      <label class="label">Description</label>
      <textarea
          v-model="state.description"
          rows="10"
      />
    </section>
    <el-divider />
    <h3 class="period-time-title">Support</h3>

    <section class="form-item">
      <label class="label">Email</label>
      <textarea
          v-model="state.email"
          rows="10"
      />
    </section>
    <section class="form-item">
      <label class="label">Phone Numbers</label>
      <textarea
          v-model="state.phone"
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