<template>
  <section class="graphic-report-chart new-send-dialog">
    <section class="row new-competition">
      <section class="col-6 col-md-4">
        <section class="form-item">
          <label class="label">Display messages chart</label>
          <el-select v-model="filters.message">
            <el-option v-for="option in messageOptions" :key="option.id" :label="option.label" :value="option.id"/>
          </el-select>
        </section>
      </section>
      <section class="col-6 col-md-2">
        <section class="form-item">
          <label class="label">Recent day</label>
          <input type="number" v-model="filters.day"/>
        </section>
      </section>
    </section>
    <section class="form-item">
      <apexchart :series="chartSeries" :options="chartOptions" width="100%" />
    </section>
  </section>
</template>

<script setup>
const filters = ref({
  message: 1,
  day: 10
})
const messageOptions = [
  {
    id: 1,
    label: 'Send'
  },
  {
    id: 2,
    label: 'Recive'
  }
]
const chartOptions = ref({
  chart: {
    id: 'vuechart-example'
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999 , 2000 , 2001 , 2002 , 2003 , 2004 , 2005 , 2006 , 2007 , 2008 , 2009 , 2010]
  },
  stroke: {
    curve: 'smooth',
  },
  colors: ['#72ABF080'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.5,
      type: 'vertical',
      colorStops: [
          [
            {
              offset: 0,
              color: '#116DFF00',
              opacity: 1
            },
            {
              offset: 0.2,
              color: '#116DFF80',
              opacity: 50
            },
            {
              offset: 0.8,
              color: '#72ABF080',
              opacity: 50
            },
          ]
      ]
    }
  }
})
const chartSeries = ref([{
  name: 'series-1',
  type: 'area',
  data: [30, 40, 45, 50, 49, 60, 70, 91, 70 , 90 , 60 , 40 , 20 , 10 , 15 , 40 , 35 , 30 , 35 , 40]
}])
</script>

<style scoped>

</style>