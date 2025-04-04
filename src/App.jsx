import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Menu from './features/menu/Menu'
import Cart from './features/cart/Cart'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  }
])

export default function App() {

  return (
    <RouterProvider router={router} />
  )
}