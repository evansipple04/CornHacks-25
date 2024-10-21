import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import image1 from '../Images/01cornhacks24.png';
import image2 from '../Images/02cornhacks24.png';
import image3 from'../Images/03cornhacks24.png';
import image4 from '../Images/1st_Place_Winners.jpg';
import image5 from '../Images/2nd_Place_Winners.jpg';
import image6 from '../Images/3rd_Place_Winners.jpg';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';

const ImageGallery = () => {
    return (
        <Swiper
            effect={ 'coverflow' }
            grabCursor={ true }
            centeredSlides={ true }
            loop={ true }
            slidesPerView={ 'auto' }
            coverflowEffect={
                {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,

                }
            }
            pagination={{el:'swiper-pagination',clickable:true}}
            navigation={{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
                clickable: true
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper_container'
            >
            <SwiperSlide>
                <img src ={image1} alt ="image1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src ={image2} alt ="image2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src ={image3} alt ="image3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src ={image4} alt ="image4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src ={image5} alt ="image5" />
            </SwiperSlide>
            <SwiperSlide>
                <img src ={image6} alt ="image6" />
            </SwiperSlide>

            <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">
                    <IoArrowBackOutline className="slider-arrow" />
                </div>
                <div className="swiper-button-next slider-arrow">
                    <IoArrowForwardOutline className="slider-arrow" />
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    );
};

export default ImageGallery;