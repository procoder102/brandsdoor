import React from 'react'
import Teamwork from '../../Images/Teamwork.svg'
import Idea from '../../Images/Idea.svg'
import Salray from '../../Images/Salary.svg'
import Personaldevlopment from '../../Images/Personaldevlopment.svg'
import Websitedevlopment from '../../Images/Web.svg'
import Design from '../../Images/designandcreative.svg'
import Crative from '../../Images/designandcreative.svg'
import socialMarketing from '../../Images/socialmediaMarketing.gif'
import Image from 'next/image'
import Jobpost from '@/components/Jobpost/page'
import Requestcard from '@/components/Requestcard/page'

const Joinus = () => {

    const jobposts = [
        { icon: Websitedevlopment, Vacancies: 16,Exprience:3, title: 'Web Development', Skills: 'Full-Stack Developer, Front-End Developer, Back-End Developer.',Desctiption:'', link: '/joinus/apply' },
        { icon: Design, Vacancies: 16,Exprience:3, title: 'Web Development', Skills: 'Full-Stack Developer, Front-End Developer, Back-End Developer.',Desctiption:'', link: '/joinus/apply' },
        { icon: Crative, Vacancies: 16,Exprience:3, title: 'Web Development', Skills: 'Full-Stack Developer, Front-End Developer, Back-End Developer.',Desctiption:'', link: '/joinus/apply' },
    ]
    return (
        <section className='pt-20'>
            <div>
                        <Image src={socialMarketing} className='relative' alt='...' />
                      </div>
            <div className='grid grid-col-3 m-5 justify-center'>
                <div><p className='dark:text-[#fefde7] text-center tracking-[5px]'>- Perks -</p></div>
                <div><h1 className='dark:text-[#ffee32] text-center text-[36px] tracking-[2px]'>Main Reasons Why You Should Work Here</h1></div>
                <div><p className="dark:text-[#fefde7] text-center tracking-[1px]">Being a part of Brands Door Web means enjoying every working day!</p></div>
            </div>
            <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-4 gap-8 m-5 ">
                <div className="flex flex-col justify-center items-start gap-4">
                    <Image className='mx-auto' src={Teamwork} alt="Teamwork icon" />
                    <h1 className="dark:text-[#ffee32] tracking-[0.6px]">TeamWork</h1>
                    <hr className="w-10 h-1 dark:bg-[#ffee32]" />
                    <p className="dark:text-[#fefde7] tracking-[1px]">
                        Our employees work in teams and share even the boldest ideas.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-start gap-4">
                    <Image className='mx-auto' src={Salray} alt="Teamwork icon" />
                    <h1 className="dark:text-[#ffee32] tracking-[0.6px]">Room for New Ideas</h1>
                    <hr className="w-10 h-1 dark:bg-[#ffee32]" />
                    <p className="dark:text-[#fefde7] tracking-[1px]">
                        We’re always ready to listen and discuss new initiatives.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-start gap-4">
                    <Image className='mx-auto' src={Idea} alt="Teamwork icon" />
                    <h1 className="dark:text-[#ffee32] tracking-[0.6px]">Competitive Salary</h1>
                    <hr className="w-10 h-1 dark:bg-[#ffee32]" />
                    <p className="dark:text-[#fefde7] tracking-[1px]">
                        Get paid well for your skills! We offer competitive salary + benefits.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-start gap-4">
                    <Image className='mx-auto' src={Personaldevlopment} alt="Teamwork icon" />
                    <h1 className="dark:text-[#ffee32] tracking-[0.6px]">Personal Development</h1>
                    <hr className="w-10 h-1 dark:bg-[#ffee32]" />
                    <p className="dark:text-[#fefde7] tracking-[1px]">
                        We encourage you to study and cover your expenses on courses.
                    </p>
                </div>
            </div>
            <div className='grid'>
                <Jobpost jobposts={jobposts} />
            </div>
            <div className="card bg-base-100 image-full  shadow-sm mx-auto dark:bg-[#9bd12600] my-20">
                <div className="card-body">
                            <h1 className='text-xl font-bold text-center'>Services That We Offer to Our Clients</h1>
                    <p className='text-center'>We’re a company that creates impactful design and technological solutions for our clients. If you’re a good fit for one of our open roles, we’ll be reaching out to you.</p>
                </div>
            </div>
            
        <div className="card bg-base-100 image-full w-[70%] shadow-sm mx-auto dark:bg-[#fceeea] m-10">
                <div className="card-body">
                    <h1 className='text-2xl text-center dark:text-[#222222] py-2 font-bold'>Start Your Career with Brands Door</h1>
                    <p className='text-xl dark:text-[#222222] text-center py-2'>If you are motivated and driven to succeed, we invite you to apply today!</p>
                    <ul className='flex justify-evenly py-2'>
                        <li className='list-disc dark:text-[#f10402]'>Friendly team</li>
                        <li className='list-disc dark:text-[#f10402]'>Beautiful office</li>
                        <li className='list-disc dark:text-[#f10402]'>Competitive salary</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Joinus;