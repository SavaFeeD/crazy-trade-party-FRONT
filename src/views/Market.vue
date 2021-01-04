<template>
  <div class="market">
    <div class="d-flex align-items-end">
      <h1 v-if="category !== {}">{{ category.name }}</h1>
      <h1 v-else>MARKET</h1>
      <p v-if="category.desc !== ''"> - {{ category.desc }}</p>
    </div>
  </div>
  <div>
    <section class="o-cursor">
      <Arrow_menu :list_route="list_category" :options="options"></Arrow_menu>
    </section>
    <section>
      <Product_card id_product="0"></Product_card>
    </section>
  </div>
</template>

<script>
import Product_card from "@/components/product_card";
import Arrow_menu from '@/components/arrow_menu'

export default {
  data: () => ({
    category: {
      id: 0,
      name: 'Category',
      desc: 'desc category'
    },
    list_category: [
      {
        name: '2B',
        path: '?cat=2B'
      },
      {
        name: '9S',
        path: '?cat=9S'
      },
      {
        name: 'A2',
        path: '?cat=A2'
      }
    ],
    options: {
      active_class: 'click'
    }
  }),
  components: {
    Product_card,
    Arrow_menu
  }
}
</script>

<style scoped>
h1 ~ p{
  font-size: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
}
</style>
