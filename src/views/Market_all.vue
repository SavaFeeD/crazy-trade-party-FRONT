<template>
  <div>
    <div v-if="load_resource">
      <div class="d-flex flex-wrap" v-if="market.products.length != 0">
        <product_line v-for="item in market.products" :item="item" :key="item.name"></product_line>
      </div>
      <div class="w-100 d-flex justify-content-center mt-3 align-items-center" v-else>
        <i class="far fa-folder-open"></i>
        <span class="ml-2">Product list is empty</span>
      </div>
    </div>
    <div v-else>
      <div class="w-100 d-flex justify-content-center mt-3 align-items-center">
        <i class="far fa-clock"></i>
        <span class="ml-2">Wait please</span>
      </div>
    </div>
  </div>
</template>

<script>
import product_line from "@/components/product_line";
import { mapState } from "vuex"

export default {
  data: () => ({

  }),

  computed: {
    ...mapState(['market', 'load_resource'])
  },

  methods: {
    isEmpty(obj) {
      for (let key in obj) {
        return false;
      }
      return true;
    }
  },

  components: {
    product_line
  },

  created() {
    this.$store.state.load_resource = false;
    this.$store.dispatch('getMarket');
  }
}
</script>

<style scoped>

</style>
