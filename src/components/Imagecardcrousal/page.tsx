

import Image from "next/image";
import { MdOutlineNavigateNext } from "react-icons/md";
import { StaticImageData } from "next/image";
import { Ubuntu } from "next/font/google";
import { Inter } from "next/font/google";
import {Swiper , SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination ,Autoplay } from "swiper/modules";


const InterFont = Inter({
  subsets:['cyrillic'],
  weight:'300'
});

const UbuntuFont = Ubuntu({
  subsets: ['cyrillic'],
  weight: '700'
})

interface imagecard{
    label:String,
    description:String,
    imageUrl:StaticImageData
}

interface props{
    imagecard: imagecard[]
}
export default function Imagecardcrousal({imagecard}:props)  {





  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView='auto'
    navigation
    pagination={{clickable:true}}
    autoplay={{
        delay:900,
        pauseOnMouseEnter:true
    }}
    speed={3000}

    allowTouchMove={true}
    loop={true}
    >
         {imagecard.map((item,index)=>
        <SwiperSlide key={index}>
            <div className='w-full  flex-shrink-0 h-full flex flex-col md:flex-row'>
                <div className="w-full lg:w-[50%] h-auto lg:h-[350px]">
                <Image src={item.imageUrl} alt="..." className="w-[100%] h-auto" />
                </div>
                <div className="w-full lg:w-[50%] p-10">
                    <h3 className={`font-bold text-center dark:text-[#ffee32] ${UbuntuFont.className}`}>{item.label}</h3>
                    <p className={`text-center dark:text-[#E4E4E4] ${InterFont.className}`}>{item.description}</p>
                </div>
            </div>
         </SwiperSlide>
        )}

    </Swiper>
  )
}
