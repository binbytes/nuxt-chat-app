<template>
  <section class="container auth-page">
    <div class="row">
      <div class="column column-50 column-offset-25">
        <form v-on:submit.prevent="onSubmit">
          <h3>Register</h3>
          <fieldset>
            <label for="name">Name</label>
            <input type="text" :class="[errors.name ? 'has-error' : null]" placeholder="Name" v-model="name">

            <label for="Username">Username</label>
            <input type="text" :class="[errors.username ? 'has-error' : null]" placeholder="Username" v-model="username">

            <label for="Password">Password</label>
            <input type="password" :class="[errors.password ? 'has-error' : null]" placeholder="Password" v-model="password">

            <input class="button-primary" type="submit" value="Register">

            <div>
              <router-link to="register">Already have account, login from here</router-link>
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
  data() {
    return {
      name: null,
      username: null,
      password: null,
      errors: {}
    }
  },
  methods: {
    async onSubmit() {
      // Clear the previous errors
      this.errors = {}

      if (!this.name) {
        this.errors['name'] = true
      }

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
        const {data} = await this.$axios.post('api/register', this.$data)
        await this.$store.commit('SET_USER', data)

        this.$router.replace({ path: '/' })
      } catch (e) {
        // handle error
      }
    }
  }
}
</script>
