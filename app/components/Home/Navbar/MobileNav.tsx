import { navLinks } from '@/app/constant/constant'
import Link from 'next/link'
import React from 'react'
import { IoCloseSharp } from "react-icons/io5";


 type props = {
  showNav: boolean;
    closeNav: ()=> void;
  }


const MobileNav = ({closeNav,showNav}:props) => {
  const navOpen = showNav ? 'translate-x-0' : '-translate-x-[100%]';
  return (
    <div className="">
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-gray-600 
      opacity-70 w-full h-screen`}>
    </div>
    <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform
     transition-all duration-500 delay-300  w-[80%] sm:w-[60%] bg-blue-900 space-y-6 z-[1050]`}>
      {
      navLinks.map((link)=>(
        <Link key={link.id} href={link.url}
        className='text-white w-fit text-[20px]  ml-12 border-b-[1.5px] pb-1 border-black sm:text-[30px] '>
          <p>{link.label}</p>
        </Link>
      ))}
    <IoCloseSharp onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'/>
    </div>
    </div>
  )
}

export default MobileNav