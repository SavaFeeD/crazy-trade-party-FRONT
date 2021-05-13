<template>
  <div v-if="!isEmpty(rating)">
    <h1>Rating</h1>
    <div class="d-flex w-100 justify-content-center">
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Dataset</th>
            <th scope="col">Rate</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in rating" :key="row.product_name">
            <td scope="row">{{i+1}}</td>
            <td scope="row">{{row.product_name}}</td>
            <td scope="row">{{row.rate}}</td>
            <td scope="row"><a :href="`/product/${row.product_id}`"><i class="fas fa-link"></i></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  data: () => ({
    routeCat: -1
  }),

  methods: {
    isEmpty(obj) {
      for (let key in obj) {
        return false;
      }
      return true;
    },
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
  },

  computed: {
    ...mapState(['rating'])
  },

  components: {
  },

  created() {
    this.$store.dispatch('getRating', {rate_type: "absolute"});
  }
}
</script>

<style scoped>
h1 ~ p{
  font-size: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.cat-menu{
  top: 30px;
}
.fix-cat{
  padding-top: 2px;
}
.fix-cat:hover cite:before{
  background: #d4d2b4!important;
}
.cat-list{
  margin-bottom: 10px;
  font-size: 16px;
}
a{
  width: auto!important;
}
</style>
