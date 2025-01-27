"use client";
import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { playOnMiniPlayer } from "@/lib/features/miniPlayerSlice";

const MusicCard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="min-w-[200px] group hover:scale-[1.1] relative transition-all max-w-[200px] p-3 flex flex-col hover:bg-[#333] rounded-lg cursor-pointer duration-200">
      <Image
        className="rounded-lg"
        src={data?.img}
        width={200}
        height={200}
        alt="pasoori song image"
      />
      <span className=" mt-2">{data.title}</span>
      <span className="text-xs text-gray-400">{data.artist}</span>
      <div onClick={() => {dispatch(playOnMiniPlayer(data))}} className=" opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 hover:scale-[1.1] hover:bg-[#3bcbc8] w-12 h-12 bg-[#08dcda] absolute rounded-full z-10 right-5 bottom-20 group-hover:bottom-24">
        <FaPlay className="text-black text-xl" />
      </div>
    </div>
  );
};

export default MusicCard;
