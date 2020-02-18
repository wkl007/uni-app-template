<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <img class="logo" src="/static/logo.png" alt="">
    <view>
      <text class="title">{{title}}</text>
    </view>
  </view>
</template>

<script>

export default {
  data () {
    return {
      title: 'Hello'
    }
  },
  onLoad () {},
  methods: {
    handleClick () {}
  }
}
</script>

<style scoped lang="scss">
@function rpx($value) {
  @return $value*1rpx;
}

.content {
  text-align: center;
  height: rpx(400);
}

.logo {
  height: rpx(200);
  width: rpx(200);
  margin-top: rpx(200);
}

.title {
  font-size: rpx(36);
  color: #8f8f94;
}
</style>
