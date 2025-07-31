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

export default function Email() {
    const emailMarketing = `Newsletter and Email marketing campaigns are a proven way to reach new customers and stay in touch with existing ones. However, this can take up hours or even days of your time in creating attractive newsletters and managing the campaigns. This is where we can help.`
    const customNews = `We are able to create attractive and eye catching email newsletters and handle the sending to your client base, all we need are customers' email addresses.\n\nNot only will we create the newsletter for your business and send it to your customer database, we will also supply feedback and reports including:`
    const customNewsObject = [
        {label:'Who opened your email'},
        {label:'Who clicked what link, when and how many times'},
        {label:'Who subscribed / unsubscribed'},
        {label:'Who forwarded your email to a friend'},
        {label:'Bounce and spam rates'},
        {label:'And much more...'}
    ]
    const campaign = `It takes the load away from your business allowing you to concentrate on other areas, and most importantly removes any risk of being blacklisted by spam lists - leaving it to be professionally managed and maintained by our service. You can even select send HTML and simple text based emails within each campaign and allow greater exposure to customers using mobile devices and other text based email clients.
    \n\nAs a customer you will receive your own unique login from which you can chose to manage your campaigns entirely by yourself if you prefer. Some of the features included are:`
    
    const campaignObject = [
        {li:`Start your own campaigns, use one of the templates we have created for you (or ask us to create you a new one), edit the content and send your newsletter.`},
        {li:`Define the campaign start date - set the newsletter to send whenever you like in the future.`},
        {li:`View extensive live reports and user feedback.`},
        {li:`Update your customer email list manually and mass update it by uploading an excel / csv file.`},
        {li:`Before you send your newsletter you have the option to preview it to selected email addresses and even view examples of how it will look in 15 different email clients such as Outlook, Outlook Express and Apple Mail.`}
    ]
    
    return (
    <section className='pt-20'>
        <div className='m-5 md:m-20'>
        <h1 className={`text-2xl font-bold dark:text-[#ffee32]  ${UbuntuFont.className}`}>Email Marketing Solutions</h1>
        <h3 className={`text-xl font-bold dark:text-[#ffee32]  ${UbuntuFont.className}`}>Reach thousands of your customers instantly with our email marketing campaigns.</h3>
        <p className={`pt-5 dark:text-[#fefde7] ${InterFont.className}`}>{emailMarketing}</p>
        <h1 className={`text-2xl pt-10 font-bold dark:text-[#ffee32]  ${UbuntuFont.className}`}>Custom Newsletter Service</h1>
        <p className={`pt-5 dark:text-[#fefde7] ${InterFont.className}`}>{customNews}</p>
        <ul className='list-disc p-10 dark:text-[#fefde7]'>
            {customNewsObject.map((item,index)=>
            <li className={`font-bold ${InterFont.className}`} key={index}>{item.label}</li>
            )}
        </ul>
        <p className='whitespace-pre-wrap dark:text-[#fefde7]'><span className={`text-xl pt-10 font-bold dark:text-[#ffee32]  ${UbuntuFont.className}`}>In letting us handle your email campaign </span>{campaign}</p>
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
