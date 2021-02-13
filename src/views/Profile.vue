<template>
  <div class="profile" v-if="user.id !== null && user.slug === $route.params.slug">
    <h1 class="m-4">Profile</h1>
    <div class="container">
      <div class="row" :class="{ 'd-flex justify-content-center': !Me }">
        <section class="col-4 o-cursor" v-if="Me">
          <Arrow_menu :list_route="list_route" :options="options"></Arrow_menu>
        </section>

        <section class="col-8" v-if="Me">
          <transition name="update_page">
            <router-view/>
          </transition>
        </section>
        <section class="col-8 d-flex flex-column" v-else>
          <div class="m-p-wrap">
            <MiniProfile :user="user" :is_me="Me"></MiniProfile>
          </div>
          <My_profile></My_profile>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import Arrow_menu from '@/components/arrow_menu'
import My_profile from "./My_profile";
import MiniProfile from '@/components/mini-profile'
import {mapState} from "vuex";


export default {
  data: () => ({
    me_id: '',
    list_route: [
      {
        path: 'info',
        name: 'Profile info'
      },
      {
        path: 'settings',
        name: 'Settings'
      },
      {
        path: 'exit',
        name: 'Exit'
      },
    ],
    options: {
      profile: true,
      active_class: 'active'
    }
  }),
  components: {
    Arrow_menu,
    My_profile,
    MiniProfile
  },
  created() {
    this.$store.dispatch('getUser', this.$route.params.slug);
    this.$store.dispatch('isAuth');
  },
  computed:{
    ...mapState(['profile']),
    user() {
      return this.$store.getters.getUser;
    },
    Me() {
      return this.profile.id === this.user.id;
    }
  },
}
</script>

<style scoped>

.m-p-wrap{
  display: flex;
  justify-content: center;
  margin: 20px;
  min-height: 65px;
  align-items: center;
  transform: translateX(25px);
}

.update_page-enter-active{
  position: relative;
  overflow: hidden;
  animation: update_page_low .5s;
}

.update_page-enter-active:before{
  content: '';
  position: absolute;
  left: -100%;
  top: 50px;
  width: 100%;
  height: 100%;
  background: #454138;
  animation: update_page_before .5s;
  z-index: 1000;
}

@keyframes update_page_low {
  0% {
    opacity: 1;
  }
}
@keyframes update_page {
  0% {
    background: #dcd8c0;
  }
  10% {
    background: #bab5a1;
  }
  20% {
    background: #dcd8c0;
  }
  30% {
    background: #bab5a1;
  }
  40% {
    background: #dcd8c0;
  }
  100% {
    background: #dcd8c0;
  }
}
@keyframes update_page_before {
  0% {
    left: -100%;
  }
  50%{
    left: 0;
    opacity: .7;
  }
  100%{
    opacity: 0;
    display: none;
  }
}
</style>
