<template>
  <BaseLayout class="dashboard reports-mobile-reports">
    <div
        class="d-flex align-items-end action-bar-table filters col-12"
    >
      <section class="form-item">
        <label class="label">Phone  number</label>
        <input type="tel" v-model="filter.phone_number" placeholder="Phone  number">
      </section>
      <section class="form-item">
        <label class="label">SMS Type</label>
        <el-select v-model="filter.sms_type">
          <el-option v-for="item in smsTypeOptions" :key="item.id" :label="item.label" :value="item.id" />
        </el-select>
      </section>
      <section class="form-item">
        <button class="confirm-button">
          <Icon name="search" />
          Search
        </button>
      </section>
    </div>
    <Table />
  </BaseLayout>
  <BaseDialog
      title="Add New"
      :isDialogOpen="dialogVisible"
      okText="Add"
      cancelText="Cancel"
      class="new-send-dialog new-numbering-dialog"
      @close="dialogVisible = false"
      @cancel-clicked="dialogVisible = false"
  >
    <NewNumbering />
  </BaseDialog>
</template>

<script setup>
import {ref} from "vue";
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from '@/components/TheDialog/BaseDialog.vue'
import Table from "@/components/TheReports/MobileReport/Table.vue";
import Icon from '@/components/TheIcon/Icon.vue'
import NewNumbering from "@/components/TheCompetition/NewNumbering";
const state = ref({
  folder: "",
});
const folderOptions = [
  {
    value: "Send",
    label: "Send",
  },
  {
    value: "Recieve",
    label: "Recieve",
  },
];
const dialogVisible = ref(false)
const filter = ref({
  phone_number: '',
  sms_type: ''
})
const smsTypeOptions = [
  {
    id: 1,
    label: 'Active'
  },
  {
    id: 2,
    label: 'Deactive'
  }
]
</script>

<style scoped>

</style>