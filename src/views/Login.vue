<template>
  <div class="login">
    <form action="" @submit.prevent="LoginUser">
      <fieldset>
        <legend><h1>Login</h1></legend>
        <div class="wrap_in_form">
          <p>
            <label for="email">Email</label>
            <input class="full" id="email" v-model="user.email" ref="email" type="email">
          </p>
          <p>
            <label for="password">Password</label>
            <input class="full" id="password" v-model="user.password" ref="password" type="password">
          </p>
          <div class="new_acc">
            <hr/>
            <router-link
              to="/register"
            >
              new account
            </router-link>
          </div>
          <button class="full d-flex justify-content-center mt-4">LOGIN</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    user: {
      email: '',
      password: ''
    }
  }),
  methods: {
    required(field) {
      console.log(this.$refs);
      if (this.user[field].trim() === ''){
        this.$refs[field].className = this.$refs[field].className.replace('success', '')
        this.$refs[field].className += ' invalid'
        this.status = false;
      } else {
        this.$refs[field].className = this.$refs[field].className.replace('invalid', '')
        this.$refs[field].className += ' success'
        this.status = true;

      }
    },
    Validate() {
      Object.keys(this.user).forEach((item) => {
        this.required(item);
      });

      return this.status;
    },

    LoginUser() {
      let status = this.Validate();
      let data = this.user;

      if (status)
        this.$store.dispatch('login', data);
        // this.$store.dispatch('isAuth');
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
