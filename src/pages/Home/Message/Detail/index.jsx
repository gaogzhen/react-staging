import React, { Component } from 'react'
// import qs from 'qs'

const data = [
  {id: 1, content: '学习 Java'},
  {id: 2, content: '学习 Python'},
  {id: 3, content: '学习 React'},
]

export default class Detail extends Component {
  render() {
    console.log(this.props);

    // 接收params参数
    // let {id, title} = this.props.match.params

    // 接收search参数
    // let {id, title} = qs.parse(this.props.location.search, {ignoreQueryPrefix: true})

    // 接收state参数
    let {id, title} = this.props.location.state || {}
    // id = id - 0
    const detail = data.find((detail) => {
       return detail.id === id
    })  || {}
    return (
      <ul>
        {/* <li>ID: xxx</li>
        <li>TITLE: xxx</li>
        <li>CONTENT: xxx</li> */}
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {detail.content}</li>
      </ul>
    )
  }
}
