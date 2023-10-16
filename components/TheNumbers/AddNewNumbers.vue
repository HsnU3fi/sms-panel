<template>
  <ClientOnly>

    <el-dialog
        :model-value="props.isDialogOpen"
        :show-close="false"
        class="base-dialog"
        :class="props.class"
        @close="closeDialog"
        align-center
    >
      <template #header="{ close }">
        <h3 class="header">
          {{ props.title }}
          <span @click="close(), closeDialog()"><Icon name="close"/></span>
        </h3>
      </template>


      <v-form
          class="add-new-emplyee"
      >
        <div class="form-item">
          <label
              for="Number"
              class="d-flex rounded align-items-center justify-content-between"
          >
            Number

          </label>

          <el-select
              v-model="state.number"
              class="select-box"
              placeholder="Number"
              size="large"
              id="selectNumber"
          >
            <el-option
                v-for="option in options"
                :key="option.number"
                :label="option.number"
                :value="option.id"
            />
          </el-select>
        </div>
      </v-form>

      <div class="form-item">
        <label
            for="Status"
            class="d-flex rounded align-items-center justify-content-between"
        >
          Status

        </label>

        <el-tooltip :content="'Switch value: ' + value" placement="top">
          <el-switch
              v-model="state.status"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
              active-value="1"
              inactive-value="0"
          />
        </el-tooltip>
      </div>

      <template #footer v-if="okText || cancelText">
        <div class="footer">
          <v-btn
              type="button"
              class="cancel-btn"
              v-if="cancelText"
              @click="emit('cancelClicked')"
          >
            {{ cancelText }}
          </v-btn>
          <v-btn
              type="button"
              class="ok-btn"
              v-if="okText"
              @click="addNumber"
          >
            {{ okText }}
          </v-btn>
        </div>
      </template>

    </el-dialog>
    <Alert :title="alert.title" :show="alert.show" :variant="alert.variant" :alertType="alert.alertType"
           :text="alert.text"/>

  </ClientOnly>

</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import ClockBlue from "@/components/TheIcon/single-icons/ClockBlue.vue";
import CalendarBlue from "@/components/TheIcon/single-icons/CalendarBlue.vue";
import Loading from "@/components/TheLoading/Loading.vue";
import Alert from "@/components/TheAlert/Alert.vue";

import {useNumbersStore, useUsersStore} from "../../store/users";
import {ref} from "vue";
import {defineProps, defineEmits} from "vue";

const userStore = useUsersStore();
const route = useRoute()
const router = useRouter()

const value = ref('1')

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  isDialogOpen: {
    default: false,
  },
  class: {
    type: String,
  },
  okText: {
    type: String,
    default: "",
  },
  cancelText: {
    type: String,
    default: "",
  },
});
//======================================================================================================================
const form = ref(false)
const alert = ref({
  text: "",
  show: false,
  alertType: "",
  variant: "",
  title: ''
})
//======================================================================================================================
const emit = defineEmits(["close", "okClicked", "cancelClicked"]);
const closeDialog = () => {
  emit("close");
};
//======================================================================================================================
const okAlert = () => {
  closeDialog()
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
  closeDialog()
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
//state
const numbersStore = useNumbersStore()
let isLoading = ref(false)
let show = ref(false)
//======================================================================================================================
const state = ref({
  number: "",
  status: ""
});
const counter = ref(0);
//======================================================================================================================
const addNumber = async () => {
  isLoading.value = true
  const result = await numbersStore.createNumber(state.value, route.params.id)
  if (result.status === 201) {
    okAlert()
  } else {
    errorAlert()
  }
  isLoading.value = false
}
//======================================================================================================================
const options = ref([])

const getNumbersApi = async (page) => {
  const result = await numbersStore.getNumbersOptions(page)
  if (result.status === 200) {
    options.value = result.data.data
    console.log(options.value)
  }
}
getNumbersApi()
</script>
