<template>
  <figure>
    <figcaption>Exit</figcaption>
    <div>
      <p>{{ user.name }}</p>
      <hr>
      <p>id: {{ user.id }}</p>
    </div>
  </figure>
</template>

<script>
export default {
  data: () => ({
    user: {
      slug: ''
    }
  }),
  created() {
    this.user.slug = this.$route.params.slug
  }
}
</script>

<style scoped>

</style>
