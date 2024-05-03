import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'

const Pages = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Pages
