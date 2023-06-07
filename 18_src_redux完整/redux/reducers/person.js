/**
 * 文件用于创建为Persion组件服务的reducer
 */

import { ADD_PERSON } from "../constant";

export default function addPerson(state = [], action) {

  // 从action中获取type,data
  const { type, data } = action
  // 根据类型决定如何加工数据
  switch (type) {
    case ADD_PERSON:
      return [data, ...state]
      break;
    default:
      return state
      break;
  }
}