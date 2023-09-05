import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//plan new feature in future
// import Post from './Post.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/moviereviewDatas/:reviewDataId",
  //   element: <Post />
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
