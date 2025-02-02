"use client";
import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { CiSaveDown1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className='h-[10vh] w-full fixed top-0 left-0 bg-[#000000] text-white flex items-center'>
      <div className='flex justify-between items-center w-[95%] my-0 mx-auto'>
        {/* LOGO  */}
        <div>
            <img src={'/soundBlast-logo.png'} className='h-[45px] w-[75px]' alt='logo for Sound Blast' />
        </div>

        {/* SEARCH  */}
        <div className='flex items-center gap-2'>
        <GoHomeFill className='hidden md:block text-5xl bg-[#1f1f1f] p-3 hover:bg-[#313131] cursor-pointer rounded-full' />
        {/* SEARCH INPUT  */}
        <div className='flex items-center bg-[#1f1f1f] gap-2 rounded-full p-3 hover:bg-[#313131] focus-within:bg-[#313131] focus-within:border hover:border border-gray-500'>
        <FiSearch className='text-2xl text-gray-500' />
        <input type="text" className='bg-transparent outline-none w-[100px] focus:w-[250px] duration-500' placeholder='What do you want to PLay?' />
        </div>
        </div>

        {/* LINKS  */}
        <div className='flex items-center gap-5'>
            <span className='bg-white hidden text-black text-sm px-4 cursor-pointer hover:scale-[1.1] hover:bg-slate-100 duration-300 py-2 rounded-full font-bold md:flex items-center'>Explore Premium</span>
            <span className='hidden md:flex items-center gap-1 font-semibold'><CiSaveDown1 className='text-xl' />Install App</span>
            {/* <IoIosNotificationsOutline className='text-2xl font-bold hidden md:block' />
            <div className='p-2 bg-[#3f3f3f] rounded-full'>
                <div className='bg-pink-400 text-black font-semibold px-3 py-1 rounded-full'>F</div>
            </div> */}
            <Link href={'/login'} className='font-semibold text-sm border-2 px-6 duration-300 hover:bg-[#09dedf] hover:text-white border-[#09dedf] text-[#09dedf] py-1'>Login</Link>
        </div>
      </div>  
    </nav>
  )
}

export default Navbar