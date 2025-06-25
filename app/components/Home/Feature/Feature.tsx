import React from 'react'
import Image from 'next/image'
import featureImg from '../../../../public/feature.png'
const Feature = () => {
  return (
    <>
    <div className="">
      <div className="">
        <h1 className=''> Key Features Of The Product</h1>

        <p>Our product stands out with its high performance,
           delivaring blazing-fast speeds and seamless multitasking </p>
 
        <div className="">
          <div className="grid grid-cols-2">
            <div className="">
            
            </div>
            <div className="">
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