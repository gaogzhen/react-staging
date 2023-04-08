import React, { Component } from 'react'
import { nanoid } from "nanoid";
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {

  // 对接收到props进行：类型、必要性的现在
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  /**
   * 键盘事件回调
   * @param {object} event 
   * @returns 
   */
  handleKeyUp = (event) => {
    const {keyCode, target} = event
    // 判断输入enter获取值
    if (keyCode !== 13) {
      return
    }
    // 校验数据，非空
    const val = target.value.trim() || target.value
    if (!val) {
      alert('待做事项不能为空！')
      return
    }
    // 子组件给父组件传值，通过函数调用
    // 构建todo对象
    const todo = {id: nanoid(), name: val, done: false}
    this.props.addTodo(todo)
    // 清空输入框
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}
