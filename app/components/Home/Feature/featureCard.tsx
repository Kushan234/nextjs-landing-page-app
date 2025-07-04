import { AlarmClock, ChartBarIncreasing, Pencil, TouchpadIcon } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const featureList = [
    {
        id:1,
        icons: <TouchpadIcon />,
        title: "App Integration",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed reiciendis perferendis, placeat ipsa mollitia quidem tenetur iste ut impedit numquam nisi labore deleniti porro quia at veniam, dignissimos explicabo!"
    },
     {
        id:2,
        icons: <ChartBarIncreasing />,
        title: "Workflow Builder",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed reiciendis perferendis, placeat ipsa mollitia quidem tenetur iste ut impedit numquam nisi labore deleniti porro quia at veniam, dignissimos explicabo!"
    },
     {
        id:3,
        icons: <Pencil />,
        title: "Problem Solutions",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed reiciendis perferendis, placeat ipsa mollitia quidem tenetur iste ut impedit numquam nisi labore deleniti porro quia at veniam, dignissimos explicabo!"
    },
     {
        id:4,
        icons: <AlarmClock />,
        title: "Lifetime Access",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed reiciendis perferendis, placeat ipsa mollitia quidem tenetur iste ut impedit numquam nisi labore deleniti porro quia at veniam, dignissimos explicabo!"
    }
]

const featureCard = () => {

  return (
    <>
    <div className="">
        <div className="">
            {
                featureList.map((items)=>(
                    <div key={items.id} className="">
                        <div className="">
                            <Image src={items.icons} alt='icon' width={20}/>
                            <h3>{items.title}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default featureCard