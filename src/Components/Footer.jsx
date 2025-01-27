import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex justify-between w-full gap-4 text-white pb-52 pt-5 bg-[#111] px-10 flex-wrap'>
        <div className='lg:w-[17%]'>
            <h3 className='md:text-lg mb-2 font-semibold'>Company</h3>
            <ul className='font-semi text-sm md:text-base font-semibold text-gray-400 flex flex-col gap-2'>
                <li><Link href={'#'}>About</Link></li>
                <li><Link href={'#'}>Jobs</Link></li>
                <li><Link href={'#'}>For The Record</Link></li>
            </ul>
        </div>
        <div className='lg:w-[17%]'>
            <h3 className='md:text-lg mb-2 font-semibold'>Communities</h3>
        <ul className='font-semibold text-sm md:text-base text-gray-400 flex flex-col gap-2'>
                <li><Link href={'#'}>For Artists</Link></li>
                <li><Link href={'#'}>Developers</Link></li>
                <li><Link href={'#'}>Advertising</Link></li>
                <li><Link href={'#'}>Investers</Link></li>
                <li><Link href={'#'}>Vendors</Link></li>
            </ul>
        </div>
        <div className='lg:w-[17%]'>
            <h3 className='md:text-lg mb-2 font-semibold'>Usefull Links</h3>
        <ul className='font-semibold text-sm md:text-base text-gray-400 flex flex-col gap-2'>
                <li><Link href={'#'}>Support</Link></li>
                <li><Link href={'#'}>Mobile App</Link></li>
            </ul>
        </div>
        <div className='lg:w-[17%]'>
            <h3 className='md:text-lg mb-2 font-semibold'>SoundBlast Plans</h3>
        <ul className='font-semibold text-sm md:text-base text-gray-400 flex flex-col gap-2'>
                <li><Link href={'#'}>Premium Individual</Link></li>
                <li><Link href={'#'}>Premium Duo</Link></li>
                <li><Link href={'#'}>Premium Family</Link></li>
                <li><Link href={'#'}>Premium Student</Link></li>
                <li><Link href={'#'}>SoundBlast Free</Link></li>
            </ul>
        </div>
        <div className='lg:w-[17%] flex gap-4'>
            <FaFacebook className='text-4xl bg-[#333] p-2 rounded-full'/>
            <FaInstagram className='text-4xl bg-[#333] p-2 rounded-full'/>
            <FaTwitter className='text-4xl bg-[#333] p-2 rounded-full'/>
        </div>
    </div>
  )
}

export default Footer