<template>
  <article class="mt-3 ml-3">
    <figure>
      <figcaption class="d-flex flex-column">
        <span>
          {{ item.name }}
        </span>
        <span>
          {{ item.price }}
          <img src="../assets/crazy_coins.svg" alt="coin">
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
</template>

<script>
export default {
  name: 'product_line',
  props: {
    item: {
      value: {
        name: undefined,
        desc: undefined,
        img: undefined
      }
    }
  },
}
</script>

<style scoped>
article{
  width: 31%;
  background: #dcd8c099;
  display: flex;
}
figure{
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
}
span:nth-child(2){
  font-size: 14px;
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
