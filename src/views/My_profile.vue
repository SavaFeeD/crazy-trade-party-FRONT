<template>
  <figure>
    <figcaption class="d-flex justify-content-between align-items-center">
      <span>Profile info</span>
      <input type="text" ref="link" value="" class="hidden">
      <div class="pl-2 pr-2 d-flex justify-content-center align-items-center pulse" :class="{'pulsed' : link}" @click="() => {copyLink()}">
        <i class="fas fa-link mr-1"></i>Copy
      </div>
    </figcaption>
    <div class="d-flex">
      <img :src='user.img' :alt="user.name" class="ava" v-if="user.img != null">
      <img src='../assets/Crazy_logo.png' :alt="user.name" class="ava" v-else>
      <div class="d-flex flex-column w-100 pl-3 pr-3">
        <hr>
        <p class="mt-2"><b>Name:</b> {{ user.username }}</p>
        <p><b>Email:</b> {{ user.email }}</p>
        <hr>
      </div>
    </div>
  </figure>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    link: false
  }),
  computed: {
    ...mapState(['user'])
  },
  methods: {
    copyLink() {
      this.link = true;

      setTimeout(() => {
        this.link = false;
      }, 1000);
      this.$refs.link.value = window.location.href;
      let link = this.$refs.link;
      link.select();
      document.execCommand("copy");
    }
  }
}
</script>

<style scoped>
.ava{
  max-height: 250px;
}
p{
  padding-left: 10px;
}
b{
  font-weight: 600;
}
a.fix-link{
  display: flex;
  justify-content: center;
  width: auto!important;
}
a.fix-link:hover{
  color: #d4d2b4!important;
}

.big_text{
  font-size: 25px;
}

.pulse{
  cursor: pointer;
  border-radius: 50px;
}
.pulsed{
  animation: pulse_default 1s infinite;
}

@keyframes pulse_default {
  0% {
    -moz-box-shadow: 0 0 0 0 #dcd8c0;
    box-shadow: 0 0 0 0 #dcd8c0;
  }
  70% {
    -moz-box-shadow: 0 0 0 3px rgba(204,169,44, 0);
    box-shadow: 0 0 0 3px rgba(204,169,44, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}

.hidden{
  opacity: 0;
  position: absolute;
  left: -1000000;
}
</style>
