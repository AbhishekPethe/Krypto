import React from 'react'
import p1 from "../assets/bg-1.png"
import p2 from "../assets/bg-2.png"
import p3 from "../assets/bg-3.png"
import p4 from "../assets/bg-4.png"


const data = [
  {
    img: p1,
    title: "How to trade bitcoin",
    text : " Our comprehensive resources and step-by-step guides will empower you to trade Bitcoin confidently and capitalize on market opportunities."
  },
  {
    img: p2,
    title: "Gain the best exchange",
    text : "Access the top cryptocurrency exchanges on our platform, ensuring you get the best rates and liquidity for your trades."
  },
  {
    img: p3,
    title: "Reduce your loosing",
    text : "With our risk management tools and expert guidance, you can minimize losses and protect your investments."
  },
  {
    img: p4,
    title: "Win 50-50 trading stratergy",
    text : " Our proven 50-50 trading strategy maximizes your chances of success, providing a balanced approach to profitable trades"
  },
]

const Analysis = () => {
  return (
    <div className='flex flex-col gap-10 mt-20 lg:mt-40 text-white mx-5 lg:mx-36' id="Analysis">
     <h1 className='text-4xl md:text-6xl text-center'>Crypto market Analysis</h1>
      <p className=' text-lg md:text-2xl text-center'>Listen to Professional Advice</p>
      <div className='flex flex-col gap-10 md:grid md:grid-cols-2 '>
        {
          data.map((each , i) => {
            return (
              <div key={i} className='flex flex-row gap-2 items-center'>
                <img src={each.img} alt="image" className='w-[130px] h-[130px]'/>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-2xl'>{each.title}</h1>
                  <p className='text-[10px] md:text-sm opacity-60'>{each.text}</p>
                  <p className='text-[10px] md:text-sm text-red-600'>Learn More</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <button className='p-3 w-fit rounded-[25px] border-4 border-red-600 self-center font-semibold'>
        Enroll to Krypto University
      </button>
    </div>
  )
}

export default Analysis