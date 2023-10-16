<template>
  <section class="new-competition-answer-dialog form-item">
    <section class="row">
      <section class="col-12 form-item col-md-3">
        <label class="label">Number</label>
        <input type="number" v-model="answerFilter.number" placeholder="Number" />
      </section>
      <section class="col-12 form-item col-md-4">
        <label class="label">Question</label>
        <el-select v-model="answerFilter.question" placeholder="Question">
          <el-option v-for="option in questionOptions" :key="option.id" :label="option.label" :value="option.id"/>
        </el-select>
      </section>
      <section class="col-12 form-item col-md-4">
        <label class="label">Answer Status</label>
        <el-select v-model="answerFilter.status" placeholder="Answer">
          <el-option v-for="option in answerOptions" :key="option.id" :label="option.label" :value="option.id"/>
        </el-select>
      </section>
    </section>
    <AnswerTable />
  </section>
</template>

<script setup>
import AnswerTable from './AnswerTable'
import BaseDialog from '@/components/TheDialog/BaseDialog.vue'
import {ref} from "vue";

const answerFilter = ref({
  number: '',
  question: '',
  status: ''
})
const questionOptions = [
  {
    id: 1,
    label: 'question 1'
  },
  {
    id: 2,
    label: 'question 2'
  },
  {
    id: 3,
    label: 'question 3'
  },
  {
    id: 4,
    label: 'question 4'
  }
]
const answerOptions = [
  {
    id: 1, label: 'false'
  },
  {
    id: 2, label: 'true'
  },
  {
    id: 3, label: 'no answer'
  }
]

</script>

<style scoped>

</style>