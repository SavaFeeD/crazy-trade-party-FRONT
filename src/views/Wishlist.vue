<template>
  <div class="wishlist">
    <h1>Wishlist</h1>
    <div class="d-flex flex-wrap" v-if="!isEmpty(wl)">
      <product_line v-for="item in wl" :item="item" :key="item.name"></product_line>
    </div>
  </div>
</template>

<script>
import product_line from "@/components/product_line";
import { mapState } from "vuex"

export default {
  data: () => ({

  }),

  components: {
    product_line
  },

  methods: {
    isEmpty(obj) {
      for (let key in obj) {
        return false;
      }
      return true;
    }
  },

  computed: {
    ...mapState(['wl'])
  },

  created() {
    this.$store.dispatch('getWishlistForUser', this.$route.params.slug);
  }
}
</script>

<style scoped>
</style>
