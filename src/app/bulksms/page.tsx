'use client'
import { IoAdd } from "react-icons/io5";
import '../../custom.css'
import React, { useState } from "react";
import Requestcard from "../../components/Requestcard/page";
export default function Bulksms() {
    const bulkSms = `SMS showcasing is the straightforward and least expensive interaction to advance your business into the market. Mass SMS Service is consistently on the highest point of the need it doesn't make any difference your business is little or enormous. It fills in as to advancing the help/item and getting more leads for organizations. Assuming you might want your business to continue, you need to ensure that you should reach to most extreme number of individuals in a solitary time. The accomplishment of your large business relies upon your showcasing approach. One of the most fundamental pieces of any effective showcasing approach is Bulk SMS.`;
    const sendSMS = `Mass SMS Gateway permits the best correspondence through mass SMS administration in second. You can send straight sms to gathering of individuals to your leader, Students, sort savvy clients and business shrewd organizations to improve business with greatness results. Something should remain as a main priority for an effective SMS Marketing system you need to reach out to the best specialist co-op. This is the principle reason that you should contact our expert group at Online Net India. We guarantee regarding that your business is fit to get greatest benefit of the mass sms methodology. No other portable promoting or advertising channel can have 98% open rates. Mass SMS hit email and online media in both read and reaction rates. So if your business is perceived or absolutely new, you can development and work on this with consumer loyalty of mass SMS entry and SMS API mixes.`;
    const bestSupport = `We are best mass sms specialist co-op at the most reasonable rates, we have a group of best showcasing tacticians who will help you 24*7 hours as customer needs and will detail the system appropriately. Our primary thought process is to help our customer for gives the most ideal profit from ventures. We ensure we will give you to the ideal outcomes and every one of our administrations are practical and we are centered around consumer loyalty.`;

    const faq = [
        {question:'What is a Bulk SMS?',answer:'Bulk SMS is a process of sending messages in bulk for promotion of your business product or services. You can target easily and instantly your genuine market customer.'},
        {question:'What are DND numbers?',answer:'Bulk SMS is a process of sending messages in bulk for promotion of your business product or services. You can target easily and instantly your genuine market customer.'},
        {question:'How to send bulk SMS online?',answer:'Bulk SMS is a process of sending messages in bulk for promotion of your business product or services. You can target easily and instantly your genuine market customer.'},
        {question:'How much does bulk SMS cost?',answer:'Bulk SMS is a process of sending messages in bulk for promotion of your business product or services. You can target easily and instantly your genuine market customer.'},
        {question:'Which type of database do you have?',answer:'Bulk SMS is a process of sending messages in bulk for promotion of your business product or services. You can target easily and instantly your genuine market customer.'},
        {question:'Will you give us commitment for your result?',answer:'Bulk SMS is a process of sending messages in bulk for promotion of your business product or services. You can target easily and instantly your genuine market customer.'},
        {question:'Difference Between Promotional SMS and Transactional SMS ?',
        answer:`Promotional SMS\n\n1. Promotion SMS are being used for promoting and branding your service or product.  This category only includes sales and marketing activity, you can send to your prospects and clients for the promotion of your business or services.\n2. Promotional SMS only can be send on Non-DND numbers.\n3. Promotional SMS can be send between 9am to 9pm.\n4. Promotional SMS can be delivered with a random 6-digit Sender ID assigned by the telecom operator.\n\nTransactional SMS\n\n1. Transactional SMS used to send OTPs, reminders/alerts/notification/information to your existing customer.\n2. Transactional Massages get delivered to both DND & Non-DND numbers.\n3. Transactional SMS are delivered 24x7 with no time restriction.\n4. Transactional SMS can be assigned a 6-alpha character Sender ID of your choice. It can be your business/service/product name.`},
        {question:'In how many characters you will create my message?',answer:`We will create your message in 160 characters which includes your service, its price, its location, its specification etc.
We will create a short and sweet content with attractive and catchy taglines which leads to high open rate.`},
        {question:'Will you send our messages on Both DND and NDND numbers?',answer:'Yes we will.'},
        {question:'How can you target my customer through your bulk SMS service?',answer:'We will shoot your SMS campaign on those numbers which is filtered by our technicians which are continuously working on our database for improvement. We will send messages of your promotion according to your conditions (budget, location, category etc.).'},
    ]
        const [openIndex , setOpenIndex] = useState<number | null>(null);
   const toggleAnswer = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };
    return (
    <section className="pt-20">
        <div className='m-5 md:m-20'>
            <h1 className="text-2xl font-bold dark:text-white">BULK SMS SERVICES</h1>
            <p className="pt-5 dark:text-[#fefde7]">{bulkSms}</p>
            <h1 className="text-2xl font-bold pt-10 dark:text-white">SEND SMS TO NO. OF PEOPLE IN BULK</h1>
            <p className="pt-5 dark:text-[#fefde7]">{sendSMS}</p>
            <h1 className="text-2xl font-bold pt-10 dark:text-white">BEST SUPPORT</h1>
            <p className='pt-5 dark:text-[#fefde7] '>{bestSupport}</p>
        </div>
        <div className='m-5 lg:m-20'>
            <h1 className="text-2xl font-bold py-5 dark:text-white">FREQUENTLY ASKED QUESTIONS?</h1>
            <div className="bg-gray-100  lg:p-10 rounded-lg">
            {faq.map((item,index)=> 
            <div key={index}  onClick={() => toggleAnswer(index)}>
            <div className='flex pt-5 relative justify-between cursor-pointer p-3'  key={index} >
                <h1 className="text-2xl font-bold">{item.question}</h1>
                <button id="add cursor-pointer " ><IoAdd key={index} className="cursor-poiner" onClick={() => toggleAnswer(index)} /></button>
            </div>
                <div className="p-3">
                <p className={` ${openIndex === index ? 'whitespace-pre-wrap' : 'hidden'}`}>{item.answer}</p>
                </div>
                </div>
)}
</div>
</div>
<Requestcard />
    </section>
  )
}
