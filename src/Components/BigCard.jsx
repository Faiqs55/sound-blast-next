import { artistData } from '@/Data/data'
import Link from 'next/link';
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";


const BigCard = ({song}) => {
  return (
    <Link href={`songs/play/${song.slug}`} className='group w-[30%] rounded-lg overflow-hidden relative cursor-pointer'>
        <img className='w-full' src={song.img} alt="" />
        <div className='absolute w-full h-full top-0 left-0 bg-[#22222264] z-10 p-5'>
          <div className='flex items-center gap-2'>
            <div className='relative min-w-[80px] max-w-[80px] rounded-md overflow-hidden'>
            <img className='w-full' src={artistData[0].img} alt="" />
            <h3 className='absolute left-2 bottom-2 z-10 text-xs'>{artistData[0].name}</h3>
            <div className='bg-[#22222265] absolute top-0 left-0 w-full h-full'></div>
            </div>
            <div>
                <h3 className='font-bold text-xl'>{song.title}</h3>
            </div>
          </div>
          <div className='absolute -bottom-5 opacity-0 group-hover:opacity-100 duration-300 group-hover:bottom-0 bg-[#22222258] flex left-0 p-2 text-xl justify-end w-full gap-3'>
           <div className='p-3 rounded-full bg-black'>
            <IoIosHeart className='hidden'/>
            <IoIosHeartEmpty className=''/>
           </div>
           <div className='p-3 bg-[#3bcbc8] rounded-full'>
           <FaPlay className='text-black'/>
           </div>
          </div>
        </div>
    </Link>
  )
}

export default BigCard