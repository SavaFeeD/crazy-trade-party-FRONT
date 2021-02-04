<template>
  <figure>
    <figcaption>Exit</figcaption>
    <div>
      <h3 class="center">Are you sure you want to log out?</h3>
      <div class="d-flex justify-content-center align-items-center">
        <btn_ARoute :btn="btn" :onclick="exit"></btn_ARoute>
      </div>
    </div>
  </figure>
</template>

<script>
import btn_ARoute from "../components/btn_ARoute";

export default {
  data: () => ({
    user: {
      slug: ''
    },
    btn: {
      name: 'Yes',
      path: '/',
      wrap_class: 'small',
      btn_b: 'justify-content-center'
    }
  }),
  components: {
    btn_ARoute
  },
  created() {
    this.user.slug = this.$route.params.slug
  },
  methods: {
    exit() {
      let user = JSON.parse(localStorage.user);
      return this.$store.dispatch('exit', user.id);
    }
  }
}
</script>

<style scoped>
a{
  width: 100%!important;
}
a *{
  z-index: 0!important;
}
.active button,
button:hover{
  background: #8a8676;
}
</style>
