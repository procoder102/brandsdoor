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


    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides =3;

    const nextSlide = () => {
        setCurrentSlide((pev) => (pev +1) % totalSlides)
    };

    const prevSlide = () => {
        setCurrentSlide((pev) => (pev - 1 + totalSlides) % totalSlides);
    };


  return (
    <div className='relative  top-0 w-full h-[100vw] lg:h-auto overflow-hidden'>
        <div className='flex transition-transformation duration-300 h-full' style={{transform:`translateX(-${currentSlide * 100}%)`}}>
            <div className='w-full flex-shrink-0 h-full'>
                <Image src={Crousal1} alt="..." className="w-[100%] h-[100%]" />
            </div>
            <div className='w-full flex-shrink-0 h-full'>
                <Image src={Crousal3} alt="..." className="w-[100%] h-[100%]" />
            </div>
            <div className='w-full flex-shrink-0 h-full'>
                <Image src={Crousal4} alt="..." className="w-[100%] h-[100%]" />
            </div>
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-0 right-3" name="prev">
            <MdOutlineNavigateNext className="rotate-180 text-6xl text-white" />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2  right-3">
            <MdOutlineNavigateNext className="text-6xl text-white" />
        </button>
    </div>
  )
}
