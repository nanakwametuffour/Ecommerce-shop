
import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
       console.log(currentSlide);
       
    const sliderData = [
      "https://m.media-amazon.com/images/I/619geyiQI5L._SX3000_.jpg",
      "https://m.media-amazon.com/images/I/81hIlE5xocL._SX3000_.jpg",
      "https://m.media-amazon.com/images/I/61Yx5-N155L._SX3000_.jpg",
      "https://m.media-amazon.com/images/I/81K+vKu13PL._SX3000_.jpg",
      
     
    ];

    const prevSlide =()=>{
      setCurrentSlide(currentSlide ===0 ?3:(prev)=> prev -1)
    }

    const nextSlide =()=>{
      setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    }

  return (
    <div className="w-full h-auto overflow-x-hidden z-0">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] transition duration-1000 h-full flex"
        >
          <FaArrowLeft />
          <img
            src={sliderData[0]}
            alt="image1"
            className="w-screen h-auto max-w-full mx-auto object-cover"
          />
          <img
            src={sliderData[1]}
            alt="image1"
            className="w-screen h-auto max-w-full mx-auto object-cover"
          />
          <img
            src={sliderData[2]}
            alt="image2"
            className="w-screen h-auto max-w-full mx-auto object-cover"
          />
          <img
            src={sliderData[3]}
            alt="image3"
            className="w-screen h-auto max-w-full mx-auto object-cover"
          />
        </div>
        <div className=" absolute flex top-36  justify-between w-full px-10">
          <span
            onClick={prevSlide}
            className="border-2 hover:border-white transition duration-500 border-green-950 bg-black/60 p-2 hover:bg-green-950 cursor-pointer"
          >
            <FaArrowLeft className="text-5xl text-white" />
          </span>
          <span
            onClick={nextSlide}
            className="border-2 hover:border-white transition duration-500 border-green-950 bg-black/60 p-2 hover:bg-green-950 cursor-pointer"
          >
            <FaArrowRight className="text-white text-5xl" />
          </span>
        </div>
      </div>
    </div>
  );
}
