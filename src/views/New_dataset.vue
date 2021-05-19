<template>
  <div class="new_dataset mb-5">
    <form action="" @submit.prevent="add_dataset" enctype="multipart/form-data">
      <fieldset>
        <legend><h1>NEW DATASET</h1></legend>
        <div class="wrap_in_form">
          <p>
            <label for="name">Name dataset</label>
            <input class="full" id="name" v-model="dataset.name" ref="name" type="text">
          </p>
          <div class="d-flex mb-2">
            <p class="m-auto">
              <label for="dataset">Dataset</label>
              <input class="full" id="dataset" ref="dataset_" type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
            </p>
            <p class="m-auto">
              <label for="img">Image</label>
              <input class="full" id="img" ref="img" type="file" accept="image/*">
            </p>
          </div>
          <div class="d-flex mb-2">
            <p class="m-auto">
              <label for="short_description">Short description</label>
              <input class="full" id="short_description" v-model="dataset.short_description" ref="short_description" type="text">
            </p>
            <p class="m-auto">
              <label for="price">Price</label>
              <input class="full" id="price" ref="price" v-model="price" type="number">
            </p>
          </div>

          <p>
            <label for="description">Description</label>
            <textarea class="full" name="description" v-model="dataset.description" id="description" ref="description"></textarea>
          </p>

          <button class="full d-flex justify-content-center mt-4">ADD DATASET</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'New_dataset',
  data: () => ({
    dataset: {
      name: '',
      short_description: '',
      description: ''
    },
    price: 0,
    status: true
  }),

  computed: {
    ...mapState(['profile'])
  },

  methods: {
    required(field) {
      if (this.dataset[field].trim() === ''){
        this.$refs[field].className = this.$refs[field].className.replace('success', '')
        this.$refs[field].className += ' invalid'
        this.status = false;
      } else {
        this.$refs[field].className = this.$refs[field].className.replace('invalid', '')
        this.$refs[field].className += ' success'
        this.status = true;

      }
    },
    identical(field1, field2) {
      if (this.dataset[field1].trim() !== this.dataset[field2].trim()) {
        this.$refs[field2].className = this.$refs[field2].className.replace('success', '')
        this.$refs[field2].className += ' invalid'
        this.status = false;
      } else {
        this.$refs[field1].className = this.$refs[field1].className.replace('invalid', '')
        this.$refs[field1].className += ' success'
        this.$refs[field2].className = this.$refs[field2].className.replace('invalid', '')
        this.$refs[field2].className += ' success'
        this.status = true;
      }
    },

    Validate() {
      Object.keys(this.dataset).forEach((item) => {
        this.required(item);
      });

      return this.status;
    },

    add_dataset() {
      let status = this.Validate();
      let data = {
        name: this.dataset.name,
        short_description: this.dataset.short_description,
        description: this.dataset.description,
        img: document.getElementById('img').files[0],
        dataset: document.getElementById('dataset').files[0],
        user_id: this.profile.id,
        price: this.price
      }

      if (status)
        this.$store.dispatch('add_dataset', data);
    }
  }
}
</script>

<style scoped>
h1{
  width: 100%;
  display: flex;
  justify-content: center;
}
form{
  display: flex;
  justify-content: center;
  margin-top: calc(50px + 2vw);
}
fieldset{
  max-width: 800px;
  width: 100%;
  border: 2px solid #bab5a1;
}
.wrap_in_form{
  background: #dcd8c066;
  padding: 20px;
}
.full{
  width: 100%;
  border: 2px solid #bab5a1;
}
.new_acc{
  display: flex;
  margin-top: 20px;
  width: 100%;
}
hr{
  width: 100%;
  border-style: dotted;
  border-color: #4541389c;
}
.new_acc a{
  margin-left: 10px;
  transition: all .2s;
}
.new_acc a:hover{
  text-shadow: 0.3rem 0.3rem 0 #bab5a1;
}
input.invalid{
  border-color: #8d3f3f;
}
input.success{
  border-color: #28a745;
}
</style>
