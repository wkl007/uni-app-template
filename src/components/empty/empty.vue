<template>
  <view class="empty" v-bind:style="{  height: height + 'rpx' }"/>
</template>

<script>
export default {
  name: 'empty',
  props: {
    height: {
      type: Number,
      default: 16
    }
  }
}
</script>
