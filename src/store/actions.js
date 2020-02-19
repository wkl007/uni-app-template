import * as types from './mutationTypes'
import { LOGIN_STATUS, ACCESS_TOKEN, USER_INFO } from '@/utils/constants'
import { saveStorageSync, removeStorageSync } from '@/utils/storage'

/**
 * 设置登录态
 * @param commit
 * @param state
 * @param query
 */
export const setLoginStatus = ({ commit, state }, query) => {
  if (!query) {
    removeStorageSync(ACCESS_TOKEN)
    removeStorageSync(USER_INFO)
  }
  commit(types.SET_LOGIN_STATUS, saveStorageSync(LOGIN_STATUS, query))
}

/**
 * 设置token
 * @param commit
 * @param state
 * @param query
 */
export const setAccessToken = ({ commit, state }, query) => {
  commit(types.SET_ACCESS_TOKEN, saveStorageSync(ACCESS_TOKEN, query))
}

/**
 * 设置用户信息
 * @param commit
 * @param state
 * @param query
 */
export const setUserInfo = ({ commit, state }, query) => {
  commit(types.SET_USER_INFO, saveStorageSync(USER_INFO, query))
}
