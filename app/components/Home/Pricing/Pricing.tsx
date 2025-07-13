import React from 'react'

const pricingTag = [
    {
        id:1,
        duration: "3 Month Membership",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat veritatis quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat veritatis quisquam.",
        price: "$39.99",
        month:"/Month",    
    },
    {
        id:2,
        duration: "12 Month Membership",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat veritatis quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat veritatis quisquam.",
        price: "$19.99",
        month:"/Month",    
    },
    {
        id:3,
        duration: "Life time Membership",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat veritatis quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat veritatis quisquam.",
        price: "$9.99",
        month:"/Month",    
    },
]

const Pricing = () => {
  return (
    <>
    <div className="md:p-20 p-5 md:mt-10 mt-20 bg-gray-50">
        <div className="">
             <h1 className="md:text-2xl font-bold text-lg text-center">Choose The Plan That's Right For You</h1>

             <p className='md:text-base text-sm md:mt-4 mt-2 text-center md:px-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat veritatis quisquam.
                 Ab adipisci quibusdam magnam sed quisquam delectus ducimus.   </p>

                 <div data-aos='fade-up' 
              data-aos-anchor-placement='top-center'
              data-aos-delay="200" 
                  className="md:flex grid grid-cols-3 mt-5 gap-2">
                    {
                        pricingTag.map((item) => (
                            <div key={item.id} className="md:w-[30%] sm:w-[50%] w-full bg-white border-t-4 border-rose-300 shadow-xl  rounded-xl md:p-10 p-5 md:m-5">
                                <h2 className="md:text-lg text-base font-bold text-cyan-500">{item.duration}</h2>
                                <p className='md:text-base text-xs md:mt-5 line-clamp-5 mt-2'>{item.desc}</p>
                                <h3 className='md:text-4xl text-lg font-bold md:mt-8 mt-3'>{item.price} 
                                    <span className='text-sm text-gray-500 px-2'>{item.month}</span></h3>
                              <button className="md:w-52 w-20 md:h-10 h-8 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-600  transition-all duration-300 rounded-sm text-white md:mt-10 mt-5 text-xs md:text-base">
                                    Upgrade Now
                                    </button>
                            </div>
                        ))
                    }
                    </div>   
        </div>
    </div>
    </>
  )
}

export default Pricing