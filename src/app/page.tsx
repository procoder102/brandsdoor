import Customcrousal from "@/components/Customcrousal/page";
import Crousal2 from "@/Images/carousal2.jpg";
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
import years from '../Images/image.png'
import devlopers from '../Images/image (3).png'
import global from '../Images/image (2).png'
import costEffective from '../Images/image (1).png'
import { GoGraph } from "react-icons/go";
import { FcDocument } from "react-icons/fc";
import { FaTasks } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";
import logo from '../Images/brand-removebg-preview.png'

import Image from "next/image"
import Imagecardcrousal from "@/components/Imagecardcrousal/page";

export default function Home() {

  const imgMapping = [
    {name:Service1,label:'SEO'},
    {name:Service2,label:'SMS/SSM'},
    {name:Service3,label:'Content Merketing'},
    {name:Service4,label:'Website Design'},
    {name:Service5,label:'Logo & Graphic Design'}
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


  return (
    <div>
      <Customcrousal Crousal1={Crousal2} Crousal3={Crousal3} Crousal4={Crousal4}/>
      <div className="flex flex-col lg:flex-row justify-between h-[18%] p-10 bg-[#cbebeb]">
        <div className="w-[100%]  lg:w-[50%]">
          <h1 className="text-2xl font-black p-2">WE GROW YOUR BUSINESS ONLINE</h1>
          <p className="p-1 text-sm font-samibold">On average we have halped business increase revenue by 90% Yoy.See what we can do for you.</p>
          <p className="p-1 text-xs font-samibold">After appling for a free wes sitecheck up the team will analyze your website and suggest degital marketing methods on which you can improve user interaction and leads for your sels pipeline.</p>
        </div>
        <div className="p-1 flex flex-col justify-between  lg:w-[36%] ">
            <input type="text" id="first_name" className="bg-gray-50 my-10 lg:my-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            LET US GROW YOUR BUSINESS
            </button>
        
        </div>
      </div>
      <div>
        <h1 className="font-bold text-center text-4xl m-10">Our <span className="text-orange-500">Service</span><br /><span className="text-lg text-gray-500">Our DigitalMarketing Services</span></h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly container">

        {imgMapping.map((item,index) =>(
          <div  key={index} className="my-3 ">
              <Image className="lg:w-20 lg:h-10 my-3 mx-auto" src={item.name} alt="..." />
              <h1 className="py-3 text-xl font-medium text-blue-500 text-center">{item.label}</h1>
          </div>
        ) )}

      </div>
      <div className="bg-[#fdf8f5]">
        <h1 className="text-center text-xl font-black pt-5">We do the things differently and out of the box</h1>
        <p className="text-center text-base font-medium">Leading Digital Marketing Agency in Delhi, India</p>
        <div className="flex flex-col lg:flex-row justify-evenly">
          {marketingThings.map((item) =>(
            <div className=" p-11" key={item.name}>
              <item.icon className="w-full lg:w-50 h-10" />
              <h1 className="p-2 font-bold font-sans">{item.name}</h1>
              <span className="font-light text-start font-serif">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto  mt-20">
        <h1 className="text-center text-2xl font-black">Why choose digital marketing <br />services for Online Business?</h1>
        <p className="text-start w-[100%] p-10 font-base text-gray-500">The Brands Door is essentially a full-service Digital Marketing Agency. Based in Noida, the company was established in the year 2012. Later in 2014, at its core, The Brands Door Digital strongly supports and follows the mission of Digital India laid down by Prime Minister Shri. Narstartra Modi and provides cost-effective branding solutions for start-ups in India.</p>
      </div>
      <div className="container mx-auto  mt-20">
        <h1 className="text-center text-2xl font-black">Why the Brands Doors</h1>
        <p className="text-start w-[100%] p-10 font-base text-gray-500">The Brands door Pvt. It is one of the frontrunners in the IT Industry, based in Noida, India. We are accredited with CMMI Level-3 certification. The Brands Door has been recognized as one of the prominent name among well-known IT companies. We are a perfect runway for those who desire intensely to fortify their brand presence in today’s cut-throat competitive age. The Brands Door establish their thrilling presence in 4 + years in digital commerce, web design & development, Digital Marketing.</p>
      </div>
      <div className="grid my-10  grid-flow-col grid-rows-5 lg:grid-rows-3 gap-10 ps-20">
       {whatWeProvide.map((item) =>
      <div className="flex flex-col lg:flex-row" key={item.srno}>
        <Image className="" src={item.icon} alt="..." />
        <div className=" ms-10">
        <h1><span className="text-2xl font-bold py-10 text-end text-blue-300">{item.heading}</span><br /><span className="text-end font-thin text-gray-500">{item.description}</span></h1>
        </div>
      </div>
      )}
      </div>
      <div className="mt-30">
        <h1 className="text-center text-4xl font-bold">Let us grow your business</h1>
        <p className="text-center text-xl text-gray-500">Best Digital Service in Delhi-NCR</p>
        <div className="grid grid-flow-col grid-rows-4 gap-x-8 my-10 mx-[20%]">
          {buldInfo.map((item) =>
          <div key={item.name} className="flex">
              <item.icon className="mt-1 font-black text-4xl lg:text-xl text-orange-500" />
            <p className="ps-3">{item.name}</p>
          </div>
          )}
        </div>
      </div>
      <div className="block lg:flex p-0 lg:p-20 bg-[#f2f2f2]">
        <div className="">
          <Image src={logo} alt="..." className="w-200 h-full"/>
        </div>
        <div className="">
          <h1 className="font-black text-4xl text-center">TOP WEBSITE DESIGN COMPANY IN INDIA</h1>
          <p className="p-10">As a top-rated website design company in India, we strategize the digital footprint of cross-business verticals. Our speciality is to craft a conversion-worthy digital touchpoint with a seamless blend of strategic vision, advanced technology, and industry exposure. If you are looking to engage a website development company, here’s why you should choose us:</p>
        
        <div className="grid grid-flow-col grid-rows-4 md:grid-rows-2 gap-4">
            <div className="flex flex-col md:flex-row">
              <div>
                <Image src={years} className="lg:w-15 lg:h-10  mx-auto" alt="..." />
              </div>
              <div className="ms-5">
                <h1 className="text-xl font-bold">Extensive Experience</h1>
                <p>Thousands of projects completed for clients globally.</p>
              </div>
              </div>
              <div className="flex flex-col md:flex-row">
              <div>
                <Image src={global} className="lg:w-15 lg:h-10 mx-auto" alt="..." />
              </div>
              <div className="ms-5">
                <h1 className="text-xl font-bold">Global Clientèle</h1>
                <p>Our services attract clients across 32+ countries of the world.</p>
              </div>
              </div>
              <div className="flex flex-col md:flex-row">
              <div>
                <Image src={costEffective} className="lg:w-15 lg:h-10 mx-auto" alt="..." />
              </div>
              <div className="ms-5">
                <h1 className="text-xl font-bold">Cost Effectiveness</h1>
                <p>We offer services at very reasonable price points.</p>
              </div>
              </div>
              <div className="flex flex-col md:flex-row">
              <div>
                <Image src={devlopers} className="lg:w-15 lg:h-10 mx-auto" alt="..." />
              </div>
              <div className="ms-5">
                <h1 className="text-xl font-bold">51+ Developers</h1>
                <p>A large, skilled and experienced team for your projects.</p>
              </div>
              </div>
        </div>
        </div>
      </div>
        <div className="my-10" >
          <h1 className="text-center underline font-black text-4xl text-orange-300">
            Our Awesome Client
          </h1>
        </div>
        <section className="bg-[#F5EEF8] border border-gray-200 rounded-lg shadow-lg ">
        <div className=" flex flex-col md:flex-row justify-evenly p-20 " >
            <div >
              <h1 className="text-2xl text-center font-extrabold ">LET'S CONNECT</h1>
              <p>TALK TO OUR DIGITAL MARKETING STRATEGIST NOW</p>
            </div>
            <div className="mt-10 md:mt-0">
              <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Call Now +91-9818752056,+91-9718358080</button>
            </div>
        </div>
            </section>
            <section className="">
              <div className="my-10">
              <h1 className="underline font-black text-center text-2xl">SHOWCASING OUR EXPERTISE</h1>
              <p className="text-center text-4xl text-gray-500 pt-10">MOBILE APP & WEBSITE DEVELOPMENT COMPANY</p>
      <Imagecardcrousal Crousal1={Image1} Crousal3={Image2} Crousal4={Image3}/>
            </div>
            </section>
    </div>
  );
}
