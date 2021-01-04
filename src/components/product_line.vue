<template>
  <article class="product_line mt-3 ml-3">
    <figure>
      <figcaption>{{ item.name }}</figcaption>
      <div>
        {{item.desc}}
      </div>
    </figure>

    <section>
      <img :src="item.img" :alt="item.name">
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

</style>
