'use client'
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
type props ={
    Title:String,
    Body:String,
    linkname:String,
    link: Url
}
export default function Cardbanner({Title,Body,link,linkname}:props) {
  return (
    <div>
        <div className="card card-border bg-base-100 w-96">
  <div className="card-body">
    <h2 className="card-title dark:text-[#a28400]">{Title}</h2>
    <p>{Body}</p>
    <div className="card-actions justify-end">
      <Link href={link} className="btn btn-primary dark:bg-[#f10402]" >{linkname}</Link>
    </div>
  </div>
</div>
    </div>
  )
}
