import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import team1 from '../../../../public/profile2.jpg'
import team2 from '../../../../public/profile5.jpg'


const Team = () => {
  return (
    <>
    <div className="md:p-20 p-10 md:mt-10 sm:mt-10 bg-gray-50 mb-10">
        <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="md:w-[80%]">
                 <Button variant="outline" className='md:w-60 sm:w-40 h-12 md:text-lg sm:text-sm md:-mt-10 sm:mt-10 border-1
                  bg-transparent text-orange-500 font-bold mb-8 '>Our Team</Button>

             <h1 className="md:text-2xl font-bold text-lg">Our Team of Exceptional Talent, Innovation, and Vision</h1>

             <p className='md:text-base text-sm mt-4 text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat veritatis quisquam.
                 Ab adipisci quibusdam magnam sed quisquam delectus ducimus. Tempora unde modi dolorem omnis harum temporibus error dolore in!</p>     
          
             <button className=' w-52 h-10 bg-green-600 rounded-sm text-white mt-10'>Join Our Team</button> 
            </div>

       
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:-ml-14 mt-10">
            <div>
              <Image src={team1} alt="team1" className="rounded-t-md w-[10rem] md:w-[20rem] md:h-52" />
              <div className="bg-red-400 md:w-[20rem] w-[8.63rem] rounded-b-md p-2 text-white px-3">
                <h4 className="font-bold md:text-lg text-sm">Fred Wilson</h4>
                <p className='md:text-base text-xs'>(Founder)</p>
              </div>
            </div>

          
            <div>
              <Image src={team2} alt="team2"  className="rounded-t-md w-[10rem] md:w-[20rem] md:h-52" />
              <div className="bg-green-600 md:w-[20rem] w-[8.63rem] rounded-b-md p-2 text-white px-3">
                <h4 className="font-bold md:text-lg text-sm">Dafny silva</h4>
                <p className='md:text-base text-xs'>(Co-Founder)</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Team