<template>
  <div class="chat border rounded bg-white relative">
    <template v-if="recipient">
      <div class="chat-header flex items-center text-xs border-b p-2 absolute pin-t pin-l w-full">
        <div class="mr-2">
          <avatar :fullname="recipient.name"></avatar>
        </div>

        <div class="chat-about text-lg">
          <div class="chat-with">Chat with
            <span class="text-green-dark" v-text="recipient.name"></span>
          </div>
        </div>
      </div>
      <!-- end chat-header -->

      <div class="app-height w-full absolute pin-t" v-bar>
        <div class="chat-history mt-2 p-4" v-scroll-bottom>
          <template v-for="message in messages">
            <chat-message :me="me" :recipientUser="recipient" :message="message" :key="message.id"></chat-message>
          </template>
        </div>

        <chat-new-message v-on:newMessage="pushMessage"></chat-new-message>
      </div>
    </template>

    <h3 class="h-full flex justify-center items-center bg-white" v-else>Please select to start conversation</h3>
  </div>
</template>

<script>
import ChatNewMessage from './ChatNewMessage'
import ChatMessage from './ChatMessage'
import { mapGetters } from 'vuex'
import Avatar from 'vue-avatar-component'

export default {
  name: 'chat',
  components: {
    ChatNewMessage,
    ChatMessage,
    Avatar
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
      return this.$auth.user
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
