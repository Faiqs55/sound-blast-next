"use client";
import React from 'react'
import Image from 'next/image'

const MusicCard = ({title, artist, img, index}) => {
  return (
    <div className="min-w-[200px] max-w-[200px] p-3 flex flex-col hover:bg-[#333] rounded-lg cursor-pointer duration-200">
              <Image className="rounded-lg" src={img} width={200} height={200} alt="pasoori song image" />
              <span className=" mt-2">{title}</span>
              <span className="text-xs text-gray-400">{artist}</span>
            </div>
  )
}

export default MusicCard