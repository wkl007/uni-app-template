import { loadStorageSync } from '@/utils/storage'
import { ACCESS_TOKEN, LOGIN_STATUS, USER_INFO } from '@/utils/constants'

const state = {
  loginStatus: loadStorageSync(LOGIN_STATUS, false),
  accessToken: loadStorageSync(ACCESS_TOKEN, ''),
  userInfo: loadStorageSync(USER_INFO, {})
}

export default state
