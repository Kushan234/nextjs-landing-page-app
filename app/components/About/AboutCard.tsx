"use client"
import React, { use, useEffect, useState } from 'react'
import Image from 'next/image'
import profile1 from '../../../public/profile1.jpg'
import profile2 from '../../../public/profile2.jpg'
const AboutCard = () => {
 
  const UserCard = [
    {
      id:1,
      comment: "The many intergrations that can be linked really help me see data from other tools i also use",
      name: "John Doe",
      image: profile1 ,
      title: "Web Developer @Techstack"
    },
     {
      id:2,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. corrupti minus vero rerum!",
      name: "Joe Root",
       image: profile2 ,
      title: "Dev Ops @IT solutions"
    },
     {
      id:3,
      comment: "The many intergrations that can be linked really help me see data from other tools i also use",
      name: "Cathy heaven",
       image: profile2 ,
      title: "Full stack Developer @Techstack"
    }
  ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % UserCard.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  const user = UserCard[currentIndex];

  return (
    <>
    <div className="mt-6 transition duration-500 ease-in-out mb-20 ">
      <div className="border rounded-xl p-6 shadow-md md:w-[40rem] sm:w-[20rem]">
        <p className="text-gray-600 mb-8 text-lg">{user.comment}</p>
        <div className="flex items-center gap-4">
          <Image
            src={user.image}
            alt="profileImage"
            width={60}
            height={80}
            className="rounded-full"
          />
          <div>
            <h4 className="font-semibold">{user.name}</h4>
            <p className="text-sm text-gray-500">{user.title}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutCard