import Image from 'next/image'
import designdevlop from '../../../Images/ECOMMERCE.gif'
import Requestcard from '@/components/Requestcard/page'

export default function Customise() {
    const CompleatesocialMedia = `We would work more closely with our customers to identify their design element requirements and accordingly we would create initial layouts / logos. Once initial Layout is approved we would convert the PSD to HTML / CSS and start integration in Open Source product. After Integration, we would configure Plug-ins like Google Analytics, Social Media and other security / website backup Plug-ins in order to make sure the website works without any glitches. Once everything is setup, we would do browser compatibility testing, User Interface (UI) Testing and do an entire website assessment and audit. We also have options for Responsive and non Responsive Dynamic Web Designs. Our preference and recommendation is Responsive Design in order to make the website compatible with Mobile Devices, Tablets and different Screen Sizes.`
    const dynamicWebsitedesign = `can be simple or complex depending on the customer's design / development needs. It is really effortless to install any Open Source product, select a particular free theme and start adding content / logo. Normally it takes a few hours or a day to start off with a Standard Dynamic Web Design. Usually for Simple Dynamic Website Designs, we only charge for Hosting / Domain yearly fees. In a few cases, we charge additional fees to our customers when they would need us to do any customization, configuration of any Plug-in / Widgets or design element, thus with Standard Dynamic Web Design our approach is simple and it yields cost effective solutions with quick turnarounds.`
    const establishContent = `We believe every customer is different and has different needs, either they own a startup company or a well established business. At thebrandsdoor our Job is to identify precise customer requirements and recommend them an effective and affordable solution. Most of the Dynamic Websites we build are content management systems developed in WordPress, Joomla or Drupal based Open Source products or if required we can also offer Custom private label CMS based Solution.`
    const customDesignShopping = `Features and Search Engine optimization requires additional efforts for planning products / category views and we need to setup Payment Gateways, Billing invoice Management system for order and setup On Page / Off Page Search Engine Plug-in, Social Media Plug-ins and SSL Certificate.`
    return (
    <section className='pt-20'>
        <div className='h-75'>
        <Image src={designdevlop} alt='banner' className='h-75' />
      </div>
      <section className="m-10">
        <h1 className="text-2xl tracking-[0.035em] font-bold dark:text-[#fdd007] leading-6">Costomize Website Design Services</h1>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{establishContent}</p>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white"><span className='font-bold leading-8 tracking-[0.035em] dark:text-[#fdd007]'>Custom Website design</span> {dynamicWebsitedesign }</p>
        
            <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">For <span className='font-bold dark:text-[#fdd007]'>Custom  Web Designs,</span>{CompleatesocialMedia}</p>
            <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">For <span className='font-bold dark:text-[#fdd007]'>Custom Design with Shopping cart</span>{customDesignShopping}</p>
      </section>
      <Requestcard />
    </section>
  )
}
