import Image from 'next/image'
import React from 'react'
import img360 from '../../Images/360.png'
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

export default function Contact() {
    return (
        <section className='pt-20'>
            <div className='flex flex-col md:flex-row justify-around my-20'>
                <div className='w-70'>
                <Image src={img360} className='mx-auto' width={100} height={100} alt='...'/>
                <h1 className='text-2xl font-bold pt-5 dark:text-white'>CORPORATE OFFICE</h1>
                <p className='text-xl font-bold pt-5 dark:text-white'>TheBrandsDoor</p>
                <p className='text-xl pt-5 dark:text-white'>Rise Shoplex, N-05, Second floor, Sector Techzone 4, Greater Noida West-201306</p>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
                <h1 className='text-2xl font-bold text-center dark:text-white'>For Sale</h1>
                <div className='flex'>
                    <CiPhone className='mt-1 font-bold dark:text-white' />
                    <p className='mx-2 text-center dark:text-white'>+91 9818752056 </p>
                </div>
                <div className='flex'>
                    <CiMail className='mt-1 dark:text-white' /><br />
                    <p className='mx-2 dark:text-white'> info@thebrandsdoor.com</p>
                </div>
            </div>
            <div className="card card-border bg-base-200 md:w-[50vw] flex justify-center">
                <div className="card-body ">
                    <h2 className="card-title mx-auto">GET IN TOUCH</h2>
                    <div className='flex flex-col md:flex-row py-2'>
                    <input type="text" placeholder="First Name" className="input input-ghost bg-white mx-5" />
                    <input type="text" placeholder="Last Name" className="input input-ghost bg-white mx-5" />
                    </div>
                    <div className='flex flex-col md:flex-row py-2'>
                    <input type="tel" placeholder="Phone Number" pattern="[0-9]*" minLength={10} maxLength={10} className="mx-5 bg-white tabular-nums  input input-ghost" />
                    <input type="text" placeholder="Emai Id" className="input input-ghost mx-5 bg-white" />
                    </div>
                    <textarea className="textarea md:w-[43vw] mx-5" placeholder="Enter your Query"></textarea>
                    <div className="card-actions justify-center p-10">
                        <button className="btn btn-primary cursor-poiner">Send Message</button>
                    </div>
                </div>
            </div>
            
            </div>
        </section>
    )
}
