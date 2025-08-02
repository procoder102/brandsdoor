import {Swiper , SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination ,Autoplay } from "swiper/modules";

import Image, { StaticImageData } from "next/image";

interface Item {
imageUrl: StaticImageData;
}

interface props {
    items: Item[];
}
function Mycrousal({items}:props) {

    
  return (
    <Swiper
     modules={[ Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView="auto"
    pagination={{ clickable: true }}
    autoplay={{
         delay:100, 
        pauseOnMouseEnter: true,
     }}
     speed={3000}
    
     allowTouchMove={true}
     loop={true}
    className=""
    >
        {items.map((img,index) =>
        <SwiperSlide key={index} className="w-[140px]" style={{width:'140px'}}>
            <Image src={img.imageUrl} alt={`Slide ${index}`} className="w-[40vw] bg-white h-[40vw]  lg:w-[10vw] lg:h-[11.5vw]" />
        </SwiperSlide>
        )}
    </Swiper>
  )
}

export default Mycrousal
