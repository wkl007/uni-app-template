/**
 * 设置本地存储
 * @param key
 * @param value
 */
export const saveStorageSync = (key, value) => {
  uni.setStorageSync(key, value)
  return value
}

/**
 * 获取本地存储
 * @param key
 * @param defaultValue
 * @returns {any}
 */
export const loadStorageSync = (key, defaultValue) => {
  return uni.getStorageSync(key) || defaultValue
}

/**
 * 移除本地存储
 * @param key
 * @returns {string}
 */
export const removeStorageSync = (key) => {
  uni.removeStorageSync(key)
  return ''
}
