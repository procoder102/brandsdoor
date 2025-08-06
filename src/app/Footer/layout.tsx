'use client'
import Image from 'next/image'
import Logo from '../../Images/brand.svg';
import image360 from '../../Images/360.png'
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='bg-black dark:bg-[#061127] lg:dark:border dark:border-t-white p-0 m-0'>
    <div className='flex flex-col md:flex-row lg:flex-row justify-evenly py-10'>
        <div className='w-full md:w-65 lg:w-65 h-auto p-0   flex flex-col justify-evenly'>
            <Image className='mx-auto w-50' src={Logo} alt='logo' />
                        <p className='text-white  text-start'>The Brands Door now has a position of created provision and is perfectly prepared to adjust to the new improvements that are being offered each day.</p>
        </div>
        <div className='w-full md:w-60 lg:w-50 flex flex-col justify-evenly  '>
            <h1 className='text-[#ffee32] sm:text-xl font-bold  text-xl text-center'>Find Us</h1>
            <p className='text-white sm:text-xl font-thin text-lg  text-center'>Brands Door</p>
            <p className='text-white text-center font-thin'>SF 29, Rise Shoplex, N-05, Second floor, Sector Techzone 4, Greater Noida West-201306</p>
        </div>
        <div className='w-full md:w-60 lg:w-60 p-0 md:p-5 flex flex-col justify-between'>
            <h1 className='text-[#ffee32] sm:text-xl font-bold  text-xl text-center'>Connect With Us</h1>
            <p className='text-white sm:text-xl text-center  '>+91-9718048608 <br /> info@thebrandsdoor.com</p>
            <div className='flex justify-evenly lg:justify-between '>
            <CiFacebook className='text-white sm:text-xl' />
            <FaTwitter className='text-white sm:text-xl' />
            <FaGoogle className='text-white sm:text-xl' />
            <FaLinkedin className='text-white sm:text-xl' />
            <ImYoutube2 className='text-white sm:text-xl' />
            <FaSquareInstagram className='text-white sm:text-xl' />
            </div>
            {/* <p className='text-white sm:text-xl font-thin text-lg text-center'>Brands Door</p> */}
        </div>
        <div className='w-full md:w-60 lg:w-60 p-0 md:p-5 '>
            <h1 className='text-[#ffee32] sm:text-xl font-bold  text-xl text-center'>Welcome</h1>
            <Image src={image360} alt='360' className='mx-auto md:mx-0 w-50 md:w-auto' />
        </div>
    </div>
    </div>
  )
}
