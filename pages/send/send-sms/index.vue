<template>
  <BaseLayout class="dashboard send-sms">
    <!-- alerts -->
    <div class="step-1" v-if="currentStep == 1">
      <!--      <el-alert-->
      <!--        :closable="false"-->
      <!--        class="danger-alert"-->
      <!--        v-motion-->
      <!--        :initial="initial"-->
      <!--        :enter="enter"-->
      <!--        :delay="200"-->
      <!--      >-->
      <!--        <template #default>-->
      <!--          <div class="description">-->
      <!--            <Icon name="info-red" />-->
      <!--            <span>You can confirm your email in this section</span>-->
      <!--          </div>-->
      <!--          <button class="action">Active Email</button>-->
      <!--        </template>-->
      <!--      </el-alert>-->
      <!--      <el-alert-->
      <!--        :closable="false"-->
      <!--        class="danger-alert"-->
      <!--        v-motion-->
      <!--        :initial="initial"-->
      <!--        :enter="enter"-->
      <!--        :delay="200"-->
      <!--      >-->
      <!--        <template #default>-->
      <!--          <div class="description">-->
      <!--            <Icon name="info-red" />-->
      <!--            <span>You can confirm your mobile number in this section</span>-->
      <!--          </div>-->
      <!--          <button class="action">Active Number</button>-->
      <!--        </template>-->
      <!--      </el-alert>-->
      <div class="form-item col-12">
        <form>
          <section
              class="number form-item"
              v-motion
              :initial="initial"
              :enter="enter"
              :delay="300"
          >
            <p class="label">Your Number</p>
            <el-select
                v-model="sendSmsState.selectedNumber"
                class="select-box"
                placeholder="Select"
                size="large"
                id="selectNumber"
            >
              <el-option
                  v-for="number in numberOptions"
                  :key="number.number.number"
                  :label="number.number.number"
                  :value="number.number.id"
              />
            </el-select>
          </section>
          <section
              class="send-text"
              v-motion
              :initial="initial"
              :enter="enter"
              :delay="300"
          >
            <p class="label">SMS Text</p>
            <textarea
                name="sms-text"
                id="SmsText"
                cols="60"
                rows="10"
                v-model="sendSmsState.smsText"
            >
            </textarea>
            <p
                class="counter"
                :class="sendSmsState.smsText.length > 160 && 'error'"
            >
              {{ sendSmsState.smsText.length }} / 160
            </p>
          </section>
          <!--          <el-divider />-->
          <!--          <section-->
          <!--            class="test-send"-->
          <!--            v-motion-->
          <!--            :initial="initial"-->
          <!--            :enter="enter"-->
          <!--            :delay="400"-->
          <!--          >-->
          <!--            <h4 class="label mt-0">Test Send</h4>-->
          <!--            <p class="label">Phone Number</p>-->
          <!--            <div class="test">-->
          <!--              <input-->
          <!--                type="text"-->
          <!--                placeholder="Phone Number..."-->
          <!--                v-model="testSms"-->
          <!--              />-->
          <!--              <button type="button">send</button>-->
          <!--            </div>-->
          <!--          </section>-->
          <!--          <el-divider />-->
          <section
              class="recievers"
              v-motion
              :initial="initial"
              :enter="enter"
              :delay="400"
          >
            <h4 class="label mt-0">Receivers</h4>
            <p class="label">Import</p>
            <el-select
                v-model="sendSmsState.importType"
                class="select-box"
                placeholder="Select"
                size="large"
                @change="changeRecieverType"
            >
              <el-option
                  v-for="reciever in recieversOptions"
                  :key="reciever.value"
                  :label="reciever.label"
                  :value="reciever.value"
              />
            </el-select>
            <!--            <InfoBox-->
            <!--                :infoOptions="infoOptions"-->
            <!--                :title="'Guide'"-->
            <!--                class="w-837"-->
            <!--            />-->
            <Uploader
                :file="sendSmsState.file"
                v-if="
                sendSmsState.importType !== '' &&
                sendSmsState.importType !== 'Numbers'
              "
            />


            <div
                class="contact-box"
                v-if="sendSmsState.importType == 'Phone book'"
            >
              <button @click="openAddContactDialog" type="button">
                Add Contact
              </button>
              <button @click="openManageGroupDialog" type="button">
                Manage Group
              </button>
            </div>


            <div
                class="contact-box"
                v-if="sendSmsState.importType == 'Numbers'"
            >

<!--              <label style="margin-top: 10px" class="text-gray-600 font-semibold text-lg">Phone Number</label>-->
              <v-container style="margin-left: -25px">
                <v-row>
                  <v-col cols="12"
                         sm="4"
                  >
                    <div
                        v-for="(input, index) in phoneNumbers"
                        :key="`phoneInput-${index}`"
                        class="input "
                    >
                      <el-input
                          v-model="input.phone"
                          type="text"
                          class="h-10 rounded-lg outline-none p-2"
                          placeholder="Number"
                      />
                      <!--          Add Svg Icon-->
                      <svg
                          @click="addField(input, phoneNumbers)"

                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          class="ml-2 cursor-pointer"
                      >
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path
                            fill="green"
                            d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                        />
                      </svg>

                      <!--          Remove Svg Icon-->
                      <svg
                          v-show="phoneNumbers.length > 1"
                          @click="removeField(index, phoneNumbers)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          class="ml-2 cursor-pointer"
                      >
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path
                            fill="#EC4899"
                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                        />
                      </svg>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>

            <!--            <div class="form-item">-->
            <!--              <el-checkbox-->
            <!--                v-model="sendSmsState.check1"-->
            <!--                label="Lorem Ipsum Group 2"-->
            <!--                size="large"-->
            <!--              />-->
            <!--              <el-checkbox-->
            <!--                v-model="sendSmsState.check2"-->
            <!--                label="Lorem Ipsum Group 3"-->
            <!--                size="large"-->
            <!--              />-->
            <!--            </div>-->
          </section>
          <!--          <textarea-->
          <!--            v-model="sendSmsState.desc"-->
          <!--            rows="8"-->
          <!--            v-motion-->
          <!--            :initial="initial"-->
          <!--            :enter="enter"-->
          <!--            :delay="500"-->
          <!--          ></textarea>-->
          <!--&lt;!&ndash;          <el-divider />&ndash;&gt;-->
          <!--          <section-->
          <!--            class="setting"-->
          <!--            v-motion-->
          <!--            :initial="initial"-->
          <!--            :enter="enter"-->
          <!--            :delay="500"-->
          <!--          >-->
          <!--            <h4 class="label mt-0">Settings</h4>-->
          <!--            <el-radio-group v-model="sendSmsState.setting">-->
          <!--              <el-radio :label="0">Sending to non-repeating numbers</el-radio>-->
          <!--              <el-radio :label="1">Send to all numbers</el-radio>-->
          <!--              <el-radio :label="2"-->
          <!--                >Send to duplicate numbers (only send to duplicate-->
          <!--                numbers)</el-radio-->
          <!--              >-->
          <!--            </el-radio-group>-->
          <!--          </section>-->
        </form>
      </div>
    </div>
    <div
        class="step-2"
        v-if="currentStep == 2"
        v-motion
        :initial="initial"
        :enter="enter"
        :delay="200"
    >
      <div class="form-item">
        <label for="">Text</label>
        <input v-model="sendSmsState.text" rows="8" placeholder="Text"/>
      </div>
      <div
          class="information-item d-flex align-items-center justify-content-between"
          v-for="(info, index) in sendSmsState.informations"
          :key="index"
      >
        <span>{{ info.label }}</span>
        <span>{{ info.value }}</span>
      </div>
      <div
          class="seccess-item"
          v-for="(successItem, index) in sendSmsState.successes"
          :key="index"
      >
        {{ successItem.label }}
      </div>
    </div>
    <template v-if="currentStep !== 0" v-slot:footer
    >
      <!--      <el-footer class="text-right">-->
      <!--        <div class="footer">-->
      <!--          <button class="primary" @click="changeStepHandler">-->
      <!--            {{ currentStep == 1 ? "Next" : "Send" }}-->
      <!--          </button>-->
      <!--        </div>-->
      <!--      </el-footer>-->

      <el-footer class="text-right">
        <div class="footer">
          <button class="primary" @click="sendSms">
            Send
          </button>
        </div>
      </el-footer>
    </template
    >
  </BaseLayout>
  <BaseDialog
      :title="'Add Contact'"
      :isDialogOpen="isAddContactDialogOpen"
      class="base-modal"
      okText="Add"
      @close="closeAddContactDialog"
  >
    <AddContactDialog
    />
  </BaseDialog>
  <BaseDialog
      :title="'Manage Group'"
      :isDialogOpen="isManageGroupDialogOpen"
      okText="Done"
      class="manage-group-dialog asd"
      @close="closeManageGroupDialog"
  >
    <ManageGroupDialog
    />
  </BaseDialog>
  <Alert :title="alert.title" :show="alert.show" :variant="alert.variant" :alertType="alert.alertType"
         :text="alert.text"/>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";
import Uploader from "@/components/TheSendSms/Uploader.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import AddContactDialog from "@/components/TheSendSms/AddContactDialog.vue";
import ManageGroupDialog from "@/components/TheSendSms/ManageGroupDialog.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import Alert from "@/components/TheAlert/Alert.vue";

import {ref} from "vue";
import {useNumbersStore} from "../../../store/users";
import {useSendStore} from "../../../store/messages";

const numbersStore = useNumbersStore()
const sendStore = useSendStore()
//state
const phoneNumbers = ref([{phone: ""}])
const sendSmsState = ref({
  selectedNumber: "",
  smsText: "",
  importType: "Excel",
  setting: 0,
  file: [],
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  check1: "",
  check2: "",
  text: "",
  informations: [
    {
      label: "Whole numbers",
      value: 1,
    },
    {
      label: "Duplicate numbers",
      value: 0,
    },
    {
      label: "Wrong numbers",
      value: 0,
    },
    {
      label: "Type of SMS",
      value: "English",
    },
    {
      label: "Shipping cos",
      value: 0.0079,
    },
  ],
  successes: [
    {
      label: "1 internal numbers $0.0079 0",
    },
    {
      label: "foreign numbers 0 $",
    },
  ],
});
const numberOptions = ref([]);

const recieversOptions = [
  {
    value: "Excel",
    label: "Excel",
  },
  // {
  //   value: "Text",
  //   label: "Text",
  // },
  // {
  //   value: "Phone book",
  //   label: "Phone book",
  // },
  {
    value: "Numbers",
    label: "Numbers"
  },
  // {
  //   value: "CSV",
  //   label: "CSV",
  // },
  // {
  //   value: "VCF",
  //   label: "VCF",
  // },
];
const testSms = ref("");
const infoOptions = ref([
  "You can select one or several groups or several contacts at the same time",
  "If you select a group, all the numbers in the group will be selected",
  "You can enter your contacts through the phone book menu",
]);
const isAddContactDialogOpen = ref(false);
const isManageGroupDialogOpen = ref(false);
const currentStep = ref(0);

//animation variables

const initial = {
  x: -50,
  opacity: 0,
  transition: {
    stiffness: 100,
  },
};
const enter = {
  x: 0,
  opacity: 1,
  transition: {
    stiffness: 100,
    ease: "easeInOut",
  },
};

//methods

const changeRecieverType = (e) => {
  if (e == "Excel") {
    infoOptions.value = [
      "Your input Excel file must contain a number column like the sample file (download the sample file)",
      "Pay attention that the name of the table where the numbers are located should be Sheet1",
      "If this file has been exported from somewhere, copy the number column in a new file",
      "Please note that the first line of the Excel file is not read, so you can use it to insert the title",
    ];
  } else if (e == "Text") {
    infoOptions.value = [
      "The text file containing the numbers should be saved with the extension txt or dat like (sample file).",
      "You can separate the numbers with Enter",
    ];
  } else if (e == "Phone book") {
    infoOptions.value = [
      "You can select one or several groups or several contacts at the same time",
      "If you select a group, all the numbers in the group will be selected",
      "You can enter your contacts through the phone book menu",
    ];
  } else if (e == "CSV") {
    infoOptions.value = ["Choose your desired file."];
  } else if (e == "VCF") {
    infoOptions.value = ["Choose your desired file."];
  }
};

const openAddContactDialog = () => {
  isAddContactDialogOpen.value = true;
};
const closeAddContactDialog = () => {
  isAddContactDialogOpen.value = false;
};

const openManageGroupDialog = () => {
  isManageGroupDialogOpen.value = true;
};
const closeManageGroupDialog = () => {
  isManageGroupDialogOpen.value = false;
};
const changeStepHandler = () => {
  if (currentStep.value == 1) currentStep.value++;
};

//onmounted

onMounted(() => {
  currentStep.value = 1;
});



//======================================================================================================================
const alert = ref({
  text: "",
  show: false,
  alertType: "",
  variant: "",
  title: ''
})

const okAlert = () => {
  alert.value.show = true
  alert.value.text = "Done successfully"
  alert.value.title = "Success"
  alert.value.alertType = "success"
  alert.value.variant = "outlined"
  setTimeout(() => {
    alert.value.show = false
  }, 3000);
};
//======================================================================================================================

const errorAlert = () => {
  alert.value.show = true
  alert.value.text = "An error was encountered"
  alert.value.title = "Error"
  alert.value.alertType = "error"
  alert.value.variant = "outlined"
  setTimeout(() => {
    alert.value.show = false
  }, 3000);
};
//======================================================================================================================
const dynamicObj = ref({});
const sendSms = async () => {
  for (const i in phoneNumbers.value) {
    dynamicObj.value['receivers[' + i + ']'] = phoneNumbers.value[i].phone
  }
  const result = await sendStore.sendSms(dynamicObj.value, sendSmsState.value)
  if (result.status === 201) {
    okAlert()
  } else {
    errorAlert()
  }
}
//======================================================================================================================
const addField = (value, fieldType) => {
  fieldType.push({value: ""});
}
//======================================================================================================================
const removeField = (index, fieldType) => {
  fieldType.splice(index, 1);
}
//======================================================================================================================
const getNumbers = async () => {
  const result = await numbersStore.getNumbers()
  if (result.status === 200) {
    numberOptions.value = result.data.data
  }
}
getNumbers()

</script>
