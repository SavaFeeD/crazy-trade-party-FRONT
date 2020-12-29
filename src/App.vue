<template>
  <div class="app">
    <nav class="container-fluid">
      <blockquote class="d-flex justify-content-between m-3">
        <section class="d-flex flex-row">
          <router-link to="/" active-class="active">
            <button><cite>Home</cite></button>
          </router-link>

          <router-link to="/market" active-class="active">
            <button><cite>Market</cite></button>
          </router-link>
        </section>

        <section v-if="user !== {}">
          <router-link :to="'/profile/'+user.id" active-class="active">
            <MiniProfile :user="user"></MiniProfile>
          </router-link>
        </section>
      </blockquote>
    </nav>

    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MiniProfile from '@/components/mini-profile'

export default {
  data: () => ({
    user: {}
  }),
  components: {
    MiniProfile
  },
  mounted() {
    let user = {
      id: 0,
      name: 'SavaFeeD'
    }
    localStorage.user = JSON.stringify(user)

    if (localStorage.user) this.user = JSON.parse(localStorage.user);
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
  padding: 0 100px;
}
cite{
  padding-left: 2rem!important;
}
a.active cite::before{
  background: #d4d2b4;
}
a.active button {
  box-shadow: 0.2em 0.2em 0.1em 0 #bab5a1;
}
a.active button {
  background-color: #454138;
  color: #dcd8c0;
}
a.active button:before {
  top: -.2rem;
  bottom: -.2rem;
  border: solid #454138;
  border-width: .1rem 0;
}
a.active button:before {
  content: '';
  transition: all 0.2s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
a:hover cite::before{
  background: #d4d2b4;
}
nav a{
  display: flex;
  margin: 0 10px;
  width: 10rem!important;
  justify-content: flex-start;
}
nav a button{
  width: 100%;
  text-align: left;
}
a{
  text-decoration: none!important;
  font-size: 20px;
}
cite:before {
  content: '';
  position: absolute;
  width: 1rem;
  height: 1rem;
  background-color: #454138;
  margin-left: -1.5rem;
  top: 0.14em;
}
</style>
