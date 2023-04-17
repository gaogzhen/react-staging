import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'

export default class App
  extends Component {
    
  state = { 
    githubUsers: [], // 初始化状态，github用户
    isFirst: true, // 是否第一次打开页面
    isLoadign: false, // 数据是否加载中
    err: '', // 存储相关的错误信息
  } 

  // /**
  //  * 更新用户状态数据
  //  * @param {object} githubUsers 
  //  */
  // updateAppState = (githubUsers) => {
  //   // 更新用户
  //   this.setState({githubUsers})
  // }

  /**
   * 更新App状态
   * @param {object} state 
   */
   updateAppState = state => {
    this.setState(state)
   }

  render() {

    // const { githubUsers } = this.state

    return (
      <div>
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
          <List {...this.state}/>
        </div>
      </div>
    )
  }
}