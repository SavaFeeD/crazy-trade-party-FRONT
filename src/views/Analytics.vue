<template>
  <div class="analytics">
    <h1>Data Analytics</h1>
    <div class="test-zone d-flex align-items-center">
      <canvas ref="canvas"></canvas>
      <line-chart :chartdata="data" :options="options" />
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/charts/LineChart'

export default {
  name: 'Analytics',
  data: () => ({
    data: {
      labels: ["Monday", "Tuesday", "Wednesday"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  components: {
    LineChart
  }
}
</script>
