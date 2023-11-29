import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperCarousel({ images }) {
  return (
    <>
    <div className='swiper-container-outer'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: true,
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true 
         // {   prevEl: '.swiper-prev',
        // nextEl: '.swiper-next',}
    }
        
        modules={[Autoplay, Navigation]}
        className="mySwiper w-full p-3 text-black border-2 rounded-md"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={`Slide ${index + 1}`} />
            <p className='text-red-800 swiper-caption'>{image.caption}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className='swiper-container-wrapper'>
        <div className="swiper-prev"></div>
        <div className="swiper-next"></div>
      </div> */}
    </div>
    </>
  );
}
