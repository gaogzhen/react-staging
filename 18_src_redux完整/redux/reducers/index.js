/**
 * 该文件用于汇总所有的reducer
 */

// 引入createStore,创建store对象
import { combineReducers } from "redux";
// 引入为Count组件服务的reducer
import count from './count'
// 引入为Persion组件服务的reducer
import persons from './person'

// 汇总所有reducer
export default  combineReducers({
  count, persons
})
