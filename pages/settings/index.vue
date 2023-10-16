<template>
  <BaseLayout class="dashboard settings">
    <!-- alerts -->
    <div class="step-1" v-if="currentStep == 1">
      <div class="col-12 mt-0">
        <form>
          <section class="number form-item">
            <p class="label">Default number</p>
            <el-select
                v-model="sendSmsState.defaultNumber"
                class="select-box"
                placeholder="Default number"
                size="large"
                id="selectNumber"
            >
              <el-option
                  v-for="number in numberOptions"
                  :key="number.number.number"
                  :label="number.number.number"
                  :value="number.number.number"
              />
            </el-select>
          </section>
          <section class="send-text form-item">
            <p class="label">Authorized IP to login</p>
            <textarea
                name="sms-text"
                cols="10"
                rows="3"
                v-model="sendSmsState.authorizedIP"
            >
            </textarea>
          </section>
          <el-divider/>
          <section class="test-send form-item">
            <h4 class="label">Minimum charge warning</h4>
            <p class="label">Minimum charge (The number of SMS)</p>
            <div class="test">
              <input
                  type="number"
                  min="0"
                  placeholder="Minimum charge (The number of SMS)"
                  v-model="sendSmsState.minChargeWarning"
              />
            </div>
          </section>
          <section class="test-send form-item">
            <p class="label">Email</p>
            <div class="test">
              <input
                  type="email"
                  placeholder="Email"
                  v-model="sendSmsState.email"
              />
            </div>
          </section>
          <el-divider/>
          <section class="test-send form-item">
            <h4 class="label">Authorized hour to login</h4>
            <div class="d-flex g-20 double-column">
              <div class="w-50 form-item">
                <p class="label">From</p>
                <el-time-picker
                    v-model="sendSmsState.fromTime"
                    format="HH:mm"
                    placeholder="From"
                    class="date-picker"
                    id="FromTime"
                    :prefix-icon="ClockBlue"
                />
              </div>
              <div class="w-50 form-item">
                <p class="label">To</p>
                <el-time-picker
                    v-model="sendSmsState.toTime"
                    format="HH:mm"
                    placeholder="To"
                    class="date-picker"
                    id="FromTime"
                    :prefix-icon="ClockBlue"
                />
              </div>
            </div>
          </section>
          <el-divider/>
          <div class="form-item">
            <el-checkbox
                v-model="sendSmsState.isNotifAllowed"
                label="I will be notified by SMS when entering the system (the cost of sending SMS will be deducted from your credit.)"
                size="large"
            />
          </div>
        </form>
      </div>
    </div>
    <template v-slot:footer
    >
      <el-footer class="text-right">
        <div class="footer">
          <button @click="settings" class="primary">Confirm</button>
        </div>
      </el-footer>
    </template
    >
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import ClockBlue from "@/components/TheIcon/single-icons/ClockBlue.vue";
import {ref} from "vue";
import {useSettingStore} from "../../store/settings";
import {useNumbersStore} from "../../store/users";

//state
const numbersStore = useNumbersStore()

const sendSmsState = ref({
  defaultNumber: "",
  authorizedIP: "",
  minChargeWarning: 0,
  email: "",
  fromTime: "",
  toTime: "",
  isNotifAllowed: false,
});
const numberOptions = ref([])
const currentStep = ref(1);

//methods
const settingStore = useSettingStore()
const changeStepHandler = () => {
  if (currentStep.value == 1) currentStep.value++;
};

const getNumbers = async () => {
  const result = await numbersStore.getNumbers()
  if (result.status === 200) {
    numberOptions.value = result.data.data
  }
}
getNumbers()


const callApiPut = ref(false)

const getSettings = async () => {
  const result = await settingStore.getSetting()
  if (result.status === 200) {
    const res = result.data.data
    if (res !== []) {
      for (let i in res) {
        if (res[i].key === "email") {
          sendSmsState.value.email = res[i].value
        }
        if (res[i].key === "toTime") {
          sendSmsState.value.toTime = res[i].value
        }
        if (res[i].key === "fromTime") {
          sendSmsState.value.fromTime = res[i].value
        }
        if (res[i].key === "minChargeWarning") {
          sendSmsState.value.minChargeWarning = parseInt(res[i].value)
        }
        if (res[i].key === "authorizedIP") {
          sendSmsState.value.authorizedIP = res[i].value
        }
        if (res[i].key === "defaultNumber") {
          sendSmsState.value.defaultNumber = res[i].value
        }
        if (res[i].key === "isNotifAllowed") {
          sendSmsState.value.isNotifAllowed = JSON.parse(res[i].value)
        }
      }
      callApiPut.value = true
    }
  }
}

getSettings()

const settings = () => {
  if(callApiPut.value===false) {
    if (sendSmsState.value.defaultNumber !== '') {
      settingStore.createSettingDefaultNumber(sendSmsState.value.defaultNumber)
    }
    if (sendSmsState.value.authorizedIP !== '') {
      settingStore.createSettingAuthorizedIPToLogin(sendSmsState.value.authorizedIP)
    }
    if (sendSmsState.value.minChargeWarning !== 0) {
      settingStore.createSettingMinimumCharge(sendSmsState.value.minChargeWarning.toString())
    }
    if (sendSmsState.value.email !== '') {
      settingStore.createSettingEmail(sendSmsState.value.email)
    }
    if (sendSmsState.value.fromTime !== '') {

      settingStore.createSettingFrom(sendSmsState.value.fromTime)
    }
    if (sendSmsState.value.toTime !== '') {
      settingStore.createSettingTo(sendSmsState.value.toTime)
    }
    if (sendSmsState.value.isNotifAllowed !== false) {

      settingStore.createSettingNotif(sendSmsState.value.isNotifAllowed.toString())
    }
  }else {
    console.log("Hsn2220000")
  }
}


//
const settingsEdit = () => {
    if (sendSmsState.value.defaultNumber !== '') {
      settingStore.createSettingDefaultNumber(sendSmsState.value.defaultNumber)
    }
    if (sendSmsState.value.authorizedIP !== '') {
      settingStore.createSettingAuthorizedIPToLogin(sendSmsState.value.authorizedIP)
    }
    if (sendSmsState.value.minChargeWarning !== 0) {
      settingStore.createSettingMinimumCharge(sendSmsState.value.minChargeWarning.toString())
    }
    if (sendSmsState.value.email !== '') {
      settingStore.createSettingEmail(sendSmsState.value.email)
    }
    if (sendSmsState.value.fromTime !== '') {

      settingStore.createSettingFrom(sendSmsState.value.fromTime)
    }
    if (sendSmsState.value.toTime !== '') {
      settingStore.createSettingTo(sendSmsState.value.toTime)
    }
    if (sendSmsState.value.isNotifAllowed !== false) {

      settingStore.createSettingNotif(sendSmsState.value.isNotifAllowed.toString())
    }
}
</script>
    