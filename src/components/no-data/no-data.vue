<template>
  <div
    class="no-data"
    :class="fixed?'fixed':''"
    :style="style"
  >
    <image :src="emptyImg" class="empty-img" mode="widthFix"/>
    <text class="text">{{text}}</text>
  </div>
</template>

<script>
export default {
  name: 'NoData',
  props: {
    emptyImg: {
      type: String,
      default: 'http://puui.qpic.cn/vcover_vt_pic/0/gozy3av1tsva9swt1469187012.jpg/0'
    },
    text: {
      type: String,
      default: '暂无数据'
    },
    top: {
      type: Number,
      default: 50
    },
    bottom: {
      type: Number,
      default: 50
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style () {
      return !this.fixed ? `margin:${this.top}rpx auto ${this.bottom}rpx` : ''
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/styles/functions";

.no-data {
  margin: 0 auto;
  text-align: center;

  &.fixed {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  .empty-img {
    width: rpx(500);
  }

  .text {
    display: block;
  }
}
</style>
