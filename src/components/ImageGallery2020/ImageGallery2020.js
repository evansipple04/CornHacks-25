import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ImageGallery2020.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../Images/1st_Place_Winners.webp';
import image2 from '../../Images/2nd_Place_Winners.webp';
import image3 from '../../Images/3rd_Place_Winners.webp';
import croppedLogo from '../../Images/cropped_raw.webp';


const ImageGallery2020 = () => {
    return (
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: "swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container2020"
      >
        <SwiperSlide>
          <div className="slide-content2020">
            <img src={image1} alt="image1" className="slide-img2020" />
            <div className="slide-text2020">
              <h1>1. Draft Detector</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2020">
            <img src={image2} alt="image2" className="slide-img2020" />
            <div className="slide-text2020">
              <h1>2. Recyclo Bot</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2020">
            <img src={image3} alt="image3" className="slide-img2020" />
            <div className="slide-text2020">
              <h1>3. Favor</h1>
            </div>
          </div>
        </SwiperSlide>

        <div className="slider-controller2020">
          <div
            className="swiper-button-prev slider-arrow2020"
            style={{ backgroundImage: `url(${croppedLogo})` }}
          ></div>
          <div
            className="swiper-button-next slider-arrow2020"
            style={{ backgroundImage: `url(${croppedLogo})` }}
          ></div>
          <div className="swiper-pagination2020"></div>
        </div>
      </Swiper>
    );
};

export default ImageGallery2020;