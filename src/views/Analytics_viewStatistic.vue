<template>
  <section class="d-flex row">
    <div class="col-4">
      <pie-chart :chartdata="test_data"/>
    </div>
    <div class="col-4">
      <line-chart :chartdata="test_data"/>
    </div>
    <div class="col-4">
      <bar-chart :chartdata="test_data"/>
    </div>
  </section>
</template>

<script>
import PieChart from '@/components/charts/pie'
import LineChart from '@/components/charts/line'
import BarChart from '@/components/charts/bar'

export default {
  name: 'ViewStatistic',
  data: () => ({
    test_data: {
      labels: ["test1", "test2", "test3"],
      datasets: [
          {
            label: "# of Votes",
            data: [1, 2, 3],
            borderWidth: 1
          }
      ]
    }
  }),
  components: {
    PieChart,
    LineChart,
    BarChart
  }
}
</script>
