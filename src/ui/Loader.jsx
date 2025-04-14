import React from 'react'

export default function Loader() {
  return (
    <div className='absolute flex bg-slate-200/20 bg-opacity-20 backdrop-blur-sm inset-0 justify-center items-center'>
      <div className='loader'></div>
    </div>
  )
}
