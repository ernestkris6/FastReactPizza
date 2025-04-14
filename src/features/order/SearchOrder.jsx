import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
    const [searchQuery, setSearchQuery] = useState('')

const navigate = useNavigate();

function handleSubmit(e){
    e.preventDefault();
    if(!searchQuery) return;
    navigate(`/order/${searchQuery}`)
    setSearchQuery('');
    
}

  return (
    <form onSubmit={handleSubmit}>
        <input 
        placeholder='Search order #' 
        value={searchQuery} 
        onChange={(e)=> setSearchQuery(e.target.value)}
        className='w-28 rounded-full bg-yellow-100 text-sm px-4 py-2 placeholder:text-stone-400 sm:focus:w-72 transition-all duration-300 focus:ring focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 '
        />
    </form>
  )
}
