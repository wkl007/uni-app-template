import dayjs from 'dayjs'

/**
 * 判断url
 * @param path
 * @returns {boolean}
 */
export const isUrl = path => {
  /* eslint no-useless-escape:0 */
  const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return reg.test(path)
}

/**
 * 防抖
 * @param func
 * @param delay
 * @returns {function(...[*]=)}
 */
export const debounce = (func, delay) => {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 * 截流
 * @param func
 * @param gapTime
 * @returns {function(...[*]=)}
 */
export const throttle = (func, gapTime) => {
  let _lastTime = 0

  return function () {
    const _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      func()
      _lastTime = _nowTime
    }
  }
}

/**
 * 冒泡排序
 * @param arr
 * @param fn 升序(a, b) => a - b) 降序 (a, b) => b - a)
 * @returns {*}
 */
export const bubbleSort = (arr, fn) => {
  let len = arr.length
  while (len--) {
    for (let i = 0;
      i < len;
      i++
    ) {
      if (fn(arr[i], arr[i + 1]) > 0) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
  }
  return arr
}

/**
 * 是否是空对象
 * @param object
 * @returns {boolean}
 */
export const isEmptyObj = object => {
  return Object.keys(object).length === 0
}

/**
 * 对象删除 null undefined值
 * @param obj
 */
export const removeEmptyObj = (obj = {}) => {
  Object.keys(obj).forEach(i => {
    if (obj[i] === undefined || obj[i] === null) {
      delete obj[i]
    }
    if (obj[i] && typeof obj[i] === 'object') {
      removeEmptyObj(obj[i])
    }
  })
}

/**
 * 对象 value 去除首尾空格
 * @param obj
 */
export const trimObjValue = (obj = {}) => {
  Object.keys(obj).forEach(i => {
    if (typeof obj[i] === 'string') {
      obj[i] = obj[i].trim()
    }
    if (obj[i] && typeof obj[i] === 'object') {
      trimObjValue(obj[i])
    }
  })
}

/**
 * 检查timestamp是否在有效期内
 * @param timestamp 项目更新时间
 * @param validityPeriod 项目有效期
 * @param measure 度量 years、months、weeks、days、hours、minutes、seconds
 * @returns {boolean} true 不需要更新,false需要更新
 */
export const checkTimestampValid = (timestamp, validityPeriod = 60, measure = 'seconds') => {
  const currentDate = new Date() // 当前时间 新
  const targetDate = new Date() // 目标时间 旧
  targetDate.setTime(timestamp)
  return dayjs(currentDate).diff(dayjs(targetDate), measure) <= validityPeriod
}
