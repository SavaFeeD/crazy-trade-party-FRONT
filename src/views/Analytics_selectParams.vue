<template>
  <section>
    <div class="row mt-3">
      <table v-if="data_anal.type_table=='big_to_big'" class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" v-for="col_1 in data_anal.dataset.columns[0]" :key="col_1">{{col_1}}</th>
            <th scope="col">. . .</th>
            <th scope="col" v-for="col_2 in data_anal.dataset.columns[1]" :key="col_2">{{col_2}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">0</th>
            <td  v-for="item in data_anal.dataset.data.start[0][0]" :key="item">{{item}}</td>
            <td>. . .</td>
            <td  v-for="item in data_anal.dataset.data.start[0][1]" :key="item">{{item}}</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td  v-for="item in data_anal.dataset.data.start[1][0]" :key="item">{{item}}</td>
            <th scope="row">. . .</th>
            <td  v-for="item in data_anal.dataset.data.start[1][1]" :key="item">{{item}}</td>
          </tr>

          <tr>
            <th scope="row">. . .</th>
            <td v-for="j in range(9)" :key="j">. . .</td>
          </tr>

          <tr>
            <th scope="row">{{data_anal.row_len}}</th>
            <td  v-for="item in data_anal.dataset.data.end[0]" :key="item">{{item}}</td>
            <th scope="row">. . .</th>
            <td  v-for="item in data_anal.dataset.data.end[1]" :key="item">{{item}}</td>
          </tr>

        </tbody>
      </table>

      <table v-if="data_anal.type_table=='small_to_big'" class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" v-for="col in data_anal.dataset.columns" :key="col">{{col}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">0</th>
            <td  v-for="item in data_anal.dataset.data.start[0]" :key="item">{{item}}</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td  v-for="item in data_anal.dataset.data.start[1]" :key="item">{{item}}</td>
          </tr>

          <tr>
            <th scope="row">. . .</th>
            <td v-for="j in range(data_anal.columns_len)" :key="j">. . .</td>
          </tr>

          <tr>
            <th scope="row">{{data_anal.row_len}}</th>
            <td  v-for="item in data_anal.dataset.data.end" :key="item">{{item}}</td>
          </tr>

        </tbody>
      </table>

      <table v-if="data_anal.type_table=='big_to_small'" class="table table-striped table-dark">
        <thead>

          <tr>
            <th scope="col">#</th>
            <th scope="col" v-for="col_1 in data_anal.dataset.columns[0]" :key="col_1">{{col_1}}</th>
            <th scope="col">. . .</th>
            <th scope="col" v-for="col_2 in data_anal.dataset.columns[1]" :key="col_2">{{col_2}}</th>
          </tr>

        </thead>
        <tbody>

          <tr v-for="(row, i) in data_anal.dataset.data.start" :key="i">
            <th scope="row">{{i}}</th>
            <td  v-for="item in row[0]" :key="item">{{item}}</td>
            <td>. . .</td>
            <td  v-for="item in row[1]" :key="item">{{item}}</td>
          </tr>

        </tbody>
      </table>

      <table v-if="data_anal.type_table=='small_to_small'" class="table table-striped table-dark">
        <thead>

          <tr>
            <th scope="col">#</th>
            <th scope="col" v-for="col in data_anal.dataset.columns" :key="col">{{col}}</th>
          </tr>

        </thead>
        <tbody>

          <tr v-for="(row, i) in data_anal.dataset.data.start" :key="i">
            <th scope="row">{{i}}</th>
            <td  v-for="item in row" :key="item">{{item}}</td>
          </tr>

        </tbody>
      </table>

    </div>

    <div class="row mt-4 d-flex flex-column">
      <h3 class="d-flex align-items-center mb-2">Columns <span class="badge bg-white text-dark ml-2 title-badge">{{ data_anal.columns_len }}</span> </h3>
      <div class="d-flex flex-wrap">
        <label v-for="col in data_anal.all_columns" type="button" class="all_cols badge badge-secondary" :key="col">{{ col }}</label>
      </div>
    </div>

    <div class="row mt-4 d-flex justify-content-around">

      <div class="desc field col-5">
        <h2>DESCRIPTION</h2>

        <div class="d-flex">
          <select ref="desc_param_select" class="form-select w-100 mr-3">
            <option selected value="all">ALL</option>
            <option v-for="col in data_anal.all_columns" :value="col" :key="col">{{col}}</option>
          </select>
          <button type="button" class="d-flex justify-content-center align-items-center" @click="() => {add_desc_param()}">ADD ATTRIBUTE</button>
        </div>

        <div class="d-flex flex-wrap mt-2">
          <div v-for="(param, id) in desc_params" :key="param" class="p-1">
            <label type="button" class="all_cols badge badge-secondary" @click="() => {delete_desc(id)}">{{param}}<i class="fas fa-times-circle ml-2"></i></label>
          </div>
        </div>
      </div>

      <div class="charts field col-6">
        <h2>CHARTS</h2>

        <div class="d-flex">
          <select ref="chart_param_select" class="form-select w-100 mr-3">
            <option v-for="type in charts_type" :value="type" :key="type">{{type}}</option>
          </select>
          <button type="button" class="d-flex justify-content-center align-items-center" @click="() => {add_chart_param()}">ADD CHART</button>
        </div>

        <form class="d-flex flex-wrap row p-3 mt-2">
          <div v-for="(param, id) in chart_params" :key="param" class="col-6 p-1">
            <figure>
              <figcaption class="d-flex justify-content-between">
                <div><i :class="`fas fa-chart-${param.type} mr-2`"></i>{{param.type}}</div>
                <div><i class="fas fa-window-close delete-chart" @click="() => {delete_chart(id)}"></i></div>
              </figcaption>

              <div v-if="param.param_type == 'xy'">
                <div class="d-flex">
                  <label>X:</label>
                  <select v-model="chart_params[id].data.x" class="form-select w-100 ml-3">
                    <option v-for="col in data_anal.all_columns" :value="col" :key="col">{{col}}</option>
                  </select>
                </div>
                <div class="d-flex">
                  <label>Y:</label>
                  <select v-model="chart_params[id].data.y" class="form-select w-100 ml-3">
                    <option v-for="col in data_anal.all_columns" :value="col" :key="col">{{col}}</option>
                  </select>
                </div>
              </div>

              <div v-if="param.param_type == 'max'">
                <div class="d-flex">
                  <select :ref="`param_chart_${id}`" class="form-select w-100 mr-3">
                    <option v-for="col in param.all_columns" :value="col" :key="col">{{col}}</option>
                  </select>
                  <button type="button" class="d-flex justify-content-center align-items-center fix-bg" @click="() => {add_chart_dataparam(id)}">ADD</button>
                </div>
                <div class="d-flex flex-wrap mt-2">
                  <label type="button" class="all_cols badge badge-secondary"
                    @click="() => {delete_chart_dataparam(id, col)}"
                    v-for="(col) in param.data" :key="col">
                      {{col}}
                      <i class="fas fa-times-circle ml-2"></i>
                    </label>
                </div>
              </div>

            </figure>
          </div>
        </form>

      </div>

    </div>
    <button type="button" @click="() => {package_data()}">PACKAGE</button>
    <div class="row mt-5">
      <router-link :to="{ name: 'ViewStatistic' }" active-class="active">
        <button><cite>View Statistic</cite></button>
      </router-link>
    </div>

  </section>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'SelectParams',

  data: () => ({
    charts_type: ['pie', 'line', 'bar'],
    chart_params: [],
    charts: [],
    desc_params: [],
    desc: []
  }),

  created() {
    // let anal_file_old = JSON.parse(localStorage.anal_file);
    // let count = 0
    // this.get_data(anal_file_old, count)
    let anal_file = JSON.parse(localStorage.anal_file);
    this.$store.dispatch('analytics_get_info_dataset', anal_file);
  },

  computed: {
    ...mapState(['data_anal'])
  },

  methods: {
    package_data() {
      let data = {
        file: JSON.parse(localStorage.anal_file).filename,
        desc: [],
        charts: []
      };

      this.desc_params.forEach((param) => {
        data.desc.push(param);
      });

      this.chart_params.forEach((param) => {
        let _chart_ = {
          type: param.type,
          data: []
        }

        param.data.forEach((col) => {
          _chart_.data.push(col)
        });

        data.charts.push(_chart_);
      });

      this.$store.state.data_anal_package = data

      console.log(data);
    },

    add_chart_dataparam(id) {
      let value = this.$refs[`param_chart_${id}`].value;
      if (value != '') {
        this.chart_params[id].data.push(value);
        let id_col = this.chart_params[id].all_columns.indexOf(value);
        this.chart_params[id].all_columns.splice(id_col, 1);
      }
    },
    delete_chart_dataparam(id, value) {
      this.chart_params[id].data.splice(id, 1);
      this.chart_params[id].all_columns.push(value);
    },

    delete_desc(id) {
      this.desc_params.splice(id, 1);
    },

    add_desc_param() {
      let is = true;
      let value = this.$refs.desc_param_select.value;
      if (value != 'all') {
        this.desc_params.forEach((item) => {
          if (item == value) {
            is = false
          }
        });

        if (is) {
          this.desc_params.push(value);
        }
      } else {
        this.data_anal.all_columns.forEach((col) => {
          is = true;
          this.desc_params.forEach((param) => {
            if (col == param) {
              is = false;
            }
          });
          if (is) {
            this.desc_params.push(col);
          }
        });
      }
    },

    delete_chart(id) {
      this.chart_params.splice(id, 1);
    },

    add_chart_param() {
      let type_chart = this.$refs.chart_param_select.value;
      let schema = {};

      switch (type_chart) {
        case 'pie':
          schema = {
            type: 'pie',
            param_type: 'max',
            max_count: this.data_anal.columns_len,
            all_columns: this.data_anal.all_columns.slice(),
            data: []
          }
          break;
        case 'line':
          schema = {
            type: 'line',
            param_type: 'max',
            max_count: this.data_anal.columns_len,
            all_columns: this.data_anal.all_columns.slice(),
            data: []
          }
          break;
        case 'bar':
          schema = {
            type: 'bar',
            param_type: 'max',
            max_count: this.data_anal.columns_len,
            all_columns: this.data_anal.all_columns.slice(),
            data: []
          }
          break;
      }

      this.chart_params.push(schema);
    },

    // get_data(anal_file_old, count) {
    //   setTimeout(() => {
    //     let anal_file_new = JSON.parse(localStorage.anal_file);
    //     count++
    //     if (anal_file_old != anal_file_new || count == 15) {
    //       this.$store.dispatch('analytics_get_info_dataset', anal_file_new);
    //     } else {
    //       this.get_data(anal_file_old, count)
    //     }
    //   }, 200)
    // },

    range(start, stop, step) {
      if (typeof stop == 'undefined') {
        stop = start;
        start = 0;
      }

      if (typeof step == 'undefined') {
        step = 1;
      }

      if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
      }

      let result = [];
      for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
      }

      return result;
    }
  }
}
</script>

<style media="screen">
.all_cols{
  font-size: 15px;
  margin: 5px;
  background: #6c757da1!important;
}

.field{
  padding: 10px;
  border: dashed 1px #6c757da1;
}

.title-badge{
  opacity: .7;
}

.delete-chart{
  cursor: pointer;
}
.delete-chart:hover{
  color: #ddd7bf;
}
.fix-bg:hover{
  background: #454138!important;
}
</style>
