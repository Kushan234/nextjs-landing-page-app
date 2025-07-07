import React from 'react'
import profile1 from '../../../../public/profile1.jpg'
import profile3 from '../../../../public/profile3.jpg'
import profile4 from '../../../../public/profile4.jpg'
import profile5 from '../../../../public/profile5.jpg'    
import {  FaStar } from 'react-icons/fa6'
import Image from 'next/image'

 const reviewCard = [
    {
        id:1,
        image: profile1,
        name: "Jesica Doe",
        rating: 4.7,
        ratingIcon:<FaStar />,
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga saepe, at neque iste reprehenderit blanditiis, est debitis architecto qui reicien"
    },
     {
        id:2,
        image: profile3,
        name: "Jesica Doe",
        rating: 4.7,
        ratingIcon:<FaStar />,
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga saepe, at neque iste reprehenderit blanditiis, est debitis architecto qui reicien"
    },
     {
        id:3,
        image: profile4,
        name: "Jesica Doe",
        rating: 4.7,
        ratingIcon:<FaStar />,
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga saepe, at neque iste reprehenderit blanditiis, est debitis architecto qui reicien"
    },
     {
        id:4,
        image: profile5,
        name: "Jesica Doe",
        rating: 4.7,
        ratingIcon:<FaStar />,
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga saepe, at neque iste reprehenderit blanditiis, est debitis architecto qui reicien"
    },

 ]

const ReviewCard = () => {
  return (
    <>
    <div className="">
        <div className="">
            {
                reviewCard.map((items)=>(
                    <div key={items.id} className="">
                        <Image src={items.image} alt="" width={200}  height={200}/>
                        <div className="">
                            <h4>{items.name}</h4>
                            <h5>{items.rating}</h5>
                            {items.ratingIcon}
                            <p>{items.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default ReviewCard