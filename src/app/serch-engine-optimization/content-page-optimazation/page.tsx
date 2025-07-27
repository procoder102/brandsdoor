import Image from 'next/image'
import designdevlop from '../../../Images/design&devlop.gif'
import Requestcard from '@/components/Requestcard/page'

export default function Content() {
    const contentWritingService = `Words can create; words can destroy; words can borne revolution; words express ideas and emotions. If the right words are not used it can lead to miscommunication. A content-rich website can create a marked difference in its ability to bring in traffic. Innovative design, keyword rich and understandable content contributes in making a website attractive. A website needs to be interactive yet informative.\n\nThe website should be clear about the products and services it provides. The visitor needs to easily comprehend the content and get an overall view of the business type and its values. A well written and interactive website succeeds in inviting and retaining more traffic. This is the reason why the importance of`
    const theBrandDoor = `are well aware of the strengths of content writing and therefore we are trying to offer the best quality content writing services at a competitive rate.`
    const copyWriting = `The primary objective of a website is showcased through its rich content. Your website needs to be stylish yet informative. A visually appealing website contributes in flocking a large number of visitors. Your website should be understandable and keyword rich to make the search easy. Briefly enough an appealing website is one which is:`
    const contentWritingServices = `that are tailored to the specific requirements of its clients. Skynet Technologies offers quality content on a variety of topics and is proud to provide writing services for a vast range of products and services. We offer affordable content writing services that we support with an unmatched quality assurance.`
    const copyWritingObject = [
        {label:`Content-rich and visually appealing.`},
        {label:`Understandable and clear in dealing with its products and services.`},
        {label:`Precise and to the point yet interesting and interactive.`},
        {label:`Provides the guidelines to carry out the necessary formalities for an online purchase.`},
        {label:`Appeals to the dreams and fantasies of the visitor to persuade him to get interested in your products and services.`}
    ]
    const SEOCopywriting = `SEO Copywriting is very significant in website designing. Simple, original and search-friendly content is the show-stealer of a well-known site. Well-researched, keyword-rich content contributes in grabbing the biggest pie of the market share for online marketing. The primary objective of our seasoned SEO copywriters is to provide you with good optimized content with effective use of keywords. The following tips will help in getting good rankings in the SERPs (Search Engine Result Pages):`
    const SEOCopywrintingObject = [
        {label:'First attraction lasts long. The home page of a website mirrors the image of the business type, its product and services to the public. An attractive design with unique contents has a compelling impact on the visitors.'},
        {label:'Telling the headline that speaks about the company and its values.'},
        {label:'Proper and effective use of keywords in SEO articles helps in good ranking in search engines.'},
        {label:'Meta title, meta description and use of keywords in these parts as well as body content is a must.'},
        {label:'Header text and footer text also contribute greatly to on-page optimization.'}
    ]

    const ArticleWriting = `The Sea of knowledge is vast. Millions of people wish to drown themselves in this deep sea. They search for their desired topics on the Internet. Day by day the demand of online articles is at a flux. These articles should be informative and well written to attract and retain visitors. This can contribute to the success of the website. Trust Skynet Technologies a well-known content writing company, for creative and interesting articles on the website. Our experienced team devotes their creativity to your success.`
    return (
    <section className='pt-20'>
        <div className='h-75'>
        <Image src={designdevlop} alt='banner' className='h-75' />
      </div>
      <section className="m-10">
        <h1 className='text-2xl tracking-[0.035em] font-bold dark:text-[#fdd007] leading-6'>Content Writing Services</h1>
        <p className='pt-5 leading-8 tracking-[0.035em] font-bold whitespace-pre-wrap dark:text-white'>{contentWritingService} <span className='text-xl text-bold dark:text-[#fdd007] whitespace-pre-wrap'> content writing </span>  has increased dramatically in the past few years.</p>
        <p className="pt-5 leading-8 tracking-[0.035em] font-bold whitespace-pre-wrap dark:text-white">We at <span> brands door</span>{theBrandDoor}</p>
        <p className="pt-5 leading-8 tracking-[0.035em] font-bold whitespace-pre-wrap dark:text-white">Skynet Technologies specializes in providing a wide range of  <span> Content Writing Services </span>{contentWritingServices}</p>
        <h1 className="pt-10 leading-8 tracking-[0.035em] font-bold whitespace-pre-wrap dark:text-white">Our affordable content writing services include:</h1>
        <h1 className="leading tracking font-bold dark:text-white">Website Copywriting</h1>
        <p className="pt-5 leading-8 tracking-[0.035em] font-bold whitespace-pre-wrap dark:text-white">{copyWriting}</p>
        <ul className='p-5 dark:text-white'>
            {copyWritingObject.map((item, index) =>
            <li className='list-disc pt-3 dark:text-white' key={index}>{item.label}</li>
            )}
        </ul>
        <h1 className="pt-5 leading-8 tracking- font-bold whitespace-pre-wrap dark:text-[#fdd007]">SEO Copywriting</h1>
        <p className="pt-5 leading-8 tracking- font-bold whitespace-pre-wrap dark:text-white">{SEOCopywriting}</p>
        <ul className='p-5 dark:text-white'>
            {SEOCopywrintingObject.map((item,index) => 
            <li className='list-disc pt-3' key={index}>{item.label}</li>
            )}
        </ul>
        <h1 className="pt-10 leading-8 tracking- font-bold whitespace-pre-wrap dark:text-[#fdd007]">Article Writing</h1>
        <p className="pt-5 leading-8 tracking- font-bold whitespace-pre-wrap dark:text-white">{ArticleWriting}</p>
        <Requestcard />
      </section>
      </section>
  )
}
