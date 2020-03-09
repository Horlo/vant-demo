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
        <placeholder :state="state"/>
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
import placeholder from "@/components/placeholder/placeholder.vue";
import BindEventMixin from "@/mixins/bind-event.js";
import { setRootScrollTop,getRootScrollTop } from "@/util/dom/scroll.js";

export default {
  components: {
    vanPullRefresh: PullRefresh,
    vanList: List,
    vanCell: Cell,
    placeholder
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
  mixins:[
    BindEventMixin(function(bind) {
      bind(window,'scroll',this.scroll);
    })
  ],
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      list: [],
      pageNum: 0,
      scrollTop: 0,
      errorCount:false
    };
  },
  computed:{
    state(){
      if(this.list.length == 0){
        if(this.finished && !this.error){ //empty
          return 1
        }else if(this.errorCount){ //error
          return 2
        }else if(this.loading){ //loading
          return 0
        }
        return -1;
      }else{
        return -1;
      }
    }
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
      this.scrollTop = getRootScrollTop();
    }
  },
  watch: {
    active(n) {
      if (n != this.index) return;
      setRootScrollTop(this.scrollTop)
      // window.scrollTo(0, );
    }
  }
};
</script>
<style lang="scss">
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
</style>