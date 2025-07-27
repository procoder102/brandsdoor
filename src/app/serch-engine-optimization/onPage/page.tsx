import Image from 'next/image'
import designdevlop from '../../../Images/ECOMMERCE.gif'
import Requestcard from '@/components/Requestcard/page'

export default function Onpage() {
   const establishContent = `On-Page optimization is an important part of Search Engine Optimization campaign. If on-page optimization of a website is done carefully, then you will have good chance of getting a high search engine ranking.`
    const offPageIncludes = [
        {label:'Title Tag Optimization'},
        {label:'Keyword Research'},
        {label:'Meta tag Keywords optimization'},
        {label:'Meta tag description optimization'},
        {label:'IMG ALT tag optimization'},
        {label:'Content Optimization'},
        {label:'Content to Code (C2C) Ratio'},
        {label:'In-page linking'},
        {label:'Sitemap'},
        {label:'Google XML Sitemap'},
    ]
    const Optimization = `Title tag plays an important role in Search Engine Optimization. The Title tag not only provides the overall description of a web page but also it is the sentence which appears on the search results. Title tag is the one which is linked to your website in the search engine results.\nWe optimize title tag for home page and each and every sub page to get the maximum benefit out of it.`
    const Keyword  = `Keyword research is crucial for successful search Engine Website Optimization, managing Pay Per Click keywords and achieving top search engine rankings.`
    const Meta = `Keywords still play an important role in the Search Engine Optimization. We carefully select main keywords for each and every page in the website and optimize the pages for those keywords.\nGo through this Meta tag generator:`
    const Description = `Meta tag Description is the sentence which appears below the title in the search engine results and gives an overall description of the page. We optimize each page's description tag which is more relevant to the page.`
    const ALTTagOptimization = `IMG ALT tags are important for the images as they give the description of images and which are also read by search engines. We carefully select IMG ALT tags for the images which are relevant to the content and help to improve the overall ranking in search engines.`
    const c2cCode = `Content to code (C2C) is becoming very important nowadays. Imagine a scenario where you have just a few lines of content and 10 times code in your web pages. It will certainly confuse a search engine crawler to find out the actual content from the deep nested and complex code. We carefully examine the content and code of pages and optimize the content and code to give high C2C ratio for web pages.`
    const InPage = `In-pages links are also important as they spread the link juice to other pages in a website. Our overall SEO strategy involves linking main keywords from the various pages to the other relevant pages in the website.`
    const Sitemap = `Sitemap provides visitors an overall structure for the website and it also helps search engines to find out the pages in the website. Our sitemap strategy involves careful study of the various pages and organize the pages into a logical sequence so that it is helpful for visitors to find the information that they are looking for.`
    const onPageOptimazationBody = ` is related directly to the content and structure of the website. This service means making appropriate changes to your web pages to make them compatible or friendly for the search engines. This also involves the actual optimization of your web pages. The web pages are optimized with regards to Meta tags, Link structures, Image optimization, body and other visible and invisible areas. On-page factors are highly preferred by major search engines like Google, MSN and Yahoo.`
    const googleXML = `Google XML Sitemap is important as it helps Google Search Engine to find all the pages in a website. We create XML Sitemap based on the various pages in a website which are important. Ideally all pages should be listed in a Google XML Sitemap. However in a complex and dynamic website it might not be possible to list all the pages in the Google Sitemap.\n\nTo create XML sitemap for your website visit and just follow the four simple steps and get a sitemap.`
   return (
    <section className='pt-20'>
        <div className='h-75'>
        <Image src={designdevlop} alt='banner' className='h-75' />
      </div>
      <section className="m-10">
        <h1 className="text-2xl tracking-[0.035em] font-bold dark:text-[#fdd007] leading-6">Organic SEO - On Page Optimization</h1>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{establishContent}</p>
        <p className="pt-5 leading-8 tracking- whitespace-pre-wrap dark:text-white"><span className='text-xl font-bold dark:text-[#fdd007]'>On-page optimization </span>{onPageOptimazationBody}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Following are the some of the aspects of on-page optimization</h3>
        <ul className='dark:text-white p-5'>
            {offPageIncludes.map((item,index) =>
            <li className='list-disc tracking-[0.04em] leading-8 whitespace-pre-wrap dark:text-white' key={index}>{item.label}</li>
            )}
        </ul>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Title Tag Optimization</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{Optimization}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Keyword Research</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{Keyword }</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Meta tag Keywords Optimization</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{Meta}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Meta tag Description Optimization</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{Description}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">IMG ALT Tag Optimization</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{ALTTagOptimization}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Content to code (C2C) ratio</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{c2cCode}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">In-Page Links</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{InPage}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Sitemap</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{Sitemap}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Google XML Sitemap</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{googleXML}</p>


      <Requestcard />
        </section>
    </section>
  )
}
