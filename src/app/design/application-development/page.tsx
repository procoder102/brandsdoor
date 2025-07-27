import Image from "next/image";
import designdevlop from "../../../Images/design&devlop.gif"
import Requestcard from "@/components/Requestcard/page";
import Imagecard from "@/components/Imagecard/page";

export default function Crmdevlopment() {

    const sdAgencies = [
        {label:`As a Growing Application  Development Company in India, Skynet Technologies provide fully featured and customized Application  Web Development Services including Core Application  Programming, Application  Dynamic Web Development, Application  Migration, IoT App Development, Django and Plone development and more.`},
        {label:`Our team of highly skilled and dedicated Application  Developers use the most recent Application  version to create a functionally featured, user-friendly and eye-catching Application  Mobile App or Web application in a defined time frame. We ensure faster loading time and easier navigation for visitors.`},
        {label:`Our professional and dynamic Application  Experts provide completely scalable Application  Machine Learning, Application  Artificial Intelligence and Application  IoT based Web application solution as per your business aspects.`},
        {label:`Our dedicated Application  developers combine their experience and technical skills to create robust and scalable back-end systems, web applications and web platforms.`},
        {label:`Being a reputed Application  Development Company, we take care you project security, and we provide a signed Document for Intellectual Property Protection and also happy to sign Non-Disclosure Agreement at the beginning of any project.`}
    ]
    const custimizeSD = `Whether you need just a One-time or Ongoing Application  Web Development services, we are committed to delivering robust, secure and customized Application  Development services based on your specific business needs. Our Application  Web Development is suitable for any size and type of business starting from Individuals, Start-ups, Small to large businesses, Enterprise, Corporate or any businesses looking to take their business to the next level with the Power of Application .`;
    const labelSD = `Let us focus on development when you focus on your business growth. We deliver robust, customized and feature-rich White Label Application  Development Services to Web Agencies and Web firms on-time and on budget.\n\nNo more hassle of hiring in-house Application  Expert or Budget or Time. We have an in-house and dedicated team of Application  developers available on-demand with no long-term contracts. Our dedicated Application  Experts are perfectly fit to your unique needs to deliver fully featured next-generation solution for your client.`
    const ourFlxible = `Application  has enough free data libraries and framework which interact with web server and help them to develop most advance features. So as one of the leading Application  development company, we are covering all the advance technologies to meet the customer expectation. Some of the Application  frameworks on which we have expertise are as follows:`
    const ourFlxibleObject = [
        {label:`Django`},
        {label:`Flask`},
        {label:`Zope`},
        {label:`Pyramid`},
        {label:`Web2py`},
        {label:`Tornado`},
    ]
    const customerSoftware = `When it comes to build custom and feature-rich Web Solution, Application  is a great open source language to fulfill all your needs! Application  Frameworks are used to build reliable and extendible Custom Web Solution for any type of business specific matrices. Whether you require Simple to Complex Web Based Solution, Our Dedicated Developers identifies and develops best suitable solutions!`
    const softwareDevlopment = `python-application-development\nOur Dedicated team of Application  Developers will provide the best possible solution for all types of apps with varying scopes and functionality. Whether you require Rapid Business Application, Enterprise Application, Simple Application  Web Application or Complex Web Applications for your small to large business, we provide everything under one roof. Provide your customers the best online user experience with the new heights of business success.\n\nAs one of Most Popular Language, Application  is known as the simplest and best programming language for Machine Learning and Artificial Intelligence. Application  has a huge set of libraries to build applications of ML. Our Application  Developers keep up with latest python updates, frameworks and approaches to provide customers a scalable and faster web application. Let’s help you with any type of your Application  Machine Learning Web Application Requirements related to Virtual personal assistants, Social Media, Refine Voice Search or SE Results, Choice Predication and many more.`
    const softwareIotDev = `The Internet of Things is the latest trend in Today’s digital world. Application  tends a great choice for any type of your perspective related to IoT Application. Application  is the popular, portable, expandable, faster, interpreted, embeddable language with pre-written libraries, easy syntax and secure coding. We are using tools like Blynk, Cayenne, Thingsboard and more. We constantly come up with innovative ideas to bridge the gap between idea and the solution for our esteemed clients.`
    const softwareDevlopmentSecond = `As a leading Web Development Company in India, We provide high back-end Application  CMS Development for efficient and productive growth of your business. Application  is the most powerful language with unique benefits and exceptional support for large variety of CMS. Our dedicated web developers provide Application  CMS Solution which delivers precise and engaging user interface for your web applications or mobile apps.`
    const softwareMigration = `Migrating or Upgrading your Web Application will keep up your business with Latest Digital World. Hire Our Dedicated and Experienced Application  Developers for migrating your web application to python-based framework with ensuring quality. Transferring or Upgrading your web application will maintain security, plugin updates, compatibility, version upgrades and more. We are committed to provide bug free, error free, uninterrupted Application  Migration and Upgradation Service.`
    const howSoftware = `Our Flexible, Secure and Customized Application  Development Services are available in the USA, Australia, New Zealand and Worldwide.`
    const hirePython = `Our skilled and dedicated team of Application  Developers are available to deliver modern and tech savvy business requirements in a limited time frame.\nWe are ready to take up any challenges to meet your specific business requirements and transform your idea into reality.\n\nGet a Custom Application  Development services as per your specific needs!\nHourly Application  Developers\nMonthly Application  Developers\nFull Time/Fixed Cost Application  Developers.`
    const bussinessNeeds = [
        {label:`To keep your Application  Web Application updated with latest version and fix technical issues.`},
        {label:`To keep your Application  Web Application up-to-date with the latest Security update and away from hackers or malware.`},
        {label:`To increase website speed, performance, and user experience by performing regular website optimization.`},
        {label:`Take advantage of the most recent features and functionality by updating the Application  frameworks and tools.`},
        {label:`To resolve or troubleshoot functional and operational bugs or errors.`},
        {label:`To take a complete backup of web-based platform and database regularly.`},
        {label:`To get a better position on Search Engine by performing ongoing SEO updates.`},
        {label:`To prevent downtime time by performing server and uptime monitoring.`},
    ]
    const softwareDevlop = [
        {label:`A team of experienced and dedicated Application  Developers to fulfill tailored business needs.`},
        {label:`Provide a secure and reliable solution with an aim to maintain a profound business relationship.`},
        {label:`Bring utmost customer satisfaction by delivering a customized Application  solution based on your business requirements.`},
        {label:`Work closely with our client to deliver end-to-end service and excellent technical support.`},
        {label:`We believe in the transparent work process, Seamless communication, and collaborative approach.`},
        {label:`Expertise in offering cutting edge web solution for various Application  Frameworks and Tools.`},
        {label:`Works with client centric approach to provide Application  Web Solution on-time and on-budget.`},
    ]

    const ExploreSoftwareObject = [
        {label:`To rank your Application  web application on the first page of Google SERPs`},
        {label:`To keep your software application ahead of competitors`},
        {label:`To eliminate Duplicate content and indexing or crawling errors`},
        {label:`To increased website traffic and decrease bounce or exit rates`},
        {label:`To help visitor found you on the internet by integrating various SEO techniques and Plugins`},
    ]

    const BringsProfit = [
        {label:`Increased Conversion Rate`},
        {label:`Increased Website or Web App Performance`},
        {label:`Increased Brand Awareness, Trust and Credibility`},
        {label:`Increased Organic Traffic`},
        {label:`Increased Return on Investment`}
    ]
    return (
    <section className='pt-20'>
      <div className='h-75'>
        <Image src={designdevlop} alt='banner' className='h-75' />
      </div>
      <section className="m-10">
        <h1 className="text-2xl font-bold text-[#fdd007] leading-8 tracking-[0.035em]">Application Development</h1>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white"><span className="font-bold dark:text-[#fdd007]">Delivering Highly Customized Application Development Services to Start Ups, Small to Large Business, Enterprise, Corporates and Agencies!</span></p>
        <ul className="p-3 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">
            {sdAgencies.map((item,index)=>
            <li className="list-disc" key={index}>{item.label}</li>
            )}
        </ul>
        <h1 className="text-2xl font-bold text-[#fdd007] leading-8 tracking-[0.035em]">Customized Application  Development Services for Businesses of All Types</h1>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{custimizeSD}</p>
        <h1 className="text-2xl pt-10 font-bold text-[#fdd007] leading-8 tracking-[0.035em]">White Label Application  Development Services</h1>
        <p className=" leading-8 whitespace-pre-wrap tracking-[0.035em] dark:text-[#fdd007]">Get Full-Time, Part-Time and Project Based Application  Development Support for Your Client!</p>
        <p className="leading-8 whitespace-pre-wrap tracking- dark:text-white">{labelSD}</p>
        <hr />
        <h1 className="text-2xl pt-10 font-bold text-[#fdd007] leading-8 tracking-[0.035em]">Our Flexible, Secure & Customized Application  Web Development Services include, Application  Development Frameworks & Tools</h1>
        <p className="leading-8 whitespace-pre-wrap tracking- dark:text-white">{ourFlxible}</p>
        <ul className="p-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">
            {ourFlxibleObject.map((item,index)=>
            <li className="list-disc" key={index}>{item.label}</li>
            )}
        </ul>
        <h1 className="text-2xl pt-10 font-bold text-[#fdd007] leading-8 tracking-[0.035em]">Custom Application  Development</h1>
        <p className="leading-8 whitespace-pre-wrap tracking- dark:text-white">{customerSoftware}</p>
        <h1 className="text-2xl pt-10 font-bold text-[#fdd007] leading-8 tracking-[0.035em]">Application  Development</h1>
        <p className="leading-8 whitespace-pre-wrap tracking- dark:text-white">{softwareDevlopment}</p>
        <h1 className="text-2xl pt-10 font-bold text-[#fdd007] leading-8 tracking-[0.035em]">Application  IOT App Development</h1>
        <p className="leading-8 whitespace-pre-wrap tracking- dark:text-white">{softwareIotDev}</p>
        <h1 className="text-2xl pt-10 font-bold text-[#fdd007] leading-8 tracking-[0.035em]">Application  Development</h1>
        <p className="leading-8 whitespace-pre-wrap tracking- dark:text-white">{softwareDevlopmentSecond}</p>
        <h1 className="text-2xl pt-10 font-bold text-[#fdd007] leading-8 tracking-[0.035em]">Application  Migration & Upgradation Service</h1>
        <p className="leading-8 whitespace-pre-wrap tracking- dark:text-white">{softwareMigration}</p>
        <h1 className="text-2xl pt-10 font-bold text-[#fdd007] leading-8 tracking-[0.035em]">How Application  Development Development Creates Value for Your Business?</h1>
        <hr />
        <p className="pt-2 leading-8 whitespace-pre-wrap tracking- dark:text-white text-center">{howSoftware}</p>
        <section className="my-10"><Imagecard  hirePython={hirePython} /></section>
        <h1 className="text-2xl pt-10 font-bold text-[#fdd007] leading-8 tracking-[0.035em]">Why Your Business Needs Application  development ?</h1>
        <ul className="p-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">
            {bussinessNeeds.map((item,index)=>
            <li className="list-disc" key={index}>{item.label}</li>
        )}
        </ul>
        <h1 className="text-2xl pt-10 font-bold text-[#fdd007] leading-8 tracking-[0.035em]">Why Brandsdoor for Application  Development?</h1>
        <ul className="p-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">
            {softwareDevlop.map((item,index)=>
            <li className="list-disc" key={index}>{item.label}</li>
        )}
        </ul>
        <h1 className="text-2xl pt-10 font-bold text-[#fdd007] leading-8 tracking-[0.035em] text-center">Explore Your Application  Application with SEO</h1>
        <h1 className="text-2xl pt-10 font-bold text-[#fdd007] leading-8 tracking-[0.035em]">We are Top SEO Company in India</h1>
        <h1 className="text-2xl pt-10 font-bold text-[#fdd007] leading-8 tracking-[0.035em]">WHY SEO IS CRUCIAL FOR YOUR PYTHON BASED WEBSITE OR WEB APPLICATION?</h1>
        <ul className="p-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">
            {ExploreSoftwareObject.map((item,index)=>
            <li className="list-disc" key={index}>{item.label}</li>
            )}
        </ul>
        <h1 className="text-2xl pt-10 font-bold text-[#fdd007] leading-8 tracking-[0.035em]">HOW OUR SEO PACKAGE BRINGS PROFIT TO YOUR BUSINESS?</h1>
        <ul className="p-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">
        {BringsProfit.map((item,index) =>
        <li className="list-disc" key={index}>{item.label}</li>
        )}
        </ul>
        <Requestcard />
      </section>
    </section>
  )
}
