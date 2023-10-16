<template>
  <button @click="isNewQuestionDialogOpen = true" class="primary outline px-6 py-3">Add New</button>
  <section class="new-competition-question-dialog form-item">
    <QuestionTable />
  </section>
  <BaseDialog
      title="Add New"
      :is-dialog-open="isNewQuestionDialogOpen"
      class="new-question-dialog"
      @close="isNewQuestionDialogOpen = false"
      @cancel-clicked="isNewQuestionDialogOpen = false"
      cancel-text="Cancel"
      ok-text="Add"
  >
    <new-question />
  </BaseDialog>
</template>

<script setup>
import QuestionTable from './QuestionTable'
import NewQuestion from  './NewQuestion'
import BaseDialog from '@/components/TheDialog/BaseDialog.vue'
import {ref} from "vue";

const isNewQuestionDialogOpen = ref(false)

</script>

<style scoped>

</style>