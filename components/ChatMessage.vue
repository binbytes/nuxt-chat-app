<template>
  <div :class="['clearfix p-2 mb-4 border', message.author !== me.id ? 'bg-blue-lightest' : 'text-right bg-grey-light']">
    <p class="text-lg pb-2" v-text="message.body"></p>
    <small class="text-grey-dark" v-text="message.createdAt"></small>
  </div>
</template>

<script>
export default {
  props: [
    'me', 'message', 'recipientUser'
  ]
}
</script>
