import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <header>
        <nav>
          <Link className="site-logo" to="/">#VanLife</Link>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </nav>
       </header>
    </div>
  )
}



