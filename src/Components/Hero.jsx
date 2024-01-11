import React from "react";
import Navbar from "../Components/Navbar";
import bg from "../assets/Background.png";
import { SiBitcoinsv , SiTether , SiBinance , SiDogecoin } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-10 justify-center items-center text-white" id="Home">
      <img
        src={bg}
        alt=""
        className=" absolute -z-10 top-0 h-full w-full object-cover"
      />
      <Navbar />
      <div className="mt-32 md:mt-40 flex flex-col items-center gap-10 md:flex-row md:gap-32 ">
        <div className="text-7xl">
          <SiBitcoinsv />
        </div>
        <h1 className="text-6xl leading-[5rem] text-center">
          NEXT GENERATION <br />
          CRYPTO TRACKER
        </h1>
        <div className="text-7xl">
          <FaEthereum />
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <p className="">Crypto Market Is Now</p>
        <h1 className="text-4xl text-green-600 font-bold text-center">ONLINE</h1>
      </div>
      <div className="flex flex-row gap-5">
        <a href="#Market" className="bg-[#EF443B] rounded-xl p-4">EXPLORE NOW</a>
        <a href="#Market" className="bg-transparent rounded-xl border-4 border-[#EF443B] p-3">TRADE CRYPTO</a>
      </div>  
      <div className="flex flex-row gap-10 text-4xl mt-8  lg:mt-16">
        <SiBitcoinsv />
        <SiDogecoin />
        <SiBinance />
        <FaEthereum />
        <SiTether />
      </div>
    </div>
  );
};

export default Hero;
