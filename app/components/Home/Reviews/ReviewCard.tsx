import React from "react";
import profile1 from "../../../../public/profile1.jpg";
import profile3 from "../../../../public/profile3.jpg";
import profile4 from "../../../../public/profile4.jpg";
import profile5 from "../../../../public/profile5.jpg";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import Image from "next/image";

const reviewCard = [
  {
    id: 1,
    image: profile1,
    name: "Elon mask",
    rating: 4.7,
    ratingIcon: <FaRegStarHalfStroke />,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga saepe, at neque iste reprehenderit blanditiis, est debitis architecto qui reicien",
  },
  {
    id: 2,
    image: profile3,
    name: "Joe Root",
    rating: 4.6,
    ratingIcon: <FaRegStarHalfStroke />,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga saepe, at neque iste reprehenderit blanditiis, est debitis architecto qui reicien",
  },
  {
    id: 3,
    image: profile4,
    name: "Dwayn smith",
    rating: 4.5,
    ratingIcon: <FaRegStarHalfStroke />,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga saepe, at neque iste reprehenderit blanditiis, est debitis architecto qui reicien",
  },
  {
    id: 4,
    image: profile5,
    name: "Jesica Doe",
    rating: 4.2,
    ratingIcon: <FaRegStarHalfStroke />,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga saepe, at neque iste reprehenderit blanditiis, est debitis architecto qui reicien",
  },
];

const ReviewCard = () => {
  return (
    <>
      <div data-aos='zoom-in' 
              data-aos-anchor-placement='top-center'
              data-aos-delay="100" 
       className="mt-10 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 bg-white ">
          {reviewCard.map((items) => (
            <div key={items.id} className="shadow-2xl flex md:p-5 sm p-2">
              <Image
                className="rounded-md mr-5 object-fit md:h-40 md:w-40 w-20 h-32"
                src={items.image}
                alt=""
                width={200}
                height={200}
              />
              <div className="mt-2 ">
                <h4 className="md:text-lg text-sm font-semibold md:mb-2">{items.name}</h4>
                <div className="flex md:gap-3 items-center text-yellow-400 md:mb-3 text-sm md:text-base">
                  <h5 className="md:text-xl text-sm font-bold text-yellow-600  ">
                    {items.rating}
                  </h5>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  {items.ratingIcon}
                </div>
                <p className="text-sm md:text-base md:line-clamp-none line-clamp-3">{items.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
