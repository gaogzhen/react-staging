// 创建外壳组件App
import { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css'

class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里

  /**
   * 待办事项列表
   */
  state = {
    todos: [
      { id: '001', name: '晨练', done: false },
      { id: '002', name: '学习spring', done: true },
      { id: '003', name: '逛街', done: true },
      { id: '004', name: '晚饭', done: false },
    ]
  }

  /**
   * 添加待办事项
   * @param {*} todo 待办事项
   */
  addTodo = (todo) => {
    this.setState({ todos: [todo, ...this.state.todos] })
  }


  /**
   * 更新待办事项
   * @param {string} id 待办事项唯一标识
   * @param {boolean} done 待办事项是否已完成
   */
  updateTodo = (id, done) => {
    console.log(id, '==', done);
    // 获取待办事项列表
    const { todos } = this.state
    // 根据id查找待办事项，修改是否已完成
    const newTodos = todos.map(todo => {
      // 根据id判断是否目标待办事项
      if (todo.id === id) {
        return { ...todo, done }
      } else {
        return todo
      }
    })
    // 更新状态
    this.setState({ todos: newTodos })
  }

  /**
   * 根据id删除todo
   * @param {string} id 
   */
  deleteTodo = (id) => {
    // 获取todo列表
    const { todos } = this.state
    // 设置todo对象的done 为true
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    // 更新状态
    this.setState({ todos: newTodos })
  }

  /**
   * 选中全部复选框
   */
  checkAllTodo = (done) => {
    // 获取todo列表
    const { todos } = this.state
    // 
    const newTodos = todos.map((todo) => {
      return { ...todo, done }
    })
    // 更新状态
    this.setState({ todos: newTodos })
  }
  /**
   * 删除已完成
   */
  deleteAllDone = () => {
    // 获取todo列表
    const {todos} = this.state
    // 设置todo对象的done 为true
    const newTodos = todos.filter((todo) => {
      return !todo.done
    })
    // 更新状态
    this.setState({todos: newTodos})
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteAllDone={this.deleteAllDone}/>
        </div>
      </div>
    )
  }

}

export default App