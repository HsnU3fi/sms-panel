<template>
  <section class="form-item">
    <section class="filters">
      <section class="item">
        <label class="label">Day</label>
        <section class="input">
        <el-select v-model="newDay.day">
          <el-option
            v-for="item in days"
            :key="item.value"
            :label="item.value"
            :value="item.value"
            />
        </el-select>
        </section>
      </section>
      <section class="item">
        <label class="label">From</label>
        <section class="input">
        <el-time-select
            v-model="newDay.from"
            step="00:10"
            end="23:59"
            placeholder="Select time">
        </el-time-select>
        </section>
      </section>
      <section class="item">
        <label class="label">Till</label>
        <section class="input">
        <el-time-select
            v-model="newDay.till"
            step="00:10"
            end="23:59"
            :minTime="newDay.from ? newDay.from : ''"
            placeholder="Select time">
        </el-time-select>
        </section>
      </section>
      <button class="primary" @click="addNewDay">
        <Icon name="add" />
        Add
      </button>
    </section>
  </section>
  <section class="days-table">
    <section class="days">
      <template v-for="(day, index) in days">
        <h2 class="title">{{ day.value }}</h2>
        <template v-if="index + 1 < days.length">
          <hr>
        </template>
      </template>
    </section>
    <section class="values">
      <template v-for="(day, index) in dayItems">
        <section class="item">
          <span v-for="(item, index2) in day.activeHours">
            {{ item }}
            <button class="" @click="removeDay(index, index2)">
              <Icon name="close-circle" />
            </button>
          </span>
        </section>
        <template v-if="index + 1 < dayItems.length">
          <hr>
        </template>
      </template>
    </section>
  </section>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon";
const days = [
  {
    value: 'Saturday'
  },
  {
    value: 'Sunday'
  },
  {
    value: 'Monday'
  },
  {
    value: 'Tuesday'
  },
  {
    value: 'Wednesday'
  },
  {
    value: 'Thursday'
  },
  {
    value: 'Friday'
  }
]
const dayItems =ref(days.map((day, index)=>{
  return {
    id: index,
    day: day.value,
    activeHours: []
  }
}))
const newDay = ref({
  day: 'Saturday',
  from: '8:00',
  till: '10:00'
})
const addNewDay = ()=> {
  let day = dayItems.value.find(item=>item.day == newDay.value.day)
  day.activeHours.push(newDay.value.from + '-' + newDay.value.till)
  resetFilter()
}
const removeDay = (index, index2)=> {
  dayItems.value[index].activeHours.splice(index2, 1)
}
const resetFilter = () => {
  newDay.value = {
    day: 'Saturday',
    from: '8:00',
    till: '10:00'
  }
}
onMounted(() => {
  console.log(dayItems)
})
</script>

<style scoped>

</style>