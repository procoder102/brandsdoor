'use client'
import Image from 'next/image'
import Logo from '../../Images/brand-removebg-preview.png'

export default function Footer() {
  return (
    <div className='bg-black p-0 m-0'>
    <div className='flex flex-col md:flex-row lg:flex-row justify-evenly'>
        <div className='w-full md:w-60 lg:w-60 h-auto p-0 lg:px-5'>
            <Image className='' src={Logo} alt='logo' />
                        <p className='text-white text-start text-xs font-bold'>The Brands Door now has a position of created provision and is perfectly prepared to adjust to the new improvements that are being offered each day.</p>
        </div>
        <div className='w-full md:w-60 lg:w-60 p-0 md:p-5 lg:pt-10'>
            <h1 className='text-white font-light text-xl'>Find Us</h1>
            {/* <p className='text-white font-thin text-lg '>Brands Door</p> */}
            {/* <p className='text-white font-thin text-xs'>Rise Shoplex, N-05, Second floor, Sector Techzone 4, Greater Noida West-201306</p> */}
        </div>
        <div className='w-full md:w-60 lg:w-60 p-0 md:p-5 lg:pt-10'>
            <h1 className='text-white font-light text-xl'>Connect With Us</h1>
        </div>
        <div className='w-full md:w-60 lg:w-60 p-0 md:p-5 lg:pt-10'>
            <h1 className='text-white font-light text-xl'>Welcome</h1>
        </div>
    </div>
    </div>
  )
}
