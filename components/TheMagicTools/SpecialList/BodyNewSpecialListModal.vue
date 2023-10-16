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
      <label for="Type">Type</label>
      <el-select
          v-model="state.Type"
          class="select-box"
          size="large"
          id="Type"
      >
        <el-option
            v-for="type in typeOptions"
            :key="type.value"
            :label="type.label"
            :value="type.value"
        />
      </el-select>
    </div>


    <div class="send-text form-item">
      <label for="SendList">Send List</label>
      <textarea
          id="SendList"
          cols="30"
          rows="10"
          v-model="state.SendList"
      ></textarea>
      <p class="counter" :class="state.SendList.length > 160 && 'error'">
        {{ state.SendList.length }} / 160
      </p>
    </div>

    <div class="send-text form-item">
      <label for="ReceiveList">Receive List</label>
      <textarea
          id="ReceiveList"
          cols="30"
          rows="10"
          v-model="state.ReceiveList"
      ></textarea>
      <p class="counter" :class="state.ReceiveList.length > 160 && 'error'">
        {{ state.ReceiveList.length }} / 160
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
  Type: "",
  SendList: "",
  ReceiveList: "",
});


const typeOptions = [
  {
    value: "Black List",
    label: "Black List",
  },
];


</script>





