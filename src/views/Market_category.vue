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

  components: {
    product_line
  },

  watch: {
    $route(to) {
      if (to.name == 'Category') {
        this.$store.state.load_resource = false;
        let id = this.$route.params.id;
        let data = {
          id: id
        };
        this.$store.dispatch('getMarket_category', data);
      }
    }
  },

  created() {
    this.$store.state.load_resource = false;
    let id = this.$route.params.id;
    let data = {
      id: id
    };
    this.$store.dispatch('getMarket_category', data);
  }
}
</script>

<style scoped>

</style>
