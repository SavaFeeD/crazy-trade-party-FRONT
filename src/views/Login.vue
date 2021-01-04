<template>
  <div class="login">
    <form action="" @submit.prevent="Validate">
      <fieldset>
        <legend><h1>Login</h1></legend>
        <div class="wrap_in_form">
          <p>
            <label for="login">Login</label>
            <input class="full" id="login" v-model="user.login" ref="login" type="text">
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
      login: '',
      password: ''
    }
  }),
  methods: {
    Validate() {
      if (this.user.login.trim() === ''){
        this.$refs.login.className = this.$refs.login.className.replace('success', '')
        this.$refs.login.className += ' invalid'
      } else {
        this.$refs.login.className = this.$refs.login.className.replace('invalid', '')
        this.$refs.login.className += ' success'
      }
      if (this.user.password.trim() === ''){
        this.$refs.password.className = this.$refs.password.className.replace('success', '')
        this.$refs.password.className += ' invalid'
      } else {
        this.$refs.password.className = this.$refs.password.className.replace('invalid', '')
        this.$refs.password.className += ' success'
      }
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
