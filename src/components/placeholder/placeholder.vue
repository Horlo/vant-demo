<template>
  <div v-if="state!=-1">
    <!-- 加载中 -->
    <div
      class="elian-loading"
      v-if="state == 0"
    >
      <div class="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
    <!-- 暂无数据 -->
    <div class="empty">

    </div>
    <!-- 网络错误 -->
    <div class="error">

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
  }
};
</script>
<style lang="scss" scoped>
.elian-loading {
  .loader {
    position: absolute;
    top: 50%;
    left: 40%;
    margin-left: 10%;
    transform: translate3d(-50%, -50%, 0);
  }
  .dot {
    width: 32px;
    height: 32px;
    background: #3ac;
    border-radius: 100%;
    display: inline-block;
    animation: slide 1s infinite;
    &:nth-child(1) {
        animation-delay: 0.1s;
        background: #32aacc;
    }
    &:nth-child(2) {
        animation-delay: 0.2s;
        background: #64aacc;
    }
    &:nth-child(3) {
        animation-delay: 0.3s;
        background: #96aacc;
    }
    &:nth-child(4) {
        animation-delay: 0.4s;
        background: #c8aacc;
    }
    &:nth-child(5) {
        animation-delay: 0.5s;
        background: #faaacc;
    }
  }
}
@keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
</style>