<template>
  <BaseLayout class="dashboard reports-sms-reports">
    <section class="action-bar-table">
    <div
        class="d-flex align-items-end filters col-12"
    >
      <section class="form-item">
        <label class="label">Select Number</label>
        <el-select v-model="filter.number">
          <el-option v-for="item in numberOptions" :key="item.id" :label="item.label" :value="item.id" />
        </el-select>
      </section>
      <section class="form-item">
        <label class="label">From</label>
        <el-date-picker
            v-model="filter.from"
            type="date"
            placeholder="Pick a day">
        </el-date-picker>
      </section>
      <section class="form-item">
        <label class="label">To</label>
        <el-date-picker
            v-model="filter.to"
            type="date"
            placeholder="Pick a day">
        </el-date-picker>
      </section>
      <section class="form-item">
        <button class="confirm-button">
          <Icon name="search" />
          Search
        </button>
      </section>
    </div>
      <el-checkbox v-model="filter.traffic">The traffic of users under the set should also be applied</el-checkbox>
    </section>
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
import Table from "@/components/TheReports/SmsReport/Table.vue";
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
  number: '',
  from: '',
  to: '',
  traffic: true
})
const numberOptions = [
  {
    id: 1,
    label: '+158475632'
  },
  {
    id: 2,
    label: '+158475632'
  },
  {
    id: 3,
    label: '+158475632'
  }
]
</script>

<style scoped>

</style>