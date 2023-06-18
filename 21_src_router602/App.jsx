import React from 'react'
import { NavLink, useRoutes, useInRouterContext } from "react-router-dom";

import Header from './components/Header'
import routes from './routes';

export default function App() {

  console.log('---', useInRouterContext());

  // 根据路由表生成对应的路由规则
  const element = useRoutes(routes);

  function computedClassName({ isActive }) {
    return isActive ? 'list-group-item g2zh' : 'list-group-item';
  }


  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className={computedClassName} to="/about">About</NavLink>
            <NavLink className={computedClassName} to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              { element }
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}