"use client"
import { navLinks } from '@/app/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { GrTechnology } from 'react-icons/gr'
import { GiHamburgerMenu } from "react-icons/gi";

  type props = {
    openNav: ()=> void;
  }

const Nav = ({openNav}:props) => {
  const [navbarBg,setNavbarBg] = useState(false);

  useEffect(()=>{
   const handler =()=>{
     if(window.scrollY >= 90) setNavbarBg(true);
      if(window.scrollY < 90) setNavbarBg(false);
   };
   window.addEventListener("scroll",handler)

   return ()=> window.removeEventListener("scroll",handler)

  }, []);

  return (
    <div className={`transition-all
    ${navbarBg ? " text-black shadow-md" : "fixed "} p-10 px-16 w-full z-[100] fixed `}>
      <div className="flex items-center justify-between  w-full">

       <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white">
           <GrTechnology />
        </div>
        <h1 className="text-xl hidden sm:block md:text-2xl text-blue-800 font-bold">TechNest</h1>
       </div>
     <div className="hidden lg:flex items-center space-x-10">
       {
        navLinks.map((link)=>(
        <Link key={link.id} href={link.url}
        className='  text-lg hover:text-rose-500 font-semibold transition-all duration-200 '>
          <p>{link.label}</p>
        </Link>
        ))
       }
     </div>
     <button className=' w-52 h-10 bg-blue-800 rounded-sm text-white'>Create Account</button>
     <GiHamburgerMenu onClick={openNav} className='h-8 w-8 cursor-pointer  lg:hidden'/>
      </div>
    </div>
  )
}

export default Nav