<template>
  <div v-if="!isEmpty(market)">
    <div class="market">
      <div class="d-flex align-items-center justify-content-between" v-if="load_resource">
        <div>
          <h1 v-if="!isEmpty(market.category)">{{ market.category.name }}</h1>
          <h1 v-else>MARKET</h1>
        </div>
        <div v-if="profile.id !== null">
          <router-link to="/new_dataset" class="d-flex w-100">
            <button class="d-flex w-100 align-items-center"><i class="fas fa-plus-square ml-2 mr-2"></i>ADD DATASET</button>
          </router-link>
        </div>
      </div>
      <div class="d-flex align-items-end" v-else>
        <h1>######</h1>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-2 position-relative">
        <div class="cat-menu sticky-top">
          <router-link :to="`/market/all`" class="cat-list w-100">
            <button><cite class="fix-cat">All</cite></button>
          </router-link>
          <router-link :to="`/market/category/${cat.id}`" class="cat-list w-100" v-for="cat in market.category_all" :key="cat">
            <button><cite class="fix-cat">{{cat.name}}</cite></button>
          </router-link>
        </div>
      </div>
      <section class="col-9">
        <router-view/>
      </section>
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
    }
  },

  computed: {
    ...mapState(['market', 'load_resource', 'profile'])
  },

  components: {
  },

  created() {
    this.$store.dispatch('getMarket');
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
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
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
</style>
