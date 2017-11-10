<template>
  <div :class="['clearfix mb-4 block', message.author === me.id ? 'text-right' : '']">
    <div :class="['p-2 inline-block border rounded', message.author !== me.id ? 'bg-blue-lightest' : 'bg-grey-light']">
      <p class="text-lg pb-2" v-text="message.body"></p>
      <small class="text-grey-dark">
        {{ message.createdAt | formatDate }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'me', 'message', 'recipientUser'
  ]
}
</script>
