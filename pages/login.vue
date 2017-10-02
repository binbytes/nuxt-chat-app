<template>
  <section class="container auth-page">
    <div class="row">
      <div class="column column-50 column-offset-25">
        <form v-on:submit.prevent="onSubmit">
          <h3>Login</h3>
          <fieldset>
            <label for="Username">Username</label>
            <input type="text" :class="[errors.username ? 'has-error' : null]" placeholder="Username" v-model="username">

            <label for="Password">Password</label>
            <input type="password" :class="[errors.password ? 'has-error' : null]" placeholder="Password" v-model="password">

            <input class="button-primary" type="submit" value="Login">

            <div>
              <router-link to="register">Dont have account, create account from here</router-link>
            </div>
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
    async onSubmit() {
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

      try {
        await this.$store.dispatch('login', this.$data)
        this.$router.replace({ path: '/' })
      } catch (e) {

      }
    }
  }
}
</script>
