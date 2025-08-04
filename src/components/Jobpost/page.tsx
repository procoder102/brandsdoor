'use client'
import { Url } from 'next/dist/shared/lib/router/router';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


interface jobpost{
    icon: StaticImageData,
    Vacancies:number,
    title: String,
    Desctiption:String
    link:Url
}
interface props{
    jobposts:jobpost[],
}
export default function Jobpost({jobposts}:props) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-5'>
        {jobposts.map((item,index)=> 
        <div className="card card-border bg-base-100 w-auto" key={index}>
  <div className="card-body">
    <Image src={item.icon} alt='...' className='w-[50px] h-[50px]' />
    <p className=''>{item.Vacancies} Vacancies</p>
    <h2 className="card-title dark:text-[#a28400]">{item.title}</h2>
    <p>{item.Desctiption}</p>
    <div className="card-actions justify-end">
      <Link href={item.link} className="btn btn-primary dark:bg-[#f10402]" >Apply</Link>
    </div>
  </div>
</div>
)}
    </div>
  )
}
