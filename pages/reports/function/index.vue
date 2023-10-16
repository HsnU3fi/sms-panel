<template>
  <BaseLayout class="dashboard reports-function">
    <section class="body">
      <template v-for="(item, index) in functions">
        <section class="item">
          <h2>{{ item.name }}:</h2>
          <span>{{ item.value }}</span>
        </section>
        <template v-if="index + 1 < functions.length">
          <hr>
        </template>
      </template>
    </section>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/components/TheBasePanelLayout/BaseLayout'
const functions = ref([
  {
    name: 'SMS send',
    value: 0
  },
  {
    name: 'SMS Recieved',
    value: 0
  },
  {
    name: 'Manager message',
    value: 0
  },
  {
    name: 'The number of Login',
    value: 0
  },
  {
    name: 'Last login',
    value: '12:56 2023/5/19'
  },
  {
    name: 'total payment',
    value: 0
  },
  {
    name: 'Users',
    value: 0
  },
  {
    name: 'Contacts',
    value: 0
  },
  {
    name: 'Send Timer',
    value: 0
  },
  {
    name: 'Autoresponder',
    value: 0
  },
  {
    name: 'Automatic transfer',
    value: 0
  },
  {
    name: 'Automatic filter',
    value: 0
  },
  {
    name: 'Send to email',
    value: 0
  },
  {
    name: 'Send to URL',
    value: 0
  },
  {
    name: 'Survey',
    value: 0
  },
  {
    name: 'Tickets',
    value: 0
  },
  {
    name: 'Fast SMS',
    value: 0
  },
  {
    name: 'Send from mobile',
    value: 0
  },
  {
    name: 'Occasional Send',
    value: 0
  },
  {
    name: 'Successful',
    value: 0
  },
  {
    name: 'UnSuccessful',
    value: 0
  },
  {
    name: 'Group',
    value: 0
  }
])
</script>

<style scoped>

</style>