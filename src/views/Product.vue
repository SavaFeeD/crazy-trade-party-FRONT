<template>
  <div class="product" v-if="product.status">
    <h1>{{product.body.product.name}}</h1>
    <h2 class="mt-5">{{product.body.product.short_description}}</h2>
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
    console.log(this.$route.params.id)
    this.$store.dispatch('getOneProduct', this.$route.params.id);
    this.$store.dispatch('add_viewCount', this.$route.params.id);
  },
  computed: {
    product() {
      return this.$store.getters.getProduct;
    }
  }
}
</script>

<style scoped>
h1{
  font-size: 34px;
}
h2{
  font-size: 24px;
}
</style>