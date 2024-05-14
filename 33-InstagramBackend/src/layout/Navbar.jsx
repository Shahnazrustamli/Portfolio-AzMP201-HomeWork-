import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div><Link to="/"><i class="fa-solid fa-house"></i></Link></div>
        <div><Link to="/search"><i class="fa-solid fa-magnifying-glass"></i></Link></div>
        <div><Link to="/login"><i class="fa-solid fa-arrow-right-to-bracket"></i></Link></div>
        <div><Link to="/register"><i class="fa-solid fa-arrow-right-to-bracket"></i></Link></div>
        <div><Link to="/profile"><i class="fa-regular fa-user"></i></Link></div>
    </div>
  )
}

export default Navbar