<template>
  <div class="chat-page">

    <div class="container clearfix">
      <div>
        <button @click="doLogout" class="button button-clear">Logout</button>
      </div>

      <div class="row">

        <div class="column column-25">
          <user-list :users="users"></user-list>
        </div>

        <div class="chat column column-75">
          <div class="chat-header clearfix">
            <img src="http://lorempixel.com/55/55/people/1/" alt="avatar" />

            <div class="chat-about">
              <div class="chat-with">Chat with
                <span>Username Here</span>
              </div>
              <!-- <div class="chat-num-messages">already 1 902 messages</div> -->
            </div>
            <i class="fa fa-star"></i>
          </div>
          <!-- end chat-header -->

          <div class="chat-history">
            <ul>
              <li :class="['clearfix', message.sender !== me.id ? 'other-message' : 'my-message']" v-for="message in messages" :key="message.id">
                <div class="message-data">
                  <div v-if="message.sender === me.id">
                    <span class="message-data-time" v-text="message.datetime"></span>
                    <span class="message-data-name">Olia</span>
                    <i class="fa fa-circle"></i>
                  </div>
                  <div v-else>
                    <i class="fa fa-circle"></i>
                    <span class="message-data-name">Olia</span>
                    <span class="message-data-time" v-text="message.datetime"></span>
                  </div>
                </div>
                <div class="message" v-text="message.text"></div>
              </li>

              <li class="clearfix">
                <div class="message-data">
                  <span class="message-data-name">
                    <i class="fa fa-circle online"></i> Username</span>
                  <span class="message-data-time">Current Time</span>
                </div>
                <i class="fa fa-circle online"></i>
                <i class="fa fa-circle online" style="color: #AED2A6"></i>
                <i class="fa fa-circle online" style="color: #DAE9DA"></i>
              </li>
            </ul>
          </div>
          <!-- end chat-history -->

          <div class="chat-message clearfix">
            <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"></textarea>

            <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
            <i class="fa fa-file-image-o"></i>

            <button class="button button-primary">Send</button>

          </div>
          <!-- end chat-message -->

        </div>
        <!-- end chat -->
      </div>
    </div>
  </div>
</template>

<script>
// Curerntly we will not put logic, just bulit layout first
import UserList from '@/components/UserList'

export default {
  name: 'chat-view',
  middleware: 'auth',
  components: {
    UserList
  },
  data() {
    return {
      me: {
        id: 8,
        name: 'Nik Bennett',
        avatar: 'http://lorempixel.com/55/55/people/8/'
      },
      users: [
        { id: 1, name: 'Joan Pearson', avatar: 'http://lorempixel.com/55/55/people/1/' },
        { id: 2, name: 'Ruth Kelly', avatar: 'http://lorempixel.com/55/55/people/2/' },
        { id: 3, name: 'Dennis Bennett', avatar: 'http://lorempixel.com/55/55/people/3/' },
        { id: 4, name: 'Julia Munoz', avatar: 'http://lorempixel.com/55/55/people/4/' },
        { id: 5, name: 'David Walker', avatar: 'http://lorempixel.com/55/55/people/5/' },
        { id: 6, name: 'Aaron Gutierrez', avatar: 'http://lorempixel.com/55/55/people/6/' },
        { id: 7, name: 'Margaret Pearson', avatar: 'http://lorempixel.com/55/55/people/7/' }
      ],
      messages: [
        { id: 111, text: 'Hi, how are you? How is the project coming along?', 'sender': 1, datetime: '10:12 AM' },
        { id: 112, text: 'Are we meeting today? Project has been already finished and I have results to show you.', 'sender': 8, datetime: '10:14 AM' },
        { id: 113, text: 'Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?', 'sender': 1, datetime: '10:15 AM' },
        { id: 114, text: 'Actually everything was fine. I\'m very excited to show this to our team.', 'sender': 8, datetime: '10:16 AM' }
      ]
    }
  },
  methods: {
    doLogout({redirect}) {
      this.$store.dispatch('logout')

      this.$router.replace({ path: '/login' })
    }
  }
}
</script>

<style lang="stylus">
$chat-bg = #ffffff
$box-border = rgba(74, 70, 70, 0.08)
$text-color = #434651
$offline-color = #e38968
$star-color = #d8dadf
$message-time = #a8aab1
$green-color = #86bb71
$blue-color = #94c2ed

.chat-page
  background: #C5DDEB;
  color: white;
  padding: 40px 0;
ul
  list-style none

.chat
  width 490px
  background $chat-bg
  border-top-right-radius 5px
  border-bottom-right-radius 5px
  color $text-color

  .chat-header
    padding 20px
    border-bottom 2px solid $box-border

    img
      float left

    .chat-about
      float left
      padding-left 10px
      margin-top 6px

    .chat-with
      font-weight 700
      font-size 16px

    .fa-star
      float right
      color $star-color
      font-size 20px
      margin-top 12px

  .chat-history
    padding 30px 30px 20px
    border-bottom 2px solid $box-border
    overflow-y scroll
    height 575px

    li
      .message-data
        margin-bottom 15px
        .fa-circle
          margin-right 3px
          font-size 10px

      .message-data-time
        color $message-time
        padding-left 6px
        margin-right 6px

      .message-data-name
        margin-right 7px

      .message
        color white
        padding 18px 20px
        line-height 26px
        font-size 16px
        border-radius 7px
        margin-bottom 30px
        position relative
        width 90%

        &:after
          bottom 100%
          left 7%
          border solid transparent
          content " "
          height 0
          width 0
          position absolute
          pointer-events none
          border-bottom-color $green-color
          border-width 10px
          margin-left -10px

      &.my-message
        text-align right
        .fa-circle
          color $blue-color
        .message
          float right
          background $blue-color
          &:after
            left: 97%;
            border-bottom-color $blue-color

      &.other-message
        .fa-circle
          color $green-color
        .message
          background $green-color

  .chat-message
    padding 30px

    textarea
      width 100%
      border none
      padding 10px 20px
      margin-bottom 10px
      border-radius 5px
      resize none
      background $box-border

    button
      float right
      color #ffffff
      font-size 16px
      text-transform uppercase
      border none
      cursor pointer
      font-weight 700
      background $blue-color

.chat .chat-message .fa-file-image-o
.chat .chat-message .fa-file-o
  font-size 16px
  color gray
  cursor pointer

.me
.offline
.online
  margin-right 3px
  font-size 10px

.online
  color $green-color

.offline
  color $offline-color

.me
  color $blue-color
</style>
