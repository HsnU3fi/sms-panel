<template>
  <SurveyListOptionTable />
  <h5 class="label">Add New Option</h5>
  <div class="f-item">
    <label for="Title">Title</label>
    <input
      type="text"
      placeholder="Title"
      id="Title"
      v-model="manageGroupState.title"
    />
  </div>
  <div class="f-item">
    <label for="Keyword">Keyword</label>
    <input
      type="text"
      placeholder="Keyword"
      id="Keyword"
      v-model="manageGroupState.keyword"
    />
  </div>
  <div class="f-item">
    <label for="Sender">Sender</label>
    <el-select
      v-model="manageGroupState.sender"
      class="select-box"
      placeholder="Sender"
      size="large"
      id="Sender"
    >
      <el-option
        v-for="sender in senderOptions"
        :key="sender.value"
        :label="sender.label"
        :value="sender.value"
      />
    </el-select>
  </div>
  <div class="f-item">
    <label for="SmsText">SMS Text</label>
    <textarea
      id="SmsText"
      cols="30"
      rows="10"
      v-model="manageGroupState.SmsText"
      placeholder="SMS Text"
    ></textarea>
  </div>
  <div class="f-item">
    <el-checkbox
      label="This is the correct answer"
      v-model="manageGroupState.isCorrectAnswer"
      >This is the correct answer</el-checkbox
    >
  </div>
  <button class="primary">Add</button>
</template>

<script setup>
import SurveyListOptionTable from "@/components/TheAdvancedSurvey/SurveyListOptionTable.vue";
import { ref } from "vue";

//state

const manageGroupState = ref({
  title: "",
  isCorrectAnswer: false,
  keyword: "",
  sender: "",
  SmsText: "",
});
const senderOptions = [
  {
    value: "Group 1",
    label: "Group 1",
  },
  {
    value: "Group 2",
    label: "Group 2",
  },
];
</script>