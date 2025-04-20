import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice'


export default function UpdateCartQuantity({pizzaId, currentQuantity}) {

    const dispatch = useDispatch()

    function handleIncrement(){
        dispatch(increaseItemQuantity(pizzaId))
    }

    function handleDecrement(){
        dispatch(decreaseItemQuantity(pizzaId))
    }

  return (
    <div className='flex gap-1 items-center md:gap-3'>
        <Button type='round' onClick={handleDecrement}>-</Button>
        <span className='font-medium text-base'>{currentQuantity}</span>
        <Button type='round' onClick={handleIncrement}>+</Button>
      </div>
  )
}
