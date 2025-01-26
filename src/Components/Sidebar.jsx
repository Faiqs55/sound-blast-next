"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { GrGallery } from "react-icons/gr";
import { GiHeartInside } from "react-icons/gi";
import { MdWhatshot } from "react-icons/md";
import { GiLoveSong } from "react-icons/gi";
import { IoAlbumsSharp } from "react-icons/io5";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(()=>{
     let screenSize = screen.availWidth;
     if(screenSize < 1024){
      setMenuOpen(false);
     }
  }, [])

  const menuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`${
        menuOpen
          ? "w-[60%] sm:w-[35%] md:w-[30%] xl:w-[20%]"
          : "w-[12%] sm:w-[8%] md:w-[5%]"
      } duration-500 h-[90vh] bg-[#1f1f1f] rounded-lg text-white ${
        menuOpen ? "absolute" : ""
      } lg:relative left-0 z-[1000]`}
    >
      {/* LOGO  */}
      <div
        onClick={menuHandler}
        className="flex cursor-pointer hover:bg-[#222] items-center justify-end md:mt-4 mt-2 border-b py-2 border-gray-600"
      >
        <img
          className={`${menuOpen ? "" : "rotate-[-45deg] "} duration-500 h-[30px] md:h-[50px]`}
          src="/soundBlast-logo-neon.png"
          alt="neon logo"
        />
      </div>
      <ul className="flex flex-col lg:gap-2 text-lg my-4">
        <li className="hover:text-[#08dcda] duration-300">
          <Link
            className={`w-full flex items-center gap-3 duration-300 py-2 hover:bg-[#444] ${
              menuOpen ? "pl-12" : "justify-center"
            }`}
            href={"/"}
          >
            <GoHomeFill className="text-2xl" />
            {menuOpen ? "Home" : ""}
          </Link>
        </li>
        <li className="hover:text-[#08dcda] duration-300">
          <Link
            className={`w-full flex items-center gap-3 duration-300 py-2 hover:bg-[#444] ${
              menuOpen ? "pl-12" : "justify-center"
            }`}
            href={"/"}
          >
            <MdOutlineRoundaboutRight className="text-2xl" />
            {menuOpen ? "About" : ""}
          </Link>
        </li>
        <li className="hover:text-[#08dcda] duration-300">
          <Link
            className={`w-full flex items-center gap-3 duration-300 py-2 hover:bg-[#444] ${
              menuOpen ? "pl-12" : "justify-center"
            }`}
            href={"/"}
          >
            <GrContact className="text-2xl" />
            {menuOpen ? "Contact" : ""}
          </Link>
        </li>
        <li className="hover:text-[#08dcda] duration-300">
          <Link
            className={`w-full flex items-center gap-3 duration-300 py-2 hover:bg-[#444] ${
              menuOpen ? "pl-12" : "justify-center"
            }`}
            href={"/"}
          >
            <GrGallery className="text-2xl" />
            {menuOpen ? "Gallery" : ""}
          </Link>
        </li>
        <li className="hover:text-[#08dcda] duration-300">
          <Link
            className={`w-full flex items-center gap-3 duration-300 py-2 hover:bg-[#444] ${
              menuOpen ? "pl-12" : "justify-center"
            }`}
            href={"/"}
          >
            <GiHeartInside className="text-2xl" />
            {menuOpen ? "Arists" : ""}
          </Link>
        </li>
        <li className="hover:text-[#08dcda] duration-300">
          <Link
            className={`w-full flex items-center gap-3 duration-300 py-2 hover:bg-[#444] ${
              menuOpen ? "pl-12" : "justify-center"
            }`}
            href={"/"}
          >
            <MdWhatshot className="text-2xl" />
            {menuOpen ? "Trending Now" : ""}
          </Link>
        </li>
        <li className="hover:text-[#08dcda] duration-300">
          <Link
            className={`w-full flex items-center gap-3 duration-300 py-2 hover:bg-[#444] ${
              menuOpen ? "pl-12" : "justify-center"
            }`}
            href={"/"}
          >
            <GiLoveSong className="text-2xl" />
            {menuOpen ? "Fav Songs" : ""}
          </Link>
        </li>
        <li className="hover:text-[#08dcda] duration-300">
          <Link
            className={`w-full flex items-center gap-3 duration-300 py-2 hover:bg-[#444] ${
              menuOpen ? "pl-12" : "justify-center"
            }`}
            href={"/"}
          >
            <IoAlbumsSharp className="text-2xl" />
            {menuOpen ? "Fav Albums" : ""}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
