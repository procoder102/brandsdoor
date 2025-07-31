import Image from "next/image"
import socialMarketing from '../../Images/socialmediaMarketing.gif'
import Requestcard from "@/components/Requestcard/page"
import '../../custom.css'
import { Inter,Ubuntu } from 'next/font/google';


const InterFont = Inter({
    subsets:['cyrillic'],
    weight:'300'
  });
  
  const UbuntuFont = Ubuntu({
    subsets: ['cyrillic'],
    weight: '500'
  })
export default function Content() {
  const contentBody = 'Writing is a process to attract your clients to join your team or work closely with you. Our content writing team played vital role in our organization who have 5+ years of experience in specific domain. Our content writing professionals supports you in creating content for your website, digital marketing purposes, blog posts, articles, short scripts for videos and podcasts and other social media platform such as Facebook, Instagram, LinkedIn and Twitter.'
  return (
    <div className='pt-20 font-[Open_Sans]'>
      <div className="paraColor">
        <Image src={socialMarketing} className='relative' alt='...' />
        <button type='button' className='duration-300 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]. absolute top-35 left-5 md:top-50 md:left-30 lg:top-70 lg:left-50 bg-orange-500 text-white font-bold object-cover rounded-full hover:cursor-pointer  px-5 md:px-8 lg:px-20 py-1'>Contact us</button>
      </div>
      <div className="p-10">
        <h1 className={`text-2xl font-bold dark:text-[#ffee32]  ${UbuntuFont.className}`}>Content Writing</h1>
        <p className={`pt-5 dark:text-[#fefde7] ${InterFont.className}`}>{contentBody}</p>
        <h2 className={`pt-10 text-2xl font-bold dark:text-[#ffee32] ${InterFont.className}`}>Services in Content Writing</h2>
        <ul className="pt-5 dark:text-[#fefde7]">
          <li>• Process driving approaches</li>
          <li>• Creative Writing</li>
          <li>• Blogs</li>
          <li>• Short Script</li>
          <li>• Articles</li>
          <li>• Creative Social Media Posts</li>
          <li>• You Tube Video Description</li>
        </ul>
        <p className="dark:text-[#fefde7]">What are you waiting for? Join us for wonderful content creation with Your Digital Friend, The Brand’s Door...</p>
      </div>
      <section className='lg:p-5'>
        <Requestcard />
      </section>
    </div>
  )
}
