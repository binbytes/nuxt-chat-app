<template>
  <div class="chat-message clearfix">
    <textarea v-model="messageText" placeholder="Type your message" @keyup.enter="sendMessage" rows="3"></textarea>

    <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
    <i class="fa fa-file-image-o"></i>

    <button @click="sendMessage" class="button button-primary">Send</button>
  </div>
</template>

<script>
export default {
  name: 'chat-new-message',
  data() {
    return {
      messageText: null
    }
  },
  methods: {
    sendMessage() {
      if (this.messageText !== null) {
        this.$emit('newMessage', this.messageText)
        this.messageText = null
      }
    }
  }
}
</script>
