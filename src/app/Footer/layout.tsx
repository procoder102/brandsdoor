'use client'
import Image from 'next/image'
import Logo from '../../Images/brand-removebg-preview.png';
import image360 from '../../Images/360.png'
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='bg-black dark:bg-[#121212] dark:border dark:border-t-white p-0 m-0'>
    <div className='flex flex-col md:flex-row lg:flex-row justify-evenly'>
        <div className='w-full md:w-60 lg:w-65 h-auto p-0 lg:px-5 lg:pb-10'>
            <Image className='' src={Logo} alt='logo' />
                        <p className='text-white  text-start  '>The Brands Door now has a position of created provision and is perfectly prepared to adjust to the new improvements that are being offered each day.</p>
        </div>
        <div className='w-full md:w-60 lg:w-60 p-0 md:p-5 lg:pt-15 text-center'>
            <h1 className='text-white sm:text-xl font-light text-xl'>Find Us</h1>
            <p className='text-white sm:text-xl font-thin text-lg pt-5'>Brands Door</p>
            <p className='text-white sm:text-xl font-thin  pt-5'>Rise Shoplex, N-05, Second floor, Sector Techzone 4, Greater Noida West-201306</p>
        </div>
        <div className='w-full md:w-60 lg:w-60 p-0 md:p-5 lg:pt-15'>
            <h1 className='text-white sm:text-xl font-light text-xl text-center'>Connect With Us</h1>
            <div className='flex justify-evenly lg:justify-between pt-5'>
            <CiFacebook className='text-white sm:text-xl' />
            <FaTwitter className='text-white sm:text-xl' />
            <FaGoogle className='text-white sm:text-xl' />
            <FaLinkedin className='text-white sm:text-xl' />
            <ImYoutube2 className='text-white sm:text-xl' />
            <FaSquareInstagram className='text-white sm:text-xl' />
            </div>
            <p className='text-white sm:text-xl text-center pt-5 hidden'>+91-9818752056 <br /> +91-9718358080 <br /> info@thebrandsdoor.com</p>
        </div>
        <div className='w-full md:w-60 lg:w-60 p-0 md:p-5 lg:pt-15'>
            <h1 className='text-white sm:text-xl font-light text-xl text-center'>Welcome</h1>
            <Image src={image360} alt='360' className='mx-auto md:mx-0 w-50 md:w-auto' />
        </div>
    </div>
    </div>
  )
}
