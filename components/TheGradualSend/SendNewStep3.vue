<template>
  <form class="new-send-bulk-shipping new-send-dialog">
    <div class="form-item">
      <label for="">Sample SMS text</label>
      <textarea v-model="state.desc" rows="8"></textarea>
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
  </form>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import Icon from "@/components/TheIcon/Icon.vue";

import { ref } from "vue";

//state

const state = ref({
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  informations: [
    {
      label: "Recipients",
      value: 1,
    },
    {
      label: "Number of sections",
      value: 1,
    },
    {
      label: "SMS type",
      value: "English",
    },
    {
      label: "Number of shipments per package",
      value: 0,
    },
    {
      label: "Total number of packages",
      value: 1,
    },
    {
      label: "Shipping fee",
      value: 0.0079,
    },
    {
      label: "Start of posting",
      value: "04/03/2023 16:00:00",
    },
    {
      label: "End of posting",
      value: "04/03/2023 16:00:00",
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
</script>
