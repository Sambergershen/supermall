<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-upload="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <fashion></fashion>
      <tab-control @tabClick="tabClick" :titles="['流行', '新款', '精选']" class="tab-control"></tab-control>
      <goods-list :goods="showGoods" class="goods"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from '@/components/common/navBar/NavBar'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '../../components/content/backTop/BackTop'

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import Fashion from './childComps/Fashion'

import { getHomeGoods, getHomeMultiData } from '../../api/index'

export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    Fashion,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowBackTop: false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  mounted() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * 网路请求相关方法
     */
    getHomeMultiData() {
      getHomeMultiData().then(data => {
        this.banner = data.data.banner.list
        this.recommend = data.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1

      getHomeGoods({ type, page }).then(data => {
        this.goods[type].list.push(...data.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()

        this.$refs.scroll.initScroll()
      })
    },

    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },

    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000
    },

    loadMore() {
      this.getHomeGoods(this.currentType)
    },

    /**
     * 回到顶部
     */
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  padding-top: 44px;
  box-sizing: border-box;
  height: 100vh;
  position: relative;
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    .tab-control {
      position: sticky;
      top: 44px;
      z-index: 999;
    }
  }
}
</style>
