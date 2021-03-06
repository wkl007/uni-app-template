const { VUE_APP_API_URL, VUE_APP_OSS_URL } = process.env

export const NODE_ENV = process.env.NODE_ENV // 环境变量

export const API_URL = VUE_APP_API_URL // 接口url

export const OSS_URL = VUE_APP_OSS_URL // 阿里云上传域名

export const LOGIN_STATUS = 'Login_Status' // 登录状态

export const ACCESS_TOKEN = 'Access_Token' // 登录token

export const USER_INFO = 'User_Info' // 用户信息
