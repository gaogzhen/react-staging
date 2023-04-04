import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  /**
   * 鼠标是否悬浮
   */
  state = { 
    mouse: false // 鼠标进入true；鼠标离开false
  }

  /**
   * 鼠标进入离开标志
   * @param {boolean} flag 鼠标进入true;鼠标离开false
   */
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  /**
   * 处理复选框选中状态
   *  状态改变，获取id和状态值向上传递
   * @param {strig} id 
   * @returns 回调函数
   */
  handleCheck = (id) => {
    return (e) => {
      // 获取checkbox选中状态
      const done = e.target.checked
      // id,done向上传递
      const {updateTodo} = this.props
      updateTodo(id, done)
    }
  }

  /**
   * 删除一个todu回调
   * @param {string} id 
   */
  handleDelete = (id) => {
    // 校验
    // 原生方法需要指定window前缀
    if (window.confirm("您确定要删除吗？")) {
      // 向上传递id
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : '#fff' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }} onClick={() => this.handleDelete(id)}>删除</button>
      </li>
    )
  }
}
