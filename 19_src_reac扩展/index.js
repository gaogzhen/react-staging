// 引入react核心库
import React from "react";
// 引入react-dom
import ReactDOM from 'react-dom/client'
// 引入路由器
import App from './App'

// 渲染组件到页面
export const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)