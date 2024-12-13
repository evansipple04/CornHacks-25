import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ImageGallery2021.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../Images/1st_Place_Winners.webp';
import image2 from '../../Images/2nd_Place_Winners.webp';
import image3 from '../../Images/3rd_Place_Winners.webp';
import image4 from '../../Images/Story_Track_Winners.webp';
import croppedLogo from '../../Images/cropped_raw.webp';


const ImageGallery2021 = () => {
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
        className="swiper-container2021"
      >
        <SwiperSlide>
          <div className="slide-content2021">
            <img src={image1} alt="image1" className="slide-img2021" />
            <div className="slide-text2021">
            <a
              href="https://github.com/Bracciata/Cornhacks2021"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>1. Teddy</h2>
            </a>
              <h3>Emma Hubka, Tommy Braccia, Danny Tran</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2021">
            <img src={image2} alt="image2" className="slide-img2021" />
            <div className="slide-text2021">
            <a
              href="https://github.com/LukeAVanDrie/Cue"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>2. TA-DA</h2>
            </a>
              <h3>Patrick Murphy, Luke Van Drie, Antonio Linhart, Matthew Vavricek</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2021">
            <img src={image3} alt="image3" className="slide-img2021" />
            <div className="slide-text2021">
            <a
              href="https://github.com/sstream17/cornhacks-2021"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>3. coder_royale</h2>
            </a>
            <h3>Spencer Stream, Syrus Bomberger</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2021">
            <img src={image4} alt="image4" className="slide-img2021" />
            <div className="slide-text2021">\
            <h1>Finance</h1>
            <a
              href="https://github.com/danielnoon/wehedge/"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>WeHedge</h2>
            </a>
            <h3>Daniel Noon, Liam Seper, Ben Lohrman, Andrew Herold</h3>
            </div>
          </div>
        </SwiperSlide>
        
        <div className="slider-controller2021">
          <div
            className="swiper-button-prev slider-arrow2021"
            style={{ backgroundImage: `url(${croppedLogo})` }}
          ></div>
          <div
            className="swiper-button-next slider-arrow2021"
            style={{ backgroundImage: `url(${croppedLogo})` }}
          ></div>
          <div className="swiper-pagination2021"></div>
        </div>
      </Swiper>
    );
};

export default ImageGallery2021;