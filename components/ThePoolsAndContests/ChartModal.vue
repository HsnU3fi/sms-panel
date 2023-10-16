<template>
  <form>
    <h4 class="label">Which of the laptops is more practical?</h4>
    <div class="form-item">
      <label class="d-flex align-items-center justify-content-between"
        >Tittle / Question</label
      >
      <input
        type="text"
        placeholder="Tittle / Question"
        v-model="state.title"
      />
    </div>
    <div class="form-item">
      <ClientOnly>
        <apexchart
          width="500"
          type="donut"
          :options="state.chartOptions"
          :series="state.series"
        ></apexchart
      ></ClientOnly>
    </div>
  </form>
</template>

<script setup>
//state

const state = ref({
  title: "",
  series: [7, 10, 20, 13, 50],
  chartOptions: {
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
});
</script>

<style>
.apexcharts-legend.apx-legend-position-right {
  display: none !important;
}
</style>