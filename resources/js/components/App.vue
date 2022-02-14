<script>
export default {
  name: 'App',
}
</script>

<template>
  <hr />
  <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
  <hr />
  <router-view></router-view>
</template>