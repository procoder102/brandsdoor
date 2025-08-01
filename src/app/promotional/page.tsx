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

export default function Promotional() {
    const emailMarketing = `Promotional SMS is a way of sending short message service (SMS) messages to your business’s audience. `
    const customNews = `This is a great way to communicate and engage with your audience to inform them of important deals and promotions and encourage them to make purchases. `
    const customNewsObject = [
        {label:'Share deals. Drive sales.'},
        {label:'Connect. Promote. Convert.'},
        {label:'Send offers. Get results.'},
        {label:'Instant promos. Instant action.'},
        {label:'Keep them informed. Keep them buying.'},
        {label:'Engage your audience. Boost your sales.'}
    ]
    const campaign = `\n\nWe handle everything from setup to delivery so you can focus on growing your business. Our expert team ensures your messages reach the right people, at the right time, without ever risking spam filters or blacklists. With us, your SMS campaigns are fully managed, compliant, and optimized for results. Let’s make your communication smarter, safer, and more effective while you stay focused on what matters most.

`
    const campaignObject = [
        {li:`Tired of worrying about spam filters? Let us handle your SMS safely and smartly.`},
        {li:`You grow the business we’ll make sure your SMS campaigns hit the mark.`},
        {li:`Avoid the blacklist, skip the stress our team’s got your SMS covered.`},
        {li:`Let your offers land where they matter our SMS experts make it happen.`},
        {li:`Stop guessing, start connecting professionally managed SMS that delivers.`}
    ]
    
    return (
    <section className='pt-20'>
        <div className='m-5 md:m-20'>
        <h1 className={`text-2xl font-bold dark:text-[#ffee32]  ${UbuntuFont.className}`}>Promotion Solutions.</h1>
        <h3 className={`text-xl font-bold dark:text-[#ffee32]  ${UbuntuFont.className}`}>Connect with thousands of your customers instantly through our powerful, results-driven campaigns.</h3>
        <p className={`pt-5 dark:text-[#fefde7] ${InterFont.className}`}>{emailMarketing}</p>
        <h1 className={`text-2xl pt-10 font-bold dark:text-[#ffee32]  ${UbuntuFont.className}`}>Custom SMS Service</h1>
        <p className={`pt-5 dark:text-[#fefde7] ${InterFont.className}`}>{customNews}</p>
        <ul className='list-disc p-10 dark:text-[#fefde7]'>
            {customNewsObject.map((item,index)=>
            <li className={`font-bold ${InterFont.className}`} key={index}>{item.label}</li>
            )}
        </ul>
        <p className='whitespace-pre-wrap dark:text-[#fefde7]'><span className={`text-xl pt-10 font-bold dark:text-[#ffee32]  ${UbuntuFont.className}`}>Let us take the hassle out of Promotional SMS for you. </span>{campaign}</p>
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
