<template>
  <section class="container login-page">
    <div class="row">
      <div class="column column-50 column-offset-25">
        <form v-on:submit.prevent="onSubmit">
          <h3>Login</h3>
          <fieldset>
            <label for="Username">Username</label>
            <input type="text" :class="[errors.username ? 'has-error' : null]" placeholder="Username" v-model="username">

            <label for="Password">Password</label>
            <input type="password" :class="[errors.username ? 'has-error' : null]" placeholder="Password" v-model="password">

            <input class="button-primary" type="submit" value="Login">
          </fieldset>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'login',
  middleware: 'no-auth',
  // Check if user already logged-in
  data() {
    return {
      username: null,
      password: null,
      errors: {}
    }
  },
  methods: {
    onSubmit() {
      // Clear the previous errors
      this.errors = {}

      if (!this.username) {
        this.errors['username'] = true
      }

      if (!this.password) {
        this.errors['password'] = true
      }

      if (Object.keys(this.errors).length !== 0) {
        return
      }

      this.$store.dispatch('login', this.getData())
      this.$router.replace({ path: '/' })
    },
    getData() {
      return {
        id: 123,
        name: this.username, // Use static name for now
        username: this.username,
        password: this.password,
        avatar: 'http://lorempixel.com/55/55/people/8/'
      }
    }
  }
}
</script>

<style>
.login-page {
  margin-top: 50px;
}
.login-page form {
  background: white;
  padding: 25px;
  border-radius: 10px;
}
.login-page input.has-error {
  border-color: red;
}
</style>
