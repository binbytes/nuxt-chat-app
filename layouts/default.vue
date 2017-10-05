<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  name: 'default-layout'
}
</script>

<style>
body {
  font: 14px/20px "Lato", Arial, sans-serif;
  margin: 0;
  background: #C5DDEB;
}

.auth-page {
  margin-top: 50px;
}

.auth-page form {
  background: white;
  padding: 25px;
  border-radius: 10px;
}

.auth-page input.has-error {
  border-color: red;
}

.auth-page .error-box {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
  padding: 15px;
  margin-bottom: 15px;
}
</style>
