<template>
  <div class="chat-message clearfix">
    <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"></textarea>

    <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
    <i class="fa fa-file-image-o"></i>

    <button class="button button-primary">Send</button>
  </div>
</template>

<script>
export default {
  name: 'chat-new-message'
}
</script>
