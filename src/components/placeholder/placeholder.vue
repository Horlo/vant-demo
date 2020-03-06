<template>
  <div
    class="elian-placeholder"
    ref="content"
    v-if="state!=-1"
  >
    <div
      :style="{top:`${top}px`}"
      style="position:fixed;left:0;right:0;bottom:0;z-index:10"
    >
      <!-- 加载中 -->
      <div
        class="elian-loading"
        v-if="state == 0"
      >
        this is loading
      </div>
      <!-- 暂无数据 -->
      <div
        class="empty"
        v-if="state == 1"
      >

      </div>
      <!-- 网络错误 -->
      <div
        class="error"
        v-if="state == 2"
      >

      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    state: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      top: 0
    };
  },
  mounted() {
    const el = this.$refs["content"];
    const { top } = el.getBoundingClientRect();
    this.top = top;

  },

};
</script>
<style lang="scss" scoped>
.elian-placeholder {

}
</style>