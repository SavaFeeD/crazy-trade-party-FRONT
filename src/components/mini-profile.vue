<template>
  <div class="mini-profile">
    <span class="ava_wrap">
      <img src="" alt="profile">
    </span>
    <div>{{ user.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'MiniProfile',
  props: ['user']
}
</script>

<style scoped>
.ava_wrap {
  width: 70px;
  height: 70px;
  overflow: hidden;
  transform: rotateZ(45deg);
  background: #d4d2b4
}
.ava_wrap img{
  width: 98px;
  height: 98px;
  vertical-align: middle;
  transform: rotateZ(-45deg) translateY(-20px);
}

.ava_wrap img:after {
  width: 98px;
  height: 98px;
  vertical-align: middle;
  transform: rotateZ(-45deg) translateY(-20px);
  content: url("");
}
</style>
