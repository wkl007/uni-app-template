import dayJs from 'dayjs'
import numeral from 'numeral'

/**
 * 格式化时间
 * @param date
 * @param format
 * @returns {string}
 */
export const dateFormat = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!date) return ''
  return dayJs(date).format(format)
}

/**
 * 格式化数字
 * @param number
 * @param format
 * @returns {string}
 */
export const numberFormat = (number, format = '0,00.00') => {
  if (!number) return '0'
  return numeral(number).format(format)
}
