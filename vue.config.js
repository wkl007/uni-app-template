const path = require('path')
const webpack = require('webpack')

const TerserPlugin = require('terser-webpack-plugin')// 去console插件
const CompressionWebpackPlugin = require('compression-webpack-plugin')// gzip压缩插件

const resolve = dir => require('path').join(__dirname, dir)
console.log(process.env.npm_lifecycle_event)

module.exports = {
  // 生产环境sourceMap
  productionSourceMap: false,
  // webpack配置
  configureWebpack: config => {
    // config.name = name
    const plugins = [
      // 去console
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            drop_debugger: true,
            drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      }),
    ]
    // h5打包gzip压缩处理
    if (process.env.npm_lifecycle_event.includes('h5')) {
      plugins.push(new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          ['js', 'css'].join('|') +
          ')$',
        ),
        threshold: 10240,
        minRatio: 0.8,
      }))
    }
    if (process.env.NODE_ENV === 'production') {
      config.plugins = [...config.plugins, ...plugins]
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  // webpack-dev-server配置
  devServer: {
    open: false, // 打开浏览器
    overlay: {
      warnings: false,
      errors: false
    },
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  },
  // 第三方插件选项
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint:
      {
        fix: true,
        files:
          'src/**/*.{vue,htm,html,css,sss,less,scss}',
        formatter:
          () => {}
      }
  }
}
