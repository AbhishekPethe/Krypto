/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import bitcoin from "../assets/bitcoin.png" 
import ethereum from "../assets/ethereum.png"
import litecoin from "../assets/Litecoin.png"
import { Link, Navigate } from 'react-router-dom'

const data = [
  {
    img: bitcoin,
    name: "Bitcoin",
    desc: "The pioneering cryptocurrency that laid the foundation for the entire digital asset ecosystem and Bitcoin.",
    price : "29.4k"
  },
  {
    img: litecoin,
    name: "Litecoin",
    desc: "A fast and efficient altcoin, often referred to as the silver to Bitcoin's gold, aiming to improve transaction speeds.",
    price : "83"
  },
  {
    img: ethereum,
    name: "Ethereum",
    desc: "The blockchain platform enabling smart contracts and decentralized applications, driving innovation in the blockchain space.",
    price : "1.8k"
  },
]

const Featured = () => {
  return (
    <div className='text-white flex flex-col gap-5 mt-20 md:mt-40 text-center' id="Featured">
      <h1 className='text-4xl md:text-6xl'>Featured Crypto's</h1>
      <p className='text-lg md:text-2xl'>Here are few top crypto currencies</p>
      <div className='flex flex-col gap-10 md:flex-row md:justify-around px-10 md:px-20'>
        {
          data.map((each , i) => {
            return (
              <div key={i} className='flex flex-col gap-5 bg-white text-black rounded-2xl w-full'>
                <img src={each.img} alt="" className=''/>
                <h1 className='text-3xl font-medium'>{each.name}</h1>
                <p>{each.desc}</p>
                <div className='flex gap-5 justify-between items-center text-white mt-5 px-5 mb-2'>
                  <p className='text-[#EF443B] text-3xl font-bold'>${each.price}</p>
                  <Link to={`/coins/${each.name.toLowerCase()}`} className='bg-[#EF443B] font-bold rounded-full p-3' >Trade Now</Link>
                </div>
              </div>
            )
          })  
        }
      </div>
    </div>
  )
}

export default Featured