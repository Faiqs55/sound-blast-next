import React from 'react'

const Spinner = () => {
  return (
    <div className="w-full h-[100vh] bg-black flex items-center justify-center">
      <div className="w-[50px] h-[50px] rounded-full bg-slate-700 animate-pulse relative flex items-center justify-center">
        <img src="/soundBlast-logo-neon.png" alt="logo" className=" animate-spin" />
      </div>
    </div>
  )
}

export default Spinner