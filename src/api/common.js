import request from '@/utils/request'

export default class CommonServer {
  // 获取html代码片段
  static getHtml (url) {
    return uni.request({
      url,
      method: 'GET'
    })
  }
}
