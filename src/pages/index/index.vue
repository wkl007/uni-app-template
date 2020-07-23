<template>
  <view class="content">
    <u-navbar
      :background="background"
      back-text="返回"
      title="剑未配妥，出门已是江湖"
      :border-bottom="false"/>
    <u-no-network/>
    <view class="icon-wrapper">
      <u-icon name="photo" color="#2979ff" size="50"/>
      <u-icon name="check-circle" custom-prefix="custom-icon" size="50" color="#000"/>
      <u-icon name="CI" custom-prefix="custom-icon" size="50" color="red"/>
    </view>
    <u-empty mode="search"/>
    <u-gap height="40" bg-color="#c9c9c9"/>
    <u-divider>大漠孤烟直</u-divider>
    <u-read-more toggle ref="uReadMore">
      <html-parse
        @ready="handleReady"
        url="https://shancai-1257275967.coscd.myqcloud.com/shancai/images/20190731/center2019073111173646.html"/>
    </u-read-more>
    <view class="item-warp">
      <view class="item" v-for="(item, index) in list" :key="index">
        <u-lazy-load
          threshold="-450"
          height="400"
          img-mode="aspectFill"
          border-radius="10"
          :image="item.src"
          :index="index"/>
      </view>
    </view>
    <u-loadmore :status="status" @loadmore="getData"/>
    <view class="operation-wrapper safe-area-inset-bottom">
      <u-button>底部操作按钮</u-button>
    </view>
  </view>
</template>

<script>
import { mapGetters } from 'vuex'
import CommonServer from '@/api/common'
import IndexServer from '@/api'
import HtmlParse from '@/components/html-parse/html-parse'

export default {
  components: {
    HtmlParse
  },
  data () {
    return {
      list: [],
      status: 'loadmore',
      show: true,
      data: [
        {
          src: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          // 这里会加载失败，显示错误的占位图
          src: 'error.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i6/TB1SIYrLXXXXXaAXpXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i1/TB11yxeNVXXXXbwXFXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i3/TB1ndJiQFXXXXctaXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i4/TB1BYGDLpXXXXbuXXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i2/TB1_9GoMVXXXXXmaXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i2/TB1cSZZNFXXXXaKaXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          // 这里会加载失败，显示错误的占位图
          src: 'error.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i8/TB1RVS_QpXXXXXBXXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i5/TB1xEJiLXXXXXcxaXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i6/TB1DSuHJVXXXXXmXXXXwu0bFXXX.png_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i5/TB1aMNyLpXXXXa2XXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i8/TB1JRHEQpXXXXXwXVXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i7/TB1qKEuQpXXXXXYXXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i7/TB1TlOfQFXXXXX2XXXXwu0bFXXX.png_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i1/TB1SKu.QpXXXXbDXVXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          // 这里会加载失败，显示错误的占位图
          src: 'error.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i8/TB1um5GQpXXXXbiaXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i1/TB1pxCTQpXXXXa2apXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i6/TB1zksMNVXXXXaRapXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i4/TB1nbrcOXXXXXXEXpXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i4/TB1CI_NQpXXXXXaXVXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i2/TB18vTdQFXXXXXlXpXXwu0bFXXX.png_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i7/TB1doDVQpXXXXcRaXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i1/TB17LgBNFXXXXaSXVXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i6/TB1fVJJQFXXXXcyXpXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i3/TB1wnBTKFXXXXcQXXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i1/TB1DX3hIpXXXXXIaXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i6/TB1SIYrLXXXXXaAXpXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i1/TB11yxeNVXXXXbwXFXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i3/TB1ndJiQFXXXXctaXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i4/TB1BYGDLpXXXXbuXXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i2/TB1_9GoMVXXXXXmaXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i2/TB1cSZZNFXXXXaKaXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          // 这里会加载失败，显示错误的占位图
          src: 'error.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i8/TB1RVS_QpXXXXXBXXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i5/TB1xEJiLXXXXXcxaXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i6/TB1DSuHJVXXXXXmXXXXwu0bFXXX.png_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i5/TB1aMNyLpXXXXa2XXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i8/TB1JRHEQpXXXXXwXVXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i7/TB1qKEuQpXXXXXYXXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i7/TB1TlOfQFXXXXX2XXXXwu0bFXXX.png_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i1/TB1SKu.QpXXXXbDXVXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i2/TB17gJ3OXXXXXcrXpXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i8/TB1um5GQpXXXXbiaXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i1/TB1pxCTQpXXXXa2apXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i6/TB1zksMNVXXXXaRapXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i4/TB1nbrcOXXXXXXEXpXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i4/TB1CI_NQpXXXXXaXVXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i2/TB18vTdQFXXXXXlXpXXwu0bFXXX.png_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i7/TB1doDVQpXXXXcRaXXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          src: 'https://gtd.alicdn.com/sns_logo/i1/TB17LgBNFXXXXaSXVXXSutbFXXX.jpg_240x240xz.jpg'
        },
        {
          // 这里会加载失败，显示错误的占位图
          src: 'error.jpg'
        }
      ],
      background: {
        backgroundColor: 'rgba(255,20,147,0)'

        // 导航栏背景图
        // background: 'url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat',
        // 还可以设置背景图size属性
        // backgroundSize: 'cover',

        // 渐变色
        // backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
      }
    }
  },
  computed: {
    ...mapGetters(['loginStatus'])
  },
  onPageScroll ({ scrollTop }) {
    let alpha = scrollTop / 300
    if (alpha < 0) {
      alpha = 0
    } else if (alpha > 1) {
      alpha = 1
    }
    this.background.backgroundColor = `rgba(255,20,147,${alpha})`
  },
  async onLoad () {
    this.getData()
    // const res = await CommonServer.getHtml('https://shancai-1257275967.coscd.myqcloud.com/shancai/images/20190731/center2019073111173646.html')
    // console.log(res)
    // const res = await IndexServer.getBannerList()
    // console.log(res)
  },
  onReachBottom () {
    this.getData()
  },
  methods: {
    handleReady () {
      this.$nextTick(() => {
        // this.$refs.uReadMore.init()
      })
    },
    getData () {
      let index = 0
      this.status = 'loading'
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          index = this.$u.random(0, this.data.length - 1)
          this.list.push({
            src: this.data[index].src
          })
        }
        this.status = 'loadmore'
      }, 1500)
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/functions";
@import "~@/assets/styles/mixins";

.icon-wrapper {
  display: flex;
  justify-content: space-around;
}

.item-warp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: rpx(30);
}

.item-warp .item {
  flex: 0 0 rpx(335);
  height: rpx(400);
  margin-bottom: rpx(20);
  overflow: hidden;
  border-radius: rpx(10);
}

.content {
  @include safe-area-inset-bottom(rpx(106));
}

.operation-wrapper {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: rpx(106);
  padding-right: rpx(20);
  padding-left: rpx(20);
  text-align: center;
  background: red;
}
</style>
