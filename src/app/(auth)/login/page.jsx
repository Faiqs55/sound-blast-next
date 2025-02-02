"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div
      className="relative w-full h-[100vh] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url('/sign-bg.jpg')` }}
    >
      <div className="w-full h-full absolute top-0 left-0 bg-[#3333337c] flex items-center justify-center">
        <div className="bg-[#222] p-7 rounded-xl text-white flex flex-col gap-4 items-center w-[30%]">
          <h2 className="text-2xl font-bold">Welcome Back To SB!</h2>
          <form action="" className="flex flex-col gap-7 w-full">
            
            <div className="flex flex-col gap-1 w-full">
              <input type="email" placeholder="Enter Email" className="outline-none bg-transparent border-b-[1px] border-[#948f8f]" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <input type="password" placeholder="Enter Password" className="outline-none bg-transparent border-b-[1px] border-[#948f8f]" />
            </div>
            
            <button className="bg-[#3c8087] text-white py-2 font-semibold rounded-md">Login</button>
          </form>
          <p>Don't Have an Account? <Link href={'/sign-up'} className="font-semibold text-[#3c8087]">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default page;
