import React from 'react'

const ArtistCard = ({name, img}) => {
  return (
    <div className='min-w-[170px] max-w-[170px] p-3 flex flex-col hover:bg-[#333] rounded-lg cursor-pointer duration-200'>
        <img className='rounded-full w-full h-[150px]' src={img} alt='Artist image' />
        <h4 className='mt-2'>{name}</h4>
        <span className='text-xs text-gray-400'>Artist</span>
    </div>
  )
}

export default ArtistCard