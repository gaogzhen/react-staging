// 创建外壳组件App
import { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css'

class App extends Component {

  /**
   * 待办事项列表
   */
  state = {todos:[
    {id: '001', name: '晨练', done: false},
    {id: '002', name: '学习spring', done: true},
    {id: '003', name: '逛街', done: true},
    {id: '004', name: '晚饭', done: false},
  ]}

  /**
   * 添加待办事项
   * @param {*} todo 待办事项
   */
  addTodo = (todo) => {
    this.setState({todos: [todo, ...this.state.todos]})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos}/>
          <Footer />
        </div>
      </div>
    )
  }

}

export default App