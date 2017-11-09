<template>
  <div class="people-list" id="people-list">
    <div class="search">
      <input type="text" placeholder="search" />
      <i class="fa fa-search"></i>
    </div>

    <ul class="list list-reset">
      <li :class="['clearfix', recipientUserID === user.id ? 'active' : '']" v-for="user in users" :key="user.id" @click="selectUserForConversation(user.id)">
        <img :src="user.avatar" alt="avatar" />
        <div class="about">
          <div class="name" v-text="user.name"></div>
          <div class="status">
            <!-- Let it be for now -->
            <i :class="['fa', 'fa-circle', user.online ? 'online' : 'offline']"></i>
            {{ user.online ? 'online' : 'offline' }}
          </div>
        </div>
      </li>
    </ul>
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

<style lang="stylus" scoped>
$chat-panel-bg = #444753;
$active-bg-color = rgba(162, 162, 162, 0.26);
$status-text-color = #92959E;

.people-list {
  background: $chat-panel-bg;
  width: 260px;
  float: left;

  .search {
    padding: 20px;

    input {
      width: 90%;
    }
  }

  .fa-search {
    position: relative;
    left: -25px;
    color: #ffffff;
  }

  ul {
    height: 770px;
    overflow-y: auto;

    li {
      padding-bottom: 20px;
      padding: 10px;
      cursor: pointer;

      &.active {
        background: $active-bg-color;
      }
    }
  }

  img {
    float: left;
    border-radius: 50%;
  }

  .about {
    float: left;
    margin-top: 8px;
    padding-left: 8px;
  }

  .name {
    color: white;
  }

  .status {
    color: $status-text-color;
  }

  input {
    border-radius: 3px;
    border: none;
    padding: 14px;
    color: white;
    background: #6A6C75;
    width: 90%;
    font-size: 14px;
  }
}
</style>
