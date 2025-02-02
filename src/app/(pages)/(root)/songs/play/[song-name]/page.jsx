"use client";
import Skeleton from "@/Components/Skeleton";
import { artistData, songs } from "@/Data/data";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

import { IoIosHeartEmpty } from "react-icons/io";
import Footer from "@/Components/Footer";
import MusicCard from "@/Components/MusicCard";
import Slider from "@/Components/Slider";
import { useDispatch } from "react-redux";
import { playOnMiniPlayer } from "@/lib/features/miniPlayerSlice";

const page = () => {
  const songName = useParams()["song-name"];
  const [song, setSong] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const foundSong = songs.find((item) => item.slug === songName);
    setSong(foundSong);
  }, []);

  if (!song) {
    return (
      <div className="flex-1 bg-[#1f1f1f] text-white rounded-xl h-[90vh] overflow-y-scroll p-7">
        <Skeleton />
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#18c9c6] text-white rounded-xl h-[90vh] overflow-y-scroll">
      {/* HEAD SECTION  */}
      <div className="flex gap-4 md:items-end w-[80%] px-5 pt-20 pb-5 flex-col md:flex-row">
        <img className="w-[230px] rounded-xl" src={song?.img} alt="" />
        <div>
          <span className="font-bold text-xs">SONG</span>
          <h2 className="text-3xl md:text-6xl font-bold my-5">{song?.title}</h2>
          <div className="text-sm font-semibold">
            <span>{song?.artist}</span>
            <span>{Date.now()}</span>
          </div>
        </div>
      </div>
      {/* SONG INFO  */}
      <div className="bg-[linear-gradient(#1d7776_1%,#1f1f1f)] px-3 md:px-5 py-7">
        {/* SONG CONTROLS  */}
        <div className="flex gap-3 text-xl items-center">
          <div className="p-5 rounded-full bg-[#3bcbc8] text-black">
            <FaPlay onClick={() => {dispatch(playOnMiniPlayer(song))}} />
          </div>
          <div className="p-3 rounded-full bg-[#1f1f1f]">
            <IoIosHeart className="hidden" />
            <IoIosHeartEmpty />
          </div>
          <div className="p-3 rounded-full bg-[#1f1f1f]">
            <BiLike />
            <BiSolidLike className="hidden" />
          </div>
        </div>

        <div className="w-full flex justify-between flex-col md:flex-row">
          {/* LYRICS  */}
          <div className="py-7 md:w-[45%]">
            <h2 className="text-2xl mb-5 font-bold">Lyrics</h2>
            <div className="text-lg w-full">
              Gimme, gimme, gimme some time to think <br />
              I'm in the bathroom, looking at me <br />
              Face in the mirror is all I need <br />
              (ooh) <br />
              Wait until the reaper takes my life <br />
              Never gonna get me out alive <br />
              I will live a thousand million lives <br />
              (ooh) <br />
              My patience is waning Is this entertaining? <br />
              Our patience is waning Is this entertaining? <br />
              I-I-I <br />
              got this feeling, yeah, you know <br />
              Where I'm losing all control
              <br />
              'Cause there's magic in my bones <br />
              I-I-I got this feeling in my soul <br /> Go ahead and throw your
              stones <br /> 'Cause there's magic in my bones <br /> Playing with
              a stick of dynamite <br /> There was never gray in black and white{" "}
              <br />
              There was never wrong 'til there was right <br /> (ooh, oh) <br />{" "}
              Feeling like a boulder hurtling <br />
              Seeing all the vultures circling <br /> Burning in the flames I'm
              working in <br /> Turning in a bed that's darkening <br /> My
              patience is waning
              <br /> Is this entertaining? <br /> Our patience is waning <br />{" "}
              Is this entertaining?
              <br /> I-I-I
              <br /> got this feeling, yeah, you know <br /> Where I'm losing
              all control <br /> 'Cause there's magic in my bones <br /> (in my
              bones) I-I-I <br />
              got this feeling in my soul <br /> Go ahead and throw your stones{" "}
              <br /> 'Cause there's magic in my bones <br />
              'Cause there's magic in my bones <br /> Look in the mirror of my
              mind <br />
            </div>
          </div>

          {/* ARTIST  */}
          <div className="py-5 md:w-[45%]">
            <div className="flex gap-4 items-center">
              <img
                className="w-[120px] rounded-full"
                src={artistData[3].img}
                alt=""
              />
              <div>
                <h2 className="font-semibold">Artist</h2>
                <span className="text-lg font-bold">{artistData[3].name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-7 bg-[#1f1f1f]">
        <div className="flex justify-between gap-10 pt-5">
          <Slider
            dataLength={songs.slice(0, 6).length}
            scrollSize={200}
            title={`Popular Releases From ${artistData[3].name}`}
          >
            {songs.slice(0, 6).map((song, index) => (
              // <BigCard song={song} key={song.id}/>
              <MusicCard data={song} key={song.id} />
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;