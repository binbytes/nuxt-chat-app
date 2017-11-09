<template>
  <div class="border rounded bg-white">
    <div class="search p-3 border-b">
      <input type="text" v-model="filterText" class="input-control" placeholder="Search" />
    </div>

    <div class="users app-height" v-bar>
      <div>
        <div :class="['flex items-center cursor-pointer text-sm text-dark-softner border-b p-2', recipientUserID === user.id ? 'bg-grey-light' : '']" v-for="user in filteredUsers" :key="user.id" @click="selectUserForConversation(user.id)">
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
  </div>
</template>

<script>
const filtered = (rawObject, searchText) => {
  Object.keys(rawObject).reduce(function (r, e) {
    console.log(rawObject[e]['username'])
    if (rawObject[e]['username'] == 'nik') {
      console.log('yes', rawObject[e])
      r[e] = rawObject[e]
    }
    return r;
  }, {})
}

export default {
  name: 'user-list',
  data () {
    return {
      filterText: ''
    }
  },
  computed: {
    filteredUsers () {
      return this.filterText === ''
        ? this.users
        : Object.keys(this.users).reduce(this.filterByUsername, {})
    },
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
    },
    filterByUsername (obj, key) {
      if (this.users[key]['name'].includes(this.filterText)) {
        obj[key] = this.users[key]
      }

      return obj
    }
  }
}
</script>
