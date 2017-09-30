<template>
  <div class="chat-history">
    <ul>
      <template v-for="message in messages">
        <chat-message :me="me" message="message" :key="message.id"></chat-message>
      </template>
    </ul>
  </div>
</template>

<script>
import ChatMessage from './ChatMessage'

export default {
  name: 'chat-history',
  components: {
    ChatMessage
  },
  props: [
    'me'
  ]
}
</script>
