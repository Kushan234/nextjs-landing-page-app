import React from 'react'
import { FaFacebook, FaTwitter, FaX } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
    <div className="md:p-10 p-5 md:px-20  ">
        <div className="grid grid-cols-4 md:ml-7 px-2 ">

            <div className="">
                <h4 className='font-bold md:text-lg text-gray-800 mb-5 text-sm '>Solution</h4>
                <p className='md:text-base text-xs mb-2 font-semibold text-gray-600'>Enterprice</p>
                <p className='md:text-base text-xs mb-2 font-semibold text-gray-600'>By Workflow</p>
                <p className='md:text-base text-xs mb-2 font-semibold text-gray-600'>By Team</p>
            </div>

             <div className="">
                <h4 className='font-bold md:text-lg text-gray-800 mb-5 text-sm '>Company</h4>
                <p className='md:text-base text-xs mb-2 font-semibold text-gray-600'>About Us</p>
                <p className='md:text-base text-xs mb-2 font-semibold text-gray-600'>News & Press</p>
                <p className='md:text-base text-xs mb-2 font-semibold text-gray-600'>Our Customer</p>
                <p className='md:text-base text-xs mb-2 font-semibold text-gray-600'>Leadership</p>
                <p className='md:text-base text-xs mb-2 font-semibold text-gray-600'>Careers</p>
            </div>

             <div className="">
                <h4 className='font-bold md:text-lg text-gray-800 mb-5 text-sm '>Resources</h4>
                <p className='md:text-base text-xs mb-2 font-semibold text-gray-600'>Blog</p>
                <p className='md:text-base text-xs mb-2 font-semibold text-gray-600'>Webinar & Events</p>
                <p className='md:text-base text-xs mb-2 font-semibold text-gray-600'>Posdcast</p>
                <p className='md:text-base text-xs mb-2 font-semibold text-gray-600'>E-book & Guides</p>
            </div>

             <div className="">
                <h4 className='font-bold md:text-lg text-gray-800 mb-5 text-sm '>Contact Us</h4>

                <p className='md:text-base text-xs mb-2 font-semibold text-gray-600'>Mobile Number</p>
                <h6 className='font-bold md:text-base text-gray-900 mb-5 text-xs'>+(94) 912245676</h6>

                <p className='md:text-base text-xs mb-2 font-semibold text-gray-600'>Email</p>
                <h6 className='font-bold md:text-base text-gray-900 mb-5 text-xs'>example@gmail.com</h6>
            </div>
        </div>
        <hr className='mt-5'/>
       <div className="flex justify-between items-center mt-5">
         <p className='md:text-base text-gray-500 text-xs'>Copyright © 2025 webdev.All rghts reserved</p>
         <p className='md:flex md:items-center gap-3 md:text-base text-gray-500 text-xs mr-10'>social :
           <FaFacebook /> <FaTwitter /><FaX /></p> 
       </div>
    </div>
    </>
  )
}

export default Footer