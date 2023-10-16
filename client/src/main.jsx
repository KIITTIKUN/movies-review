import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/index.jsx'
import Review from './components/Review'
import Movie from './components/Movies/'
import Layout from './components/Layout'
import Register from './components/Register/index.jsx';
import Login from './components/Login'
import Profile from './components/Profile/index.jsx';

import './main.scss'
import { AuthProvider } from './auth/authContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
              index
              element={<Navigate to="/home" />}
            />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/review"
            element={<Review />}
          />
          <Route
            path="/movie"
            element={<Movie />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
        </Route>
          <Route
            path="/register"
            element={<Register />}
          />
           <Route
            path="/login"
            element={<Login />}
          />
      </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
);
