import React from 'react'
import { NavLink, Outlet, useOutlet } from 'react-router-dom';
export default function Home() {

console.log('@@', useOutlet()); 

  return (
    <div>
      <h3>我是Home的内容</h3>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="news">News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="message">Message</NavLink>
          </li>
        </ul>
      </div>
      {/* 指定路由组件呈现的位置 */}
      <Outlet />
    </div>
  )
}
