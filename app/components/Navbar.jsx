import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = () => {
   const sideMenuRef = useRef();

   const openMenu = () => {
      sideMenuRef.current.style.transform = 'translateX(-16rem)'
   }

   const closeMenu = () => {
      sideMenuRef.current.style.transform = 'translateX(16rem)'
   }

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
         <Image src={assets.header_bg_color} alt='header' className='w-full'/>
      </div>

      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
         <a href="#top">
            <Image src={assets.logo} className='w-28 cursor-pointer' alt='logo'/>
         </a>

         <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About Me</a></li>
            <li><a className='font-Ovo' href="#services">Services</a></li>
            <li><a className='font-Ovo' href="#work">My Work</a></li>
            <li><a className='font-Ovo' href="#contact">Contact Me</a></li>
         </ul>

         <div className='flex items-center gap-4'>

            <button>
               <Image src={assets.moon_icon} alt='icon' className='w-6'/>
            </button>

            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={assets.arrow_icon} className='w-3' alt='contact'/></a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
               <Image src={assets.menu_black} alt='icon-vlack' className='w-6'/>
            </button>
         </div>

         {/* Mobile Menu */}

         <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

            <div className='absolute right-6 top-6' onClick={closeMenu}>
               <Image src={assets.close_black} alt='icon-close' className='w-5 cursor-pointer'/>
            </div>

            <li><a className='font-Ovo' href="#top" onClick={closeMenu}>Home</a></li>
            <li><a className='font-Ovo' href="#about" onClick={closeMenu}>About Me</a></li>
            <li><a className='font-Ovo' href="#services" onClick={closeMenu}>Services</a></li>
            <li><a className='font-Ovo' href="#work">My Work</a></li>
            <li><a className='font-Ovo' href="#contact" onClick={closeMenu}>Contact Me</a></li>
         </ul>
      </nav>
    </>
  )
}

export default Navbar