<template>
    <div>this is index</div>
</template>
<script>
export default {
  name:'index',
  data() {
    return {
    }
  },
  mounted(){
    // let UIStack = this.$pageStack.getStack();
    // window.st = UIStack;
    // console.log(UIStack);
    // window.x = this;
    this.$router.back({
      path:'/list'
    })
  }
}
</script>
<style lang="scss">
    
</style>