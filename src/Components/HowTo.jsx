import React from 'react'
import img from "../assets/steps-bg.png"
const HowTo = () => {
  return (
    <div className='flex flex-col gap-10 w-full h-fit mt-20 lg:mt-40 text-white text-center '>
      <h1 className='text-4xl md:text-6xl'>How To Trade With Krypto</h1>
      <p className=' text-lg md:text-2xl'>Few steps to start your Krypto Journey</p>
      <div className='flex flex-col gap-5 md:flex-row'>
        <img src={img} alt="" className='md:w-[60%] md:h-[600px] md:object-contain' />
        <div className='flex flex-col gap-6 text-xl justify-center text-start lg:gap-10'>
          <p className='p-5 border-[1px] border-[#EF443B] rounded-full '><span className='bg-[#EF443B] rounded-full p-2 mr-3'>01</span>
            Create an account</p>
            <p className='p-5 border-[1px] border-[#EF443B] rounded-full'><span className='bg-[#EF443B] rounded-full p-2 mr-3'>02</span>
            Download platform</p>
            <p className='p-5 border-[1px] border-[#EF443B] rounded-full'><span className='bg-[#EF443B] rounded-full p-2 mr-3'>03</span>
            Select Crypto</p>
            <p className='p-5 border-[1px] border-[#EF443B] rounded-full'><span className='bg-[#EF443B] rounded-full p-2 mr-3'>04</span>
            Start trading</p>
        </div>
      </div>
    </div>
  )
}

export default HowTo