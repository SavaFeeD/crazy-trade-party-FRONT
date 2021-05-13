<template>
  <section class="d-flex flex-column align-items-center w-100">
    <form class="d-flex flex-column align-items-center m-5" enctype="multipart/form-data">
      <p>Load dataset using the file selection button</p>
      <input type="file" id="fileElem" accept=".csv" :onchange="() => {check_file = true; $refs.btn_route.disabled=false;}" @change="previewFiles">
      <div class="d-flex justyfy-content-center align-items-center w-100">
        <label class="col-6 h-100 p-2 button d-flex align-items-center" for="fileElem">
          <i class="fas fa-file-csv pl-2 pr-2"></i>
          Select Dataset
        </label>

        <router-link :to="{ name: 'SelectParams' }" class='col-6 h-100 no-p' active-class="active" :onclick="() => sendFile()">
          <button ref="btn_route">
            <i class="fas fa-check-circle pl-2 pr-2"></i>
            Selected
          </button>
        </router-link>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'SendFile',

  data: () => ({
    check_file: false,
    file: 'null'
  }),

  mounted() {
    this.$refs.btn_route.disabled = true;
  },

  methods: {
    sendFile() {
      if (this.check_file) {
        let file = this.file
        let data = {
          file: file
        }
        this.$store.dispatch('analytics_sendFile', data);
      } else {
        console.log('GIVE ME FILE!');
      }
    },

    previewFiles(event) {
      this.file = event.target.files[0]
   }
  }
}
</script>

<style scoped>
#fileElem {
  display: none;
}
form{
  width: 600px!important;
}

label{
  font-size: 1em;
}

.no-p{
  padding: 0!important;
}
</style>
