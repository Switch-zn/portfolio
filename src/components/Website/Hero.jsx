import React from "react";

const Hero = () => {
  return (
    <div className="background h-screen justify-center items-center">
      <div className=" bg-black/50 absolute top-0 left-0 w-full h-screen"></div>
      <div className=" absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className=" md:left-[10%] max-w-[1100px m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1>Private Beaches & Gateways</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            debitis aliquid, eos omnis rem blanditiis porro dolore aperiam
            provident dolorem.
          </p>
          <button>Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
