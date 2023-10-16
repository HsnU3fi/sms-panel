<template>
  <BaseLayout class="dashboard send-correspondence">
    <div class="step-1" v-if="currentStep == 1">
      <InfoBox
          :infoOptions="infoOptions"
          :title="'Guide'"
          v-motion
          :initial="initial"
          :enter="enter"
          :delay="200"
      />

      <section
          class="number form-item"
          v-motion
          :initial="initial"
          :enter="enter"
          :delay="200"
      >
        <p class="label">Your Number</p>
        <el-select
            v-model="state.selectedNumber"
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
      <!--      <Uploader v-motion :initial="initial" :enter="enter" :delay="200" />-->

      <el-upload
          v-model:file-list="state.file"
          class="upload-demo"
          action="/send/send-correspondence"
          :limit="1"
          drag
          :on-success="handleSuccess"
          :on-error="handleError"
      >
        <el-button type="light" class="upload-btn"
        >
          <Icon name='upload'/>
          Click to upload
        </el-button
        >
        <div class="divider"></div>
        or Drag and Drop File Here
      </el-upload>
      <!--      <div-->
      <!--        class="form-item pt-0"-->
      <!--        v-motion-->
      <!--        :initial="initial"-->
      <!--        :enter="enter"-->
      <!--        :delay="200"-->
      <!--      >-->
      <!--        <el-checkbox-->
      <!--          v-model="checked2"-->
      <!--          label="Letters to duplicate numbers are allowed"-->
      <!--          size="large"-->
      <!--        />-->
      <!--      </div>-->
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
        <label for="">Sample SMS text</label>
        <textarea v-model="state.text" rows="8"></textarea>
      </div>
      <div
          class="information-item d-flex align-items-center justify-content-between"
          v-for="(info, index) in state.informations"
          :key="index"
      >
        <span>{{ info.label }}</span>
        <span>{{ info.value }}</span>
      </div>
      <div
          class="seccess-item"
          v-for="(successItem, index) in state.successes"
          :key="index"
      >
        {{ successItem.label }}
      </div>
    </div>
    <template v-if="currentStep !== 0" v-slot:footer
    >
      <el-footer class="text-right">
        <div class="footer">
          <button class="primary" @click="submitSend">
            Send
          </button>
        </div>
      </el-footer>
    </template
    >
  </BaseLayout>
  <Alert :title="alert.title" :show="alert.show" :variant="alert.variant" :alertType="alert.alertType"
         :text="alert.text"/>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";
import Uploader from "@/components/TheSendSms/Uploader.vue";
import Alert from "@/components/TheAlert/Alert.vue";
import {ref} from "vue";
import {useNumbersStore} from "../../../store/users";
import {useSendStore} from "../../../store/messages";


const numbersStore = useNumbersStore()
const sendStore = useSendStore()

//state

const infoOptions = ref([
  "Your input Excel file must contain a number column like the sample file (download the sample file)",
  "Pay attention that the name of the table where the numbers are located should be Sheet1",
  "If this file has been exported from somewhere, copy the number column in a new file",
  "Please note that the first line of the Excel file is not read, so you can use it to insert the title",
]);
const state = ref({
  selectedNumber: "",
  file: [],
  text: "",
  informations: [
    {
      label: "Correct numbers",
      value: 1,
    },
    {
      label: "Wrong numbers",
      value: 1,
    },
    {
      label: "Duplicate numbers",
      value: 1,
    },
    {
      label: "Internal numbers",
      value: 0,
    },
    {
      label: "Foreign numbers",
      value: 1,
    },
    {
      label: "shipping cost",
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
const numberOptions = ref([])
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
const getNumbers = async () => {
  const result = await numbersStore.getNumbers()
  if (result.status === 200) {
    numberOptions.value = result.data.data
  }
}
getNumbers()
//======================================================================================================================
let resUpload = ref()
const handleSuccess = async (response, file, fileList) => {
  // Handle successful upload
  resUpload.value = fileList[0]
  console.log('resUpload.value')
  console.log(resUpload.value)
  console.log(file)
  console.log(fileList[0])
}
//======================================================================================================================
const submitSend = async () => {
  const result = await sendStore.correspond(state.value.selectedNumber, resUpload.value)
  if (result.status === 201) {
    okAlert()
  } else {
    errorAlert()
  }
}
</script>
