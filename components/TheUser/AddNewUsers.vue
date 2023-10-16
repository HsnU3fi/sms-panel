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
          v-model="form"
          class="add-new-emplyee"
      >
        <div class="form-item">
          <label
              for="Name"
              class="d-flex rounded align-items-center justify-content-between"
          >
            Name
            <Icon name="important"
            />

          </label>
          <v-text-field
              density
              variant="plain"
              type="text" :rules="[v => !!v || 'Name field is required']"
              id="Name" placeholder="Name" v-model="state.name"
          />
        </div>
        <div class="form-item">
          <label
              for="LastName"
              class="d-flex align-items-center justify-content-between"
          >Last Name
            <Icon name="important"
            />
          </label>
          <v-text-field
              density
              variant="plain"
              type="text" :rules="[v => !!v || 'Last Name field is required']"
              id="LastName" placeholder="Last Name" v-model="state.lastName"
          />

        </div>
        <div class="form-item">
          <label
              for="UserName"
              class="d-flex align-items-center justify-content-between"
          >User Name
            <Icon name="important"
            />
          </label>
          <v-text-field
              density
              variant="plain"
              type="text" :rules="[v => !!v || 'User Name field is required']"
              id="UserName" placeholder="User Name" v-model="state.userName"
          />


        </div>
        <div class="form-item">
          <label
              for="Type"
              class="d-flex align-items-center justify-content-between"
          >Type
          </label>
          <el-select
              v-model="state.type"
              class="select-box"
              placeholder="Type"
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
        <div class="form-item select-country">
          <label class="">Mobile</label>

          <el-input
              v-model="state.mobile.value"
              placeholder="Mobile"
              class="input-with-select"
          >
            <template #prepend>
              <el-select v-model="state.mobile.type" placeholder="Select">
                <el-option label="USA" value="USA"
                >
                  <template #default>
                    <Icon :name="state.mobile.type"/>
                  </template
                  >
                </el-option>
              </el-select>
            </template>
          </el-input>
        </div>

        <div class="form-item">
          <label
              for="DisplayName"
              class="d-flex align-items-center justify-content-between"
          >Display Name </label>
          <v-text-field
              density
              variant="plain"
              type="text" :rules="[v => !!v || 'Display Name field is required']"
              id="DisplayName" placeholder="Display Name"
              v-model="state.displayName"
          />


        </div>

        <div  :key="counter">
          <label class="">Password </label>
          <v-text-field
              class="border-input"
              :append-inner-icon="state.password.isVisible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="state.password.isVisible ? 'text' : 'password'"
              density
              @click:append-inner="state.password.isVisible = !state.password.isVisible"
              color="blue"
              :rules="[v => !!v || 'Password field is required']"
              v-model="state.password.text"
              placeholder="Password"
              variant="plain">


          </v-text-field>
        </div>
        <div class="h-3" :key="counter">
          <label class="">Password again </label>
          <v-text-field
              class="border-input"
              :append-inner-icon="state.passwordagain.isVisible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="state.passwordagain.isVisible ? 'text' : 'password'"
              density
              @click:append-inner="state.passwordagain.isVisible = !state.passwordagain.isVisible"
              color="blue"
              :rules="[v => !!v || 'Password field is required']"
              v-model="state.passwordagain.text"
              placeholder="Password again"
              variant="plain"/>


        </div>

      </v-form>

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
              :disabled="!form"
              @click="addUser"
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
  import Alert from "@/components/TheAlert/Alert.vue";

import {useUsersStore} from "../../store/users";
import {ref} from "vue";
import {defineProps, defineEmits} from "vue";

const userStore = useUsersStore();
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
const typeOptions = [
  {
    value: "user",
    label: "user",
  },
  {
    value: "reseller",
    label: "reseller",
  },
  {
    value: "r_manager",
    label: "reseller manger",
  },
];
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
    router.go('/users/users')
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
let isLoading = ref(false)
let show = ref(false)
//======================================================================================================================

const state = ref({
  name: "",
  lastName: "",
  email: "",
  type:'',
  mobile: {
    value: "",
    type: "usa-flag",
  },
  userName: '',
  displayName: "",
  companyName: "",
  country: "",
  state: "",
  city: "",
  zipcode: "",
  address: "",
  description: "",
  password: {
    text: "",
    isVisible: false,
  },
  passwordagain: {
    text: "",
    isVisible: false,
  },
  sendLimit: 0,
  dailyLimit: 0,
  expiration: "",
  isSend: false,
  title: "",
  text: "",
});
//======================================================================================================================

const countryOptions = [
  {
    value: "USA",
    label: "USA",
  },
  {
    value: "Iran",
    label: "Iran",
  },
  {
    value: "Turkey",
    label: "Turkey",
  },
];
const stateOptions = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
const cityOptions = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
const counter = ref(0);
const router = useRouter();

//======================================================================================================================
const addUser = async () => {
  if (state.value.password.text === state.value.passwordagain.text) {
    const result = await userStore.createUser(state.value)
    if (result.status === 201) {
      okAlert()
    } else {
      errorAlert()
    }
  } else {
    errorAlert()
  }
}

</script>
