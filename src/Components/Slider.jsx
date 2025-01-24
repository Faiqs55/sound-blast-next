"use client";
import React, { useEffect, useState } from "react";

const Slider = ({ Component, data, title, scrollSize }) => {
  let [col, setCol] = useState(0);
  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    console.log("mango");

    const screenSize = screen.width;
    console.log(screenSize);

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

  const allowedCount = Math.ceil(data.length / col);
  const nextSlide = () => {
    if (data.length > 0) {
      setCurrSlide((prev) => {
        return prev === data.length ? 0 : prev + 1;
      });
    }
  };
  const prevSlide = () => {
    if (data.length > 0) {
      setCurrSlide((prev) => {
        return prev === 0 ? 0 : prev - 1;
      });
    }
  };

  return (
    <div className=" overflow-hidden w-full duration-300 relative">
      <h2 className="text-2xl font-bold">{title}</h2>
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
        className={`mt-3 w-full flex gap-2 duration-300`}
      >
        {data.map((item, index) => (
          <Component
            key={item.id}
            title={item.title}
            img={item.img}
            artist={item.artist}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
