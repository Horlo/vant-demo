<template>
  <div>
    <div
      v-html="content"
      v-lazy-container="{ selector: 'img' }"
      @click="handleClick($event)"
      ref="content"
    >
    </div>
    <van-image-preview
      v-model="show"
      :images="images"
      :start-position="startPosition"
      :close-on-popstate="true"
    >
    </van-image-preview>
    <button @click="goBack">click me</button>
  </div>
</template>
<script>
import back from "@/mixins/back.js";
export default {
  mixins: [back],
  data() {
    return {
      content: "",
      startPosition: 0,
      images: [],
      show: false
    };
  },
  mounted() {
    this.addHtml();
  },
  methods: {
    goBack() {
      this.backByName("index", next => {
        next();
      });
    },
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
      this.show = true;
      this.images = images;
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