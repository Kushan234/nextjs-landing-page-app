import React from 'react'
import Image from 'next/image'
import ReviewCard from './ReviewCard'

const Reviews = () => {
  return (
    <>
    <div className="md:p-20 p-10 md:mt-10 sm:mt-10">
      <div className="">
        <h1 className="text-lg font-bold md:text-2xl mb-2 text-center">What Our Happy Users Says</h1>
        <p className=' text-sm md:text-base text-center  line-clamp-4 px-20'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero provident voluptatem voluptates,
           facere earum nesciunt maxime ad quisquam corrupti.Accusantium vero provident voluptatem voluptates, </p>

           <div className="">
            <div className="">
             <ReviewCard />
            </div>
           </div>
      </div>
    </div>
    </>
  )
}

export default Reviews