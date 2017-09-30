<template>
  <li :class="['clearfix', message.sender !== me.id ? 'other-message' : 'my-message']">
    <div class="message-data">
      <div v-if="message.sender === me.id">
        <span class="message-data-time" v-text="message.datetime"></span>
        <span class="message-data-name" v-text="me.name"></span>
        <i class="fa fa-circle"></i>
      </div>
      <div v-else>
        <i class="fa fa-circle"></i>
        <span class="message-data-name" v-text="conversationUser.name"></span>
        <span class="message-data-time" v-text="message.datetime"></span>
      </div>
    </div>
    <div class="message" v-text="message.text"></div>
  </li>
</template>

<script>
export default {
  props: [
    'me', 'message', 'conversationUser'
  ]
}
</script>
