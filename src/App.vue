<template>
  <div class="app">
    <nav class="container-fluid">

      <a href="/" class="logo">
        <img src="./assets/Crazy_logo.png" alt="logo">
      </a>

      <div class="d-flex justify-content-between align-items-center m-3">
        <blockquote class="d-flex full">
          <section class="d-flex flex-row">

            <router-link to="/" active-class="active" class="up_menu">
              <button><cite>HOME</cite></button>
            </router-link>

            <router-link to="/market/all" active-class="active" class="up_menu">
              <button><cite>MARKET</cite></button>
            </router-link>

            <router-link to="/analytics" active-class="active" class="up_menu">
              <button><cite>ANALYTICS</cite></button>
            </router-link>

            <router-link to="/rating" active-class="active" class="up_menu">
              <button><cite>RATING</cite></button>
            </router-link>

            <router-link
              v-if="profile.id !== null"
              class="up_menu"
              :to="'/wishlist/'+profile.slug"
              active-class="active">
              <button><cite>WISHLIST</cite></button>
            </router-link>

          </section>
        </blockquote>

        <blockquote class="d-flex denature">
          <section v-if="profile.id !== null" @click="this.$store.dispatch('to_profile')">
            <router-link :to="'/profile/'+profile.slug+'/info'" id="profile_href" active-class="active">
              <MiniProfile :user="profile" :is_me="true"></MiniProfile>
            </router-link>
          </section>
          <section v-else class="d-flex align-items-center pulse _green">
              <cite class="login">
                <btn_ARoute :btn="{
                  name: 'Sing In',
                  path: '/login',
                  wrap_class: 'small',
                  btn_b: 'justify-content-center'
                }"></btn_ARoute>
              </cite>
          </section>
        </blockquote>
      </div>
    </nav>

    <img src="./assets/line.svg" class="disign_line" alt="line">

    <div class="container-fluid mt-6">
      <router-view/>
    </div>

    <div class="position-fixed p-3 w-25 mb-3 alert-general d-flex justify-content-between align-items-center" :class="{ 'error': _alert.type === 'error', 'message': _alert.type === 'message' }" v-if="_alert.flag"
    @click="setAlertFlag(false)">
      <div class="d-flex align-items-center ml-3">
        <i class="fas fa-bomb mr-2"></i>
        {{ _alert.message }}
      </div>
      <i class="far fa-window-close ml-3"></i>
    </div>
  </div>
</template>

<script>
import MiniProfile from "@/components/mini-profile";
import btn_ARoute from "./components/btn_ARoute";
import { mapState } from "vuex"

export default {
  data: () => ({
  }),
  components: {
    MiniProfile,
    btn_ARoute
  },

  mounted() {
    let menu = document.querySelectorAll('.up_menu')
    menu.forEach((el) => {
      el.addEventListener('click', () => {
        setTimeout(() => {
          if (document.querySelector('#profile_href')){
            document.querySelector('#profile_href').className = ''
          }
        }, 100)
      })
    })

    this.$store.dispatch('isAuth');
  },
  computed: {
    ...mapState(['_alert', 'profile'])
  },
  methods: {
    setAlertFlag(value) {
      this.$store.dispatch('setAlertFlag', value);
    },
    isEmpty(obj) {
      for (let key in obj) {
        return false;
      }
      return true;
    }
  }
}
</script>


<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.min.css';
@import '~yorha/dist/yorha.min.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';

.alert-general{
  background: #dcd8c0c2;
  cursor: pointer;
}

.body{
  margin: 0!important;
  padding: 0!important;
  width: 100%;
  min-height: 100vh;
  background: url("assets/bg.png") top left fixed no-repeat!important;
  background-size: cover;
}
.app{
  width: 100%;
  padding: 0 100px;
  position: relative;
  min-height: 90vh;
}
nav{
  position: relative;
}

nav .logo{
  position: absolute;
  left: -70px;
  top: 5px;
}
nav .logo img{
  width: 50px;
}
button:not(:disabled), .button{
  padding: .3rem;
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
  margin: 0!important;
}
nav blockquote{
  //background: #dcd8c075;
  margin-right: 70px;
  //box-shadow: 0.1em 0.1em 0.1em 0 #bab5a1;
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
.active cite:before{
  animation: none;
}

@keyframes pulse_green {
  0% {
    -moz-box-shadow: 0 0 0 0 #2dce89ad;
    box-shadow: 0 0 0 0 #28a745;
  }
  70% {
    -moz-box-shadow: 0 0 0 6px rgba(204,169,44, 0);
    box-shadow: 0 0 0 6px rgba(204,169,44, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}


cite{
  font-style: normal!important;
}

cite.login:before{
  top: calc(50% - 8px);
  left: 77px;
  z-index: 500;
}

.app{
  position: relative;
}

.disign_line{
  position: absolute;
  top: 75px;
  left: 0.5vw;
  width: 98vw;
  opacity: .6;
}

.mt-6{
  margin-top: 4.5rem;
}

.h-all{
  min-height: 100vh;
}

footer{
  background: #454138;
  color: white;
}
footer:before{
  content: '';
  top: -.2rem;
  bottom: -.2rem;
  border: solid #454138;
  border-width: .1rem 0;
}

.denature{
  margin: 0!important;
  margin-bottom: 0!important;
}

.position-fixed{
  position: fixed;
  bottom: 0;
}


::-webkit-scrollbar {
    width: 5px; /* ширина для вертикального скролла */
    height: 3px; /* высота для горизонтального скролла */
    background-color: #d4d2b4;
}

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
    background-color: #454138de;
    border-radius: 9em;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #454138de;
}

/* Стрелки */

::-webkit-scrollbar-button:vertical:start:decrement {
    background-color: #d4d2b4;
    height: 1px!important;
}

::-webkit-scrollbar-button:vertical:end:increment {
  background-color: #d4d2b4;
  height: 1px!important;
}

</style>
