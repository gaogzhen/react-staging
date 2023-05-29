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
                  {/* <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>&nbsp;&nbsp; */}
                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>&nbsp;&nbsp; */}
                  {/* 向路由组件传递state参数 */}
                  <Link to={{pathname: '/home/message/detail', state: msg}}>{msg.title}</Link>&nbsp;&nbsp;
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/" component={Detail}></Route> */}
        {/* search参数无需声明接收 */}
        {/* state参数无需声明接收 */}
        <Route path="/home/message/detail" component={Detail}></Route>
      </div>
    )
  }
}
