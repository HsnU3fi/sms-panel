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
          class="add-new-setting"
      >
        <div class="form-item">
          <v-row style="margin-top:120px" justify="center" aling="center">

            <v-text-field
                density
                variant="plain"
                type="text" :rules="[v => !!v || 'Key field is required']"
                id="Key" placeholder="Key"
                  v-model="state.key"
            />
            <Icon name="important"/>

            <div style="width:20px"/>

            <v-text-field
                v-model="state.value"
                density
                variant="plain"
                type="text" :rules="[v => !!v || 'Value field is required']"
                id="Value" placeholder="Value"
            />
            <Icon name="important"/>

          </v-row>
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
              @click="addSetting"
          >
            {{ okText }}
          </v-btn>
        </div>
      </template>

    </el-dialog>
    <Loading :value="isLoading"/>
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
import {useSettingStore} from "../../store/users";
import {ref} from "vue";
import {defineProps, defineEmits} from "vue";

//======================================================================================================================
const settingStore = useSettingStore();
const route = useRoute()
const router = useRouter()
const form = ref(false)
const isLoading = ref(false)
const counter = ref(0);
//======================================================================================================================
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
    router.go('/users/setting')

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
const state = ref({
  key: "",
  value: "",
  id: ""

});
//======================================================================================================================

const addSetting = async () => {
  isLoading.value = true
  const result = await settingStore.createSetting(state.value,route.params.id)
  if (result.status === 201) {
    okAlert()
    isLoading.value=false
  } else {
    errorAlert()
    isLoading.value=false

  }
  isLoading.value = false
}

</script>
