<template>
  <article class="mt-3 ml-3">
    <figure>
      <figcaption>
        {{ item.name }}
        <br>
        <span>{{ item.price }}</span>
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
  max-width: 650px;
  width: 100%;
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
  padding: 20px;
}
.wrap-prev{
  overflow: hidden;
  max-height: 250px;
}
.prev_product{
  width: 100%;
  vertical-align: center;
  height: auto;
  background: #b3af9b61;
}
</style>
