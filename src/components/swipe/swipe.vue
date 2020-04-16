<template>
  <view class="swipe">
    <swiper
      :interval=5000
      :duration=500
      indicator-dots
      indicator-color="rgba(0, 0, 0, 0.5)"
      indicator-active-color="#d6a679"
      autoplay
      circular
    >
      <swiper-item
        v-for="(item,index) in swipeList"
        :key="index"
        @click="handleClick(item)"
      >
        <image
          :src="item.url||item"
          class="swipe-img"
        />
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  name: 'swipe',
  props: {
    swipeList: {
      type: Array,
      default () {
        return []
      }
    },
  },
  methods: {
    // 点击事件
    handleClick (item) {
      this.$emit('click', item)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/styles/functions";

.swipe {
  swiper {
    height: rpx(375);

    .swipe-img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
