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
     modules={[ Navigation, Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView="auto"
    navigation
    pagination={{ clickable: true }}
    autoplay={{
         delay:100, 
        pauseOnMouseEnter: true,
     }}
     speed={3000}
    
     allowTouchMove={true}
     loop={true}
    className="p-6"
    >
        {items.map((img,index) =>
        <SwiperSlide key={index} className="w-[240px]" style={{width:'240px'}}>
            <Image src={img.imageUrl} alt={`Slide ${index}`} className="w-[80vw] h-[80vw]  lg:w-[21vw] lg:h-[23.5vw]" />
        </SwiperSlide>
        )}
    </Swiper>
  )
}

export default Mycrousal
