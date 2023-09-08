import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import Post from './pages/Post.jsx'
import Main from './pages/Main.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Post",
    element: <Post />,
  },
  {
    path: "/movie",
    element: <Main />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
