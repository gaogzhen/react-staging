// 引入react核心库
import React from "react";
// 引入react-dom
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
// 引入App组件
import App from './App'
import store  from "./redux/store";


// 渲染组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)