import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  /**
   * 选中全部复选框回调
   */
  handleAllCheck = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  /**
   * 清除所有已完成回调
   */
  handleAllDone = () => {
    this.props.deleteAllDone()
  }

  render() {
    const { todos } = this.props
    // 1 已完成总数
    const doneCount = todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
    // 2 总数
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleAllCheck} checked={doneCount === total && total !== 0} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleAllDone}>清除已完成任务</button>
      </div>
    )
  }
}