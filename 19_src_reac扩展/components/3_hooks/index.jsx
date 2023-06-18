import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { root } from "../../index";

// 类式组件
// class Demo extends Component {

//   state = { count: 0 }

//   myRef = React.createRef()

//   /**
//    * 自增
//    */
//   add = () => {
//     this.setState(state => ({count : state.count + 1}))
//   }

//   show = () => {
//     alert(this.myRef.current.value)
//   }

//   /**
//    * 设置定时器
//    */
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       // 自增1
//       this.add()
//     }, 500);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef} />
//         <h1>当前求和为: {this.state.count}</h1>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.show}>点我展示数据</button>
//       </div>
//     )
//   }
// }

// 函数式组件
function Demo() {

  const [count, setCount] = React.useState(0)

  const myRef = React.useRef()

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     add()
  //   }, 500);
  //   return () => {
  //     // 组件卸载之前执行 类似于类组件的钩子函数componentWillUnmount()
  //     clearInterval(timer)
  //   }
  // }, [])

  /**
   * count + 1
   */
  function add() {
    setCount(count => count + 1)
  }

  /**
   * 展示输入信息
   */
  function show() {
    alert(myRef.current.value)
  }

  /**
   * 卸载组件
   */
  function unmount() {
    // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    root.unmount()
  }

  return (
    <div>
      <input type="text" ref={myRef}/>
      <h1>当前求和为: {count}</h1>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>卸载组件</button>
    </div>
  )
  
}

export default Demo
