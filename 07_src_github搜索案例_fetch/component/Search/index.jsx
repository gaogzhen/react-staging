import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

  search = async () => {
    // 获取用户输入
    const { keyelement: { value: keyword } } = this
    // console.log(keyword);
    // 发送请求前通知List更新状态
    PubSub.publish('github-user', { isFirst: false, isLoading: true })
    // 发起网络请求
    try {
      const resp = await fetch(`/api1/search/users2?q=${keyword}`)
      let data = await resp.json()
      data = data.items.map(item => {
        return { id: item.id, avatar: item.avatar_url, homePage: item.html_url, username: item.login }
      })
      PubSub.publish('github-user', {isLoading: false, githubUsers: data})
    } catch (error) {
      PubSub.publish('github-user', {isLoading: false, err: error.message})
    }
  
    
    // fetch(`/api1/search/users?q=${keyword}`).then(
    //   resp => { 
    //     console.log('联系服务器成功', resp);
    //     return resp.json()
    //   },
    //   error => {
    //     console.log('联系服务器失败', error);
    //     return new Promise(()=> {})
    //   }
    // ).then(
    //   resp => {console.log('获取数据成功', resp);},
    //   error => {console.log('获取数据失败', error);}
    // )
    // axios.get(`/api1/search/users?q=${keyword}`).then(
    //   resp => {
    //     // console.log('请求成功',resp.data);
    //     const data = resp.data.items.map(item => {
    //       return {id: item.id, avatar: item.avatar_url, homePage: item.html_url, username: item.login}
    //     })
    //     // this.props.updateAppState({isLoading: false, githubUsers: data})
    //     PubSub.publish('github-user', {isLoading: false, githubUsers: data})
    //   },
    //   error => {
    //     // console.log('请求失败', err);
    //     // this.props.updateAppState({isLoading: false, err: error.message})
    //     PubSub.publish('github-user', {isLoading: false, err: error.message})
    //   }
    // )
  }

  render() {

    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => this.keyelement = c} type="text" placeholder="输入用户名" />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
