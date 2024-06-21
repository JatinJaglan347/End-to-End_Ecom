import React from 'react'
import { Mainnavbar } from './components/Navbar/Mainnavbar'
import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'
import Subnavbar from './components/Navbar/Subnavbar'
import Headroom from 'react-headroom'

function Layout() {
  return (
    <div>
        <Mainnavbar/>
        <Subnavbar/>
        <Outlet/>
        <Footer/>
    </div>
    
  )
}

export default Layout