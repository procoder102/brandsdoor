'use client'

import Image from "next/image";
import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { StaticImageData } from "next/image";
import { Ubuntu } from "next/font/google";
import { Inter } from "next/font/google";

const InterFont = Inter({
  subsets:['cyrillic'],
  weight:'300'
});

const UbuntuFont = Ubuntu({
  subsets: ['cyrillic'],
  weight: '700'
})

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
        <div className='flex  transition-transformation duration-300 m-10 h-full' style={{transform:`translateX(-${currentSlide * 100}%)`}}>
            <div className='w-full  flex-shrink-0 h-full flex flex-col md:flex-row'>
                <div className="w-full lg:w-[50%] h-auto lg:h-[350px]">
                <Image src={Crousal1} alt="..." className="w-[100%] h-auto" />
                </div>
                <div className="w-full lg:w-[50%] p-10">
                    <h3 className={`font-bold text-center dark:text-[#ffee32] ${UbuntuFont.className}`}>An eCommerce Website for Apparels and Accessories</h3>
                    <p className={`text-center dark:text-[#E4E4E4] ${InterFont.className}`}>The Brands Door now has a position of created provision and is perfectly prepared to adjust to the new improvements that are being offered each day</p>
                    <div className="flex justify-evenly m-2">
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-[#fefde7] dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
                    </div>
                </div>
            </div>
            <div className='w-full flex-shrink-0 h-full flex flex-col md:flex-row'>
                <div className="w-full lg:w-[50%] h-auto lg:h-[350px]">
                <Image src={Crousal3} alt="..." className="w-[100%] h-auto" />
                </div>
                <div className="w-full lg:w-[50%] p-10">
                    <h3 className={`font-bold text-center dark:text-[#ffee32] ${UbuntuFont.className}`}>An eCommerce Website for Apparels and Accessories</h3>
                    <p className={`text-center dark:text-[#E4E4E4] ${InterFont.className}`}>The Brands Door now has a position of created provision and is perfectly prepared to adjust to the new improvements that are being offered each day</p>
                    <div className="flex justify-evenly m-2">
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-[#fefde7] dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
                    </div>
                </div>
            </div>
            <div className='w-full flex-shrink-0 h-full flex flex-col md:flex-row'>
                <div className="w-full lg:w-[50%] h-auto lg:h-[350px]">
                <Image src={Crousal4} alt="..." className="w-[100%] h-auto" />
                </div>
                <div className="w-full lg:w-[50%] p-10">
                    <h3 className={`font-bold text-center dark:text-[#ffee32] ${UbuntuFont.className}`}>An eCommerce Website for Apparels and Accessories</h3>
                    <p className={`text-center dark:text-[#E4E4E4] ${InterFont.className}`}>The Brands Door now has a position of created provision and is perfectly prepared to adjust to the new improvements that are being offered each day</p>
                    <div className="flex justify-evenly m-2">
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-[#fefde7] dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <button onClick={prevSlide} className="px-3 top-0 lg:top-70  left-[110vh] right-3 object-cover" name="prev">
            <MdOutlineNavigateNext className=" rotate-180 text-2xl text-black  rounded-full cursour-pointer bg-gray-300" />
        </button>
        <button onClick={nextSlide} className=" lg:top-70 top-0  right-[105vh] object-cover">
            <MdOutlineNavigateNext className="text-2xl text-black  rounded-full bg-gray-300" />
        </button>
        </div>
    </div>
  )
}
