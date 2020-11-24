<template>
  <div class="wrapper" ref="wrapper">
    <div class="contetn">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpload: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.initScroll()
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    initScroll() {
      let that = this
      setTimeout(() => {
        that.$nextTick(() => {
          if (!that.scroll) {
            that.scroll = new BScroll('.wrapper', {
              probeType: that.probeType,
              pullUpLoad: that.pullUpload,
              click: true
            })
          } else {
            that.scroll.refresh()
          }

          // 监听上拉事件
          that.scroll.on('pullingUp', () => {
            that.$emit('pullingUp')
          })

          // 监听滚动位置
          that.scroll.on('scroll', position => {
            this.$emit('scroll', position)
          })
        })
      }, 1000)
    },
    finishPullUp() {
      setTimeout(() => {
        this.scroll.finishPullUp() // 上拉加载完成，准备下次调用
      }, 1000) // 延迟1s
    }
  }
}
</script>

<style lang="scss" scoped></style>
