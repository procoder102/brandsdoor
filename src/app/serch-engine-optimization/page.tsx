import Image from "next/image"
import serchEngine from "../../Images/searchEngineOpt.gif"
import Cardbanner from "@/components/Cardbanner/page"
import Requestcard from "@/components/Requestcard/page"
import { Inter } from "next/font/google"
import { Ubuntu } from "next/font/google"

const InterFont = Inter({
    subsets:['cyrillic'],
    weight:'300'
  });
  
  const UbuntuFont = Ubuntu({
    subsets: ['cyrillic'],
    weight: '500'
  })

export default function Serchengine() {

  

    const designDevlopment = [
    {title:'Off Page Optimization',
    body:'Off-page optimization is a part of Search Engine Optimization (SEO) which includes those activities which indirectly help in the online promotion of a website in search engines. All these activities help in...',
    url:'/serch-engine-optimization/offPage',
    linkName:'Learn More'
  },
    {title:'On Page Optimization',
    body:'On-Page optimization is an important part of Search Engine Optimization campaign. If on-page optimization of a website is done carefully, then you will have good chance of getting a high search engine ranking.',
    url:'/serch-engine-optimization/onPage',
    linkName:'Learn More'
  },
    {title:'Content Optimization',
    body:`Words can create; words can destroy; words can borne revolution; words express ideas and emotions. If the right words are not used it can lead to miscommunication...`,
    url:'/serch-engine-optimization/content-page-optimazation',
    linkName:'Learn More'
  },
]
  return (
    <section className='pt-20'>
      <div className='h-75'>
        <Image src={serchEngine} alt='banner' className='h-75' />
      </div>
      
      <section className='Marketing lg:p-10'>
        <h1 className={`text-4xl font-bold text-center  dark:text-[#ffee32] ${UbuntuFont.className}`}>Our Performance Marketing Clients</h1>
        <p className={`text-center  p-10 lg:px-35 dark:text-[#fefde7]${InterFont.className}`}>The SEO Agency has helped organizations across all sectors build websites that generate more leads, rank better and best and reach goals. Our websites not only look great but also use specific call-to-action to convert website visitors to online leads.</p>
        <div className="flex justify-around flex-col lg:flex-row">
          <h1 className="text-4xl font-bold text-blue-500 text-center">100+ <span className="font-light text-black text-sm dark:text-white"><br />Total Website Traffic</span></h1>
          <h1 className="text-4xl font-bold text-blue-500 text-center">10 CR+<span className="font-light text-black text-sm dark:text-white"><br />Ecommerce Transaction</span></h1>
          <h1 className="text-4xl font-bold text-blue-500 text-center">2500+<span className="font-light text-black text-sm dark:text-white"><br />Non Branded Keywords</span></h1>
          <h1 className="text-4xl font-bold text-blue-500 text-center">100K+<span className="font-light text-black text-sm dark:text-white"><br />Leads Generated</span></h1>
        </div>
        <div className="flex justify-center lg:p-5">
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-blue-500 font-samibold focus:outline outline-blue-500 bg-blue rounded-lg border border-lg border-blue-500 hover:bg-blue-500 text-xl hover:text-white hover:cursor-pointer focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Get My Wes SEO Audit</button>
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-blue-500 rounded-lg  hover:bg-blue-700 hover:text-white text-xl hover:cursor-pointer focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-blue-900">Get Started</button>
        </div>
      </section>
      <section>
              <div className="grid grid-flow-col grid-rows-3 lg:grid-rows-1 gap-10 my-5">
                {designDevlopment.map((item) =>
                <div key={item.title} className='flex justify-center'> 
                <Cardbanner  Title={item.title} Body={item.body} link={item.url} linkname={item.linkName} />
                </div>
                )}
              </div>
              <section className='lg:p-5'>
              <Requestcard />
              </section>
            </section>
    </section>
  )
}
