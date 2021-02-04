<template>
  <div class="product">
    <h1>{{product.name}}</h1>
    <div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Product',
  data: () => ({}),
  components: {},
  created() {
    this.$store.dispatch('getOneProduct', this.$route.params.id);
  },
  computed: {
    product() {
      return this.$store.getters.getProduct;
    }
  }
}
</script>
