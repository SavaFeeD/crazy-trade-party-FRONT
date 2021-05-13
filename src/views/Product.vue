<template>
  <div>
    <div class="product" v-if="load_resource">
      <h1>Dataset</h1>
      <h2 class="mt-5">{{product.body.product.short_description}}</h2>

      <div class="row d-flex justify-content-around mt-4">
        <div class="col-7">
          <div class="content">
            <hr>
            <p>
              <b>DESCRIPTION:</b>
              {{product.body.product.description}}
            </p>
            <blockquote class="ml-4 d-flex align-items-center">
              <p class="big_text mt-3">
                <i class="fas fa-eye" title="view count"></i>
                {{product.body.product.views_count}}
                <i class="fas fa-money-bill-wave ml-4" title="buy count"></i>
                {{product.body.buy_count}}
                <img src="../assets/crazy_coins.svg" alt="coin" class="ml-4"  title="price">
                {{product.body.product.price}}
              </p>
            </blockquote>
            <hr>
            <div class="d-flex flex-wrap">
              <label class="badge" v-if="product.body.category.length == 0">no-category</label>
              <label class="badge m-2" v-else v-for="cat in product.body.category" :key="cat">{{cat}}</label>
            </div>
            <hr>
            <a type="button" v-if="user_buy_product || product.body.product.price == 0"
              class="button w-100"
              :href="product.body.product.dataset">
                DOWNLOAD
            </a>
            <div v-else>
              <button type="button" name="button" class="mb-3 fix">Buy</button>
              <button type="button" disabled name="button" class="border">DOWNLOAD</button>
            </div>
          </div>
        </div>

        <figure class="col-4">
          <figcaption class="d-flex justify-content-between">
            <div>{{product.body.product.name}}</div>
            <div v-if="user.id !== null">
              <i class="fas fa-heart cursor-pointer" v-if="product_in_wishlist" title="remove from wishlist"  @click="() => {deleteWL()}"></i>
              <i class="far fa-heart cursor-pointer" v-else title="add to wishlist" @click="() => {addWL()}"></i>
            </div>
          </figcaption>
          <div class="wrap-prev d-flex justify-content-center align-items-center">
            <img src='../assets/Crazy_logo.png' :alt="product.body.product.name" class="prev_product">
          </div>
        </figure>
      </div>
    </div>
    <div v-else>
      <div class="w-100 d-flex justify-content-center mt-5 align-items-center">
        <i class="far fa-clock"></i>
        <span class="ml-2">Wait please</span>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'Product',
  data: () => ({}),

  components: {},

  created() {
    this.$store.state.product = {};
    this.$store.state.load_resource = false;
    this.$store.state.user_buy_product = false;
    this.$store.dispatch('getOneProduct', this.$route.params.id);
    this.$store.dispatch('add_viewCount', this.$route.params.id);
    if (this.user.id !== null) {
      this.isProduct()
    }
  },

  computed: {
    ...mapState(['product', 'user', 'user_buy_product', 'product_in_wishlist', 'load_resource'])
  },

  methods: {
    isEmpty(obj) {
      for (let key in obj) {
        return false;
      }
      return true;
    },

    isProduct() {
      if (this.isEmpty(this.product)) {
        setTimeout(() => {
          this.isProduct()
        }, 200);
        return;
      }
      let data = {
        'user_slug': this.user.slug,
        'product_id': this.product.body.product.id
      };
      this.$store.dispatch('checkProductIsBuy', data);
      this.$store.dispatch('checkProductIsWL', data);
    },

    addWL() {
      let data = {
        user_slug: this.user.slug,
        user_id: this.user.id,
        product_id: this.product.body.product.id
      }
      console.log('add');
      this.$store.dispatch('addWishlist', data);
    },

    deleteWL() {
      let data = {
        user_slug: this.user.slug,
        product_id: this.product.body.product.id
      }
      console.log('delete');
      this.$store.dispatch('deleteWishlist', data);
    }
  },
}
</script>

<style scoped>
h1{
  font-size: 34px;
}
h2{
  font-size: 24px;
}

.wrap-prev{
  overflow: hidden;
  max-height: 300px;
  background: #b3af9b61;
}
.prev_product{
  vertical-align: center;
  height: 100%;
}
.content{
  width: 100%;
  height: 100%;
  background: #dcd8c0b8;
  padding: 1px 20px;
}
b{
  font-weight: 600;
}

.big_text{
  font-size: 20px;
}

.badge{
  background: #454138!important;
  color: white;
  padding: 3px 7px;
  font-size: 15px;
}

[alt="coin"]{
  width: 33px;
}

button.fix:hover{
  background: #454138;
}

.cursor-pointer{
  cursor: pointer;
}
</style>
