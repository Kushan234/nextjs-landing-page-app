import React from 'react'
import Image from 'next/image'
import about from '../../public/about.png'
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "lucide-react"
import AboutCard from './AboutCard'

const About = () => {
  return (
    <>
    <div className="md:mt-32 mb-10" >
        <div className="grid md:grid-cols-2 px-14 sm:grid-cols-1">
            <div data-aos='zoom-in' data-aos-anchor-placement='top-center' 
             className="ml-14  ">
                <Image src={about} alt='about' width={600}/>
            </div>

            <div className="">
                 <Button variant="outline" className='md:w-60 sm:w-40 h-12 md:text-lg sm:text-sm md:-mt-10 sm:mt-10 border-1
                  bg-transparent text-orange-500 font-bold mb-8 '>About us</Button>

                  <h2 className='font-bold md:text-2xl sm:text-lg mb-5'>Everything You Need To Grow Your Business</h2>

                  <p className='text-left md:text-lg sm:text-sm font-light mb-10 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam vitae placeat, a 
                    natus cupiditate illo vel est rem exercitationem mollitia voluptatum quidem et quas.
                     Perspiciatis nemo quos cumque ea laboriosam!</p>

                     <div className="ml-10 mt-5 font-medium ">
                       <Button  variant="secondary" size="icon" className="size-8" >
                    <p className='text-orange-500 font-bold'> Learn More</p>
                    <ChevronRightIcon className='text-orange-500 font-bold'/>
                     </Button>
                     </div>

                     <div className="">
                        <AboutCard />
                     </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About