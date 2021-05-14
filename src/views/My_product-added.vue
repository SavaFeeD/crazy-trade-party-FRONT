<template>
  <figure>
    <figcaption class="d-flex justify-content-between align-items-center">
      Product buy
    </figcaption>
    <div class="w-100 pr-3" v-if="load_resource">

      <div class="d-flex w-100 justify-content-center" v-if="!isEmpty(my_product[0])">
        <table class="w-100">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Dataset</th>
              <th scope="col">Link</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in my_product" :key="row.name">
              <td scope="row">
                <img :src='row.img' :alt="row.name" class="ava" v-if="row.img != null">
                <img src='../assets/Crazy_logo.png' :alt="row.name" class="ava" v-else>
              </td>
              <td scope="row">{{row.name}}</td>
              <td scope="row">
                <router-link :to="{ name: 'OneProduct', params: { id: row.id } }" class="fix"><i class="fas fa-link"></i></router-link>
              </td>
              <td scope="row">
                <i class="fas fa-trash-alt" @click="()=>{deleteProduct(row.id)}"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="w-100 d-flex justify-content-center mt-3 mb-3 align-items-center" v-else>
        <i class="far fa-folder-open"></i>
        <span class="ml-2">Product list is empty</span>
      </div>

    </div>

    <div v-else>
      <div class="w-100 d-flex justify-content-center mt-3 mb-3 align-items-center">
        <i class="far fa-clock"></i>
        <span class="ml-2">Wait please</span>
      </div>
    </div>
  </figure>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({

  }),

  methods: {
    deleteProduct(product_id) {
      let data = {
        'user_id': this.profile.id,
        'product_id': product_id
      }
      this.$store.dispatch('deleteProduct', data);

      this.$store.state.load_resource = false;

      data = {
        'slug': this.profile.slug
      }
      this.$store.dispatch('getUserCreatedProduct', data);
    },

    isEmpty(obj) {
      for (let key in obj) {
        return false;
      }
      return true;
    }
  },

  created() {
    this.$store.state.load_resource = false;

    let data = {
      'slug': this.profile.slug
    }
    this.$store.dispatch('getUserCreatedProduct', data);
  },

  computed: {
    ...mapState(['my_product', 'profile', 'load_resource'])
  }
}
</script>

<style scoped>
a.fix{
  width: auto!important;
}
img{
  height: 120px;
}
</style>
