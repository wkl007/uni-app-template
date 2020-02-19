<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{title}}</text>
    </view>
    <u-icon icon="icon-ren" :size="60"/>
    <u-icon icon="icon-address" :size="60"/>
    <no-data/>
    <html-parse
      url="https://shancai-1257275967.coscd.myqcloud.com/shancai/images/20190731/center2019073111173646.html"/>
    <empty/>
  </view>
</template>

<script>
import { mapGetters } from 'vuex'
import CommonServer from '@/api/common'
import IndexServer from '@/api'
import HtmlParse from '@/components/html-parse/html-parse'
import Empty from '@/components/empty/empty'
import UIcon from '@/components/u-icon/u-icon'
import NoData from '@/components/no-data/no-data'

export default {
  components: {
    HtmlParse,
    Empty,
    UIcon,
    NoData
  },
  data () {
    return {
      title: 'Hello,123'
    }
  },
  computed: {
    ...mapGetters(['loginStatus'])
  },
  async onLoad () {
    console.log(this.loginStatus)
    // const res = await CommonServer.getHtml('https://shancai-1257275967.coscd.myqcloud.com/shancai/images/20190731/center2019073111173646.html')
    // console.log(res)
    // const res = await IndexServer.getBannerList()
    // console.log(res)
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import "~@/assets/styles/functions";

.content {
  height: rpx(400);
  text-align: center;
}

.logo {
  width: rpx(200);
  height: rpx(200);
  margin-top: rpx(200);
}

.title {
  color: #8f8f94;
  font-size: rpx(36);
}
</style>
