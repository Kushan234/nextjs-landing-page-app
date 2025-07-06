import { Button } from '@/components/ui/button'
import React from 'react'
import { FaRocket } from "react-icons/fa";
import { FaCartPlus } from 'react-icons/fa6';
import { IoColorPalette } from 'react-icons/io5';
import { MdBusinessCenter } from 'react-icons/md';
import { SiMicrostrategy } from 'react-icons/si';
import { TbBrandDolbyDigital } from 'react-icons/tb';

const serviceList =[
    {
        id: 1,
        title: 'Start Up',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod debitis laborum illum commodi repellendus quidem.',
        icon: <FaRocket />
    },
    {
        id: 2,
        title: 'Bussiness',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod debitis laborum illum commodi repellendus quidem.',
        icon: <MdBusinessCenter />
    },
    {
        id: 3,
        title: 'E-Commerce',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod debitis laborum illum commodi repellendus quidem.',
        icon: <FaCartPlus />
    },
    {
        id: 4,
        title: 'Digital Design',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod debitis laborum illum commodi repellendus quidem.',
        icon: <TbBrandDolbyDigital />
    },
    {
        id: 5,
        title: 'Unlimited Colours',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod debitis laborum illum commodi repellendus quidem.',
        icon: <IoColorPalette />
    },
    {
        id: 6,
        title: 'Strategy Solutions',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod debitis laborum illum commodi repellendus quidem.',
        icon: <SiMicrostrategy />
    }
];

const Services = () => {
  return (
    <>
    <div className="md:p-20 p-10 md:mt-10 sm:mt-10">
        <div className="">
             <Button variant="outline" className='md:w-60 sm:w-40 h-12 md:text-lg sm:text-sm md:-mt-10 sm:mt-10 border-1
                  bg-transparent text-orange-500 font-bold mb-8 '>Our Services</Button>

         <h2 className='text-lg font-bold md:text-2xl mb-2'>Our Services Made For You?</h2>
         <p className=' text-sm md:text-base text-left md:w-[70%] w-[90%] line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod debitis laborum illum commodi repellendus quidem.
             Unde molestias vitae rem tempore esse. Ipsa accusantium corporis vero recusandae, autem ducimus sit ab.</p>         
        
        <div className="md:mt-14 mt-10">
            <div className="md:grid-cols-3 grid grid-cols-3 gap-4 justify-center items-center ">
                {
                    serviceList.map((service) => (
                        <div key={service.id} className="md:flex grid  items-center gap-4 mb-6 py-2">
                            <div className="md:text-2xl text-lg text-orange-700 w-8 h-8 md:w-20 md:h-16 bg-red-200 rounded-md md:p-5 p-2">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="md:text-lg text-sm font-semibold">{service.title}</h3>
                                <p className="md:text-sm text-xs text-gray-600 line-clamp-6">{service.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Services