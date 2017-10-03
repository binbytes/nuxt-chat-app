<template>
  <div class="chat" v-if="recipientUser">
    <div class="chat-header clearfix">
      <img :src="recipientUser.avatar" alt="avatar" class="user-avatar" />

      <div class="chat-about">
        <div class="chat-with">Chat with
          <span v-text="recipientUser.name"></span>
        </div>
      </div>
      <i class="fa fa-star"></i>
    </div>
    <!-- end chat-header -->

    <div class="chat-history" v-scroll-bottom>
      <ul>
        <template v-for="message in messages">
          <chat-message :me="me" :recipientUser="recipientUser" :message="message" :key="message.id"></chat-message>
        </template>
      </ul>
    </div>

    <chat-new-message v-on:newMessage="pushMessage"></chat-new-message>
  </div>
  <div v-else>
    <h3 class="info">Please select to start conversation</h3>
  </div>
</template>

<script>
import ChatNewMessage from './ChatNewMessage'
import ChatMessage from './ChatMessage'
import Socket from '@/plugins/socket.io'

export default {
  name: 'chat',
  props: [
    'me', 'recipientUser', 'conversationId'
  ],
  components: {
    ChatNewMessage,
    ChatMessage
  },
  watch: {
    conversationId() {

      Socket.emit('enter-conversation', this.conversationId)

      this.fetchMessages()
    }
  },
  computed: {
    endpoint() {
      return `send-message/${this.conversationId}`
    }
  },
  beforeMount() {
    Socket.on('new-message', (message) => {
      console.log('got new message', message)
      this.messages.push(message)
    })
  },
  data() {
    return {
      messages: []
    }
  },
  mount() {
    this.fetchMessages()
  },
  methods: {
    async fetchMessages() {
      // get conversation messages
      const { data } = await this.$axios.get(`conversation\\${this.conversationId}`)

      this.messages = data
    },
    pushMessage(message) {
      this.$axios.post(this.endpoint, {
        body: message
      })
        .then((res) => {
          this.messages.push(res.data)
          Socket.emit('send-message', res.data)
        })
    }
  },
  directives: {
    scrollBottom: {
      componentUpdated(el) {
        el.scrollTop = el.scrollHeight
      }
    }
  }
}
</script>

<style lang="stylus">
$chat-bg = #ffffff
$box-border = rgba(74, 70, 70, 0.08)
$text-color = #434651
$offline-color = #e38968
$star-color = #d8dadf
$message-time = #a8aab1
$green-color = #86bb71
$blue-color = #94c2ed

.chat
  background $chat-bg
  border-top-right-radius 5px
  border-bottom-right-radius 5px
  color $text-color

  .chat-header
    padding 20px
    border-bottom 2px solid $box-border

    img
      float left
      border-radius 50%

    .chat-about
      float left
      padding-left 10px
      margin-top 6px

    .chat-with
      font-weight 700
      font-size 16px

    .fa-star
      float right
      color $star-color
      font-size 20px
      margin-top 12px

  .chat-history
    padding 30px 30px 20px
    border-bottom 2px solid $box-border
    overflow-y scroll
    height 600px

    li
      .message-data
        margin-bottom 15px
        .fa-circle
          margin-right 3px
          font-size 10px

      .message-data-time
        color $message-time
        padding-left 6px
        margin-right 6px

      .message-data-name
        margin-right 7px

      .message
        color white
        padding 18px 20px
        line-height 26px
        font-size 16px
        border-radius 7px
        margin-bottom 30px
        position relative
        width 90%

        &:after
          bottom 100%
          left 7%
          border solid transparent
          content " "
          height 0
          width 0
          position absolute
          pointer-events none
          border-bottom-color $green-color
          border-width 10px
          margin-left -10px

      &.my-message
        text-align right
        .fa-circle
          color $blue-color
        .message
          float right
          background $blue-color
          &:after
            left: 97%;
            border-bottom-color $blue-color

      &.other-message
        .fa-circle
          color $green-color
        .message
          background $green-color

  .chat-message
    padding 30px

    textarea
      width 100%
      border none
      padding 10px 20px
      margin-bottom 10px
      border-radius 5px
      resize none
      background $box-border

    button
      float right
      color #ffffff
      font-size 16px
      text-transform uppercase
      border none
      cursor pointer
      font-weight 700
      background $blue-color

.chat .chat-message .fa-file-image-o
.chat .chat-message .fa-file-o
  font-size 16px
  color gray
  cursor pointer

.me
  color $blue-color
</style>
