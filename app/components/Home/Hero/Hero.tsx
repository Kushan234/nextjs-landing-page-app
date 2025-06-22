import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="relative w-full h-[110vh] sm:h-screen bg-cover flex justify-center text-left  flex-col">
     <div className="w-[90%] md:w-[80%] mx-auto items-center grid sm:grid-cols-1 lg:grid-cols-1  gap-5">

    <h3 className='md:text-lg sm:text-sm font-bold text-blue-950'>Make the smart investment</h3>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 leading-[2.5rem] md:leading-[3.5rem]'>
            Kickstart, Scale, and Thrive Faster with <span className='text-rose-200'>BlogApp</span></h1>
        <p>This system will allow users to add new products, display the list of existing products,
             update product information, and delete products from the inventory. </p>
     </div>
    </div>
    </>
  )
}

export default Hero