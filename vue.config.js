module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-fuse/' : '/',
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}