import Image from "next/image";
import Video from "next-video";
import googleads from "../../Images/googlead.gif"
import img04 from '../../Images/Website Designing Company in Noida, Web_files/04.jpg'
import img06 from '../../Images/Website Designing Company in Noida, Web_files/06.jpg'
import img07 from '../../Images/Website Designing Company in Noida, Web_files/07.jpg'
import img08 from '../../Images/Website Designing Company in Noida, Web_files/08.jpg'
import img09 from '../../Images/Website Designing Company in Noida, Web_files/09.jpg'
import img10 from '../../Images/Website Designing Company in Noida, Web_files/12.jpg'
import img11 from '../../Images/Website Designing Company in Noida, Web_files/16.jpg'
import img12 from '../../Images/Website Designing Company in Noida, Web_files/17.jpg'
import img13 from '../../Images/Website Designing Company in Noida, Web_files/20.jpg'
import img14 from '../../Images/Website Designing Company in Noida, Web_files/21.jpg'
import img15 from '../../Images/Website Designing Company in Noida, Web_files/26.jpg';
import serchAdvertising from '../../Images/ads.png';
import displayAdvertising from '../../Images/ads-1.png';
import googleShopping from '../../Images/business.png';
import videoAdds from '../../Images/video-marketing.png';
import keywordManagement from '../../Images/keyword.png';
import campaginAdd from '../../Images/digital-marketing.png';
import tracking from '../../Images/tracking.png';
import report from '../../Images/report.png';
import Requestcard from "@/components/Requestcard/page";
import { Inter,Ubuntu } from 'next/font/google';

const InterFont = Inter({
    subsets:['cyrillic'],
    weight:'300'
  });
  
  const UbuntuFont = Ubuntu({
    subsets: ['cyrillic'],
    weight: '500'
  })

export default function Google() {

    const googleAddsService = [
        {label:'Search Advertising',body:'Search advertising is considered as one of the essential Google Ads services in India and so, we have specialist which uses various terms like PPC services, SEM, etc. to drive the highest benefit. We are data-driven, precise and 100% transparent. As a result manage the full process for you including extensive key phrase research, opponent analysis, ongoing management, testing, and reporting.',icon:serchAdvertising},
        {label:'Display Advertising',body:'Within the display advertising plan, you can display your ads to various websites and blogs. As a result, you will be able to reach people who are, engaged in the services you provide. Through our Google Ads services in India, your organization we are able to build a brand value recognition which allows in growth and displaying ads. With the help of our latest methods, remarketing tools, and Google Analytics, we display the advertising in a more attractive and well-mannered way.',icon:serchAdvertising},
        {label:'Google Shopping Ads',body:'Google Shopping helps you to showcase images of your products at the top of Google results so, if you are an eCommerce retailer. We will help you set up, manage and optimize your shopping operations and product listing ads to promote your catalog. Moreover, we advertise your products by optimizing & organizing your product stock listing, and shopping campaigns by targeting correct keywords.',icon:googleShopping},
        {label:'Video Ads',body:'Video ads are the most appealing kind of advertising asset. It is an excellent way to make a natural connection with potential consumers. Therefore, Video ads have a very intense branding effect and can create a powerful brand recall. Your video Ad will play before relevant YouTube videos, and may also be recommended in the sidebar of the website’s search and watch pages.',icon:videoAdds},
        {label:'Remarketing',body:'In Google Ads services in India, remarketing is a smart promotion technique, and it stimulates users to return to the website by gently prompting and reminding them with relevant ads. As a result, the “reminder” ads will be presented on the basis of their search patterns and previous interaction with your website. We will help you to increase ROI and increase progress by marketing to people who have already visited your website.',icon:serchAdvertising},
        {label:'Keyword management',body:'At Vispan, we manage your Google Ads services account targeting the keywords that will direct buyers to your site. Through the different analysis tools we use, we will build powerful ppc campaigns focused on meeting your point lead or cost per sale. So, we will examine keywords and costs to decide which keywords have the potential to provide the best ROI.',icon:keywordManagement},
        {label:'Campaign and Adcopy Creation',body:'We will set up your Google Ads campaign, design ad copy, and configure all settings. All campaigns use A/B testing to improve click-through rates(CTR) and improve sales conversion. Consequently, many ad variations will be created and adjusted to obtain the highest exchange rates possible. Vispan concentrates on the age group’s keywords to ensure more growth and higher traffic at the lower cost that delivers our clients business goal.',icon:campaginAdd},
        {label:'Tracking',body:`Without analyzing your data, you might not get the appropriate traffic for your website. Our team assures estimating and tracing the entire data to re-optimize the account moving ahead. So, without the right data, optimizing PPC operations would just be a crack in the dark. So, that's the reason why one of the total initial things we do is to make sure the tracking is set up correctly, giving us all the data we need to optimize the accounts going forth in Google Ads services`,icon:tracking},
        {label:'Reporting & Analysis',body:'Google Ads services in India we produce statements that provide significant insight into what’s befalling your PPC campaign. So, our reports are created to display insight into your PPC campaign. Therefore, our reports reveal the developments in your campaigns and what we have done to help assure your success. Every month we will provide a summary of what was done and what the plan is for the upcoming month.',icon:report},
    ]
  return (
    <section className='pt-20'>
        <div className='h-75'>
            <Image src={googleads} alt="..." className="h-75" />
      </div>
      <section className='Marketing lg:p-10'>
        <h1 className={`text-4xl font-bold text-center  dark:text-[#ffee32] ${UbuntuFont.className}`}>Our Performance Marketing Clients</h1>
        <p className={`text-center  p-10 lg:px-35 dark:text-[#fefde7] ${InterFont.className}`}>The SEO Agency has helped organizations across all sectors build websites that generate more leads, rank better and best and reach goals. Our websites not only look great but also use specific call-to-action to convert website visitors to online leads.</p>
        <div className="flex justify-around flex-col lg:flex-row">
          <h1 className="text-4xl font-bold text-blue-500 text-center">100+ <span className="font-light text-black text-sm dark:text-white"><br />Total Website Traffic</span></h1>
          <h1 className="text-4xl font-bold text-blue-500 text-center">10 CR+<span className="font-light text-black text-sm dark:text-white"><br />Ecommerce Transaction</span></h1>
          <h1 className="text-4xl font-bold text-blue-500 text-center">2500+<span className="font-light text-black text-sm dark:text-white"><br />Non Branded Keywords</span></h1>
          <h1 className="text-4xl font-bold text-blue-500 text-center">100K+<span className="font-light text-black text-sm dark:text-white"><br />Leads Generated</span></h1>
        </div>
        
                <section>
                    <div className="carousel carousel-center  rounded-box  space-x-4 p-6">
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
                </section>
        <div className="flex justify-center lg:p-5">
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-blue-500 font-samibold focus:outline outline-blue-500 bg-blue rounded-lg border border-lg border-blue-500 hover:bg-blue-500 text-xl hover:text-white hover:cursor-pointer focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Get My Wes SEO Audit</button>
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-blue-500 rounded-lg  hover:bg-blue-700 hover:text-white text-xl hover:cursor-pointer focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white dark:text-blue-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-blue-900">Get Started</button>
        </div>
      </section>
      <div className="">
        <h1 className="text-2xl font-bold text-blue-500 text-center">Our Google Ads Services In India</h1>
      </div>
      <div className="py-10 mx-5 lg:mx-0 md:mx-50 grid grid-flow-row grid-rows-3 lg:grid-flow-col  lg:grid-rows-3 gap-10">
        {googleAddsService.map((item)=>
        <div key={item.label} className="card bg-base-100 w-96 shadow-sm">
           <figure><Image src={item.icon} className="w-30 h-30 mx-auto py-2"  alt="..." /></figure> 
            <div className="card-body"><h1 className={`text-xl dark:text-[#ffee32]  ${UbuntuFont.className}`}>{item.label}</h1>
            <p className={`text-base ${InterFont.className}`}>{item.body}</p>
            </div>
        </div>
        )}
      </div>
      <section className='lg:p-5'>
                    <Requestcard />
                    </section>
    </section>
  )
}
