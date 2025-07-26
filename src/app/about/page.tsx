import Image from 'next/image'
import gifFile from '../../Images/web-design-gif--final.gif'
import iconW from '../../Images/icon-web-design-20.jpg'

export default function AboutUs(){
  return (
    <div className='dark:text-[#E4E4E4]'>
      <section className="p-10 md:p-20 lg:p-30 ">
        <div className="flex flex-col-reverse md:flex-row  justify-between" >
          <div className='w-full md:w-1/2 pt-20 lg:pt-0'>
            <h1 className='text-center font-bold text-3xl dark:text-[#fdd007]'>THE BRANDS DOOR</h1>
            <p className='pt-3 font-samibold font-serif text-center text-gray-500 dark:text-[#E4E4E4]'>
              The essence of The Brands Door is to thrive together in business with their clients. We are a trustworthy vendor for a vast number of clients. We ensure that our clients get what they want. We work closely with a range of clients from different sectors and regions across the nation. We at The Brands Door have certified experts and employs with advanced technologies delivering top-notch digital commerce solutions. We aid businesses in finding suitable candidates and workforce who could be an asset to the company. We are also involved into state-of-the-art web design & development to empower you to grow with flawless ease. Doesn’t matter whether you are startup with a small projector an, enterprise needing an agile development team.
            </p>
          </div>
          <div className='w-full md:w-1/3 pt-30 lg:pt-0'>
              <Image src={gifFile} unoptimized={true} alt='...' />
          </div>
        </div>
      </section>
      <section className='px-10'>
        <h1 className='text-2xl font-bold'>THE BRANDS DOOR GROUP UNIQUE VALUES</h1>
        <h1 className='pt-5 font-bold dark:text-[#fdd007]'>INVITING STYLE</h1>
        <p className='pt-3'>We believe every function deserves a well-designed form. Our products offer a style that is personal, approachable, and satisfying. Fitting perfectly into your life.</p>
        <h1 className='pt-5 font-bold dark:text-[#fdd007]'>BUILT TO LAST</h1>
        <p className='pt-3'>From the materials we use to the care we put into building them, our products are made to stand the test of time. It’s a quality you can depend on today and be confident in for a lifetime.</p>
        <h1 className='pt-5 font-bold dark:text-[#fdd007]'>SUPERIOR PERFORMANCE</h1>
        <p className='pt-3'>For the past 25 years, THE BRANDS DOOR GROUP has set and reset the standard for products that work and wow. We build worry-free performance into every product we make.</p>
        <h1 className='pt-5 font-bold dark:text-[#fdd007]'>PURPOSEFUL FUNCTION</h1>
        <p className='pt-3'>Our products are designed to make life healthier, safer, easier, and more beautiful while contributing to the efficient use of water and the sustainable development of society.</p>
      </section>
      <section >
        <div className='flex flex-col md:flex-row  lg:flex-row md:justify-around'>
          <div className='mx-auto'>
            <Image src={iconW} className='dark:bg-[#E4E4E4] dark:rounded-full'  alt='...' />
          </div>
          <div className='p-10  md:py-20'>
            <h1 className='dark:text-[#fdd007]'>Green Innovation</h1>
            <p>Green – new products and technologies which provide customer and business value but significantly decrease environmental impacts.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
