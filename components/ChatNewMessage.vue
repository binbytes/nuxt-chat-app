<template>
  <div class="border-t align-bottom p-3 w-full absolute pin-b pin-l">
    <textarea class="input-control resize-none mb-2" v-model="messageText" placeholder="Type your message" @keyup.enter="sendMessage"></textarea>

    <button @click="sendMessage" class="btn btn-blue pull-right">Send</button>
  </div>
</template>

<script>
export default {
  name: 'chat-new-message',
  data () {
    return {
      messageText: null
    }
  },
  methods: {
    sendMessage () {
      if (this.messageText !== null) {
        this.$emit('newMessage', this.messageText)
        this.messageText = null
      }
    }
  }
}
</script>
