/**
 * 文件用于创建为Count组件服务的reducer
 */

import { INCREMENT, DECREMENT } from "../constant";

export default function count(state = 0, action) {

  console.log('---', state, '----', action);
  // 从action中获取type,data
  const { type, data } = action
  // 根据类型决定如何加工数据
  switch (type) {
    case INCREMENT:
      return state + data
      break;
    case DECREMENT:
      return state - data
    default:
      return state
      break;
  }
}