<template>
  <div class="chat-page">

    <div class="container">
      <div class="clearfix">
        <button @click="doLogout" class="button button-clear">Logout</button>
        <h5 class="float-right">
          Welcome {{ me.name }}
        </h5>
      </div>

      <div class="row">
        <div class="column column-25">
          <user-list :users="users" :conversationUserId.sync="conversationUserId"></user-list>
        </div>

        <div class="column coversation-section column-75">

          <chat v-if="conversationUser" :me="me" :conversationUser="conversationUser"></chat>

          <div v-else>
            <h3 class="info">Please select to start conversation</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Curerntly we will not put logic, just bulit layout first
import UserList from '@/components/UserList'
import Chat from '@/components/Chat'

export default {
  name: 'chat-view',
  middleware: 'auth',
  components: {
    UserList,
    Chat
  },
  computed: {
    conversationUser() {
      return this.conversationUserId ? this.users.find(u => u.id === this.conversationUserId) : null
    }
  },
  async asyncData({ app }) {
    const users = await app.$axios.$get('/api/users')

    return {users}
  },
  data() {
    return {
      conversationUserId: null,
      me: this.$store.state.authUser
    }
  },
  methods: {
    async doLogout() {
      await this.$store.dispatch('logout')

      this.$router.replace({ path: '/login' })
    }
  }
}
</script>

<style lang="stylus">
$green-color = #86bb71
$offline-color = #e38968

.online
  color $green-color

.offline
  color $offline-color

.me
.offline
.online
  margin-right 3px
  font-size 10px

.chat-page
  padding: 40px 0;
  .coversation-section
    background white
  h3.info
    color black
    text-align center
    margin-top 20%
ul
  list-style none
</style>
