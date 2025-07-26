import Image from 'next/image'
import designdevlop from '../../../Images/ECOMMERCE.gif'
import Requestcard from '@/components/Requestcard/page'

export default function Offpage() {
   const establishContent = `Off-page optimization is a part of Search Engine Optimization (SEO) which includes those activities which indirectly help in the online promotion of a website in search engines. All these activities help in increasing the popularity of a website, brand awareness and the importance of a webpage in all the major search engines.`
    const offPageIncludes = [
        {label:'Link Building'},
        {label:'Directory Submission'},
        {label:'Article Writing'},
        {label:'Article Submission'},
        {label:'Press Releases'},
        {label:'Blog Submission'},
        {label:'Social Bookmarking'},
    ]
    const linkBuinding = `In link building, we get inbound links for the website to increase its link popularity and to get the website into top of the search results. We provide one way from the relevant web pages and from the content which are relevant to the keyword.\n\nContrary to the common belief, that link building is as simple as adding a link in a website, link building is a complex procedure whereas we have to plan and execute the link building meticulously. If link building is not done properly then it may harm your website and you get banned in search engines.`
    const Directory = `We are one of the leading SEO companies offering a wide range of directory submission services. We are also one of the few SEO companies offering directory submission services in various other languages.\n\nOur directory submission services are 100% manual and organic. As part of our directory submission services we carefully analyze your website, prepare keywords list, descriptions and titles and submit them to the relevant categories in over 2000 free interment directories.`
    const Article = `In Search Engine Optimization, content is the king. We can't undermine the importance of the content. Articles are one of the best and most effective ways to get the incoming links to your website.\n\nAs part of our article writing services we write unique, grammatically correct and optimized articles on a wide range of topics. Our article writers are expert writers, novelists and well versed in writing articles for SEO.`
    const ArticleSubmission = `We offer article submission services which include article content formatting, adding links in the articles, selecting proper anchor text and then submitting to free article directories in relevant categories. All of our article submissions are done manually by our expert article submitters.`
    const Press = `Press Releases are another way to increase link popularity. We offer Press Release writing and Press Release Submission to various PR websites.\n\nFree Press Release Submission Sites.`
    const Blog = `In Blog Submission, our skilled staff is investing their full efforts in lettering blog and submitting to the different websites having good past records like`
    const SocialBookmarking = `Social Bookmarking is also one of the important Off-Page Factors. It also contributes to incoming website links.\n\nCurrently the most used software application.\n\nDigg is a technology news website that combines social bookmarking, blogging, RSS, and non-hierarchical editorial control. With Digg, users submit stories for review, but rather than allow an editor to decide which stories go on the homepage, the users do.\n\n\nA social search engine integrating tool with social bookmarking and search functionality.`


   return (
    <section className='pt-20'>
        <div className='h-75'>
        <Image src={designdevlop} alt='banner' className='h-75' />
      </div>
      <section className="m-10">
        <h1 className="text-2xl tracking-[0.035em] font-bold dark:text-[#fdd007] leading-6">Organic SEO - Off Page Optimization</h1>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{establishContent}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Off-page optimization includes different types of activities which are as follows:</h3>
        <ul className='dark:text-white p-5'>
            {offPageIncludes.map((item,index) =>
            <li className='list-disc tracking-[0.04em] leading-8 whitespace-pre-wrap dark:text-white' key={index}>{item.label}</li>
            )}
        </ul>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Link Building</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{linkBuinding}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Directory Submission</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{Directory}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Article Writing</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{Article}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Article Submission</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{ArticleSubmission}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Press Releases</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{Press}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Blog Submission</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{Blog}</p>
        <h3 className="text-xl font-samibold tracking-[0.035em] dark:text-[#fdd007] leading-6 pt-10">Social Bookmarking</h3>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{SocialBookmarking}</p>

        </section>
      <Requestcard />
    </section>
  )
}
