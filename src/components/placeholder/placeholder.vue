<template>
  <div
    class="elian-placeholder"
    ref="content"
    v-if="state!=-1"
  >

    <!-- 加载中 -->
    <div
      class="elian-placeholder-loading"
      :style="{height:`${height}px`}"
      v-if="state == 0"
    >
     
    </div>
    <!-- 暂无数据 -->
    <div
      class="elian-placeholder-empty"
      :style="{height:`${height}px`}"
      v-if="state == 1"
    >
      <button @click="re">re</button>
    </div>
    <!-- 网络错误 -->
    <div
      class="elian-placeholder-error"
      :style="{height:`${height}px`}"
      v-if="state == 2"
    >
      <button @click="re">re</button>
    </div>

  </div>
</template>
<script>
import { getWindowHeight } from "@/util/dom/style.js";
import BindEventMixin from "@/mixins/bind-event.js";
export default {
  props: {
    state: {
      default: 0,
      type: Number
    }
  },
  mixins: [
    BindEventMixin(function(bind) {
      bind(window, "resize", this.resize);
    })
  ],
  data() {
    return {
      height: 0
    };
  },
  methods: {
    resize() {
      const el = this.$refs["content"];
      if (el) {
        const { bottom } = el.getBoundingClientRect();
        this.height = getWindowHeight() - bottom;
      }
    },
    re() {
      this.$emit("re");
    }
  },
  async mounted() {
    await this.$nextTick();
    this.resize();
  }
};
</script>
<style lang="scss" scoped>
.elian-placeholder {
  overflow: visible;
  height: 0px;
  position: relative;
}

.elian-placeholder-loading,
.elian-placeholder-empty,
.elian-placeholder-error {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: white;
}
</style>