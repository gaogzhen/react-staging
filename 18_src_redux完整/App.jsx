import React, { Component } from 'react'
import Person from './containers/Person';
import Count from './containers/Count'

export default class App extends Component {
  render() {
    return (
      <div>
        <Count/>
        <br />
        <Person />
      </div>
    )
  }
}
