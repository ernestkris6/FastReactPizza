import React from 'react'

export default function Button({children, disabled}) {
  return (
    <button 
    disabled={disabled} 
    className='bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 py:4'>
        {children}
    </button>
  )
}
