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
          <user-list :users="users" :recipientUserId.sync="recipientUserId"></user-list>
        </div>

        <div class="column coversation-section column-75">
          <chat :me="me" :conversationId="conversationId" :recipientUser="recipientUser"></chat>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Curerntly we will not put logic, just bulit layout first
import UserList from '@/components/UserList'
import Chat from '@/components/Chat'
import Socket from '@/plugins/socket.io'

export default {
  name: 'chat-view',
  middleware: 'auth',
  components: {
    UserList,
    Chat
  },
  computed: {
    recipientUser() {
      return this.recipientUserId ? this.users.find(u => u.id === this.recipientUserId) : null
    }
  },
  watch: {
    recipientUserId() {
      this.fetchOrConversation()
    }
  },
  async asyncData({ app }) {
    const users = await app.$axios.$get('users')
    const { data } = await app.$axios.get('conversations')

    return { users, conversations: data }
  },
  data() {
    return {
      recipientUserId: null,
      conversationId: null,
      me: this.$store.state.auth.user,
    }
  },
  methods: {
    async doLogout() {
      await this.$store.dispatch('auth/logout')

      this.$router.replace({ path: '/login' })
    },
    async fetchOrConversation() {
      let conversation = this.conversations.find(x => x.participants && x.participants.includes(this.recipientUserId))

      if (!conversation) {
        //
        const { conversationId } = await this.$axios.$post(`conversation`, {
          recipient: this.recipientUserId
        })

        conversation = {
          _id: conversationId
        }

        this.conversations.push(conversation)
      }

      this.conversationId = conversation._id
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
