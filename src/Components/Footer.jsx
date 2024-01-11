import React from "react";

import { AiOutlineInstagram } from "react-icons/ai"
import {TiSocialFacebook , TiSocialLinkedin , TiSocialTwitter} from "react-icons/ti"
const Footer = () => {
  return (
    <div className="mt-20 lg:mt-40 flex flex-col gap-10 mx-10 text-white" id="Contact">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-evenly w-full overflow-x-scroll">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col">
            <h1 className="text-2xl text-red-600 mb-6">Krypto</h1>
            <p>123 Main Street Citytown, <br /> ST 12345 Countryland</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl text-red-600 mb-6">Links</h1>
            <div className="flex flex-col gap-2">

            <a href="">How it works</a>
            <a href="">Cryptos</a>
            <a href="">Features</a>
            <a href="">Testimonials</a>
            <a href="">Blogs</a>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl text-rose-600 mb-6">Legal</h1>
            <div className="flex flex-col gap-2">

            <p>Terms of Use</p>
            <p>Terms of Conditions</p>
            <p>Privacy Policy</p>
            <p>Coockie Policy</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col ">
          <h1 className="text-2xl text-red-600 mb-6">Newsletter</h1>
          <p>Over 2000 people have subscribed</p>
          <div className="flex flex-col gap-4 md:relative mt-5">
            <input type="text" name="" id="" placeholder="Enter the Email" className="pr-10 pl-2 py-2 rounded-xl" />
            <button className="p-2 md:p-1 bg-red-600 rounded-xl md:absolute md:left-48 md:top-1 lg:right-2 lg:top-1 ">Subscribe</button>
          </div>

        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-5 items-center md:flex-row  justify-between mb-10">
        <div className="flex gap-5">
          <p>Privacy & Terms </p>
          <p>Contact Us</p>
        </div>
        <p>Code @ABdev | Design @Community</p>
        <div className="flex gap-4 text-2xl">
          <TiSocialLinkedin />
          <TiSocialFacebook />
          <TiSocialTwitter />
          <AiOutlineInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
