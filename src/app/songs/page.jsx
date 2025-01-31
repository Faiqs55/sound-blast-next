import React from "react";
import Footer from "@/Components/Footer";
import BreadCrumbs from "@/Components/BreadCrumbs";
import BigCard from "@/Components/BigCard";
import { songs } from "@/Data/data";

const page = () => {
  return (
    <div className="flex-1 bg-[#1f1f1f] text-white rounded-xl h-[90vh] overflow-y-scroll">
      <BreadCrumbs content={"Songs"} />
      {/* CONTENT  */}
      <div className="p-4 mt-24">
        <h2 className="font-bold text-2xl">{'Trending Now'}</h2>
        <div className="flex flex-wrap justify-around lg:justify-between gap-5 lg:gap-10 pt-5">
            {songs.map((song, index) => (
                <BigCard song={song} key={song.id}/>
            ))}
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default page;
