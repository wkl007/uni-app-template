import store from '@/store'

/**
 * 登录
 * @returns {Promise<unknown>}
 */
export const uniLogin = () => {
  const { loginStatus } = store.getters
  return new Promise((resolve, reject) => {
    if (loginStatus) {
      const res = {
        status: 1,
        data: '已登录'
      }
      resolve(res)
    } else {
      uni.getProvider({
        service: 'oauth',
        success: res => {
          console.log(res.provider)
          if (res.provider.indexOf('weixin')) {
            uni.login({
              provider: 'weixin',
              success: res => {
                uni.getUserInfo({
                  lang: 'zh_CN',
                  success: ({ rawData, signature, encryptedData, iv, userInfo }) => {
                    uni.showLoading({ title: '登录中' })
                    const data = {
                      code: res.code,
                      rawData,
                      signature,
                      encryptedData,
                      iv,
                      userInfo
                    }
                    // TODO 调用登录接口授权登录成功
                  }
                })
              }
            })
          }
        }
      })
    }
  })
}

/**
 * 下载网络图片到系统相册
 * @param url
 * @returns {Promise<unknown>}
 */
export const uniDownloadImage = (url) => {
  return new Promise((resolve, reject) => {
    uni.downloadFile({
      url,
      success: res => {
        if (res.statusCode === 200) {
          const filePath = res.tempFilePath
          uni.saveImageToPhotosAlbum({
            filePath,
            success: res => resolve(res),
            fail: err => reject(err)
          })
        }
      }
    })
  })
}

/**
 * 上传文件
 * @returns {Promise<unknown>}
 */
export const uniUploadFile = () => {
  const { url, filePath, fileName } = data
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url,
      filePath,
      name: fileName,
      header: {
        'Content-Type': 'multipart/form-data',
      },
      success: res => resolve(res),
      fail: err => reject(err)
    })
  })
}

/**
 * 获取设备信息
 * @returns {Promise<unknown>}
 */
export const uniGetSystemInfo = () => {
  return new Promise((resolve, reject) => {
    uni.getSystemInfo({
      success: res => resolve(res),
      fail: err => reject(err)
    })
  })
}

/**
 * 小程序端强制更新
 */
export const uniUpdate = () => {
  const updateManager = uni.getUpdateManager()
  updateManager.onCheckForUpdate(res => {
    if (!res.hasUpdate) return
    updateManager.onUpdateReady(() => {
      uni.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: res => {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
    updateManager.onUpdateFailed(() => {
      // 新的版本下载失败
      uni.showModal({
        title: '已经有新版本了哟~',
        content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
      })
    })
  })
}
