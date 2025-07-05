import React from 'react'
import Image from 'next/image'
import featureImg from '../../../../public/feature.png'
import { AlarmClock, ChartBarIncreasing, Pencil, TouchpadIcon } from 'lucide-react'

const featureList = [
    {
        id:1,
        icons: <TouchpadIcon size={24}/>,
        title: "App Integration",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed reiciendis perferendis, placeat ipsa mollitia quidem tenetur iste ut impedit numquam nisi labore deleniti porro quia at veniam, dignissimos explicabo!"
    },
     {
        id:2,
        icons: <ChartBarIncreasing  size={24}/>,
        title: "Workflow Builder",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed reiciendis perferendis, placeat ipsa mollitia quidem tenetur iste ut impedit numquam nisi labore deleniti porro quia at veniam, dignissimos explicabo!"
    },
     {
        id:3,
        icons: <Pencil  size={24}/>,
        title: "Problem Solutions",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed reiciendis perferendis, placeat ipsa mollitia quidem tenetur iste ut impedit numquam nisi labore deleniti porro quia at veniam, dignissimos explicabo!"
    },
     {
        id:4,
        icons: <AlarmClock  size={24}/>,
        title: "Lifetime Access",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed reiciendis perferendis, placeat ipsa mollitia quidem tenetur iste ut impedit numquam nisi labore deleniti porro quia at veniam, dignissimos explicabo!"
    }
]

const Feature = () => {
  return (
    <>
    <div className="mt-20 mb-20 ">
      <div className="text-center mt-10 justify-center">
        <h1 className='text-2xl font-bold '> Key Features Of The Product</h1>
        <p className='p-2 text-lg '>Our product stands out with its high performance,
           delivaring blazing-fast speeds and seamless multitasking </p>
 
        <div className="p-10 px-20">
          <div className="grid grid-cols-2">


            <div className="grid grid-cols-2 gap-10  ">
            {
                featureList.map((items)=>(
                   <div key={items.id} className="rounded-md shadow-xl p-10 flex flex-col bg-gray-50">
                   <div className="bg-green-300 rounded-full absolute w-12 h-12 text-green-800 p-3">
                      {items.icons}
                      </div>
                      <h2 className='text-lg font-semibold ml-3'>{items.title}</h2>
                      <p className='text-sm mt-7 text-left'>{items.desc}</p>
                    </div>
                 
                ))
            }
            </div>

            <div className="w-[80%] mx-auto mt-10">
              <Image src={featureImg} alt='featurelogo'/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Feature