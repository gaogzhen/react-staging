import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messArr : [
      { id: 1, title: '消息1' },
      { id: 2, title: '消息2' },
      { id: 3, title: '消息3' },
    ]
  }

    /**
   * 路由跳转push展示
   */
    pushShow = (id, title) => {
      // 接受params参数
      this.props.history.push(`/home/message/detail/${id}/${title}`)
      // 接受search参数
      // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)
      // 接受state参数
      // this.props.history.push(`/home/message/detail`, {id, title})
    }

  /**
   * 路由跳转replace展示
   */
  replaceShow = (id, title) => {
          // 接受params参数
          this.props.history.replace(`/home/message/detail/${id}/${title}`)
          // 接受search参数
          // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
          // 接受state参数
          // this.props.history.replace(`/home/message/detail`, {id, title})
  }

  /**
   * 前进
   */
  forward = () => {
    this.props.history.goForward()
  }

  /**
   * 后退
   */
  back = () => {
    this.props.history.goBack()
  }

  /**
   * 跳转
   */
  go = () => {
    this.props.history.go(-1)
  }

  render() {
    const { messArr } = this.state
    return (
      <div>
        <ul>
          {
            messArr.map((msg) => {
              return (
                <li key={msg.id}>
                  {/* 向路由组件传递params参数 */}
                  <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>&nbsp;&nbsp;
                  <button onClick={() => this.pushShow(msg.id, msg.title)}>push 查看</button>&nbsp;&nbsp;
                  <button onClick={() => this.replaceShow(msg.id, msg.title)}>replace 查看</button>&nbsp;&nbsp;
                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>&nbsp;&nbsp; */}
                  {/* 向路由组件传递state参数 */}
                  {/* <Link replace to={{pathname: '/home/message/detail', state: msg}}>{msg.title}</Link>&nbsp;&nbsp; */}
                  {/* <Link to={{pathname: '/home/message/detail', state: msg}}>{msg.title}</Link>&nbsp;&nbsp; */}
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
        {/* search参数无需声明接收 */}
        {/* state参数无需声明接收 */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}
        <button onClick={this.forward}>前进</button>&nbsp;
        <button onClick={this.back}>后退</button>&nbsp;
        <button onClick={this.go}>跳转</button>&nbsp;
      </div>
    )
  }
}
