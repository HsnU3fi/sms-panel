<template>

  <div class="responsive-container">
    <section class="login-container">
      <h1 class="font-bold text-Primary text-center h-3 ">Login</h1>
      <v-form
          v-model="form"
      >
        <section class="form-item h-3">

          <v-text-field
              color="blue"
              density="compact"
              :rules="[v => !!v || 'Username field is required']"
              v-model="user.username"
              label="Username"
              variant="outlined"/>

        </section>
        <section class="form-item h-3">

          <v-text-field
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              @click:append-inner="visible = !visible"
              color="blue"
              :rules="[v => !!v || 'Password field is required']"
              v-model="user.password"
              label="password"
              variant="outlined"/>

        </section>
        <v-btn
            height="45"
            @click="login"
            :disabled="!form"
            :loading="isLoading"
            class="mt-4 h-3"
            block color="#487DED">
          Login

        </v-btn>
      </v-form>
    </section>

  </div>
</template>


<script setup>

import {useLoginStore} from "../../../store/auth";

const isLoading = ref(false)
const loginStore = useLoginStore()
const user = ref({
  username: 'admin',
  password: '123456',
});
const form = ref(false)
const visible = ref(false)


const login = async () => {
  isLoading.value = true
  const result = await loginStore.login(user.value)
  const setToken = await loginStore.setTokenInLocalStorage(result)
  await loginStore.checkUsers()
  if (setToken) {
    window.location.href = "/"
  }
  isLoading.value = false
};
</script>
<style>


</style>