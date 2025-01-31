"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Slider = ({dataLength, title, scrollSize, children }) => {
  let [col, setCol] = useState(0);
  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    const screenSize = screen.width;

    if (screenSize < 400) {
      setCol(1.2)
    } else if (screenSize < 550) {
      setCol(1.6) 
    } else if (screenSize < 750) {
      setCol(2) 
    } else if (screenSize < 950) {
      setCol(3) 
    } else if (screenSize < 1050) {
      setCol(2) 
    } else if (screenSize < 1150) {
      setCol(2) 
    } else if (screenSize < 1250) {
      setCol(2.3) 
    } else if (screenSize > 1250) {
      setCol(2.5) 
    } else {
      setCol(3.5) 
    }
  }, [currSlide]);

  const allowedCount = Math.ceil(dataLength / col);
  const nextSlide = () => {
    if (dataLength > 0) {
      setCurrSlide((prev) => {
        return prev === dataLength ? 0 : prev + 1;
      });
    }
  };
  const prevSlide = () => {
    if (dataLength > 0) {
      setCurrSlide((prev) => {
        return prev === 0 ? 0 : prev - 1;
      });
    }
  };

  return (
    <div className="overflow-hidden w-full duration-300 relative">
      <div className="flex items-center justify-between">
       <h2 className="text-2xl font-bold pl-3">{title}</h2>
       <span className="font-semibold text-sm text-gray-300"><Link href={'/songs'}>See All</Link></span>
      </div>
      {currSlide > 0 && (
        <button
          onClick={prevSlide}
          className="bg-black p-4 py-2 rounded-full absolute z-[2] left-0 top-[45%]"
        >
          &#10094;
        </button>
      )}
      {currSlide < allowedCount && (
        <button
          onClick={nextSlide}
          className="bg-black p-4 py-2 rounded-full absolute z-[2] right-0 top-[45%]"
        >
          &#10095;
        </button>
      )}
      <div
        style={{ transform: `translateX(-${currSlide * scrollSize}px)` }}
        className={`mt-3 w-full flex gap-2 duration-300 justify-between`}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
