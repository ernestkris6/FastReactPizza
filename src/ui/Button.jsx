import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({children, disabled, to, type, onClick}) {

  // const className = 'bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4'


  const base = 'bg-yellow-400 text-sm uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed'

  const styles = {
    primary: base + ' py-3 px-4 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:'uppercase text-sm font-semibold text-stone-400 inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 border-2 border-stone-300 transition-colors duration-300 focus:outline-none focus:bg-stone-300 focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5',
  }

  if(to) 
    return <Link to={to} className={styles[type]}>{children}</Link>

  if(onClick)
    return (
      <button 
      onClick={onClick}
      disabled={disabled} 
      className={styles[type]}
      >
          {children}
      </button>)

  return (
    <button 
    disabled={disabled} 
    className={styles[type]}
    type=''
    >
        {children}
    </button>
  )
}
