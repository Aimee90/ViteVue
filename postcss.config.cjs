module.exports = (ctx) => ({
  parser: ctx.parser ? 'sugarss' : false, // 解析器
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-preset-env' : {
      stage: 2,
      browsers: 'last 2 versions'
    },
    // 允许使用import
    'postcss-import' : {},
    // css嵌套
    'postcss-nested' : {},
    cssnano: ctx.env === 'production' ? {} : false
  }
})