import { Navigate } from "react-router-dom";

import About from '../page/About';
import Home from '../page/Home';
import Message from '../page/Home/Message';
import News from '../page/Home/News';
import Detail from '../page/Home/Message/Detail'


const routes = [
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            // path: 'detail/:id/:title/:content',
            path: 'detail',
            element: <Detail />
          }]
      },
      {
        path: 'news',
        element: <News />
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/about" />
  }
]

export default routes;