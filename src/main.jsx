import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HeroesLayout from './heroes/HeroesLayout'
import AuthLayout from './auth/AuthLayout'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Marvel from './heroes/pages/Marvel'
import Dc from './heroes/pages/Dc'
import Login from './auth/pages/Login'
import Search from './heroes/pages/Search'
import Hero from './heroes/pages/Hero'


const router = createBrowserRouter([
  
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/marvel"/>
      },
      {
        path: 'marvel',
        element: <Marvel />
      },
      {
        path: 'dc',
        element: <Dc />
      },
      {
        path: 'search',
        element: <Search/>
      },
      {
        path: 'hero/:id',
        element: <Hero/>
      },

    ]
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        path: '',
        element: <Login />
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
