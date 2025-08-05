'use client'
import { Url } from 'next/dist/shared/lib/router/router';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


interface jobpost{
    icon: StaticImageData,
    Vacancies:number,
    title: String,
    Skills:String,
    Exprience:number,
    Desctiption:String
    link:Url
}
interface props{
    jobposts:jobpost[],
}

export default function Jobpost({jobposts}:props) {

  function apply(e: React.MouseEvent<HTMLButtonElement>){
    let num = Number(e.currentTarget.name)
    console.log(jobposts[num]);
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-5'>
        {jobposts.map((item,index)=> 
        <div className="card card-border bg-base-100 w-auto" key={index}>
  <div className="card-body">
    <Image src={item.icon} alt='...' className='w-[50px] h-[50px]' />
    <div className='flex'>
    <p className=''>{item.Vacancies} Vacancies</p>
    <p className=''>{item.Exprience} Exprience</p>
    </div>
    <h2 className="card-title dark:text-[#a28400]">{item.title}</h2>
    <p>{item.Skills}</p>
    <div className="card-actions justify-end">
      <button name={`${index}`} onClick={apply}><Link href={item.link}  className="btn btn-primary dark:bg-[#f10402]" >Apply</Link></button>
    </div>
  </div>
</div>
)}
    </div>
  )
}
