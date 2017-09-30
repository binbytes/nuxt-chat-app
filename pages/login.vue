<template>
  <section class="container">
    <div class="row">
      <form v-on:submit.prevent="onSubmit" class="column column-50 column-offset-25">
        <h3>Login</h3>
        <fieldset>
          <label for="nameField">Username</label>
          <input type="text" placeholder="Username" v-model="username">

          <label for="nameField">Password</label>
          <input type="text" placeholder="Password" v-model="password">

          <input class="button-primary" type="submit" value="Login">
        </fieldset>
      </form>
    </div>
  </section>
</template>

<script>
// Curerntly we will not put logic, just bulit layout first
export default {
  name: 'login',
  middleware: 'no-auth',
  // Check if user already logged-in
  data() {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    onSubmit() {
      // Put login logic & middleware call here
      this.$store.dispatch('login')
      this.$router.replace({ path: '/' })
    }
  }
}
</script>
