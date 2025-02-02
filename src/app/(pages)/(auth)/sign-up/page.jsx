"use client";
import userAuth from "@/utils/auth";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [userData, setUserData] = useState(null);

  const inputChangeHandler = (e) => {
    const {name, value} = e.target;
    setUserData(prev => {
      return {
        ...prev,
         [name]: value
      }
    })
  }
  const submitHandler = async (e) => {
    e.preventDefault();
      const user = await userAuth.userSignup(userData);
      if(user._id){
        const token = await userAuth.userLogin({email: userData.email, password: userData.password});
        localStorage.setItem('token', token.token);
        window.location.replace('/');
        
      }else{
        console.log(user.errorResponse.errmsg);
      }
  }

  return (
    <div
      className="relative w-full h-[100vh] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url('/sign-bg.jpg')` }}
    >
      <div className="w-full h-full absolute top-0 left-0 bg-[#3333337c] flex items-center justify-center">
        <div className="bg-[#222] p-7 rounded-xl text-white flex flex-col gap-4 items-center w-[30%]">
          <h2 className="text-2xl font-bold">Welcome To SB!</h2>
          <form action="" onSubmit={submitHandler} className="flex flex-col gap-7 w-full">
            <div className="flex flex-col gap-1 w-full">
              <input onChange={inputChangeHandler} name="name" type="text" placeholder="Enter Username" className="outline-none bg-transparent border-b-[1px] border-[#948f8f]" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <input onChange={inputChangeHandler} name="email" type="email" placeholder="Enter Email" className="outline-none bg-transparent border-b-[1px] border-[#948f8f]" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <input onChange={inputChangeHandler} name="password" type="password" placeholder="Enter Password" className="outline-none bg-transparent border-b-[1px] border-[#948f8f]" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-gray-400">User Type:</label>
              <select onChange={inputChangeHandler} name="role" className="outline-none bg-transparent text-gray-400 border-b-[1px] border-[#948f8f]" id="">
                <option value="ENJOYER">I am just an Enjoyer</option>
                <option value="ARTIST">I am an Artist</option>
              </select>
            </div>
            <button className="bg-[#3c8087] text-white py-2 font-semibold rounded-md">Sign up</button>
          </form>
          <p>Already Have an Account? <Link href={'/login'} className="font-semibold text-[#3c8087]">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default page;
