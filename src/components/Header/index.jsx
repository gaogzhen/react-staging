import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Header() {

 const navigate =  useNavigate();

 /**
  * 前进
  */
 function forward (){
  navigate(1)
 }

 /**
  * 后退
  */
 function back () {
  navigate(-1)
 }

  return (
    <div className="col-xs-offset-2 col-xs-8">
      <div className="page-header"><h2>React Router Demo</h2></div>
      <button onClick={forward}>前进</button>
      <button onClick={back}>后退</button>
    </div>
  )
}
