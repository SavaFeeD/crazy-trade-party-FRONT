<template>
  <div class="analytics">
    <h1>Dataset Analyser</h1>
      <div class="row mt-5" v-if="pathname == '/analytics'">
        <router-link :to="{ name: 'SendFile' }" class='col-3' active-class="active">
          <button><cite>File format CSV</cite></button>
        </router-link>
        <router-link :to="{ name: 'SendFile' }" class='col-3' active-class="active">
          <button><cite>File format Excel</cite></button>
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
