<template>
  <div class="h-screen">
    <div class="container mx-auto h-full flex justify-center items-center">
      <div class="w-1/3">
        <h1 class="font-hairline mb-6 text-center">Register to Chat app</h1>
        <form v-on:submit.prevent="onSubmit">
          <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">

            <div class="error-box text-red text-center mb-4" v-if="errors.error" v-text="errors.error"></div>

            <div class="mb-4">
              <label class="font-bold text-grey-darker block mb-2">Name</label>
              <input type="text" v-model="name" name="name" v-validate="'required'" :class="['block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow', errors.has('name') ? 'border-red mb-3' : '']" placeholder="Your Name">
              <p v-if="errors.has('name')" class="text-red text-xs italic" v-text="errors.first('name')"></p>
            </div>

            <div class="mb-4">
              <label class="font-bold text-grey-darker block mb-2">Username</label>
              <input type="text" v-model="username" name="username" v-validate="'required'" :class="['block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow', errors.has('username') ? 'border-red mb-3' : '']" placeholder="Your Username">
              <p v-if="errors.has('username')" class="text-red text-xs italic" v-text="errors.first('username')"></p>
            </div>

            <div class="mb-4">
              <label class="font-bold text-grey-darker block mb-2">Password</label>
              <input type="password" v-model="password" name="password" v-validate="'required'" :class="['block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow', errors.has('password') ? 'border-red mb-3' : '']" placeholder="Your Password">
              <p v-if="errors.has('password')" class="text-red text-xs italic" v-text="errors.first('password')"></p>
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
      password: null
    }
  },
  methods: {
    async onSubmit () {
      this.$validator.validateAll().then((result) => {
        if (!result) return

        const { data } = this.$axios.post('/auth/register', this.$data).then(() => {
          this.$router.replace({ path: '/', query: 'loggedIn' })
        }).catch(({ response }) => {
          if (response.status === 422) {
            // this.errors = response.data
          }
        })
      })
    }
  }
}
</script>
