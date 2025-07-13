import React from "react";
import Image from "next/image";
import featureImg from "../../../../public/feature.png";
import {
  AlarmClock,
  ChartBarIncreasing,
  Pencil,
  TouchpadIcon,
} from "lucide-react";

const featureList = [
  {
    id: 1,
    icons: <TouchpadIcon />,
    title: "App Integration",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed reiciendis perferendis, placeat ipsa mollitia quidem tenetur iste ut impedit numquam nisi labore deleniti porro quia at veniam, dignissimos explicabo!",
  },
  {
    id: 2,
    icons: <ChartBarIncreasing  />,
    title: "Workflow Builder",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed reiciendis perferendis, placeat ipsa mollitia quidem tenetur iste ut impedit numquam nisi labore deleniti porro quia at veniam, dignissimos explicabo!",
  },
  {
    id: 3,
    icons: <Pencil />,
    title: "Problem Solutions",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed reiciendis perferendis, placeat ipsa mollitia quidem tenetur iste ut impedit numquam nisi labore deleniti porro quia at veniam, dignissimos explicabo!",
  },
  {
    id: 4,
    icons: <AlarmClock />,
    title: "Lifetime Access",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed reiciendis perferendis, placeat ipsa mollitia quidem tenetur iste ut impedit numquam nisi labore deleniti porro quia at veniam, dignissimos explicabo!",
  },
];

const Feature = () => {
  return (
    <>
      <div className="mt-20 mb-10 ">
        <div className="text-center mt-10 justify-center">
          <h1 className="sm:text-lg md:text-2xl font-bold ">
         
            Key Features Of The Product
          </h1>
          <p className="p-2 md:text-lg sm:text-sm">
            Our product stands out with its high performance, delivaring
            blazing-fast speeds and seamless multitasking{" "}
          </p>

          <div className="p-5 md:p-10 md:px-20 ">
            <div className="grid md:grid-cols-2">
              
              <div data-aos='fade-right' 
              data-aos-anchor-placement='top-center'
              data-aos-delay="200" 
               className=" md:grid-cols-2 grid grid-cols-2 gap-4 justify-center items-center">
                {featureList.map((items) => (
                  <div
                    key={items.id}
                    className="rounded-md shadow-xl md:p-10 p-5 flex flex-col bg-gray-50 relative"
                  >
                    <div className="bg-green-300 rounded-full absolute w-8 h-8 md:w-12 md:h-12 text-green-800 p-2 flex items-center justify-center ">
                      {items.icons}
                    </div>
                    <h2 className="md:text-lg sm:text-sm font-semibold ml-8">
                      {items.title}
                    </h2>
                    <p className="text-xs md:text-base mt-7 text-left line-clamp-4 md:line-clamp-none">
                      {items.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div data-aos='fade-left' 
              data-aos-anchor-placement='top-center'
              data-aos-delay="400" 
               className="w-[80%] mx-auto mt-10">
                <Image src={featureImg} alt="featurelogo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
