<template>
  <div>
    <van-pull-refresh
      success-text="刷新成功"
      @refresh="onRefresh"
      v-model="refreshing"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in list"
          :key="item"
          :title="item"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { PullRefresh, List, Cell } from "vant";
export default {
  components: {
    vanPullRefresh: PullRefresh,
    vanList: List,
    vanCell: Cell
  },
  props: {
    data: {
      default: () => {},
      type: Object
    },
    index: {
      type: Number,
      require: true
    },
    active: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      list: [],
      pageNum: 0,
      scrollTop: 0
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.refreshing = false;
      }, 1000);
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    scroll() {
      if (this.active != this.index) return;
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
    }
  },
  watch: {
    active(n) {
      if (n != this.index) return;
      window.scrollTo(0, this.scrollTop);
    }
  },
  activated() {
    if (this.active != this.index) return;
    window.scrollTo(0, this.scrollTop);
  },
  mounted() {
    window.addEventListener("scroll", this.scroll.bind(this));
  },
  destroyed() {
    window.removeEventListener("scroll", this.scroll);
  }
};
</script>
<style lang="sass">

</style>