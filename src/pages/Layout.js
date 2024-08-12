import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'

function Layout() {
  const logoImg = require('../assets/image/logo512.png')
  
  return (
    <>
      <Navbar />

      <Outlet />
      <Logo img={logoImg} />
    </>
  )
}

export default Layout