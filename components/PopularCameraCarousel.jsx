'use client';
import Camera from './Camera'

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper/modules';

const PopularCameraCarousel = ({cameras}) => {
    return (
        <Swiper 
            slidesPerView={1} 
            spaceBetween={30} 
            breakpoints={{
                640: {slidesPerView: 1},
                768: {slidesPerView: 2},
                960: {slidesPerView: 3},
                1440: {slidesPerView: 4},
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="popular-camera-slider mb-8"
        >
            {cameras.map(camera => {
                return (
                    <SwiperSlide key={camera._id}>
                        <Camera camera={camera}/>
                    </SwiperSlide>
                )
            }) }
        </Swiper>
    )
}

export default PopularCameraCarousel