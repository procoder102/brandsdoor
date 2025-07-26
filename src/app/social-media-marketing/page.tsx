import Image from 'next/image';
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
import img15 from '../../Images/Website Designing Company in Noida, Web_files/26.jpg'
import google from '../../Images/Google.jpg'
import socialMarketing from '../../Images/socialmediaMarketing.gif'
import facebook from '../../Images/facebook.jpg';
import youtube from '../../Images/youtube.jpg'
import instagram from '../../Images/instagram.jpg'
import linkedin from '../../Images/linkedin.jpg';
import socialMedia from '../../Images/socialMedia.jpg'
import mail from '../../Images/mail.jpg';
import video from '../../Images/video.gif'
import graphic from '../../Images/graphics.jpg';
import Requestcard from '../../components/Requestcard/page';

export default function Google() {
  return (
    <section>
        <div className='pt-20'>
          <div>
            <Image src={socialMarketing} className='relative' alt='...' />
            <button type='button' className='duration-300 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]. absolute top-35 left-5 md:top-50 md:left-30 lg:top-70 lg:left-50 bg-orange-500 text-white font-bold object-cover rounded-full hover:cursor-pointer  px-5 md:px-8 lg:px-20 py-1'>Contact us</button>
          </div>
            {/* <div className="flex flex-col-reverse lg:flex-row ">
                <div className="bg-blue-300 lg:w-[50%] p-10 py-30">
                    <h1 className='text-center text-2xl  font-black text-white'>Build your company’s website to grow your business</h1>
                    <p className='lg:p-5 text-center text-white '>With millions of websites on the web you want to make sure your company’s website stands out, represents you well and helps you grow.</p>
                    <div className="flex justify-center">
                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white font-samibold focus:outline outline-white bg-blue rounded-lg border border-gray-200 hover:bg-blue-900 text-xl hover:text-white hover:cursor-pointer focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Audit my website</button>
                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black text-xl hover:cursor-pointer focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Get Started</button>
                    </div>
                </div>
                <div className='lg:w-[50%]'>
                    <Image src={googleAdd} alt='...' className='h-100 lg:h-[40vw]' />
                </div>
            </div> */}
            <section className='Marketing lg:p-10'>
                <h1 className='text-4xl font-bold text-center dark:text-white'>Our Performance Marketing Clients</h1>
                <p className="text-center  p-10 lg:px-35 dark:text-[#fefde7]">The SEO Agency has helped organizations across all sectors build websites that generate more leads, rank better and best and reach goals. Our websites not only look great but also use specific call-to-action to convert website visitors to online leads.</p>
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
                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-blue-500 rounded-lg  hover:bg-blue-700 hover:text-white text-xl hover:cursor-pointer focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white dark:text-blue-900 dark:border-gray-600 dark:hover:text-white dark:hover:bg-blue-900">Get Started</button>
                    </div>
            </section>
            <section className='p-10'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    <div className=''>
                        <Image src={facebook} className='border rounded-xl h-auto lg:h-[19vw]' alt='...' />
                        <h1 className='pt-5 text-center font-bold font-[Open_Sans] font-serif text-2xl dark:text-white'>facebook Ads</h1>
                    </div>
                    <div className=''>
                        <Image src={youtube} className='border rounded-xl h-auto lg:h-[19vw] w-100 h-65' alt='...' />
                        <h1 className='pt-5 text-center font-bold font-[Open_Sans] font-serif text-2xl dark:text-white'>youtube Ads</h1>
                    </div>
                    <div className=''>
                        <Image src={instagram} className='border rounded-xl h-auto lg:h-[19vw]' alt='...' />
                        <h1 className='pt-5 text-center font-bold font-[Open_Sans] font-serif text-2xl dark:text-white'>Instagram Ads</h1>
                    </div>
                    <div className=''>
                        <Image src={linkedin} className='border rounded-xl h-auto lg:h-[19vw]' alt='...' />
                        <h1 className='pt-5 text-center font-bold font-[Open_Sans] font-serif text-2xl dark:text-white'>LinkedIn Ads</h1>
                    </div>
                    <div className=''>
                        <Image src={socialMedia} className='border rounded-xl h-auto lg:h-[19vw]' alt='...' />
                        <h1 className='pt-5 text-center font-bold font-[Open_Sans] font-serif text-2xl dark:text-white'>Social media Ads</h1>
                    </div>
                    <div className=''>
                        <Image src={graphic} className='border rounded-xl h-auto lg:h-[19vw]' alt='...' />
                        <h1 className='pt-5 text-center font-bold font-[Open_Sans] font-serif text-2xl dark:text-white'>Graphic Designs</h1>
                    </div>
                    <div className=''>
                        <Image src={video} className='border rounded-xl h-auto lg:h-[19vw]' alt='...' />
                        <h1 className='pt-5 text-center font-bold font-[Open_Sans] font-serif text-2xl dark:text-white'>Video Editing</h1>
                    </div>
                    <div className=''>
                        <Image src={mail} className='border rounded-xl h-auto lg:h-[19vw]' alt='...' />
                        <h1 className='pt-5 text-center font-bold font-[Open_Sans] font-serif text-2xl dark:text-white'>Mail Marketing Services</h1>
                    </div>
                </div>
            </section>
        </div>
        <Requestcard />
    </section>
  )
}
