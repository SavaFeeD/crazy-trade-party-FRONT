<template>
  <div class="error">
    <h1>Error {{ error.code }}</h1>
    <h2>{{ error.message }}</h2>
    <img alt="Logo" src="../assets/Crazy_logo.png">
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: Object
  }
}
</script>
