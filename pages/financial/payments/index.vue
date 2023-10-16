<template>
  <BaseLayout class="dashboard recieve">
    <div class="d-flex action-bar-table col-12 flex-column">
      <div class="d-flex justify-content-between align-items-center">
        <el-input
          v-model="search"
          class="w-50 mw-0 search-field"
          placeholder="Search"
        >
          <template #suffix
            ><span class="filter" @click="isAdvancedSearchVisible = true"
              ><Icon name="filter" /> </span
          ></template>
          <template #prefix><Icon name="search" /></template>
        </el-input>
        <Icon name="refresh-blue" />
      </div>
    </div>

    <Table/>

    <BaseDialog
      :title="'Search'"
      :isDialogOpen="isAdvancedSearchVisible"
      okText="add"
      cancelText="Cancel"
      class="base-modal"
      @close="isAdvancedSearchVisible = false"
      @cancelClicked="isAdvancedSearchVisible = false"
    >
      <BodyModal />
    </BaseDialog>

  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import BodyModal from "@/components/TheFinancial/Payments/BodyModal.vue";
import Table from "@/components/TheFinancial/Payments/Table.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const isAdvancedSearchVisible = ref(false);
const search = ref("");
const state = ref({
  folder: "",
});


</script>
