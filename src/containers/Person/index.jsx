import React, { Component } from 'react'
import { nanoid } from "nanoid";
// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";

// 引入action
import { addPerson } from "../../redux/actions/person";



// 定义UI组件
class Person extends Component {

  /**
   * 添加人员
   */
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const person = {id: nanoid(), name, age}
    this.props.addPerson(person)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }
  

  render() {
    return (
      <div>
        <h2>我是Persion组件, count为：{this.props.count}</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder='输入姓名' />
        <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄' />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.persons.map( p => {
              return (
                <li key={p.id}> 姓名：{p.name}----年龄：{p.age}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}




// 使用connect()() 创建并暴露一个Count容器组件
export default connect(
  state => ({ persons: state.persons, count: state.count }), // 映射状态
  {
    // 映射操作状态方法
    addPerson,
  }
)(Person)