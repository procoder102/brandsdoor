'use client'

import Image from "next/image";
import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { StaticImageData } from "next/image";

type props ={
    Crousal1:StaticImageData;
    Crousal3:StaticImageData;
    Crousal4:StaticImageData;
}
export default function Customcrousal({Crousal1,Crousal3,Crousal4}:props)  {


  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-[28vw]">
    <Image
      src={Crousal1}
      alt="..."
      className="w-full" />
    
  </div>
  <div id="slide2" className="carousel-item relative w-full h-[28vw]">
    <Image
    src={Crousal3}
      alt="..."
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full h-[28vw]">
    <Image
    src={Crousal4}
      alt="..."
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full h-[28vw]">
    <Image
    src={Crousal1}
      alt="..."
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>  )
}
