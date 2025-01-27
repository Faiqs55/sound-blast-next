"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosSkipForward } from "react-icons/io";
import { IoIosSkipBackward } from "react-icons/io";
import { TfiLoop } from "react-icons/tfi";
import { CiShuffle } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { FaBluetoothB } from "react-icons/fa";
import { FaVolumeLow } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";
import { useSelector } from "react-redux";

const MiniMusicPlayer = () => {
  const song = useSelector(state => state.miniPlayer.currSong);
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const [songPLaying, setSongPLaing] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  if(!song){
    return
  }
  
  const handleMetaDataLoad = ()=>{
        const audioTag = audioRef.current;
          if(audioTag){
            setDuration(audioTag.duration || 0);
          }

      }


  const handleProgressClick = (e) => {
    const progressBar = progressRef.current;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };
  const handleProgressDrag = (e) => {
    const progressBar = progressRef.current;
    const rect = progressBar.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clickX = clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;

    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    handleProgressDrag(e)
  }
  const handleDragMove = (e) => {
    if(isDragging){
      handleProgressDrag(e)
    }
  }
  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const playSong = () => {
    if (songPLaying) {
      audioRef.current.pause();
      setSongPLaing((prev) => !prev);
    } else {
      audioRef.current.play();
      setSongPLaing((prev) => !prev);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    console.log('playing');
    
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <div className="flex md:items-center justify-between p-5 flex-col lg:gap-0 gap-6 md:flex-row">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold hidden md:block">Now Playing:</h3>
        <div className="flex gap-2 items-center">
          <img className="w-[40px] md:w-[60px] rounded-lg" src={song.img} alt="" />
          <div className="flex flex-col">
            <span className="text-xs md:text-sm font-semibold">{song.title}</span>
            <span className="text-[8px] md:text-xs text-gray-400">{song.artist}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex gap-4 md:text-xl">
          <button className="text-gray-400 text-base">
            <CiShuffle />
          </button>
          <button>
            <IoIosSkipBackward />
          </button>
          <button
            onClick={playSong}
            className="p-2 pl-3 hover:scale-[1.1] bg-white text-black rounded-full"
          >
            {songPLaying && <IoMdPause/>}
            {!songPLaying && <FaPlay />}
          </button>
          <button>
            <IoIosSkipForward />
          </button>
          <button className="text-gray-400 text-base">
            <TfiLoop />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <audio
            onTimeUpdate={handleTimeUpdate}
            src={song.audio}
            ref={audioRef}
            onLoadedMetadata={handleMetaDataLoad}
          ></audio>
          <span className="text-xs text-gray-400">
            {formatTime(currentTime)}
          </span>
          <span
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
            onClick={handleProgressClick}
            ref={progressRef}
            className="cursor-pointer hover:h-[8px] duration-200 w-[230px] md:w-[150px] lg:w-[250px] bg-gray-600 relative h-[3px] rounded-full"
          >
            <span
              style={{ width: `${(currentTime / duration) * 100}%` }}
              className="absolute top-0 left-0 h-full bg-white"
            ></span>
          </span>
          <span className="text-xs text-gray-400">{formatTime(duration)}</span>
        </div>
      </div>
      <div className="md:flex gap-4 hidden">
        <IoLogOutOutline />
        <FaBluetoothB />
        <div className="flex items-center gap-2">
          <FaVolumeLow />
          <div className="w-[90px] lg:w-[120px] h-[3px] relative bg-gray-600">
            <div className="absolute w-[80%] h-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniMusicPlayer;
