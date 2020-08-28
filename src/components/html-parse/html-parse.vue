<template>
  <view>
    <u-parse
      :html="html"
      lazy-load
      selectable
      show-with-animation
      use-cache
      @ready="$emit('ready')"
    />
  </view>
</template>

<script>
import { isUrl } from '@/utils'
import CommonServer from '@/api/common'

const processHtml = html => {
  return html
    .replace(/section/g, 'div')
    .replace(/<img([\s\S]*?)(src="[^"]+")[^>]+>/g, function (_all, _group1, group2) {
      return `<img ${group2} width="100%" style="max-width:100% !important;height:auto;display:block;margin: 5px auto" />`
    })
    .replace(/<table([\s\S]*?)[^>]+>/g, function () {
      return '<table width="100%"/>'
    })
}

export default {
  name: 'HtmlParse',
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      html: '数据加载中...'
    }
  },
  watch: {
    url (val) {
      if (val) {
        this.getHtmlContent()
      }
    }
  },
  created () {
    this.getHtmlContent()
  },
  methods: {
    // 获取html代码片段
    async getHtmlContent () {
      try {
        let html = this.url
        if (isUrl(this.url)) {
          html = (await CommonServer.getHtml(this.url))[1].data
        }
        this.html = processHtml(html) || '暂无数据'
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
