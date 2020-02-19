import request from '@/utils/request'

export default class IndexServer {
  static getBannerList () {
    return request({
      url: 'https://api.jijieshe.com/v1/applets/cms_content/content/',
      method: 'get'
    })
  }
}
