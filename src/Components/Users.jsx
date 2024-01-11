import React from "react";
import p1 from "../assets/Ellipse 6.png"
import p2 from "../assets/Ellipse 6-1.png"
import p3 from "../assets/Ellipse 6-2.png"
import {PiQuotesBold} from "react-icons/pi"

const data = [
    {
        text: "I've been trading on this platform for over a year now, and it's been an incredible journey.",
        img: p1,
        name: "Cameroom Williamson",
        occu : "FX trader"
    },
    {
        text: "I can't say enough good things about this crypto trading site. The 24/7 support team has been a lifesaver whenever I faced any issues",
        img: p2,
        name: "Bessie Cooper",
        occu : "Stock Manager"
    },
    {
        text: "Safety was my top concern when I first ventured into crypto trading. Thankfully, this platform has exceeded my expectations in terms of security measures.",
        img: p3,
        name: "Albert Flores",
        occu : "Crypto Analyst"
    },
]

const Users = () => {
  return (
    <div className="flex flex-col gap-10 text-white mt-20 md:mt-40 text-center" id="Users">
      <h1 className="text-4xl md:text-6xl">30 Million Users Worldwide</h1>
        <p className="text-lg md:text-2xl">Listen to what our users has to say</p>
          <div className="flex flex-col lg:flex-row md:justify-around gap-10 lg:mx-[400px]">
              {
                  data.map((each , i) => {
                      return (
                          <div className="flex flex-col  items-center gap-5 border-2 rounded-xl border-red-600 p-10 mx-10" key={i}>
                              <span className="text-5xl text-red-600">
                                  <PiQuotesBold />
                              </span>
                              <p className="lg:w-[250px] lg:h-[150px] ">{each.text}</p>

                              <div className="flex flex-col items-center gap-2">
                                  
                              <img src={each.img} alt="" className="w-[30px] h-[30px]"/>
                              <p>{each.name}</p>
                              <p className="text-red-600">{each.occu}</p>
                              </div>
                          </div>
                      )
                  })
              }
          </div>
    </div>
  );
};

export default Users;
