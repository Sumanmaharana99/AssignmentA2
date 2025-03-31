import React, { useState } from 'react'
import logo from '../assets/logo1.png'
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <>
    <nav className='bg-transparent w-full p-1 mt-0 absolute top-2 z-10 text-white'>
        <div className='flex gap-3 items-center justify-between px-5'>
            <div className='flex items-center'>
            <img className ='w-[25px] h-[25px] md:w-[35px] md:h-[35px]' src={logo} alt=''/>
            <h1 className='text-2xl font-bold'>A2 Developers</h1>
            </div>
            <div className='hidden md:flex items-center space-x-6'>
            <a href='#' className='hover:text-gray-300 transition duration-300 hover:scale-105'>Home</a>
            <a href='#' className='hover:text-gray-300 transition duration-300 hover:scale-105'>About</a>
            <a href='#' className='hover:text-gray-300 transition duration-300 hover:scale-105'>Products</a>
            <a href='#' className='hover:text-gray-300 transition duration-300 hover:scale-105'>Contact</a>
            </div>
 
            <button className='md:hidden focus:outline-none' onClick={() => setIsOpen(!isOpen)} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" color="#FFFFF" fill="none">
            <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </button>
        </div>
        {isOpen && (
           <div className='md:hidden text-xl flex flex-col items-center space-y-4 mt-4 bg-black bg-opacity-80 p-4'>
           <a href='#' className='text-white hover:text-gray-300 transition-colors' onClick={() => setIsOpen(false)}>Home</a>
           <a href='#' className='text-white hover:text-gray-300 transition-colors' onClick={() => setIsOpen(false)}>About</a>
           <a href='#' className='text-white hover:text-gray-300 transition-colors' onClick={() => setIsOpen(false)}>Products</a>
           <a href='#' className='text-white hover:text-gray-300 transition-colors' onClick={() => setIsOpen(false)}>Contact</a>
         </div>
        )}
    </nav>
        <hr className="border-white border-2 w-full my-4 top-11  absolute opacity-100" /> 
        </>
  )
}

export default Navbar
