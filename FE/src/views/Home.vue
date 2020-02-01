<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Category msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Category from '@/components/Category.vue'

export default {
  name: 'home',
  components: {
    Category
  }
}
</script>
