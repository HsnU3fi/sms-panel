<template>
  <BaseLayout class="dashboard change-password">
    <!-- alerts -->
    <div class="col-12 mt-0">
      <form>
        <div class="form-item" :key="counter">
          <label class="">Password </label>
          <el-input
            v-model="state.password.text"
            class=""
            :type="state.password.isVisible ? 'text' : 'password'"
            placeholder="Password"
          >
            <template #suffix
              ><span
                class="icon-password"
                @click="
                  state.password.isVisible = !state.password.isVisible;
                  counter++;
                "
                ><Icon :name="state.password.isVisible ? 'eye-slash' : 'eye'"
              /></span>
            </template>
          </el-input>
        </div>
        <a href="javascript:void(0)" class="forget-password-btn"
          >Forget Password?</a
        >
        <div class="form-item" :key="counter">
          <label class="">New password </label>
          <el-input
            v-model="state.newPassword.text"
            class=""
            :type="state.newPassword.isVisible ? 'text' : 'password'"
            placeholder="New password"
          >
            <template #suffix
              ><span
                class="icon-password"
                @click="
                  state.newPassword.isVisible = !state.newPassword.isVisible;
                  counter++;
                "
                ><Icon
                  :name="state.newPassword.isVisible ? 'eye-slash' : 'eye'"
              /></span>
            </template>
          </el-input>
        </div>
        <div class="form-item" :key="counter">
          <label class="">New password Again </label>
          <el-input
            v-model="state.newPasswordAgain.text"
            class=""
            :type="state.newPasswordAgain.isVisible ? 'text' : 'password'"
            placeholder="New password Again"
          >
            <template #suffix
              ><span
                class="icon-password"
                @click="
                  state.newPasswordAgain.isVisible =
                    !state.newPasswordAgain.isVisible;
                  counter++;
                "
                ><Icon
                  :name="
                    state.newPasswordAgain.isVisible ? 'eye-slash' : 'eye'
                  "
              /></span>
            </template>
          </el-input>
        </div>
        <div class="form-item">
          <button class="primary">Confirm</button>
        </div>
      </form>
    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const state = ref({
  password: {
    isVisible: false,
    text: "",
  },
  newPassword: {
    isVisible: false,
    text: "",
  },
  newPasswordAgain: {
    isVisible: false,
    text: "",
  },
});
const counter = ref(0);

//methods
</script>
    