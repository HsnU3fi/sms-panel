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
    <div class="f-item">
      <label for="keyword">Keyword</label>
      <input
          type="text"
          id="keyword"
          v-model="state.keyword"
      />
    </div>
    <div class="send-text form-item">
      <label for="email">Email Text</label>
      <textarea
          id="email"
          cols="30"
          rows="10"
          v-model="state.email"
      ></textarea>
      <p class="counter" :class="state.email.length > 160 && 'error'">
        {{ state.email.length }} / 160
      </p>
    </div>

    <Uploader/>

    <div class="form-item">
      <label for="Sender">Sender</label>
      <el-select
          v-model="state.sender"
          class="select-box"
          placeholder="Sender"
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
      <label for="Receiver">Receiver</label>
      <el-select
          v-model="state.receiver"
          class="select-box"
          placeholder="Receiver"
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

    <el-checkbox v-model="state.checkbox" label="Send For Other Members" size="large" />

  </form>
</template>





<script setup>
import {ref} from 'vue'
import Uploader from "@/components/TheSendSms/Uploader.vue";

const state = ref({
  title: "",
  email: "",
  keyword: "",
  receiver: "",
  sender: "",
  SMS: "",
  checkbox: false,
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
const senderOptions = [
  {
    value: "none",
    label: "none",
  },
  {
    value: "Lorem 1",
    label: "Lorem 1",
  },
  {
    value: "Lorem 2",
    label: "Lorem 2",
  },
];

</script>





