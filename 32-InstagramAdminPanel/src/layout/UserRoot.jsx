import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const UserRoot = () => {
  return (
    <div className='container'>
        <Outlet/>
        <Navbar/>
    </div>
  )
}

export default UserRoot