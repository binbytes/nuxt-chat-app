<template>
  <div class="chat h-full" v-if="recipient">
    <div class="chat-header flex items-center text-xs border-b p-2">
      <img src="/user-avatar.png" alt="avatar" class="rounded-full h-15 w-15 mr-2" />

      <div class="chat-about text-lg">
        <div class="chat-with">Chat with
          <span class="text-green-dark" v-text="recipient.name"></span>
        </div>
      </div>
    </div>
    <!-- end chat-header -->

    <div class="chat-history mt-2 p-5 h-screen overflow-x-scroll" v-scroll-bottom>
      <template v-for="message in messages">
        <chat-message :me="me" :recipientUser="recipient" :message="message" :key="message.id"></chat-message>
      </template>
    </div>

    <chat-new-message v-on:newMessage="pushMessage"></chat-new-message>
  </div>

  <div class="h-screen" v-else>
    <h3 class="h-full flex justify-center items-center">Please select to start conversation</h3>
  </div>
</template>

<script>
import ChatNewMessage from './ChatNewMessage'
import ChatMessage from './ChatMessage'
import { mapGetters } from 'vuex'

export default {
  name: 'chat',
  components: {
    ChatNewMessage,
    ChatMessage
  },
  computed: {
    ...mapGetters({
      conversation: 'currentConversation',
      recipient: 'recipientUser'
    }),
    conversationId () {
      return this.conversation ? this.conversation._id : null
    },
    messages () {
      return this.conversation ? this.conversation.messages : []
    },
    me () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    pushMessage (message) {
      this.$store.dispatch('sendMessage', message)
    }
  },
  directives: {
    scrollBottom: {
      componentUpdated (el) {
        el.scrollTop = el.scrollHeight
      }
    }
  }
}
</script>
