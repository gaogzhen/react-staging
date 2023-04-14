// 创建外壳组件App
import {Component} from 'react'
import axios from 'axios'

class App extends Component {

  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      resp => {console.log('成功类', resp.data);},
      err => {console.log('失败类', err)}
    )
  }

  getCarData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      resp => {console.log('成功类', resp.data);},
      err => {console.log('失败类', err)}
    )
  }

  render() {

    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button><br/>
        <button onClick={this.getCarData}>点我获取汽车数据</button><br/>
      </div>
    )
  }

}

export default App