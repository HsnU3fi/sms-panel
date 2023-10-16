<template>
  <v-row @click="show =false"
         justify="center" >
    <div style="position: absolute; bottom: 0;;margin-bottom:25px;" >
      <v-alert
          style="border-radius:10px"
          v-show="show"
          width="400"
          :type="alertType"
          :variant="variant"
          class="text-center"
          elevation="10"



      >
        <template v-slot:title>
          {{ props.title }}
        </template>
        <h3>
          {{ props.text }}
        </h3>
      </v-alert>
    </div>

  </v-row>
</template>


<script setup>
import {ref} from "vue";
const alert = ref(true)
import {defineProps} from "vue";

const props = defineProps({
  alertType: {
    default: "",
    type: String,
  },

  show: {
    default: false,
  },
  variant: {
    default: '',
    type: String,

  },
  title: {
    default: "",
    type: String,
  },
  text: {
    type: String,
    default: "",
  },

});


</script>

<style scoped>

</style>