import React from 'react'
import {TfiCup , TfiWallet} from "react-icons/tfi"
import { BiSolidLock, BiDollar, BiSolidGift, BiSupport} from "react-icons/bi"


const data = [
  {
    icon: <TfiCup />,
    title: "Weekly Trading Contest",
    text :" Compete and win in our thrilling weekly trading contest.",
  },
  {
    icon: <TfiWallet />,
    title: "Less commision on Trade",
    text :"Benefit from lower commission rates on your trades.",
  },
  {
    icon: <BiSolidLock />,
    title: "Safe and Secure platform",
    text :"Trade with confidence on our secure and reliable platform.",
  },
  {
    icon: <BiDollar />,
    title: "Instant Withdrawl Process",
    text :"Enjoy quick and hassle-free withdrawals whenever you need them",
  },
  {
    icon: <BiSolidGift/>,
    title: "Monthly Commision",
    text :"Earn monthly commissions for your trading activities.",
  },
  {
    icon: <BiSupport />,
    title: "24/7 Team Support",
    text :"Our dedicated support team is available round-the-clock to assist you.",
  },
]

const Features = () => {
  return (
    <div className='text-white mt-20 md:mt-40 flex flex-col gap-10 text-center mx-2 md:mx-20'>
     <h1 className='text-4xl md:text-6xl'>Attractive Features</h1>
      <p className='text-lg md:text-2xl'>Here are few features we provide</p>
      
      <div className='grid grid-cols-2 gap-10 md:grid-cols-3'>
      {
        data.map((each , i) => {
          return (
            <div className='flex flex-col gap-2' key={i}>
              <div className='flex items-center gap-2'>
                <span className='text-4xl text-red-600 mr-1'>
                {each.icon}
                </span>
                <h1 className='text-xl md:text-2xl max-sm:text-start'>{each.title}</h1>
              </div>
              <p className='max-sm:text-start'>{each.text}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Features