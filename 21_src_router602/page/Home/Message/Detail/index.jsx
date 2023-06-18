import React from 'react'
import { useLocation } from "react-router-dom";

export default function Detail() {

  // 接收params参数
  // const { id, title, content } = useParams();  
  // const { id, title, content } = useMatch('/home/message/detail/:id/:title/:content').params;  

  // 接收search参数
  // const [searchParams, setSearchParams] = useSearchParams();
  // const id = searchParams.get('id');
  // const title = searchParams.get('title');
  // const content = searchParams.get('content');

  // 接收state参数
  const {state: {id, title, content}} = useLocation()

  return (
    <ul>
      {/* <li>ID: xxx</li>
        <li>TITLE: xxx</li>
        <li>CONTENT: xxx</li> */}
      <li>ID: {id}</li>
      <li>TITLE: {title}</li>
      <li>CONTENT: {content}</li>
    </ul>
  )
}
