<template>
  <div class="wishlist">
    <h1>Wishlist</h1>
    <div class="container mt-5 d-flex justify-content-center">
      <div class="scroll col-8">
        <blockquote>
          <product_line v-for="item in products" :item="item" :key="item.name"></product_line>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
import product_line from "@/components/product_line";

export default {
  data: () => ({
    products: [
      {
        name: 'Product 1',
        desc: 'descdescdescdesc descdesc desc descdescdesc, descdesc.',
        img: undefined
      },
      {
        name: 'Product 2',
        desc: 'descdescdescdesc descdesc desc descdescdesc, descdesc.',
        img: undefined
      },
      {
        name: 'Product 3',
        desc: 'descdescdescdesc descdesc desc descdescdesc, descdesc.',
        img: undefined
      },
      {
        name: 'Product 3',
        desc: 'descdescdescdesc descdesc desc descdescdesc, descdesc.',
        img: undefined
      },
      {
        name: 'Product 3',
        desc: 'descdescdescdesc descdesc desc descdescdesc, descdesc.',
        img: undefined
      },
    ]
  }),
  components: {
    product_line
  }
}
</script>

<style scoped>
.scroll{

}
blockquote{
  transform: translateX(-20px);
}
.scroll{
  max-height: 65vh;
  overflow-y: scroll;
}
</style>
