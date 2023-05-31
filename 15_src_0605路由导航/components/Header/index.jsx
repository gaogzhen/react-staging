import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class Header extends Component {

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
    // console.log('Header组件收到的props：', this.props);
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.forward}>前进</button>&nbsp;
        <button onClick={this.back}>后退</button>&nbsp;
        <button onClick={this.go}>跳转</button>&nbsp;
      </div>
    )
  }
}
// withRouter可以包装一般组件，让一般组件使用路由组件的功能
export default withRouter(Header)