<template>
  <div class="app">
    <nav class="container-fluid">
      <div class="d-flex justify-content-between m-3">
        <blockquote class="d-flex full">
          <section class="d-flex flex-row">
            <router-link to="/" active-class="active">
              <button><cite>Home</cite></button>
            </router-link>

            <router-link to="/market" active-class="active">
              <button><cite>Market</cite></button>
            </router-link>

            <router-link
              v-if="user.slug !== undefined"
              :to="'/wishlist/'+user.slug"
              active-class="active">
              <button><cite>Wishlist</cite></button>
            </router-link>
          </section>
        </blockquote>

        <blockquote class="d-flex denature">
          <section v-if="user.slug !== undefined">
            <router-link :to="'/profile/'+user.slug+'/info'" active-class="active">
              <MiniProfile :user="user"></MiniProfile>
            </router-link>
          </section>
          <section v-else class="d-flex">
            <router-link to="/register" active-class="active" class="pulse _green">
              <button><cite>Sing Up</cite></button>
            </router-link>
            <router-link to="/login" active-class="active" class="pulse _red">
              <button><cite>Sing In</cite></button>
            </router-link>
          </section>
        </blockquote>
      </div>
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
      name: 'SavaFeeD',
      slug: 'savafeed',
      id: 0
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
.active cite::before{
  background: #d4d2b4;
}
.active button {
  box-shadow: 0.2em 0.2em 0.1em 0 #bab5a1;
}
.active button {
  background-color: #454138;
  color: #dcd8c0;
}
.active button:before {
  top: -.2rem;
  bottom: -.2rem;
  border: solid #454138;
  border-width: .1rem 0;
}
.active button:before {
  content: '';
  transition: all 0.2s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
a:hover cite::before{
  background: #d4d2b4!important;
}
a{
  display: flex;
  margin: 0 10px;
  width: 10rem!important;
  justify-content: flex-start;
}
button{
  width: 100%;
  text-align: left;
}
a:hover{
  color: #454138;
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
.container-fluid{
  max-width: 1600px!important;
}
blockquote:before {
  content: '';
  position: absolute;
  top: 0;
  left: -1.5rem;
  bottom: 0;
  height: 100%;
  width: 1rem;
  border: solid #bab5a1;
  border-width: 0 .2rem 0 .6rem;
}
nav blockquote.full {
  width: 100%;
}
nav blockquote{
  background: #dcd8c075;
  margin-right: 70px;
  box-shadow: 0.1em 0.1em 0.1em 0 #bab5a1;
}
nav blockquote.full .active button{
  background: #8a8676;
}
blockquote.denature{
  background: none;
  box-shadow: none;
  margin-right: 0;
}
blockquote.denature:before{
  left: -1000rem;
}

.pulse cite:before {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(204,169,44, 0.4);
  top: 4px;
}
.pulse._red cite:before{
  animation: pulse_red 2s infinite;
}
.pulse._green cite:before{
  animation: pulse_green 2s infinite;
}
.pulse:hover cite:before,
.active cite:before{
  animation: none;
}

@keyframes pulse_green {
  0% {
    -moz-box-shadow: 0 0 0 0 #2dce89ad;
    box-shadow: 0 0 0 0 #28a745;
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
    box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}
@keyframes pulse_red {
  0% {
    -moz-box-shadow: 0 0 0 0 #ffc107ad;
    box-shadow: 0 0 0 0 #ffc107;
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
    box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}
</style>
