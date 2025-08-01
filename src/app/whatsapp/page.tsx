import Requestcard from '@/components/Requestcard/page'
import React from 'react'
import { Inter,Ubuntu } from 'next/font/google';


const InterFont = Inter({
    subsets:['cyrillic'],
    weight:'300'
  });
  
  const UbuntuFont = Ubuntu({
    subsets: ['cyrillic'],
    weight: '500'
  })

export default function Transactional() {
    const emailMarketing = `In today’s hyper-connected world, where instant communication is key, businesses need to meet customers where they are—and that’s often on WhatsApp.`
    const customNews = `With over 2 billion users globally, WhatsApp Business has become a game-changer for companies looking to build trust, increase engagement, and drive conversions.`
    const customNewsObject = [
        {label:'Create a branded business profile.'},
        {label:'Send automated messages, greetings, and away replies.'},
        {label:'Organize chats with labels.'},
        {label:`Share catalogs and product information.`},
        {label:'Communicate with customers in real-time.'},
    ]
    const campaign = `\n\nFrom setup to sending, our team handles every detail, so you can focus on running your business. We ensure your messages reach the right people at the right time, without worrying about spam flags or compliance issues. With our fully managed service, your WhatsApp campaigns stay professional, personalized, and high-performing. Let’s simplify your communication and help you connect with customers more effectively than ever.`
    const campaignObject = [
        {li:`We manage your WhatsApp marketing, so you can manage your business`},
        {li:`Reach the right people at the right time—without lifting a finger.`},
        {li:`No stress, no spam risks—just smart, compliant messaging that works.`},
        {li:`Let us handle the tech, timing, and targeting of your WhatsApp campaigns.`},
        {li:`Professional, personalized WhatsApp messaging—fully managed for you.`},
        {li:`Simplify your communication. Amplify your customer connections.`}
    ]
    
    return (
    <section className='pt-20'>
        <div className='m-5 md:m-20'>
        <h1 className={`text-2xl font-bold dark:text-[#ffee32]  ${UbuntuFont.className}`}>Still thinking about how to grow a bussiness.</h1>
        <h3 className={`text-xl font-bold dark:text-[#ffee32]  ${UbuntuFont.className}`}>we can help you grow—no pressure. 😊</h3>
        <p className={`pt-5 dark:text-[#fefde7] ${InterFont.className}`}>{emailMarketing}</p>
        <h1 className={`text-2xl pt-10 font-bold dark:text-[#ffee32]  ${UbuntuFont.className}`}>What's App Service</h1>
        <p className={`pt-5 dark:text-[#fefde7] ${InterFont.className}`}>{customNews}</p>
        <ul className='list-disc p-10 dark:text-[#fefde7]'>
            {customNewsObject.map((item,index)=>
            <li className={`font-bold ${InterFont.className}`} key={index}>{item.label}</li>
            )}
        </ul>
        <p className='whitespace-pre-wrap dark:text-[#fefde7]'><span className={`text-xl pt-10 font-bold dark:text-[#ffee32]  ${UbuntuFont.className}`}>Take the stress out of WhatsApp messaging—we’ve got it covered. </span>{campaign}</p>
            <ul className='list-disc p-10 dark:text-[#fefde7]'>
                {campaignObject.map((item,index)=> 
                <li className={`pt-1 ${InterFont.className}`} key={index}>{item.li}</li>
                )}
            </ul>
        </div>
        <section className='lg:p-5'>
                <Requestcard />
              </section>
    </section>
  )
}
