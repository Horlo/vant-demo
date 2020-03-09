<template>
  <div id="app">
    <vue-page-stack>
       <router-view></router-view>
    </vue-page-stack>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
