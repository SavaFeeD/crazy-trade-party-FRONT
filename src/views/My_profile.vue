<template>
  <figure>
    <figcaption>My profile</figcaption>
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
