<template>
  <BaseLayout class="dashboard recieve">
    <div class="action-bar-table">
      <InfoBox  :title="'Please note that in the system, your last payment is always the criterion for determining the tariff'" />

      <h5 class="mt-4 mb-4">Electronic charging</h5>

      <div class="base-modal">
        <div class="f-item">
          <label for="title">Charge amount (the amount must be more than $1)</label>
          <input
              type="text"
              id="title"
              v-model="state.title"
          />
        </div>
      </div>

      <el-divider />

      <h5 class="">Tariffs</h5>

    </div>

    <Table />

  </BaseLayout>
</template>





<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import Table from "@/components/TheFinancial/OnlineRecharge/Table.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";

import {ref} from "vue";


const state = ref({
  title: ''
})

</script>

