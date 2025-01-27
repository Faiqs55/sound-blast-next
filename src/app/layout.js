import Navbar from "@/Components/Navbar";
import "./globals.css";
import Sidebar from "@/Components/Sidebar";
import MiniMusicPlayer from "@/Components/MiniMusicPlayer";
import { songs } from "@/Data/data";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "SoundBlast | Home",
  description: "Music The Real Magic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/soundBlast-logo-neon.png"
          type="image/x-icon"
        />
      </head>
      <body className={`bg-black`}>
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
      </body>
    </html>
  );
}
