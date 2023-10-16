<template>
  <form class="new-question">
    <section class="form-item">
      <label class="label" for="new-question-text">Question Text</label>

      <el-input
          type="textarea"
          placeholder="Please input"
          v-model="newQuestion.text"
          maxlength="160"
          :rows="5"
          id="new-question-text"
      >
      </el-input>
      <section class="d-flex align-items-center justify-content-between mt-2">
        <p class="question-text-counter">{{ newQuestion.text.length }} / 160</p>
        <section class="question-text-options">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFDD67"/>
            <path d="M7.39844 11.8398C8.50301 11.8398 9.39844 10.9444 9.39844 9.83984C9.39844 8.73527 8.50301 7.83984 7.39844 7.83984C6.29387 7.83984 5.39844 8.73527 5.39844 9.83984C5.39844 10.9444 6.29387 11.8398 7.39844 11.8398Z" fill="#664E27"/>
            <path d="M16.5977 11.8398C17.7022 11.8398 18.5977 10.9444 18.5977 9.83984C18.5977 8.73527 17.7022 7.83984 16.5977 7.83984C15.4931 7.83984 14.5977 8.73527 14.5977 9.83984C14.5977 10.9444 15.4931 11.8398 16.5977 11.8398Z" fill="#664E27"/>
            <path d="M17.0372 15.3196C13.7972 17.5996 10.1972 17.5596 6.9572 15.3196C6.5572 15.0396 6.2372 15.5196 6.4772 15.9596C7.4772 17.5596 9.4372 19.0396 11.9972 19.0396C14.5572 19.0396 16.5172 17.5996 17.5172 15.9596C17.7572 15.5196 17.4372 15.0396 17.0372 15.3196Z" fill="#664E27"/>
          </svg>
          <Icon name="dots" />
        </section>
      </section>
    </section>
    <section class="form-item">
      <section class="row">
        <section class="col-12 col-md-6">
          <label class="label">Order</label>
          <input type="number" placeholder="Order" v-model="newQuestion.order">
        </section>
        <section class="col-12 col-md-6">
          <label class="label">Question Answer</label>
          <input type="number" placeholder="Question Answer" v-model="newQuestion.answer">
        </section>
      </section>
    </section>
  </form>
</template>

<script setup>
import {ref} from "vue";
import Icon from "@/components/TheIcon/Icon";
const newQuestion = ref({
  text: '',
  order: '',
  answer: ''
})
</script>