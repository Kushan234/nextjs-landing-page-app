import { Button } from '@/components/ui/button'
import React from 'react'

const Team = () => {
  return (
    <>
    <div className="md:p-20 p-10 md:mt-10 sm:mt-10 bg-gray-50">
        <div className="grid grid-cols-2">
            <div className="">
                 <Button variant="outline" className='md:w-60 sm:w-40 h-12 md:text-lg sm:text-sm md:-mt-10 sm:mt-10 border-1
                  bg-transparent text-orange-500 font-bold mb-8 '>Our Team</Button>

             <h1 className="">Our Team of Exceptional Talent, Innovation, and Vision</h1>

             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat veritatis quisquam.
                 Ab adipisci quibusdam magnam sed quisquam delectus ducimus. Tempora unde modi dolorem omnis harum temporibus error dolore in!</p>     
          
             <button className=' w-52 h-10 bg-green-600 rounded-sm text-white'>Join Our Team</button> 
            </div>
        </div>
    </div>
    </>
  )
}

export default Team