"use client";
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6';

const ScrollToTop = () => {

       const [isVisible, setIsVisible] = useState(false);

       useEffect(()=>{
        const togglevisible = () => {
            if (window.scrollY > 300){
                setIsVisible(true);
            }else{
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', togglevisible);
        return () => {
            window.removeEventListener('scroll', togglevisible);
        };
       },[]);

       const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
       };

  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
        {isVisible &&(
            <button onClick={scrollToTop}
             className='bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none'><FaArrowUp /></button>
        )}
    </div>
  )
}

export default ScrollToTop