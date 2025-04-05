import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './ui/Home'
import Menu, {loader as menuLoader} from './features/menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder from './features/order/CreateOrder'
import Order from './features/order/Order'
import AppLayout from './ui/AppLayout'


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />
      }
    ]
  }
])

//create a loader, provide the loader and provide the data to the page.
//data loader can be placed anywhere but best to place in the file of that page
export default function App() {

  return (
    <RouterProvider router={router} />
  )
}