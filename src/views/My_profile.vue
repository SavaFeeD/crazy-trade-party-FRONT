<template>
  <figure>
    <figcaption>Profile info</figcaption>
    <div>
      <p>{{ user.name }}</p>
      <hr>
      <p>slug: {{ user.slug }}</p>
    </div>
  </figure>
</template>

<script>
export default {
  data: () => ({
    name: 'My_profile',
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
