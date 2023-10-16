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

        <div :key="counter">
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
        <!--    <div class="form-item">-->
        <!--      <label-->
        <!--          for="Email"-->
        <!--          class="d-flex align-items-center justify-content-between"-->
        <!--      >Email <Icon name="important"-->
        <!--      /></label>-->
        <!--      <input-->
        <!--          type="email"-->
        <!--          id="Email"-->
        <!--          placeholder="Email"-->
        <!--          v-model="state.email"-->
        <!--      />-->
        <!--    </div>-->

        <!--    <div class="form-item">-->
        <!--      <label for="CompanyName" class="">Company Name </label>-->
        <!--      <input-->
        <!--          type="text"-->
        <!--          id="CompanyName"-->
        <!--          placeholder="Company Name"-->
        <!--          v-model="state.companyName"-->
        <!--      />-->
        <!--    </div>-->
        <!--    <div class="form-item">
              <p class="label mt-0">Country</p>
              <el-select
                  v-model="state.country"
                  class="select-box"
                  placeholder="Country"
                  size="large"
              >
                <el-option
                    v-for="country in countryOptions"
                    :key="country.value"
                    :label="country.label"
                    :value="country.value"
                />
              </el-select>
            </div>-->
        <!--    <div class="form-item">-->
        <!--      <p class="label mt-0">State</p>-->
        <!--      <el-select-->
        <!--          v-model="state.state"-->
        <!--          class="select-box"-->
        <!--          placeholder="State"-->
        <!--          size="large"-->
        <!--      >-->
        <!--        <el-option-->
        <!--            v-for="state in stateOptions"-->
        <!--            :key="state.value"-->
        <!--            :label="state.label"-->
        <!--            :value="state.value"-->
        <!--        />-->
        <!--      </el-select>-->
        <!--    </div>-->
        <!--    <div class="form-item">-->
        <!--      <p class="label mt-0">City</p>-->
        <!--      <el-select-->
        <!--          v-model="state.city"-->
        <!--          class="select-box"-->
        <!--          placeholder="City"-->
        <!--          size="large"-->
        <!--      >-->
        <!--        <el-option-->
        <!--            v-for="city in cityOptions"-->
        <!--            :key="city.value"-->
        <!--            :label="city.label"-->
        <!--            :value="city.value"-->
        <!--        />-->
        <!--      </el-select>-->
        <!--    </div>-->
        <!--    <div class="form-item">-->
        <!--      <label-->
        <!--          for="zipcode"-->
        <!--          class="d-flex align-items-center justify-content-between"-->
        <!--      >Zipcode-->
        <!--      </label>-->
        <!--      <input-->
        <!--          type="text"-->
        <!--          id="zipcode"-->
        <!--          placeholder="Zipcode"-->
        <!--          v-model="state.zipcode"-->
        <!--      />-->
        <!--    </div>-->
        <!--    <div class="send-text form-item">-->
        <!--      <p class="label mt-0">Address</p>-->
        <!--      <textarea-->
        <!--          name="sms-text"-->
        <!--          id="address"-->
        <!--          cols="60"-->
        <!--          rows="10"-->
        <!--          v-model="state.address"-->
        <!--      >-->
        <!--      </textarea>-->
        <!--    </div>-->
        <!--    <div class="send-text form-item">-->
        <!--      <p class="label mt-0">Description</p>-->
        <!--      <textarea-->
        <!--          name="sms-text"-->
        <!--          id="Description"-->
        <!--          cols="60"-->
        <!--          rows="10"-->
        <!--          v-model="state.description"-->
        <!--      >-->
        <!--      </textarea>-->
        <!--    </div>-->
        <!--    <div class="form-item">-->
        <!--      <label for="sendLimit" class="">Send Limit </label>-->
        <!--      <input-->
        <!--          type="number"-->
        <!--          id="sendLimit"-->
        <!--          placeholder="Send Limit"-->
        <!--          v-model="state.sendLimit"-->
        <!--      />-->
        <!--    </div>-->
        <!--    <div class="form-item">-->
        <!--      <label for="DailyLimit" class="">Daily Limit </label>-->
        <!--      <input-->
        <!--          type="number"-->
        <!--          id="DailyLimit"-->
        <!--          placeholder="Daily Limit"-->
        <!--          v-model="state.dailyLimit"-->
        <!--      />-->
        <!--    </div>-->
        <!--    <div class="form-item">-->
        <!--      <label for="FromDate">Expiration</label>-->
        <!--      <el-date-picker-->
        <!--          v-model="state.expiration"-->
        <!--          type="date"-->
        <!--          placeholder="Expiration"-->
        <!--          :default-value="new Date(2010, 9, 1)"-->
        <!--          class="date-picker"-->
        <!--          id="FromDate"-->
        <!--          :prefix-icon="CalendarBlue"-->
        <!--      />-->
        <!--    </div>-->
        <!--    <el-divider />-->
        <!--    <div class="form-item">-->
        <!--      <el-checkbox-->
        <!--          v-model="state.isSend"-->
        <!--          label="Send username, password and panel address to the user's mobile phone and email"-->
        <!--          size="large"-->
        <!--      />-->
        <!--    </div>-->
        <!--    <div class="form-item">-->
        <!--      <label for="title" class="">Title </label>-->
        <!--      <input type="text" id="title" placeholder="Title" v-model="state.title" />-->
        <!--    </div>-->
        <!--    <div class="send-text form-item">-->
        <!--      <p class="label mt-0">Text</p>-->
        <!--      <textarea-->
        <!--          name="sms-text"-->
        <!--          id="SmsText"-->
        <!--          cols="60"-->
        <!--          rows="10"-->
        <!--          v-model="state.text"-->
        <!--      >-->
        <!--      </textarea>-->
        <!--    </div>-->

      </v-form>


      <template #footer v-if="okText || cancelText">
        <div class="footer">
          <v-btn
              type="button"
              class="cancel-btn"
              v-if="cancelText"
              @click="closeDialog()"
          >
            {{ cancelText }}
          </v-btn>
          <v-btn
              type="button"
              class="ok-btn"
              :disabled="!form"
              v-if="okText"
              @click="addEmployee()"
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

import {useEmployeesStore} from "../../store/users";
import {ref} from "vue";
import {defineProps, defineEmits} from "vue";


const employeeStore = useEmployeesStore();
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
const form = ref(false)
const router = useRouter();
const alert = ref({
  text: "",
  show: false,
  alertType: "",
  variant: "",
  title: ''
})

const emit = defineEmits(["close", "okClicked", "cancelClicked"]);
const closeDialog = () => {
  emit("close");
};

const okAlert = () => {
  closeDialog()
  alert.value.show = true
  alert.value.text = "Done successfully"
  alert.value.title = "Success"
  alert.value.alertType = "success"
  alert.value.variant = "outlined"
  setTimeout(() => {
    alert.value.show = false
    router.go('/users/employees')
  }, 3000);
};
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
//state
let isLoading = ref(false)
let show = ref(false)

const state = ref({
  name: "",
  lastName: "",
  email: "",
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

const addEmployee = async () => {
  if (state.value.password.text === state.value.passwordagain.text) {
    isLoading.value = true
    const result = await employeeStore.createEmployees(state.value)
    if (result.status === 201) {
      okAlert()

    } else {
      errorAlert()
    }
    isLoading.value = false
  } else {
    errorAlert()
  }
}

</script>
