<template>
  <section class="new-competition-score-dialog">
    <section class="row">
      <section class="col-12 form-item col-md-5">
        <label class="label">Number</label>
        <input type="number" v-model="scoreFilter.number" placeholder="Number" />
      </section>
      <section class="col-12 form-item col-md-7">
        <label class="label">Keyword</label>
        <input type="text" v-model="scoreFilter.keyword" placeholder="Keyword" />
      </section>
    </section>
    <ScoreTable />
  </section>
</template>

<script setup>
import ScoreTable from './ScoreTable'
import BaseDialog from '@/components/TheDialog/BaseDialog.vue'
import {ref} from "vue";

const scoreFilter = ref({
  number: '',
  keyword: '',
})
</script>

<style scoped>

</style>