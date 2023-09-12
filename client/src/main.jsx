import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/index.jsx'
import Review from './components/Review'
import Movie from './components/Movies/index.jsx'

import './main.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/review",
    element: <Review />,
  },
  {
    path: "/movie",
    element: <Movie />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
