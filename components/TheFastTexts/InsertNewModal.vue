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
      >
        <div class="form-item">
          <label class="d-flex align-items-center justify-content-between"
          >Tittle
          </label>
          <input type="text" placeholder="Tittle " v-model="state.title" />
        </div>

        <div class="form-item">
          <label>Text </label>
          <textarea placeholder="Text " rows="8" v-model="state.text"></textarea>
          <label>{{ state.text.length }} / 160 </label>
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
              @click="addFastText"
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

import {useFastTextStore} from "../../store/settings";
import {ref} from "vue";
import {defineProps, defineEmits} from "vue";

const fastTextStore = useFastTextStore();
const route = useRoute()
const router = useRouter()

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
    router.go('/settings/fast-texts')
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
  text: "",
  title: ""
});
const counter = ref(0);
//======================================================================================================================
const addFastText = async () => {
  isLoading.value = true
  const result = await fastTextStore.createFastText(state.value)
  if (result.status === 201) {
    okAlert()
  } else {
    errorAlert()
  }
  isLoading.value = false
}

</script>
