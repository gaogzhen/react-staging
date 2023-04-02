// 创建外壳组件App
import { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css'

class App extends Component {
  state = {todos:[
    {id: 1, name: '晨练', done: false},
    {id: 2, name: '学习spring', done: true},
    {id: 3, name: '逛街', done: true},
    {id: 4, name: '晚饭', done: false},
  ]}
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={todos}/>
          <Footer />
        </div>
      </div>
    )
  }

}

export default App