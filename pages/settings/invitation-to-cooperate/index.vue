<template>
  <BaseLayout class="dashboard invitation-to-cooperate">
    <div class="wrapper-content">
      <h4 class="label pt-0">The first method :</h4>
      <InfoBox :infoOptions="infoOption1" :title="'Guide'" />
      <div class="form-item">
        <p class="label mt-0">Sender</p>
        <el-select
          v-model="state.sender"
          class="select-box"
          placeholder="Sender"
          size="large"
          id="selectNumber"
        >
          <el-option
            v-for="number in numberOptions"
            :key="number.value"
            :label="number.label"
            :value="number.value"
          />
        </el-select>
      </div>
      <div class="form-item">
        <p class="label">Invitation Text</p>
        <textarea
          id="SmsText"
          cols="60"
          rows="10"
          v-model="state.invitationText"
        >
        </textarea>
        <p
          class="counter"
          :class="state.invitationText.length > 160 && 'error'"
        >
          {{ state.invitationText.length }} / 160
        </p>
      </div>
      <div class="form-item">
        <p class="label">Recipients mobile number</p>
        <textarea
          id="SmsText"
          cols="60"
          rows="10"
          v-model="state.recipientsMobileNumber"
        >
        </textarea>
        <p
          class="counter"
          :class="state.recipientsMobileNumber.length > 160 && 'error'"
        >
          {{ state.recipientsMobileNumber.length }} / 160
        </p>
      </div>
      <div class="form-item">
        <button class="primary">Send</button>
      </div>
      <el-divider />
      <h4 class="label pt-0">The second method :</h4>
      <InfoBox :infoOptions="infoOption2" :title="'Guide'" />
      <div class="form-item">
        <p class="label mt-0">Sender</p>
        <el-select
          v-model="secondMethodState.sender"
          class="select-box"
          placeholder="Sender"
          size="large"
          id="selectNumber"
        >
          <el-option
            v-for="number in numberOptions"
            :key="number.value"
            :label="number.label"
            :value="number.value"
          />
        </el-select>
      </div>
      <div class="form-item">
        <p class="label">Invitation Text</p>
        <textarea
          id="SmsText"
          cols="60"
          rows="10"
          v-model="secondMethodState.invitationText"
        >
        </textarea>
        <p
          class="counter"
          :class="state.invitationText.length > 160 && 'error'"
        >
          {{ state.invitationText.length }} / 160
        </p>
      </div>
      <h4 class="label">Contacts</h4>
      <div class="form-item">
        <el-checkbox-group v-model="secondMethodState.checkbox">
          <el-checkbox
            v-for="(item, index) in checkboxGroup"
            :key="index"
            :label="item"
            >{{ item }}</el-checkbox
          >
        </el-checkbox-group>
      </div>
      <div class="form-item">
        <button class="primary">Send</button>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";
import { ref } from "vue";

//state

const state = ref({
  sender: "",
  invitationText: "",
  recipientsMobileNumber: "",
  sendDuplicate: false,
});
const secondMethodState = ref({
  sender: "",
  invitationText: "",
  recipientsMobileNumber: "",
  sendDuplicate: false,
});
const infoOption1 = ref([
  "In this method, you can change the defined default text to your liking and send it to your desired mobile numbers",
]);
const infoOption2 = ref([
  "In this method, you can change the defined default text to your liking and send it to your phonebook groups",
]);

const numberOptions = [
  {
    value: "+012548754",
    label: "+012548754",
  },
];
const checkboxGroup = ["Contact 1", "Contact 2", "Contact 3", "Contact 4"];
</script>
