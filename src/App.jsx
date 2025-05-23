import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './ui/Home'  
import Error from './ui/Error'
import Menu, {loader as menuLoader} from './features/menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder, {action as createOrderAction} from './features/order/CreateOrder'
import Order, {loader as orderLoader} from './features/order/Order'
import {action as UpdateOrderAction} from './features/order/UpdateOrder';
import AppLayout from './ui/AppLayout'


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,  
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: UpdateOrderAction,
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