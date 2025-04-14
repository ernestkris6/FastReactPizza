import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkButton({children, to}) {
  return (
    <Link to={to} >
        {children}
    </Link>
  )
}
