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
    const Press = `Press Releases are another way to increase link popularity. We offer Press Release writing and Press Release Submission to various PR websites.\n\nFree Press Release Submission Sites.`
    const Blog = `In Blog Submission, our skilled staff is investing their full efforts in lettering blog and submitting to the different websites having good past records like`
    const SocialBookmarking = `Social Bookmarking is also one of the important Off-Page Factors. It also contributes to incoming website links.\n\nCurrently the most used software application.\n\nDigg is a technology news website that combines social bookmarking, blogging, RSS, and non-hierarchical editorial control. With Digg, users submit stories for review, but rather than allow an editor to decide which stories go on the homepage, the users do.\n\n\nA social search engine integrating tool with social bookmarking and search functionality.`


   return (
    <section className='pt-20'>
        <div className='h-75'>
        <Image src={designdevlop} alt='banner' className='h-75' />
      </div>
      <section className="m-10">
        <h1 className="text-2xl tracking-[0.035em] font-bold dark:text-[#fdd007] leading-6">Organic SEO - On Page Optimization</h1>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{establishContent}</p>
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
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{Press}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Content to code (C2C) ratio</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{Blog}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">In-Page Links</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{SocialBookmarking}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Sitemap</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{SocialBookmarking}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Google XML Sitemap</h3>


        </section>
      <Requestcard />
    </section>
  )
}
