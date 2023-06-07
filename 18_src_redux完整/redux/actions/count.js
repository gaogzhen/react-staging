/**
 * Count组件action对象
 */
import { INCREMENT, DECREMENT } from "../constant";

// 同步action
export const increment = data => ({type: INCREMENT, data})
export const decrement = data => ({type: DECREMENT, data})

// 异步action，指action的值为
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
    }, time);
  }
}