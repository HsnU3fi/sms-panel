<template>

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


    <form v-motion :initial="initial" :enter="enter" :delay="200">
      <div class="f-item">
        <label for="fullName">Full Name</label>
        <input
            type="text"
            placeholder="Full Name"
            id="fullName"
            v-model="addContactState.fullName"
        />
      </div>
      <div class="f-item">
        <label for="Allonym">Allonym</label>
        <input
            type="text"
            placeholder="Allonym"
            id="Allonym"
            v-model="addContactState.allonym"
        />
      </div>
      <div class="f-item">
        <label for="Email">Email</label>
        <input
            type="email"
            placeholder="Email"
            id="Email"
            v-model="addContactState.email"
        />
      </div>
      <div class="f-item">
        <label for="phoneNumber">Phone Number</label>
        <input
            type="number"
            min="0"
            placeholder="Phone Number"
            id="phoneNumber"
            v-model="addContactState.phoneNumber"
        />
      </div>
      <div class="f-item">
        <label for="Telephone">Telephone</label>
        <input
            type="number"
            placeholder="Telephone"
            min="0"
            id="Telephone"
            v-model="addContactState.telephone"
        />
      </div>
      <div class="f-item">
        <label for="Fax">Fax</label>
        <input
            type="number"
            placeholder="Fax"
            min="0"
            id="Fax"
            v-model="addContactState.fax"
        />
      </div>
      <div class="f-item">
        <label for="CompanyName">Company Name</label>
        <input
            type="text"
            placeholder="Company  Name"
            id="CompanyName"
            v-model="addContactState.companyName"
        />
      </div>
      <div class="f-item">
        <label for="postalCode">Postal Code</label>
        <input
            type="number"
            min="0"
            placeholder="Postal Code"
            id="postalCode"
            v-model="addContactState.postalCode"
        />
      </div>

      <div class="double-colun">
        <div class="f-item w-50">
          <label for="State">Group Contact</label>
          <el-select
              v-model="addContactState.groupContacts"
              class="select-box"
              placeholder="State"
              size="large"
              id="State"
          >
            <el-option
                v-for="data in groupContacts"
                :key="data.name"
                :label="data.name"
                :value="data.id"
            />
          </el-select>
        </div>


        <div class="f-item w-50">
          <label for="City">City</label>
          <el-select
              v-model="addContactState.city"
              class="select-box"
              placeholder="City"
              size="large"
              id="City"
          >
            <el-option
                v-for="state in cities"
                :key="state.value"
                :label="state.label"
                :value="state.value"
            />
          </el-select>
        </div>
      </div>
      <div class="f-item">
        <label for="Birthday">Birthday</label>
        <el-date-picker
            v-model="addContactState.birthday"
            type="date"
            placeholder="Pick a date"
            :default-value="new Date(2010, 9, 1)"
            class="date-picker"
            id="Birthday"
            :prefix-icon="CalendarBlue"
        >
        </el-date-picker>
      </div>
      <div class="f-item">
        <label for="OccasionDate">Occasion date</label>
        <el-date-picker
            v-model="addContactState.occasionDate"
            type="date"
            class="date-picker"
            placeholder="Pick a date"
            :default-value="new Date(2023, 9, 1)"
            id="OccasionDate"
            :prefix-icon="CalendarBlue"
        />
      </div>
      <div class="f-item">
        <label for="Address">Address</label>
        <textarea
            id="Address"
            cols="30"
            rows="10"
            v-model="addContactState.address"
            placeholder="Address"
        ></textarea>
      </div>
      <div class="f-item">
        <label for="Description">Description</label>
        <textarea
            id="Description"
            cols="30"
            rows="10"
            v-model="addContactState.description"
            placeholder="Description"
        ></textarea>
      </div>

      <div class="f-item w-50">
        <label for="State">State</label>
        <el-switch
            v-model="addContactState.state"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            active-value="1"
            inactive-value="0"
        />
      </div>


      <!--    <el-divider />-->
      <!--    <h4 class="label">Contct Group</h4>-->
      <!--    <div class="f-item">-->
      <!--      <el-checkbox-group v-model="addContactState.group">-->
      <!--        <el-checkbox-->
      <!--          v-for="(contctGroup, index) in contctGroups"-->
      <!--          :key="index"-->
      <!--          :label="contctGroup"-->
      <!--          >{{ contctGroup }}</el-checkbox-->
      <!--        >-->
      <!--      </el-checkbox-group>-->
      <!--      <button type="button" class="primary">Refresh List</button>-->
      <!--    </div>-->
      <!--    <el-divider />-->
      <!--    <h4 class="label">Advances Setting</h4>-->
      <!--    <div class="f-item">-->
      <!--      <el-checkbox-group v-model="addContactState.advanceSetting">-->
      <!--        <el-checkbox-->
      <!--          v-for="(advanceSetting, index) in advanceSettings"-->
      <!--          :key="index"-->
      <!--          :label="advanceSetting"-->
      <!--          >{{ advanceSetting }}</el-checkbox-->
      <!--        >-->
      <!--      </el-checkbox-group>-->
      <!--    </div>-->
    </form>
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
            @click="addContact"
        >
          {{ okText }}
        </v-btn>
      </div>
    </template>
  </el-dialog>
  <Alert :title="alert.title" :show="alert.show" :variant="alert.variant" :alertType="alert.alertType"
         :text="alert.text"/>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import CalendarBlue from "@/components/TheIcon/single-icons/CalendarBlue.vue";
import Alert from "@/components/TheAlert/Alert.vue";


import {useGContactStore, useContactStore} from "../../store/posibilities";
import {defineEmits, defineProps, ref} from "vue";

const emit = defineEmits(["close", "okClicked", "cancelClicked"]);
const closeDialog = () => {
  emit("close");
};
const gContactStore = useGContactStore()
const contactStore = useContactStore()
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
//=====
//state

const addContactState = ref({
  fullName: "",
  allonym: "",
  email: "",
  phoneNumber: "",
  telephone: "",
  fax: "",
  companyName: "",
  postalCode: "",
  state: "",
  city: "",
  birthday: "",
  occasionDate: "",
  address: "",
  description: "",
  groupContacts: ""
  // advanceSetting: null,
});

const states = [
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
const cities = [
  {
    value: 1,
    label: "City 2",
  },
  {
    value: 2,
    label: "City 2",
  },
  {
    value: 3,
    label: "City 3",
  },
  {
    value: 5,
    label: "City 4",
  },
  {
    value: 6,
    label: "City 5",
  },
];
const groupContacts = ref([]);
const advanceSettings = [
  "Display a new form to enter the next contact",
  "If the contact number was in the phone book",
  "Not including the number if the number is available in groups",
];

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
const router = useRouter();

const alert = ref({
  text: "",
  show: false,
  alertType: "",
  variant: "",
  title: ''
})


const okAlert = () => {
  closeDialog()
  alert.value.show = true
  alert.value.text = "Done successfully"
  alert.value.title = "Success"
  alert.value.alertType = "success"
  alert.value.variant = "outlined"
  setTimeout(() => {
    alert.value.show = false
    router.go('/posibilities/contact')
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


const getGContactApi = async () => {
  const result = await gContactStore.getGContact()
  if (result.status === 200) {
    groupContacts.value = result.data.data
  }
}
getGContactApi()


//======================================================================================================================
const addContact = async () => {
  const result = await contactStore.createContact(addContactState.value)
  if (result.status === 201) {
    okAlert()
  } else {
    errorAlert()
  }
}
</script>

