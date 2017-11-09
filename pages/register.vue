<template>
  <div class="bg-grey-lighter h-screen font-sans">

    <div class="container mx-auto h-full flex justify-center items-center">
      <div class="w-1/3">
        <h1 class="font-hairline mb-6 text-center">Register to Chat app</h1>
        <form v-on:submit.prevent="onSubmit">
          <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">

            <div class="error-box text-red text-center mb-4" v-if="errors.error" v-text="errors.error"></div>

            <div class="mb-4">
              <label class="font-bold text-grey-darker block mb-2">Name</label>
              <input type="text" v-model="name" :class="['block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow', errors.username ? 'border-red mb-3' : '']" placeholder="Your Username">
              <p v-if="errors.name" class="text-red text-xs italic">Please enter a name.</p>
            </div>

            <div class="mb-4">
              <label class="font-bold text-grey-darker block mb-2">Username</label>
              <input type="text" v-model="username" :class="['block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow', errors.username ? 'border-red mb-3' : '']" placeholder="Your Username">
              <p v-if="errors.username" class="text-red text-xs italic">Please choose a username.</p>
            </div>

            <div class="mb-4">
              <label class="font-bold text-grey-darker block mb-2">Password</label>
              <input type="password" v-model="password" :class="['block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow', errors.password ? 'border-red mb-3' : '']" placeholder="Your Password">
              <p v-if="errors.password" class="text-red text-xs italic">Please choose a password.</p>
            </div>

            <div class="flex items-center justify-between">
              <button type="submit" class="bg-teal-dark hover:bg-teal text-white font-bold py-2 px-4 rounded">
                Register
              </button>
            </div>

          </div>
          <div class="text-center">
            <p class="text-grey-dark text-sm">Already have account?
              <router-link to="/login" class="no-underline text-blue font-bold">Login from here.</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  middleware: 'no-auth',
  data () {
    return {
      name: null,
      username: null,
      password: null,
      errors: {}
    }
  },
  methods: {
    async onSubmit () {
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
        const { data } = await this.$axios.post('/auth/register', this.$data)

        this.$router.replace({ path: '/', query: 'loggedIn' })
      } catch ({ response }) {

        if (response.status === 422) {
          this.errors = response.data
        }
      }
    }
  }
}
</script>
