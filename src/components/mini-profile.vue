<template>
  <section class="mini-profile">
    <div class="box-ava">
      <div class="ava_wrap">
        <img src="" alt="profile">
      </div>
    </div>
    <button><div>{{ user.name }}</div></button>
  </section>
</template>

<script>
export default {
  name: 'MiniProfile',
  props: ['user']
}
</script>

<style scoped>
.mini-profile{
  display: flex;
  transform: translateX(-40px);
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

button{
  width: 14rem!important;
  padding-left: 43px!important;
  transform: translateX(-28px);
}
button div{
  max-width: calc(14rem - 43px)!important;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 17px;
}

</style>
