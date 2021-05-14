<template>
  <div>
    <div class="d-flex w-100 h-full justify-content-center align-items-center">
      <form action="" @submit.prevent="addCoin">
        <fieldset>
          <legend class="d-flex justify-content-center"><h1>PAYMENT</h1></legend>
          <div class="wrap_in_form">
            <p>
              <label for="coins mr-5">CRAZYCOINS:</label>
              <input class="full ml-3" id="coins" v-model="add_value" ref="username" type="number">
            </p>

            <button class="full d-flex justify-content-center mt-4">ADD</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  data: () => ({
    add_value: 0
  }),

  methods: {
    addCoin() {
      let data = {
        'add_value': this.add_value,
        'user_id': this.profile.id
      }
      console.log(data);
      this.$store.dispatch('addCrazycoin', data);
    },

    isEmpty(obj) {
      for (let key in obj) {
        return false;
      }
      return true;
    },
    range(start, stop, step) {
      if (typeof stop == 'undefined') {
        stop = start;
        start = 0;
      }

      if (typeof step == 'undefined') {
        step = 1;
      }

      if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
      }

      let result = [];
      for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
      }

      return result;
    }
  },

  computed: {
    ...mapState(['profile'])
  },

  components: {
  },

  created() {

  }
}
</script>

<style scoped>
h1 ~ p{
  font-size: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.cat-menu{
  top: 30px;
}
.fix-cat{
  padding-top: 2px;
}
.fix-cat:hover cite:before{
  background: #d4d2b4!important;
}
.cat-list{
  margin-bottom: 10px;
  font-size: 16px;
}
a{
  width: auto!important;
}

.h-full{
  height: 50vh;
}
</style>
