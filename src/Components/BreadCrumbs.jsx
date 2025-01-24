import React from 'react'

const BreadCrumbs = ({content}) => {
  return (
    <div className='py-2 md:py-4 px-8 fixed w-full z-[100] rounded-t-xl bg-[#161616]'>
        <span className='text-gray-400'>{content}</span>
    </div>
  )
}

export default BreadCrumbs