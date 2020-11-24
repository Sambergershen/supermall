<template>
  <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
    <p>
      <slot name="item-icon"></slot>
    </p>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => err)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  p {
    margin-top: 5px;
    margin-bottom: 0;
  }
}
</style>
