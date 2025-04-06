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
        onChange={(e)=> setSearchQuery(e.target.value)}/>
    </form>
  )
}
