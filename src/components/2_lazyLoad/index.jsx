import React, { Component, lazy, Suspense } from 'react'
import { Route, NavLink } from "react-router-dom";
// import About from './About'
// import Home from './Home'
import Loading from './Loading';
// 路由组件懒加载
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default class Demo extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className='page-header'><h2>React Router demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* react中靠路由链接实现组件切换--编写路由链接 */}
              <NavLink className='list-group-item' to="/about">About</NavLink>
              <NavLink className='list-group-item' to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense  fallback={<Loading />}>
                  {/* 注册路由 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
