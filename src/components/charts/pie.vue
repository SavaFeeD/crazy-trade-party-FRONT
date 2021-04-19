<template>
  <div class="wrap-chart w-100">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: {
    chartdata: {
      values: {
        type: Array,
        default: {
          labels: ["test1", "test2", "test3"],
          datasets: [
              {
                label: "# of Votes",
                data: [1, 2, 3],
                borderWidth: 1
              }
          ]
        }
      }
    },
    options: {
      values: {
        type: Object,
        default: {

        }
      }
    }
  },
  data: () => ({ }),
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style scoped>
.wrap-chart{
  margin: 20px 0;
}
</style>
