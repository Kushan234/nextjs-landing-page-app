import React from 'react'
import Image from 'next/image'
import heroImg1  from '../../../../public/heroImg.png'
import google from '../../../../public/google.png'
import linkedin from '../../../../public/inkdin.png'
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <>
    <div className="p-20 md:mt-20 sm:mt-10">
     <div className="grid grid-cols-1 md:grid-cols-2">
      <div data-aos="fade-up"
       className="w-[100%] md:w-[90%] mt-14">
    <h3 className='md:text-xl sm:text-sm font-bold text-blue-950 mb-5'>  Empower Your Digital Future</h3>
        <h1 className='text-2xl md:text-5xl font-bold text-blue-950 mb-5 leading-[1.5rem] md:leading-[3.5rem]'>
            Launch, Grow, and Succeed with <span className='text-rose-200'>TechNest</span></h1>
        <p className='text-sm md:text-lg '>  TechNest helps you bring your ideas to life—manage your products,
           streamline updates, and stay ahead with our intuitive platform. </p>
    
    <div className="md:grid sm:grid-cols-2 md:grid-cols-2 mt-10">
       <div className="flex ">
      <Image src={google} alt='googlelogo' width={80} height={80}/>
      <div className="mt-4 ml-3">
        <p className='flex font-bold text-xl'>4.5<span className='flex ml-3 text-yellow-400' ><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></span></p>
      <p>Best Rated on google</p>
      </div>
     </div>
     <div className="flex">
      <Image src={linkedin} alt='linkedin' width={80} height={80} />
      <div className="mt-4 ml-3">
        <p className='flex font-bold text-xl'>4.7<span className='flex ml-3 text-yellow-400' ><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></span></p>
      <p>Best rated on linkedin</p>
      </div>
      
     </div>
      <Button className='md:w-60 sm:w-40 h-12 md:text-md sm:text-sm md:mt-10 sm:mt-10 bg-green-800 cursor-pointer'>Get Started</Button>
    </div>
   

     </div>
    
      <div data-aos="fade-down"
      data-aosdelay="150"
       className="md:w-[80%] md:mb-2 sm:mb-5">
        <Image  src={heroImg1} alt='hero_img' className='w-[70%] md:w-[100%]'
         width={500} height={20}/>
      </div>
      
      </div>
     
    </div>
    </>
  )
}

export default Hero