<template>
  <div class="wishlist">
    <h1>Wishlist</h1>
    <div class="container mt-4 d-flex justify-content-center">
      <div class="scroll col-8">
        <div class="wrap">
          <product_line v-for="item in products" :item="item" :key="item.name"></product_line>
        </div>
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
        short_description: 'descdescdescdesc descdesc desc descdescdesc, descdesc.',
        description: 'descdescdescdesc descdesc desc descdescdesc, descdesc. sc. descdescdescdesc desc sc. descdescdescdesc desc',
        img: '../assets/Crazy_logo.png',
        price: 100
      },
      {
        name: 'Product 2',
        short_description: 'descdescdescdesc descdesc desc descdescdesc, descdesc.',
        description: 'descdescdescdesc descdesc desc descdescdesc, descdesc.',
        img: '../assets/Crazy_logo.png',
        price: 14450
      },
      {
        name: 'Product 3',
        short_description: 'descdescdescdesc descdesc desc descdescdesc, descdesc.',
        description: 'descdescdesc, descdesc. descdescdescdesc descdesc desc descdescdesc, descdesc. descdescdescdesc descdesc desc descdescdesc, descdesc. desc',
        img: '../assets/Crazy_logo.png',
        price: 6460
      },
      {
        name: 'Product 3',
        short_description: 'descdescdescdesc descdesc desc descdescdesc, descdesc.',
        description: 'descdescdescdesc descdesc desc descdescdesc, descdesc. descdescdescdesc descdesc desc ',
        img: '../assets/Crazy_logo.png',
        price: 4560
      },
      {
        name: 'Product 3',
        short_description: 'descdescdescdesc descdesc desc descdescdesc, descdesc.',
        description: 'descdescdescdesc descdesc desc descdescdesc, descdesc. descdescdescdesc descdesc desc descdescdesc, descdesc. descdescdescdesc descdesc desc descdescdesc, descdesc.',
        img: '../assets/Crazy_logo.png',
        price: 1000
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
  max-height: 65vh;
  overflow-y: scroll;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.wrap{
  width: 100%!important;
}
</style>
