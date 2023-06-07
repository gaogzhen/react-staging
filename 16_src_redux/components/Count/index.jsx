import React, { Component } from 'react'
import store from '../../redux/store'
import { incrementAction, decrementAction, incrementActionAsync } from "../../redux/count_action";

export default class Count extends Component {


  componentDidMount() {
    // 检测redux中状态变化，调研render
    store.subscribe(() => {
      this.setState({})
    })
  }

  /**
   * 加法
   */
  increment = () => {
    // 获取选中值
    const { value } = this.selectNumber
    store.dispatch(incrementAction(value - 0))
  }

  /**
   * 减法
   */
  decrement = () => {
    // 获取选中值
    const { value } = this.selectNumber
    store.dispatch(decrementAction(value - 0))
  }

  /**
   * 异步加
   */
  incrementAsync = () => {
    // 获取选中值
    const { value } = this.selectNumber
    // setTimeout(() => {
      store.dispatch(incrementActionAsync(value - 0, 500))
    // }, 500);
  }

  render() {
    return (
      <div>
        <h1>当求和为：{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
