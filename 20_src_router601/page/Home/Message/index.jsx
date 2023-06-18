import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
  const [messages, setMessages] = useState([
    { id: 1, title: '消息1', content: '锄禾日当午'},
    { id: 2, title: '消息2', content: '汗滴禾下土'},
    { id: 3, title: '消息3',content: '谁知盘中餐' },
    { id: 4, title: '消息4', content: '粒粒皆辛苦' }
  ])

  
  // 查看详情
  function showDetail() {
    console.log('查看这消息的跟路吧');
  }
  
  return (
    <div>
      <ul>
        {
          messages.map((msg) => {
            return (
              <li key={msg.id}>
                {/* params 参数  */}
                {/* <Link to={`detail/:id/:title/:content`}>{msg.title}</Link>&nbsp;&nbsp; */}
                {/* search  */}
                {/* <Link to={`detail?id=${msg.id}&title=${msg.title}&content=${msg.content}`}>{msg.title}</Link>&nbsp;&nbsp; */}
                {/* state  参数 */}
              <Link to="detail" state={{id: msg.id, title: msg.title, content: msg.content}}>{msg.title}</Link>&nbsp;&nbsp;
              <button onClick={showDetail}>查看详情</button>
              </li>
            )
          })
        }
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
