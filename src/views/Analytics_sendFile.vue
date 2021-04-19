<template>
  <section class="d-flex flex-column align-items-center w-100">
    <form class="d-flex flex-column align-items-center m-5">
      <p>Load images using the file selection button</p>
      <input type="file" id="fileElem" onchange="handleFiles(this.files)">
      <div class="d-flex justyfy-content-center align-items-center w-100">
        <label class="col-6 h-100" for="fileElem">
          <button v-on:click.stop.prevent class="p-2"><i class="fas fa-file-csv pl-2 pr-2"></i>Select Dataset</button>
        </label>
        <router-link :to="{ name: 'SelectParams' }" class='col-6 h-100' active-class="active">
          <button><i class="fas fa-align-left pl-2 pr-2"></i>Select Params</button>
        </router-link>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'SendFile',

  data: () => ({

  }),
}
</script>

<style scoped>
#fileElem {
  display: none;
}
form{
  width: 600px!important;
}
</style>
