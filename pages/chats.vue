<template>
  <section class="container">
    <div class="row">
      <aside class="column column-25 users-list">
        Users List
      </aside>
      <div class="column column-75 chat-section">
        Chat View
      </div>
    </div>
  </section>
</template>

<script>
// Curerntly we will not put logic, just bulit layout first
export default {
  name: 'chat-view',
  data() {
    return {
      users: []
    }
  }
}
</script>
