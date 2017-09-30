<template>
  <div class="chat-history">
    <ul>
      <template v-for="message in messages">
        <chat-message :me="me" :message="message" :key="message.id"></chat-message>
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
    'me', 'conversationUser'
  ],
  data() {
    return {
      messages: [
        { id: 111, text: 'Hi, how are you? How is the project coming along?', 'sender': 1, datetime: '10:12 AM' },
        { id: 112, text: 'Are we meeting today? Project has been already finished and I have results to show you.', 'sender': 8, datetime: '10:14 AM' },
        { id: 113, text: 'Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?', 'sender': 1, datetime: '10:15 AM' },
        { id: 114, text: 'Actually everything was fine. I\'m very excited to show this to our team.', 'sender': 8, datetime: '10:16 AM' }
      ]
    }
  }
}
</script>
