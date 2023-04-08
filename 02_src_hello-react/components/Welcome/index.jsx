import {Component} from 'react'
import wel from './index.module.css'
// import './index.css'

class Welcome extends Component {
  render() {
    return (
      <div>
        <h2 className={wel.title}>
           welcome study react
        </h2>
      </div> 
    )
  }
}

export default Welcome