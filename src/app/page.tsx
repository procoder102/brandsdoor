'use client'
import Customcrousal from "@/components/Customcrousal/page";
import Crousal2 from "../Images/crousal.gif";
import Crousal3 from "@/Images/carousal3.jpg";
import Service1 from "../Images/service1.png";
import Crousal4 from "@/Images/carousal4.jpg";
import Service2 from "../Images/service2.png";
import Service3 from "../Images/service3.png";
import Service4 from "../Images/service4.png";
import Service5 from "../Images/service5.png";
import bussiness from "../Images/business1.png";
import bussiness2 from "../Images/business2.png";
import bussiness3 from "../Images/business3.png";
import bussiness4 from "../Images/business4.png";
import bussiness5 from "../Images/business5.png";
import Image1 from '../Images/Website Designing Company in Noida, Web_files/101.jpg';
import Image2 from '../Images/Website Designing Company in Noida, Web_files/102.jpg'
import Image3 from '../Images/Website Designing Company in Noida, Web_files/105.jpg'
import years from '../Images/17.svg'
import devlopers from '../Images/image (3).png'
import global from '../Images/image (2).png'
import costEffective from '../Images/image (1).png'
import img04 from '../Images/Website Designing Company in Noida, Web_files/04.jpg'
import img06 from '../Images/Website Designing Company in Noida, Web_files/06.jpg'
import img07 from '../Images/Website Designing Company in Noida, Web_files/07.jpg'
import img08 from '../Images/Website Designing Company in Noida, Web_files/08.jpg'
import img09 from '../Images/Website Designing Company in Noida, Web_files/09.jpg'
import img10 from '../Images/Website Designing Company in Noida, Web_files/12.jpg'
import img11 from '../Images/Website Designing Company in Noida, Web_files/16.jpg'
import img12 from '../Images/Website Designing Company in Noida, Web_files/17.jpg'
import img13 from '../Images/Website Designing Company in Noida, Web_files/20.jpg'
import img14 from '../Images/Website Designing Company in Noida, Web_files/21.jpg'
import img15 from '../Images/Website Designing Company in Noida, Web_files/26.jpg'

import { Inter } from "next/font/google";
import { Ubuntu } from "next/font/google";
import { GoGraph } from "react-icons/go";
import { FcDocument } from "react-icons/fc";
import { FaTasks } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";
import logo from '../Images/brand.svg';
import Aos from "aos";
import 'aos/dist/aos.css';


import Image from "next/image"
import Imagecardcrousal from "@/components/Imagecardcrousal/page";
import Link from "next/link";
import { useEffect, useState } from "react";

const InterFont = Inter({
  subsets:['cyrillic'],
  weight:'300'
});

const UbuntuFont = Ubuntu({
  subsets: ['cyrillic'],
  weight: '500'
})


export default function Home() {

 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  setIsVisible(true); // triggers animation on mount
  Aos.init({
    duration: 800, // animation duration in ms
    once: true, // whether animation should happen only once
  });
}, []);

  const imgMapping = [
    {name:Service1,label:'SEO', href:'/serch-engine-optimization'},
    {name:Service2,label:'SMS/SSM',href:'/bulksms'},
    {name:Service3,label:'Content Merketing',href:'/content-writing'},
    {name:Service4,label:'Websites',href:'/design'},
    {name:Service5,label:'Logo & Graphic Design',href:'/design'}
  ]

 const marketingThings = [
  {
    name: 'Transparent Reporting',
    description:
      'We give it to you straight—no murky reports, no creative number crunching, and no hiding behind jargon. We love sharing the "What" and "Why" behind every strategy.',
    icon: GoGraph,
  },
  {
    name: 'No Long Term Contract',
    description:
      `We want to earn your business, not trap it! Our flexible, month-to-month options reflect our belief in our ability to deliver results. It's our job to make sure an ongoing partnership with us is an easy "Yes."`,
    icon: FcDocument,
  },
  {
    name: 'Customized Strategy',
    description:
      'One-size-fits-all marketing? Not on our watch. Your digital strategy will be shaped by your industry, made for your audience, and prioritized according to your unique needs.',
    icon: FaTasks,
  },
  {
    name: 'Ecommerce Website',
    description:
      '12 years of ecommerce experience is baked into everything we do. We approach every strategy with a keen eye for conversions and sales, and have hundreds of happy merchants to show for it.',
    icon: FaCartShopping,
  },
];

const whatWeProvide = [
  {srno:1,icon:bussiness, heading:'Increase Customer Engagement',description:'Digital marketing services improve customer engagement rates by giving defined and unique solutions to make online business more productive. Improve engagement by delivering the right message to the right audience.'},
  {srno:2,icon:bussiness2, heading:'Promote Online Business',description:'Digital marketing services improve customer engagement rates by giving defined and unique solutions to make online business more productive. Improve engagement by delivering the right message to the right audience.'},
  {srno:3,icon:bussiness3, heading:'Brand Awareness',description:'Digital marketing services improve customer engagement rates by giving defined and unique solutions to make online business more productive. Improve engagement by delivering the right message to the right audience.'},
  {srno:4,icon:bussiness4, heading:'Rank Higher',description:'Digital marketing services improve customer engagement rates by giving defined and unique solutions to make online business more productive. Improve engagement by delivering the right message to the right audience.'},
  {srno:5,icon:bussiness5, heading:'Save Money',description:'Digital marketing services improve customer engagement rates by giving defined and unique solutions to make online business more productive. Improve engagement by delivering the right message to the right audience.'},
]

const buldInfo = [
  {icon:IoMdCheckboxOutline,name:'Search Engine Optimization'},
  {icon:IoMdCheckboxOutline,name:'Social Media Marketing'},
  {icon:IoMdCheckboxOutline,name:'PPC Management'},
  {icon:IoMdCheckboxOutline,name:'Email Marketing'},
  {icon:IoMdCheckboxOutline,name:'Website Designing'},
  {icon:IoMdCheckboxOutline,name:'web Devlopment'},
  {icon:IoMdCheckboxOutline,name:'whatsapp Marketing'},
  {icon:IoMdCheckboxOutline,name:'IVR'},
]

const imgCrousal = [
  {image:Image1,description:''},
  {image:Image2,description:''},
  {image:Image3,description:''}

]


  return (
    <div className={`pt-20 `}>
      <Customcrousal Crousal1={Crousal2} Crousal3={Crousal3} Crousal4={Crousal4}/>
      <div className="flex flex-col lg:flex-row justify-between h-[18%] p-10 md:md:dark:border ">
        <div className="w-[100%]  lg:w-[50%]">
          <h1 className={` text-2xl font-black p-2 dark:text-[#ffee32] ${UbuntuFont.className}`}>WE GROW YOUR BUSINESS ONLINE</h1>
          <p className={`dark:text-[#fefde7] p-1 text-lg font-samibold ${InterFont.className}`}>On average we have halped business increase revenue by 90% Yoy.See what we can do for you.</p>
          <p className={`dark:text-[#fefde7] p-1 text-lg font-samibold ${InterFont.className}`}>After appling for a free wes sitecheck up the team will analyze your website and suggest degital marketing methods on which you can improve user interaction and leads for your sels pipeline.</p>
        </div>
        <div className="p-1 flex flex-col justify-between  lg:w-[36%] ">
            <input type="text" id="first_name" className={` bg-gray-50 my-10 lg:my-0 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  md:dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#061127] dark:focus:ring-blue-500 dark:focus:border-blue-500 ${UbuntuFont.className}`} placeholder="John" required />
          <button type="button" className={`text-[#ffee32] font-bold text-4xl hover:text-[#14213D]  focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#14213D] dark:hover:bg-[#ffd100] focus:outline-none dark:focus:ring-none cursor-pointer ${UbuntuFont.className}`}>
            LET US GROW YOUR BUSINESS
            </button>
        
        </div>
      </div>
      <section className="py-10 ">
      <div className={`${UbuntuFont.className}`}>
        <h1 className="dark:text-[#ffee32] font-bold text-center text-4xl m-10">Our <span className="text-[#ba181b]">Service</span><br /><span className="dark:text-white text-lg text-gray-500">Our DigitalMarketing Services</span></h1>
      </div>

        
<div
  className={`transition-all duration-500 ease-out transform carousel carousel-center rounded-box dark:bg-white ${
    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-28 opacity-0'
  }`}
>
  <div className="carousel-item w-auto lg:w-[98vw] flex justify-evenly">
    {imgMapping.map((item, index) => (
      <div
        key={index}
        className="my-3 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
      >
        <Link href={item.href}>
          <Image
            className="px-5 lg:w-auto lg:h-20 my-3 mx-auto w-40"
            src={item.name}
            alt="..."
          />
          <h1
            className={`text-xl font-medium text-blue-500 text-center ${UbuntuFont.className}`}
          >
            {item.label}
          </h1>
        </Link>
      </div>
    ))}
  </div>
</div>

  </section>
      <div className="bg-[#fdf8f5] dark:bg-transparent pt-20">
        <h1 className={`text-center text-xl font-black  pt-5 dark:text-[#ffee32] ${UbuntuFont.className}`}>We do the things differently and out of the box</h1>
        <p className={`text-center text-base font-medium dark:text-white ${InterFont.className}`}>Leading Digital Marketing Agency in Delhi, India</p>
        <div className="flex flex-col lg:flex-row justify-evenly">
          {marketingThings.map((item) =>(
            <div className=" p-11" key={item.name}>
              <item.icon className="w-full lg:w-50 h-10 dark:text-[#90caf9]" />
              <h1 className={`p-2 font-bold font-sans dark:text-[#ff2428] ${UbuntuFont.className}`}>{item.name}</h1>
              <span className={`font-light text-start font-serif dark:text-[#e5e5e5] ${InterFont.className}`}>{item.description}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto  mt-20 md:dark:border ">
        <h1 className={`dark:text-[#ffee32] text-center text-2xl font-black ${UbuntuFont.className}`}>Why choose digital marketing <br />services for Online Business?</h1>
        <p className="dark:text-[#e5e5e5] text-start w-[100%] p-10 font-base text-gray-500">The Brands Door is essentially a full-service Digital Marketing Agency. Based in Noida, the company was established in the year 2012. Later in 2014, at its core, The Brands Door Digital strongly supports and follows the mission of Digital India laid down by Prime Minister Shri. Narstartra Modi and provides cost-effective branding solutions for start-ups in India.</p>
      </div>
      <div className="container mx-auto  mt-20 md:dark:border ">
        <h1 className={`dark:text-[#ffee32] text-center text-2xl font-black ${UbuntuFont.className}`}>Why the Brands Doors</h1>
        <p className="dark:text-[#e5e5e5] text-start w-[100%] p-10 font-base text-gray-500">The Brands door Pvt. It is one of the frontrunners in the IT Industry, based in Noida, India. We are accredited with CMMI Level-3 certification. The Brands Door has been recognized as one of the prominent name among well-known IT companies. We are a perfect runway for those who desire intensely to fortify their brand presence in today’s cut-throat competitive age. The Brands Door establish their thrilling presence in 4 + years in digital commerce, web design & development, Digital Marketing.</p>
      </div>
      <div className="grid my-10  grid-flow-col grid-rows-5 lg:grid-rows-3 gap-10  md:dark:border px-10">
       {whatWeProvide.map((item) =>
      <div className="flex flex-col lg:flex-row md:dark:border md:dark:border-b-white" key={item.srno}>
        <Image className="" src={item.icon} alt="..." />
        <div className=" ms-10">
        <h1><span className={`text-2xl font-bold py-10 text-end text-[#ff2428] ${UbuntuFont.className}`}>{item.heading}</span><br /><span className={`text-end font-thin text-gray-500 dark:text-white ${InterFont.className}`}>{item.description}</span></h1>
        </div>
      </div>
      )}
      </div>
      <div className="mt-30 md:dark:border " data-aos="fade-up">
        <h1 className={`dark:text-[#ffee32] text-center text-4xl font-bold ${UbuntuFont.className}`}>Let us grow your business</h1>
        <p className={`dark:text-[#fefde7] text-center text-xl text-gray-500 ${UbuntuFont.className}`}>Best Digital Service in Delhi-NCR</p>
        <div className="grid grid-flow-col grid-rows-8 md:grid-rows-4 gap-x-8 my-10 mx-[20%]">
          {buldInfo.map((item) =>
          <div key={item.name} className="flex">
              <item.icon className="mt-1 font-black text-4xl lg:text-xl text-orange-500" />
            <p className={`dark:text-[#fefde7] ps-3 ${UbuntuFont.className}`}>{item.name}</p>
          </div>
          )}
        </div>
      </div>
      <div className=" block lg:flex p-0 lg:p-10 bg-[#14213D] rounded-lg shadow-lg ">
        <div className="w-[100%] md:w-[40%] m-auto" data-aos='slide-up'>
          <Image src={logo} alt="..." width={500} height={500}/>
        </div>
        <div className="w-[100%] lg:w-[56%]" data-aos='fade-right'>
          <h1 className="font-bold text-2xl underline text-center dark:text-[#ffee32]">TOP WEBSITE DESIGN COMPANY IN INDIA</h1>
          <p className="p-5 dark:text-[#FFFFFF]">As a top-rated website design company in India, we strategize the digital footprint of cross-business verticals. Our speciality is to craft a conversion-worthy digital touchpoint with a seamless blend of strategic vision, advanced technology, and industry exposure. If you are looking to engage a website development company, here’s why you should choose us:</p>
        
        <div className="grid grid-flow-col grid-rows-4 md:grid-rows-2 gap-4" data-aos='fade-left'>
            <div className="flex flex-col md:flex-row">
              <div className="w-15">
                <Image src={years} className="  mx-auto" alt="..." />
              </div>
              <div className="ms-5">
                <h1 className="text-xl font-bold p-0  dark:text-[#ffee32]">Extensive Experience</h1>
                <p className="p-0 dark:text-[#FFFFFF]">Thousands of projects completed for clients globally.</p>
              </div>
              </div>
              <div className="flex flex-col md:flex-row">
              <div>
                <Image src={global} className="lg:w-15 lg:h-10 mx-auto" alt="..." />
              </div>
              <div className="ms-5">
                <h1 className="text-xl font-bold dark:text-[#ffee32]">Global Clientèle</h1>
                <p className="dark:text-[#FFFFFF]">Our services attract clients across 32+ countries of the world.</p>
              </div>
              </div>
              <div className="flex flex-col md:flex-row">
              <div>
                <Image src={costEffective} className="lg:w-15 lg:h-10 mx-auto" alt="..." />
              </div>
              <div className="ms-5">
                <h1 className="text-xl font-bold dark:text-[#ffee32]">Cost Effectiveness</h1>
                <p className="dark:text-[#FFFFFF]">We offer services at very reasonable price points.</p>
              </div>
              </div>
              <div className="flex flex-col md:flex-row">
              <div>
                <Image src={devlopers} className="lg:w-15 lg:h-10 mx-auto" alt="..." />
              </div>
              <div className="ms-5">
                <h1 className="text-xl font-bold dark:text-[#ffee32]">51+ Developers</h1>
                <p className="dark:text-[#FFFFFF]">A large, skilled and experienced team for your projects.</p>
              </div>
              </div>
        </div>
        </div>
      </div>
        <div className="my-10" >
          <h1 className="text-center underline font-black text-4xl text-[#ffee32]" data-aos='fade-left'>
            Our Awesome Client
          </h1>
          <div className="carousel carousel-center  rounded-box  space-x-4 p-6" >
            <div className="carousel-item">
              <Image alt="" src={img04} height={300}  />
            </div>
            <div className="carousel-item">
              <Image alt="" src={img06} height={300} />
            </div>
            <div className="carousel-item">
              <Image alt="" src={img07} height={300}/>
            </div>
            <div className="carousel-item">
              <Image alt="" src={img08} height={300}/>
            </div>
            <div className="carousel-item">
              <Image alt="" src={img09}  height={300}/>
            </div>
            <div className="carousel-item">
              <Image alt="" src={img10}  height={300}/>
            </div>
            <div className="carousel-item">
              <Image alt="" src={img11}  height={300}/>
            </div>
            <div className="carousel-item">
              <Image alt="" src={img12}  height={300}/>
            </div>
            <div className="carousel-item">
              <Image alt="" src={img13}  height={300}/>
            </div>
            <div className="carousel-item">
              <Image alt="" src={img14}  height={300}/>
            </div>
            <div className="carousel-item">
              <Image alt="" src={img15}  height={300}/>
            </div>
          </div>
        </div>
        <section className="bg-[#14213D] border border-gray-200 rounded-lg shadow-lg ">
        <div className=" flex flex-col md:flex-row justify-evenly p-5 md:p-20 " >
            <div data-aos='fade-right'>
              <h1 className="text-2xl text-center font-extrabold dark:text-[#ffee32]" >LET'S CONNECT</h1>
              <p className="dark:text-orange-500">TALK TO OUR DIGITAL MARKETING STRATEGIST NOW</p>
            </div>
            <div className="mt-10 ms-8 md:ms-0 md:mt-0" data-aos='zoom-in'>
              <button type="button" className="focus:outline-none text-white bg-[#14213D] cursor-pointer hover:bg-[#ffee32] focus:ring-4 focus:ring-yellow-300 dark:outline-solid dark:hover:outline-none rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 dark:hover:bg-[#ffee32] font-black">Call Now +91-9818752056,+91-9718358080</button>
            </div>
        </div>
            </section>
            <section className="">
              <div className="my-10 ">
              <h1 className={`underline font-black text-center text-2xl dark:text-[#ffee32] ${UbuntuFont.className}`}>SHOWCASING OUR EXPERTISE</h1>
              <p className={`text-center text-4xl text-gray-500 pt-10 dark:text-[#E4E4E4] ${UbuntuFont.className}`}>MOBILE APP & WEBSITE DEVELOPMENT COMPANY</p>
              
              <Imagecardcrousal Crousal1={Image1} Crousal3={Image2} Crousal4={Image3}/>
            </div>
            </section>
    </div>
  );
}
