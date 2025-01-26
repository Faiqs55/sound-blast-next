import Image from 'next/image'
import React from 'react'

const ArtistCard = ({name, img}) => {
  return (
    <div className='min-w-[170px] max-w-[170px] p-3 flex flex-col hover:bg-[#333] rounded-lg cursor-pointer duration-200'>
        <Image className='rounded-full' src={img} alt='Artist image' width={200} height={200} layout='responsive' />
        <h4 className='mt-2'>{name}</h4>
        <span className='text-xs text-gray-400'>Artist</span>
    </div>
  )
}

export default ArtistCard