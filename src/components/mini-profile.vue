<template>
  <section class="mini-profile" :class="{ 'our_profile active': !is_me }">
    <div class="box-ava">
      <div class="ava_wrap">
        <img :src="user.img" alt="profile">
      </div>
    </div>
    <button><div>{{ user.name }}</div></button>
    <div v-if="is_me" class="crazy_coin_wrap">
      <router-link
          to="/add_crazy_coin">
        <img src="../assets/crazy_coins.svg" class="crazy_coin" alt="crazy_coin">
        <var>{{ user.crazy_coins }}</var>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MiniProfile',
  props: {
    user: {
      value: {
        default: {
          id: undefined,
          img: undefined,
          name: undefined,
          slug: undefined,
          crazy_coins: 0
        }
      }
    },
    is_me: {
      value: {
        type: Boolean
      }
    }
  }
}
</script>

<style scoped>
.mini-profile{
  display: flex;
  transform: translateX(-40px);
  position: relative;
}
.box-ava{
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 3px;
  transform: rotateZ(45deg);
  border: #dcd8c0d6 3px solid!important;
  border-radius: 4px;
  background: #4541382e;
  z-index: 1000;
  position: absolute;
  left: -15px;
  top: -10px;
  animation: pulse_default 1s infinite;
}
.ava_wrap {
  display: flex;
  width: 40px;
  height: 40px;
  overflow: hidden;
  background: #d4d2b4;
  margin: 0!important;
  border: #dcd8c0 3px solid!important;
  border-radius: 4px;
}
.ava_wrap img{
  display: flex;
  width: 68px;
  height: 68px;
  vertical-align: middle;
  transform: rotateZ(-45deg) translateY(-20px);
}

.ava_wrap img:after {
  max-width: 58px!important;
  max-height: 58px!important;
  content: ' ';
  width: 58px!important;
  height: 58px!important;
  vertical-align: middle;
  transform: translate(4px, -39px);
  background: url("../assets/no_ava.png") no-repeat;
  background-size: cover;
}
.our_profile .ava_wrap img:after{
  transform: translate(4px, -35px);
}

button{
  width: 14rem!important;
  padding-left: 43px!important;
  transform: translateX(10px);
}
button div{
  max-width: calc(14rem - 43px)!important;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 17px;
}


@keyframes pulse_default {
  0% {
    -moz-box-shadow: 0 0 0 0 #454138c7;
    box-shadow: 0 0 0 0 #454138c7;
  }
  70% {
    -moz-box-shadow: 0 0 0 5px rgba(204,169,44, 0);
    box-shadow: 0 0 0 5px rgba(204,169,44, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}

.crazy_coin_wrap{
  position: absolute;
  bottom: -32px;
  left: 40px;
  display: flex;
  align-items: center;
  background: #dcd8c0;
  transform: skewX(-30deg);
  width: 70%;
}
.crazy_coin_wrap:before{
  content: '';
  position: absolute;
  top: 0;
  left: -20px;
  display: flex;
  align-items: center;
  background: #dcd8c08a;
  width: calc(100% + 40px);
  height: 100%;
}
img.crazy_coin{
  width: 25px;
  height: 25px;
  transform: skewX(30deg);
  margin-left: 5px;
}

var{
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  transform: skewX(30deg);
}
</style>
