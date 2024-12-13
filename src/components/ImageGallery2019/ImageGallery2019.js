import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ImageGallery2019.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../Images/1st_Place_Winners.webp';
import image2 from '../../Images/2nd_Place_Winners.webp';
import image3 from '../../Images/3rd_Place_Winners.webp';
import croppedLogo from '../../Images/cropped_raw.webp';


const ImageGallery2019 = () => {
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
        className="swiper-container2019"
      >
        <SwiperSlide>
          <div className="slide-content2019">
            <img src={image1} alt="image1" className="slide-img2019" />
            <div className="slide-text2019">
              <h1>1. Ad Free Spotify</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2019">
            <img src={image2} alt="image2" className="slide-img2019" />
            <div className="slide-text2019">
              <h1>2. Jaden Void</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2019">
            <img src={image3} alt="image3" className="slide-img2019" />
            <div className="slide-text2019">
              <h1>3. EZ Farming</h1>
            </div>
          </div>
        </SwiperSlide>

        <div className="slider-controller2019">
          <div
            className="swiper-button-prev slider-arrow2019"
            style={{ backgroundImage: `url(${croppedLogo})` }}
          ></div>
          <div
            className="swiper-button-next slider-arrow2019"
            style={{ backgroundImage: `url(${croppedLogo})` }}
          ></div>
          <div className="swiper-pagination2019"></div>
        </div>
      </Swiper>
    );
};

export default ImageGallery2019;