<template>
  <div class="border rounded bg-white">
    <div class="search p-3 border-b">
      <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="search" />
    </div>

    <div class="users">
      <div :class="['flex items-center text-xs text-dark-softner border-b p-2', recipientUserID === user.id ? 'bg-grey-light' : '']" v-for="user in users" :key="user.id" @click="selectUserForConversation(user.id)">
        <img src="/user-avatar.png" alt="avatar" class="rounded-full h-10 w-10" />
        <div class="about py-2 ml-2">
          <div class="name pb-2" v-text="user.name"></div>
          <div class="status">
            <i :class="['fa', 'fa-circle', user.online ? 'online' : 'offline']"></i>
            {{ user.online ? 'online' : 'offline' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-list',
  computed: {
    users () {
      return this.$store.state.users
    },
    recipientUserID () {
      return this.$store.state.recipientUserID
    }
  },
  methods: {
    selectUserForConversation (recipientUserID) {
      this.$store.dispatch('switchConversation', recipientUserID)
    }
  }
}
</script>
