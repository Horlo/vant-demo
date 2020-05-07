<template>
  <div>
    <van-tabs
      v-model="active"
      animated
      swipeable
      sticky
    >
      <van-tab
        v-for="(item,index) of tabber"
        :key="index"
        :title="item.title"
      >
        <item
          :data="item"
          :index="index"
          :active="active"
          @click.native = "push"
        ></item>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
import item from "./item";
export default {
  components: {
    vanTab: Tab,
    vanTabs: Tabs,
    item
  },
  data() {
    return {
      active: 0,
      tabber: [
        {
          title: "省标"
        },
        {
          title: "市标市标"
        }
      ]
    };
  },
  methods:{
    push(){
      this.$router.push({
        path:'/detail'
      })
    }
  }
 
};
</script>
<style lang="sass">

</style>