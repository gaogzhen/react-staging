// 创建外壳组件App
import {Component} from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome/>
      </div>
    )
  }

}

export default App