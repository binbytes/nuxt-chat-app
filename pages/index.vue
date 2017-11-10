<template>
  <div class="chat-page container mx-auto mt-6 mb-6">
    <div class="flex flex-wrap items-end mb-4">
      <div class="flex-1 px-2" v-if="me">
        Welcome {{ me.name }}
      </div>
      <div class="flex-1 px-2 text-right">
        <button @click="doLogout" class="btn btn-blue">Logout</button>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full px-2 md:w-1/4">
        <user-list></user-list>
      </div>
      <div class="w-full px-2 md:w-3/4">
        <chat></chat>
      </div>
    </div>
  </div>
</template>

<script>
// Curerntly we will not put logic, just bulit layout first
import UserList from '@/components/UserList'
import Chat from '@/components/Chat'
import socket from '~/plugins/socket.io.js'

export default {
  name: 'chat-view',
  middleware: 'auth',
  components: {
    UserList,
    Chat
  },
  beforeMount () {
    this.$store.dispatch('actionAfterLoggedin')

    socket.on('online-users', (ids) => {
      if (ids) {
        this.$store.dispatch('setOnlineUsers', ids)
      }
    })

    socket.on('user-online', (id) => {
      if (id) {
        this.$store.dispatch('setOnline', id)
      }
    })

    socket.on('user-offline', (id) => {
      if (id) {
        this.$store.dispatch('setOffline', id)
      }
    })

    socket.on('new-message', (message) => {
      this.$store.dispatch('pushMessage', message)
    })
  },
  computed: {
    me () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    async doLogout () {
      await this.$store.dispatch('auth/logout')

      this.$router.replace({ path: '/login' })
    }
  }
}
</script>

<style lang="stylus">
$green-color = #86bb71;
$offline-color = #e38968;

.online {
  color: $green-color;
}

.offline {
  color: $offline-color;
}

.me, .offline, .online {
  margin-right: 3px;
  font-size: 10px;
}

.chat {
  box-sizing: border-box;
  height: calc(100vh - 90px);
  padding-bottom: 125px;

  .app-height {
    position: absolute !important;
    height: calc(100% - 97px);
    margin-top: 97px;
    padding-bottom: 75px;
  }

  .chat-history {
    height: calc(100% - 60px) !important;
  }
}
</style>
