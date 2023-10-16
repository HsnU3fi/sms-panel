<template>
  <BaseLayout class="dashboard">
    <div
      class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <div class="d-flex">
        <button @click="isNewInsertVisible = true">+ Insert New</button>
  <!--        <el-input v-model="search" class="w-50 m-2" placeholder="Search">-->
  <!--          <template #suffix-->
  <!--            ><span class="filter"><Icon name="filter" /> </span-->
  <!--          ></template>-->
  <!--          <template #prefix><Icon name="search" /></template>-->
  <!--        </el-input>-->
      </div>
    </div>
    <el-skeleton style="width: 100%;" :rows="5" :loading="isLoading" animated>
    <FastTextsTable :data="tableData" />
    </el-skeleton>
  </BaseLayout>

    <InsertNewModal

        title="New Text"
        :isDialogOpen="isNewInsertVisible"
        okText="Add"
        cancelText="Cancel"
        class="medium-dialog"
        @close="isNewInsertVisible = false"
        @cancelClicked="isNewInsertVisible = false"

    />
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import InsertNewModal from "@/components/TheFastTexts/InsertNewModal.vue";
import FastTextsTable from "@/components/TheFastTexts/FastTextsTable.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
import {useFastTextStore} from "../../../store/settings";
const isNewInsertVisible = ref(false);
const search = ref("");
let tableData = ref([]);
let isLoading = ref(true);
const fastTextStore = useFastTextStore()

const getFastTextApi = async () => {
  const result = await fastTextStore.getFastText(1)
  if (result.status === 200) {
    tableData.value = result.data
    isLoading.value = false
  } else {
    isLoading.value = false
  }
};
getFastTextApi()
</script>
