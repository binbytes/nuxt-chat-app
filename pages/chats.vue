<template>
  <div class="container clearfix">
    <div class="row">
      <div class="people-list column column-25" id="people-list">
        <div class="search">
          <input type="text" placeholder="search" />
          <i class="fa fa-search"></i>
        </div>

        <ul class="list">
          <li class="clearfix">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
            <div class="about">
              <div class="name">Vincent Porter</div>
              <div class="status">
                <i class="fa fa-circle online"></i> online
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="chat column column-75">
        <div class="chat-header clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />

          <div class="chat-about">
            <div class="chat-with">Chat with Vincent Porter</div>
            <div class="chat-num-messages">already 1 902 messages</div>
          </div>
          <i class="fa fa-star"></i>
        </div>
        <!-- end chat-header -->

        <div class="chat-history">
          <ul>
            <li class="clearfix">
              <div class="message-data align-right">
                <span class="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp;
                <span class="message-data-name">Olia</span>
                <i class="fa fa-circle me"></i>

              </div>
              <div class="message other-message float-right">
                Hi Vincent, how are you? How is the project coming along?
              </div>
            </li>

            <li>
              <div class="message-data">
                <span class="message-data-name">
                  <i class="fa fa-circle online"></i> Vincent</span>
                <span class="message-data-time">10:12 AM, Today</span>
              </div>
              <div class="message my-message">
                Are we meeting today? Project has been already finished and I have results to show you.
              </div>
            </li>

            <li class="clearfix">
              <div class="message-data align-right">
                <span class="message-data-time">10:14 AM, Today</span> &nbsp; &nbsp;
                <span class="message-data-name">Olia</span>
                <i class="fa fa-circle me"></i>

              </div>
              <div class="message other-message float-right">
                Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?
              </div>
            </li>

            <li>
              <div class="message-data">
                <span class="message-data-name">
                  <i class="fa fa-circle online"></i> Vincent</span>
                <span class="message-data-time">10:20 AM, Today</span>
              </div>
              <div class="message my-message">
                Actually everything was fine. I'm very excited to show this to our team.
              </div>
            </li>

            <li>
              <div class="message-data">
                <span class="message-data-name">
                  <i class="fa fa-circle online"></i> Vincent</span>
                <span class="message-data-time">10:31 AM, Today</span>
              </div>
              <i class="fa fa-circle online"></i>
              <i class="fa fa-circle online" style="color: #AED2A6"></i>
              <i class="fa fa-circle online" style="color:#DAE9DA"></i>
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
</template>

<script>
// Curerntly we will not put logic, just bulit layout first
export default {
  name: 'chat-view',
  data() {
    return {
      users: [
        { id: 1, name: 'Joan Pearson' },
        { id: 2, name: 'Ruth Kelly' },
        { id: 3, name: 'Dennis Bennett' },
        { id: 4, name: 'Julia Munoz' },
        { id: 5, name: 'David Walker' },
        { id: 6, name: 'Aaron Gutierrez' },
        { id: 7, name: 'Margaret Pearson' },
        { id: 8, name: 'Carolyn Reynolds' }
      ]
    }
  }
}
</script>

<style lang="stylus">
$color-1 = #444753
$color-2 = #6a6c75
$color-3 = #92959e
$color-4 = #f2f5f8
$color-5 = #4a4a4a
$color-6 = #d8dadf
$color-7 = #a8aab1
$color-8 = #86bb71
$color-9 = #94c2ed
$color-10 = #fff
$color-11 = #000
$color-12 = #e38968

ul
    list-style none

.people-list
    background $color-1
    width 260px
    float left

    .search
        padding 20px

    input
        border-radius 3px
        border none
        padding 14px
        color white
        background $color-2
        width 90%
        font-size 14px

    .fa-search
        position relative
        left -25px
        color white

    ul
        height 770px
        overflow-y auto

        li
            padding-bottom 20px

    img
        float left

    .about
        float left
        margin-top 8px
        padding-left 8px

    .status
        color $color-3

.chat
    width 490px
    background $color-4
    border-top-right-radius 5px
    border-bottom-right-radius 5px
    color $color-5

    .chat-header
        padding 20px
        border-bottom 2px solid white

        img
            float left

        .chat-about
            float left
            padding-left 10px
            margin-top 6px

        .chat-with
            font-weight bold
            font-size 16px

        .chat-num-messages
            color $color-3

        .fa-star
            float right
            color $color-6
            font-size 20px
            margin-top 12px

    .chat-history
        padding 30px 30px 20px
        border-bottom 2px solid white
        overflow-y scroll
        height 575px

        .message-data
            margin-bottom 15px

        .message-data-time
            color $color-7
            padding-left 6px

        .message
            color white
            padding 18px 20px
            line-height 26px
            font-size 16px
            border-radius 7px
            margin-bottom 30px
            width 90%
            position relative

            &:after
                bottom 100%
                left 7%
                border solid transparent
                content " "
                height 0
                width 0
                position absolute
                pointer-events none
                border-bottom-color $color-8
                border-width 10px
                margin-left -10px

        .my-message
            background $color-8

        .other-message
            background $color-9

            &:after
                border-bottom-color $color-9
                left 93%

    .chat-message
        padding 30px

        textarea
            width 100%
            border none
            padding 10px 20px
            margin-bottom 10px
            border-radius 5px
            resize none
            background white

        button
            float right
            color $color-10
            font-size 16px
            text-transform uppercase
            border none
            cursor pointer
            font-weight bold
            background $color-9

            &:hover
                color $color-11

.chat .chat-message .fa-file-o
.chat .chat-message .fa-file-image-o
    font-size 16px
    color gray
    cursor pointer

.online
.offline
.me
    margin-right 3px
    font-size 10px

.online
    color $color-8

.offline
    color $color-12

.me
    color $color-9

.align-left
    text-align left

.align-right
    text-align right

.float-right
    float right

.clearfix
  &:after
    visibility hidden
    display block
    font-size 0
    content " "
    clear both
    height 0
</style>
