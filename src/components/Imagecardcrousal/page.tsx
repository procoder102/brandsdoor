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
export default function Imagecardcrousal({Crousal1,Crousal3,Crousal4}:props)  {


    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides =3;

    const nextSlide = () => {
        setCurrentSlide((pev) => (pev +1) % totalSlides)
    };

    const prevSlide = () => {
        setCurrentSlide((pev) => (pev - 1 + totalSlides) % totalSlides);
    };


  return (
    <div className='relative  top-0 w-full  lg:h-auto overflow-hidden'>
        <div className='flex transition-transformation duration-300 m-10 h-full' style={{transform:`translateX(-${currentSlide * 100}%)`}}>
            <div className='w-full flex-shrink-0 h-full flex flex-col md:flex-row'>
                <div className="w-full md:w-[50%]">
                <Image src={Crousal1} alt="..." className="w-[100%] h-auto" />
                </div>
                <div className="w-full md:w-[50%] p-10">
                    <h3 className="font-bold text-center">An eCommerce Website for Apparels and Accessories</h3>
                    <p className="text-center">The Brands Door now has a position of created provision and is perfectly prepared to adjust to the new improvements that are being offered each day</p>
                    <div className="flex justify-evenly m-2">
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
                    </div>
                </div>
            </div>
            <div className='w-full flex-shrink-0 h-full flex flex-col md:flex-row'>
                <div className="w-[50%]">
                <Image src={Crousal3} alt="..." className="w-[100%] h-auto" />
                </div>
                <div className="w-[50%] p-10">
                    <h3 className="font-bold text-center">An eCommerce Website for Apparels and Accessories</h3>
                    <p className="text-center">The Brands Door now has a position of created provision and is perfectly prepared to adjust to the new improvements that are being offered each day</p>
                    <div className="flex justify-evenly m-2">
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
                    </div>
                </div>
            </div>
            <div className='w-full flex-shrink-0 h-full flex flex-col md:flex-row'>
                <div className="w-[50%] h-[350px]">
                <Image src={Crousal4} alt="..." className="w-[100%] h-auto" />
                </div>
                <div className="w-[50%] p-10">
                    <h3 className="font-bold text-center">An eCommerce Website for Apparels and Accessories</h3>
                    <p className="text-center">The Brands Door now has a position of created provision and is perfectly prepared to adjust to the new improvements that are being offered each day</p>
                    <div className="flex justify-evenly m-2">
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
                    </div>
                </div>
            </div>
        </div>
        <button onClick={prevSlide} className="absolute bottom-0 top-70  left-[110vh] right-3 object-cover" name="prev">
            <MdOutlineNavigateNext className="rotate-180 text-2xl text-black  rounded-full cursour-pointer bg-gray-300" />
        </button>
        <button onClick={nextSlide} className="absolute bottom-0 top-70   right-[105vh] object-cover">
            <MdOutlineNavigateNext className="text-2xl text-black  rounded-full bg-gray-300" />
        </button>
    </div>
  )
}
