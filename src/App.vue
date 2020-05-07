<template>
  <div id="app">
    <div style="width:20px;height:20px;margin:0 auto" class="b"></div>
    <vue-page-stack>
       <router-view></router-view>
    </vue-page-stack>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted(){
     let UIStack = this.$pageStack.getStack();
     window.st = UIStack;
     console.log(UIStack)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
    @include border();

}
.b{
    @include border();
}
</style>
