/**
 * 该文件用于暴露store对象，整个应用只有1个store对象
 */

// 引入createStore,创建store对象
import { createStore, applyMiddleware } from "redux";
// 引入为Count组件服务的reducer
import countReducer from './count_reducer'
// 引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk'

// 暴露store对象
export default createStore(countReducer, applyMiddleware(thunk))