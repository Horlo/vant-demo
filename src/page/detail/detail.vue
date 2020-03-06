<template>
  <div
    v-html="content"
    v-lazy-container="{ selector: 'img' }"
    @click="handleClick($event)"
    ref="content"
  >

  </div>
</template>
<script>
import { ImagePreview } from "vant";
export default {
  data() {
    return {
      content: ""
    };
  },
  mounted() {
    this.addHtml();
  },
  methods: {
    async addHtml() {
      let htmlStr =
        '<img data-src="https://img.yzcdn.cn/vant/apple-1.jpg"/><img data-src="https://img.yzcdn.cn/vant/apple-2.jpg"/>';
      this.content = htmlStr;
    },
    handleClick(e) {
      const el = e.target;
      if (el.tagName != "IMG") return;
      const images = [];
      let startPosition = 0; // eslint-disable-line no-unused-vars
      const nodeList = this.$refs["content"].getElementsByTagName("img");
      [].forEach.call(nodeList, (item, index) => {
        images.push(item.dataset.src);
        if (el == item) {
          startPosition = index;
        }
      });
      ImagePreview({
        images,
        startPosition
      });
    }
  }
};
</script>
<style lang="scss">
img {
  width: 500px;
  height: 500px;
}
</style>