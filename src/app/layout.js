import Navbar from "@/Components/Navbar";
import "./globals.css";
import Sidebar from "@/Components/Sidebar";

export const metadata = {
  title: "SoundBlast | Home",
  description: "Music The Real Magic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/soundBlast-logo-neon.png" type="image/x-icon" />
      </head>
      <body className={`bg-black`}>
        {/* NAVBAR  */}
        <Navbar/>
      {/* SIDE MENU  */}
        <div className="flex gap-2 md:gap-4 mt-[10vh]">
        <Sidebar/>
        {children}
        </div>
      </body>
    </html>
  );
}
