<template>
  <div class="market">
    <h1 class="m-4">Profile</h1>
    <div class="container">
      <figure>
        <figcaption>User data</figcaption>
        <div>
          <p>{{ user.name }}</p>
          <hr>
          <p>id: {{ user.id }}</p>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      id: null,
      name: 'Test Data'
    }
  }),
  created() {
    this.user.id = this.$route.params.id
  }
}
</script>

<style>

</style>
