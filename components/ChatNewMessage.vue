<template>
  <div class="chat-message clearfix">
    <textarea v-model="messageText" placeholder="Type your message" @keyup.enter="sendMessage" rows="3"></textarea>

    <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
    <i class="fa fa-file-image-o"></i>

    <button @click="sendMessage" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">Send</button>
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
