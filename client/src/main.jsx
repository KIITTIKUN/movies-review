import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import Post from './pages/Post.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Post",
    element: <Post />,
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
