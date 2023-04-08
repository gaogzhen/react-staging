import {Component} from 'react'
// import Ht from './index.css'
import hello from './index.module.css'

class Hello extends Component {
  render() {
    return (
      <div>
        <h2 className={hello.title}>
           hello, reac222
        </h2>
      </div> 
    )
  }
}

export default Hello