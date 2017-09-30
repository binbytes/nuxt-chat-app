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
  data() {
    return {
      conversationUserId: null,
      me: this.$store.state.user,
      users: [
        { id: 1, name: 'Joan Pearson', avatar: 'http://lorempixel.com/55/55/people/1/' },
        { id: 2, name: 'Ruth Kelly', avatar: 'http://lorempixel.com/55/55/people/2/' },
        { id: 3, name: 'Dennis Bennett', avatar: 'http://lorempixel.com/55/55/people/3/' },
        { id: 4, name: 'Julia Munoz', avatar: 'http://lorempixel.com/55/55/people/4/' },
        { id: 5, name: 'David Walker', avatar: 'http://lorempixel.com/55/55/people/5/' },
        { id: 6, name: 'Aaron Gutierrez', avatar: 'http://lorempixel.com/55/55/people/6/' },
        { id: 7, name: 'Margaret Pearson', avatar: 'http://lorempixel.com/55/55/people/7/' }
      ]
    }
  },
  methods: {
    doLogout({redirect}) {
      this.$store.dispatch('logout')

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
