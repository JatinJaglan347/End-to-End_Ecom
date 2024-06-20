// 'use client'

import React from 'react'
// import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { RiUserLocationFill } from "react-icons/ri";
import { useState ,useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]


export function Mainnavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }



  return (
    <div className="w-full bg-transparent">
      <div className="mx-auto flex w-[80%]  items-center justify-between px-0 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
          <BsCart4 className=' text-4xl md:text-5xl lg:text-6xl' />
          </span>
          <span className="font-bold text-xl md:text-2xl">Ecom</span>
        </div>
        
        <div className="hidden lg:block ">
            <div className=' flex justify-center items-center '>
                
                <ul className="ml-12 inline-flex space-x-8">
                    
                    {menuItems.map((item) => (
                    <li key={item.name}>
                        <NavLink
                        to={item.href}
                        className={ ({isActive})=> `inline-flex items-center text-lg font-semibold  ${isActive ? " text-[#01D7E2] underline  underline-offset-2  hover:text-slate-700": " text-slate-800 hover:text-[#01D7E2]"}`}
                        >
                        {item.name}
                        
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </div> 
        </div>
        <div className="flex grow justify-end">
        <div className="relative w-[70%] max-w-[400px]">
            <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <input
            className="w-full h-10 lg:h-12 rounded-lg bg-gray-100 px-3 pl-10 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Search"
            />
        </div>
        </div>
        <div className='flex items-center space-x-2 bg-white px-3 py-2 rounded-md shadow-md text-gray-800 focus:outline-none ml-4'>
            <FaCartShopping className=' inline-block w-5 h-5' />         
        </div>
        <div className=' hidden lg:block items-center space-x-2 bg-white px-3 py-2 rounded-md shadow-md text-gray-800 focus:outline-none ml-4'>
            <FaRegUser className='h-5 w-5 ' />
        </div>
        
        
        <div className="ml-2 lg:hidden">
          <IoMdMenu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                        <BsCart4 className=' text-4xl md:text-5xl lg:text-6xl' />
                    </span>
                    <span className="font-bold text-xl md:text-2xl">Ecom</span>
                    
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <RxCross2 className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        
                      </a>
                    ))}
                  </nav>
                </div>
                <div>
                  <button className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black items-center justify-center text-center">
                    <FaRegUser className="h-5 w-full text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
