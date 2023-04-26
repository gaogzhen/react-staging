const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api1",{
      target: "http://localhost:10010", //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      pathRewrite: { "^/api1": "" }, 
    }),
    createProxyMiddleware("/api2",{
      target: "http://localhost:10011", //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      pathRewrite: { "^/api2": "" }, 
    })
  )
}
// 早期http-proxy-middleware配置如下
// const proxy = require('http-proxy-middleware')

// module.exports = function(app){
//   app.use(
//     proxy('/api1', {
//       target: 'http://127.0.0.1:10010',
//       changeOrigin: true,
//       pathRewrite: {'^/api1': ''}
//     }),
//     proxy('/api2', {
//       target: 'http://127.0.0.1:10011',
//       changeOrigin: true,
//       pathRewrite: {'^/api2': ''}
//     }),
//   ) 
// }

