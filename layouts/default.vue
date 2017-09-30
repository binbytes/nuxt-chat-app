<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  asyncData({store}) {
    return store.dispatch('fetch')
  }
}
</script>


<style>
  body {
    font: 14px/20px "Lato", Arial, sans-serif;
    margin: 0;
  }
</style>
