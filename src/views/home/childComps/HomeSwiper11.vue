<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
  data() {
    return {
      swiperOption: {
        //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        autoplay: 0, //自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
        loop: false, //是否循环
        direction: 'horizontal', //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
        pagination: '.swiper-pagination' //分页器容器的css选择器或HTML标签
      }
    }
  },
  props: {
    banner: {
      type: Array,
      defalt() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss" scoped></style>
