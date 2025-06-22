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
    ${navbarBg ? "bg-black shadow-md" : "fixed"} p-10 px-16  h-16 w-full z-[100] fixed `}>
      <div className="flex items-center justify-between  w-full">

       <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
           <GrTechnology />
        </div>
        <h1 className="text-xl hidden sm:block md:text-2xl text-blue-800 font-bold">BlogApp</h1>
       </div>
     <div className="hidden lg:flex items-center space-x-10">
       {
        navLinks.map((link)=>(
        <Link key={link.id} href={link.url}
        className='text-white hover:text-rose-500 font-semibold transition-all duration-200 '>
          <p>{link.label}</p>
        </Link>
        ))
       }
     </div>
     <button className=' w-52 h-10 bg-blue-800 rounded-sm'>Create Account</button>
     <GiHamburgerMenu onClick={openNav} className='h-8 w-8 cursor-pointer text-white lg:hidden'/>
      </div>
    </div>
  )
}

export default Nav