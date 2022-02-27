<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  data() {
    return {
      data: [],
    }
  },
  mounted() {
    this.$http
      .get('/about')
      .then((response) => {
        this.data = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
})
</script>
<template>
  <h1 class="title">About</h1>
  {{ data }}
</template>
