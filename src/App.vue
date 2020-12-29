<template>
  <div class="app">
    <nav class="container-fluid">
      <div class="d-flex justify-content-between">
        <section>
          <router-link
              tag="a"
              to="/"
          >Home</router-link> |
          <router-link
              tag="a"
              :to="{ path: 'Market' }"
          >Market</router-link>
        </section>

        <section v-if="user !== ''">
          <router-link tag="a"
                       :to="{ path: 'Profile', params: { id: user.id } }"
          >Profile</router-link>
        </section>
      </div>
    </nav>

    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: ''
  }),
  mounted() {
    if (localStorage.user) this.user = localStorage.user;
  }
}
</script>


<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.min.css';
@import '~yorha/dist/yorha.min.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';

.body{
  margin: 0!important;
  padding: 0!important;
  width: 100%;
  //min-height: 100vh;
  //background: url("assets/bg.png") top left fixed no-repeat!important;
  //background-size: cover;
}
.app{
  width: 100%;
  padding: 0 80px;
}
</style>
