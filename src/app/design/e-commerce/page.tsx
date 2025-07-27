import Image from 'next/image'
import designdevlop from '../../../Images/ECOMMERCE.gif'
import Requestcard from '@/components/Requestcard/page'

export default function Ecommerce() {
    const socialMedia = [
        {label:'Social Media Strategy'},
        {label:'Facebook Page Management and Advertising'},
        {label:'Twitter Handle Management and Advertising'},
        {label:'LinkedIn Page Management and Advertising'},
        {label:'YouTube Channel Management and Advertising'},
        {label:'Facebook Profile Management'},
        {label:'LinkedIn Profile Management'},
    ]
    const CompleatesocialMedia = `Perhaps the main thing that you need to comprehend is that it is too difficult to deal with your online media picture and to make promotions which are applicable to your administrations and have them publicized via web-based media stage. You need to ensure that you have the imaginative aptitude to do this. It is thusly better on the off chance that you approach us at Online India Net. Out SMM specialists know precisely how to assist you with making the best promotions which will assist you with contacting greatest number of all the online media webpage clients so that individuals on the stage know about your administrations. Our web-based media the board specialists will get a rundown of every one of your administrations and necessities and will attempt to make the most ideal paid mission with the goal that you improve online standing and individuals begin knowing you as a brand.\n\nSo the thing would you say you are hanging tight for? Come over and talk about your necessity and we will ensure that we help you in the most ideal manner in your online media crusade,`
    const establishContent = `In this day and age assuming you need your internet based presence to develop and you need your interest group to know you well then you should be exceptionally dynamic on the web-based media stages like Facebook, Instagram, LinkedIn, Twitter and that's just the beginning. As well as allowing the opportunity for your administrations to reach to various individuals through page creation, connection with target clients.\n\n\nOnline Net India offers total Social Media Marketing administrations in India, with quality outcome situated request to shape your business, administrations or item to make a brand on the lookout. Making your organization or item a brand is truly extreme undertaking to expand its quality in the designated market. SMM administration can assist you with getting known for your organization's best administrations. We will ensure you have a solid presence in the web-based media by offering our best assistance to you. We will make social familiarity with your organization that straightforwardly clicks in the psyche of individuals which will help your business.`
  return (
    <section className='pt-20'>
        <div className='h-75'>
        <Image src={designdevlop} alt='banner' className='h-75' />
      </div>
      <section className="m-10">
        <h1 className="text-2xl tracking-[0.035em] font-bold dark:text-[#fdd007] leading-6">ESTABLISH YOUR PRESENCE IN SOCIAL MEDIA PLATFORM</h1>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{establishContent}</p>
        <h3 className="text-xl font-bold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Our Social Media Marketing Services :</h3>
        <ul className='dark:text-white p-5'>
            {socialMedia.map((item,index) =>
            <li className='list-disc tracking-[0.04em] leading-8 whitespace-pre-wrap dark:text-white' key={index}>{item.label}</li>
            )}
        </ul>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Complete in Social Media Platform Get in The Brands Door :</h3>
            <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{CompleatesocialMedia}</p>
      <Requestcard />
      </section>
    </section>
  )
}
