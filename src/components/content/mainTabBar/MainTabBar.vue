<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <i slot="item-icon" class="iconfont icon-home"></i>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <i slot="item-icon" class="iconfont icon-Category"></i>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <i slot="item-icon" class="iconfont icon-cart"></i>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <i slot="item-icon" class="iconfont icon-Profile"></i>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabBar/TabBar'
import TabBarItem from '@/components/common/tabBar/TabBarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="scss" scoped></style>
