/**
 * Count组件action对象
 */
import { INCREMENT, DECREMENT } from "./constant";

// 同步action
export const incrementAction = data => ({type: INCREMENT, data})
export const decrementAction = data => ({type: DECREMENT, data})

// 异步action，指action的值为
export const incrementActionAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incrementAction(data))
    }, time);
  }
}