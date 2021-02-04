<template>
  <router-link :to="`/product/${item.id}`" class="mt-3 ml-3">
    <article>
      <figure>
        <figcaption class="d-flex flex-column">
          <span>
            {{ item.name }}
          </span>
          <span>
            {{ item.price }}
            <img src="../assets/crazy_coins_white.svg" alt="coin">
          </span>
        </figcaption>
        <div>
          {{item.short_description}}
        </div>
      </figure>

      <section>
        <div class="wrap-prev">
          <img src='../assets/Crazy_logo.png' :alt="item.name" class="prev_product">
        </div>
      </section>
    </article>
  </router-link>
</template>

<script>
export default {
  name: 'product_line',
  props: {
    item: {
      value: {
        id: 0,
        name: undefined,
        price: undefined,
        short_description: undefined,
        img: undefined
      }
    }
  },
}
</script>

<style scoped>
a{
  margin: 0;
  padding: 0;
}
article{
  width: 100% !important;
  display: flex;
  margin: 0;
}
a{
  width: 31%!important;
  background: #dcd8c099;
  display: flex;
  cursor: pointer;
  transition: all .2s ease-in-out;
}
a:hover{
  transform: scale(1.07);
  background: #dcd8c0;
}
figure{
  width: 100%;
  min-width: 200px!important;
  background: none;
}
figure > figcaption{
  background: #454138de;
}

section{
  padding: 10px;
}
.wrap-prev{
  overflow: hidden;
  max-height: 200px;
}
.prev_product{
  width: 100%;
  vertical-align: center;
  height: auto;
  background: #b3af9b61;
}
[alt="coin"]{
  width: 25px;
}
figcaption{
  font-size: 16px;
  width: 100%;
}
span:nth-child(2){
  font-size: 14px;
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
