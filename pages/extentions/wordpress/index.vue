<template>
  <BaseLayout class="dashboard wordpress">
    <h4 class="label">
      <a href="javascript:void(0)" class="d-flex align-items-center g-8"
        ><Icon name="download-blue" /> Wordpress help file</a
      >
    </h4>
    <div class="card-item">
      <img src="../../../assets/images/svg/Wordpress.svg" />
      <p>Wordpress</p>
    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const cardItems = [
  {
    icon: "../../../assets/images/svg/Wordpress.svg",
    label: "Wordpress",
  },
];
</script>
