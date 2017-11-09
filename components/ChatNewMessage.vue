<template>
  <div class="border-t align-bottom pt-3 pb-3 pin-b pin-l w-full">
    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker no-resize mb-2" v-model="messageText" placeholder="Type your message" @keyup.enter="sendMessage"></textarea>

    <button @click="sendMessage" class="btn btn-blue">Send</button>
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
