import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import CV from "../assets/cv.pdf"

const Navbar = () => {
  const [Menu, setMenu] = useState(false);
  const items = [
    { id: 1, text: "About" },
    { id: 2, text: "Services" },
    { id: 3, text: "Work" },
    { id: 4, text: "Testimonials" },
    { id: 5, text: "Contact" },
  ];
  return (
    <div className=" bg-yellow-50 text-black w-full">
      <div className=" container mx-auto p-4 hidden md:flex justify-between items-center ">
        <div
          className=" text-xl md:text-2xl font-bold flex
          items-center"
        >
          <span className=" text-black">Iron</span>
          <span className=" text-yellow-500">Coding</span>
        </div>
        <div className=" hidden md:flex space-x-6 items-center list-none text-lg">
          {items.map(({ id, text }) => (
            <li
              key={id}
              className=" hover:text-yellow-500 duration-200 cursor-pointer"
            >
              {text}
            </li>
          ))}
        </div>
        <a
          href=""
          className=" text-lg  bg-yellow-500 text-black px-4 py-2
          rounded hover:bg-yellow-400">
          Download CV
        </a>
      </div>

      <div className=" flex w-full justify-between items-center md:hidden
      p-2 shadow-sm ">
        <div className=" text-xl font-bold flex items-center gap-2">
          <span className="text-black">Iron</span>
          <span className="text-yellow-500">Coding</span>
        </div>

      <div className=" md:hidden flex justify-end 
      text-3xl text-black items-center gap-2">
        <div onClick={()=> setMenu(!Menu)}>
          { Menu ? (<IoClose/>) : (<IoMdMenu/>)}
        </div>
      </div>
      </div>

      <div>
        {Menu && (
          <div className=" md:hidden bg-yellow-50 py-6 justify-center items-center
          gap-2 mx-6 text-lg text-black flex-col list-none shadow-sm">
              {items.map(({ id, text }) => (
            <li
              key={id}
              className=" hover:text-yellow-500 duration-200 cursor-pointer border-b w-11/12 "
            >
              {text}
            </li>
          ))}

          <a className=" relative top-5 left-[40%] text-lg bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
          Download CV
        </a>

          </div>
        )}
      </div>
      




    </div>
  );
};

export default Navbar;
