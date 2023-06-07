import React, { Component } from 'react'
// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";

// 引入action
import { incrementAction, decrementAction, incrementActionAsync } from "../../redux/count_action";



// 定义UI组件
class Count extends Component {

  /**
   * 加法
   */
  increment = () => {
    // 获取选中值
    const { value } = this.selectNumber
    this.props.increment(value - 0)
  }

  /**
   * 减法
   */
  decrement = () => {
    // 获取选中值
    const { value } = this.selectNumber
    this.props.decrement(value - 0)
  }

  /**
   * 异步加
   */
  incrementAsync = () => {
    // 获取选中值
    const { value } = this.selectNumber
    this.props.incrementAsync(value - 0, 500)
  }

  render() {
    return (
      <div>
        <h1>当求和为：{this.props.count}</h1>
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




// 使用connect()() 创建并暴露一个Count容器组件
export default connect(
  state => ({ count: state }), // 映射状态
  {
    // 映射操作状态方法
    increment: incrementAction,
    decrement: decrementAction,
    incrementAsync: incrementActionAsync
  }
)(Count)