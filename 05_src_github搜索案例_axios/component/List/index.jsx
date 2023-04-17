import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const { isFirst, isLoading, githubUsers, err } = this.props
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入github用户名，点击搜索</h2> :
            isLoading ? <h2>Loading......</h2> :
              err ? <h2 style={{color: 'red'}}>{err}</h2> :
                githubUsers.map(item => {
                  return (
                    <div className="card" key={item.id}>
                      <a href={item.homePage} target="_blank" rel="noreferrer">
                        <img alt='avatar' src={item.avatar} style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{item.username}</p>
                    </div>
                  )
                })
        }
      </div>
    )
  }
}
