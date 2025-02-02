"use client";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import MiniMusicPlayer from "@/Components/MiniMusicPlayer";
import { songs } from "@/Data/data";
import StoreProvider from "../StoreProvider";
import { useEffect, useState } from "react";
import userAuth from "@/utils/auth";

export default function RootLayout({ children }) {

  const [user, setUser] = useState();
  useEffect(() => {
    userAuth.getUser()
    .then(res => setUser(res))
    .catch(e => console.log(e))
  }, []);

  console.log(user);
  

  return (
      <div className={`bg-black`}>
         <StoreProvider>
           {/* NAVBAR  */}
           <Navbar />
          {/* SIDE MENU  */}
          <div className="flex gap-2 md:gap-4 mt-[10vh]">
            <Sidebar />
            {children}
          </div>
          {/* MUSIC CONTAINER */}
          <div className="music-container fixed bg-black w-full bottom-0 z-[10000] text-white">
            <MiniMusicPlayer songa={songs[0]} />
          </div>
         </StoreProvider>
      </div>
  );
}
