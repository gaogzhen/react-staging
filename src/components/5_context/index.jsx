import React, { Component } from 'react'
import './index.css'

// 创建context对象
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

export default class A extends Component {

  state = { username: 'tom', age: 18 }

  render() {
    const { username, age } = this.state
    return (
      <div className='parent'>
        <h3>我是A组件</h3>
        <h4>我的用户名是：{username}----年龄：{age}</h4>
        <Provider value={{ username, age }}>
          <B />
        </Provider>

      </div>
    )
  }
}

class B extends Component {

  render() {
    return (
      <div className='son'>
        <h3>我是B组件</h3>
        {/* <h4>从A组件接收的用户名是：{this.props.username}</h4> */}
        <C />
      </div>
    )
  }
}

/**
 * 组件
 */
// class C extends Component {
//   static contextType = MyContext
//   render() {
//     const {username, age}  = this.context
//     return (
//       <div className='grand'>
//         <h3>我是C组件</h3>
//         <h4>从A组件接收的用户名是: {username}----年龄：{age}</h4>
//       </div>
//     )
//   }
// }

/**
 * 函数式组件或者类似组件都可以用
 */
function C() {
  return (
    <div className='grand'>
      <h3>我是C组件</h3>
      <h4>从A组件接收的用户名是:
        <Consumer>
          {value => `${value.username}----年龄是：${value.age}`}
        </Consumer>
      </h4>
    </div>
  )
}