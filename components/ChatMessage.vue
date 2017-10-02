<template>
  <li :class="['clearfix', message.author !== me.id ? 'other-message' : 'my-message']">
    <div class="message-data">
      <div v-if="message.author === me.id">
        <span class="message-data-time" v-text="message.createdAt"></span>
        <span class="message-data-name" v-text="me.name"></span>
        <i class="fa fa-circle"></i>
      </div>
      <div v-else>
        <i class="fa fa-circle"></i>
        <span class="message-data-name" v-text="recipientUser.name"></span>
        <span class="message-data-time" v-text="message.createdAt"></span>
      </div>
    </div>
    <div class="message" v-text="message.body"></div>
  </li>
</template>

<script>
export default {
  props: [
    'me', 'message', 'recipientUser'
  ]
}
</script>
