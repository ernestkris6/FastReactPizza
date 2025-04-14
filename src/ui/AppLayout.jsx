import React from 'react'
import Header from './Header'
import CartOverview from '../features/cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';


export default function AppLayout() {

  //to load a spinner use useNavigation
  const navigation = useNavigation();
   
  const isLoading = navigation.state === 'loading';

  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      {true && <Loader />}

        <Header />
        <div className='overflow-scroll'>
          <main className='max-w-3xl mx-auto'>
              <Outlet />
          </main>
        </div>

        <CartOverview />
    </div>
  )
}
