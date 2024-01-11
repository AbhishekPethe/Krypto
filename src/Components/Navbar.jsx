import React, { useState } from 'react'
import { RiMenuFoldLine } from "react-icons/ri"
import { MdOutlineClose } from "react-icons/md"

const data = [ "Home" , "Market" , "Featured" , "Users" , "Analysis" , "Contact"]

const Navbar = () => {
  const [show , setShow] = useState(false)
  return (
    <div className="absolute top-5 px-5 w-full flex justify-between">
      <p className="logo text-white text-2xl lg:text-4xl">Krypto</p>
      <div className="text-white text-4xl">
        <RiMenuFoldLine onClick={() => setShow(!show)} />
      </div>

      <div
        className={`w-[100%] h-[100vh]  fixed pt-10 top-0 z-100 ease-in duration-300 bg-red-600 text-black ${
          show === true ? "right-0" : "-right-[100%]"
        }`}
      >
        <MdOutlineClose onClick={() => setShow(false)} className='absolute right-10 text-white top-10 text-4xl ' />
        <div className='flex flex-col gap-10 text-white mt-28 text-3xl items-center  '>
          {data.map((each, i) => {
            return (
              <a
                href={`#${each}`}
                className="hover:scale-125 ease-linear duration-100"
                key={i}
                onClick={() => setShow(false)}
                
              >
                {each}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar