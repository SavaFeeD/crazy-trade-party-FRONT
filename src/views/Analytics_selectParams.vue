<template>
  <div class="">
    <h3>Select Params</h3>
    <router-link :to="{ name: 'ViewStatistic' }" active-class="active">
      <button><cite>View Statistic</cite></button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SelectParams',

  data: () => ({

  }),
}
</script>
