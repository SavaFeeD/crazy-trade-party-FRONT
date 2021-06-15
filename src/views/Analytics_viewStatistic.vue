<template>
  <section class="d-flex row" v-if="load_resource">

    <div class="col-4 d-flex flex-wrap" v-if="data_anal_result['pies'].length()">
      <div v-for="chart in data_anal_result['pies']" :key="chart">
        <pie-chart :chartdata="chart"/>
      </div>
    </div>

    <div class="col-4 d-flex flex-wrap" v-if="data_anal_result['lines'].length()">
      <div v-for="chart in data_anal_result['lines']" :key="chart">
        <line-chart :chartdata="chart"/>
      </div>
    </div>

    <div class="col-4 d-flex flex-wrap" v-if="data_anal_result['bars'].length()">
      <div v-for="chart in data_anal_result['bars']" :key="chart">
        <bar-chart :chartdata="chart"/>
      </div>
    </div>

  </section>
</template>

<script>
import PieChart from '@/components/charts/pie'
import LineChart from '@/components/charts/line'
import BarChart from '@/components/charts/bar'
import { mapState } from 'vuex'

export default {
  name: 'ViewStatistic',
  data: () => ({

  }),

  computed: {
    ...mapState(['load_resource', 'data_anal_package', 'data_anal_result'])
  },

  created() {
    let data = []
    // тут пиздец!
    // возвращает промис надо слепить обьект а то апи ругается Т_Т
    this.data_anal_package.forEach((item) => {
      data.push(item)
    })
    // тут кончается пиздец

    this.$store.state.load_resource = false;
    this.$store.dispatch('getAnalResult', data);
  },

  components: {
    PieChart,
    LineChart,
    BarChart
  }
}
</script>
