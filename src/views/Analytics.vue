<template>
  <div class="analytics">

    <h1 class="d-flex"><span class="head_anal">Data</span>set <span class="ml-4 head_anal">Analys</span>er
      <div class="prev_hist ml-4" :onclick="() => $router.go(-1)" v-if="pathname != '/analytics'">
        <i class="fas fa-angle-double-left pl-1"></i>
      </div>
    </h1>

    <div class="row mt-5" v-if="pathname == '/analytics'">
      <router-link :to="{ name: 'SendFile' }" class='col-3' active-class="active">
        <button><cite>DEFAULT ANALYTICS</cite></button>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Analytics',
  data: () => ({
    pathname: undefined
  }),
  mounted() {
    this.pathname = window.location.pathname
  },
  updated() {
    this.pathname = window.location.pathname
  }
}
</script>

<style media="screen">
span.head_anal{
  background: #bab6a280;
}
.prev_hist{
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bab6a2;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.7;
}
.prev_hist:hover{
  opacity: 1;
}
</style>
