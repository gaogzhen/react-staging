import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* react中靠路由链接实现组件切换--编写路由链接 */}
              <MyNavLink to="/g2zh/about">About</MyNavLink>
              <MyNavLink to="/g2zh/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/g2zh/about" component={About} />
                  <Route path="/g2zh/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
