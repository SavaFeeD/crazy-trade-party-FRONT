<template>
  <div class="wishlist">
    <h1>Wishlist</h1>
    <div class="d-flex flex-wrap">
      <product_line v-for="item in products" :item="item" :key="item.name"></product_line>
    </div>
  </div>
</template>

<script>
import product_line from "@/components/product_line";

export default {
  data: () => ({

  }),
  components: {
    product_line
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  created() {
    this.$store.dispatch('getWishlistForUser', this.$route.params.slug);
  }
}
</script>

<style scoped>
</style>
