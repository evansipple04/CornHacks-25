import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './imageGallery2023.css'
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


const ImageGallery2023 = () => {
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
        className="swiper-container2023"
      >
        <SwiperSlide>
          <div className="slide-content2023">
            <img src={image1} alt="image1" className="slide-img2023" />
            <div className="slide-text2023">
            <a
              href="https://github.com/NathanKolbas/GonePhishing"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>1. Gone Phishing 2</h2>
            </a>
              <h3>Abdullah Hamad, Nathan Kolbas</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2023">
            <img src={image2} alt="image2" className="slide-img2023" />
            <div className="slide-text2023">
            <a
              href="https://github.com/j-seibel/GonePhishing"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>2. Gone Phishing 4</h2>
            </a>
                <h3>Gage Cammack, Dante Dyches-Chandler, Jake Rance, Joseph Seibel</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2023">
            <img src={image3} alt="image3" className="slide-img2023" />
            <div className="slide-text2023">
            <a
              href="https://frie.dev/vw/"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>3. VW</h2>
            </a>
              <h3>Aaron Friesen</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2023">
            <img src={image4} alt="image4" className="slide-img2023" />
            <div className="slide-text2023">\
            <h1>Business</h1>
            <a
              href="https://github.com/ZWally/cornhacks2023"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>Access Genie</h2>
            </a>
              <h3>Landry Geiger, John Post, Roy Dumblauskas, Zach Wallenburg</h3>
            </div>
          </div>
        </SwiperSlide>

        <div className="slider-controller2023">
          <div
            className="swiper-button-prev slider-arrow2023"
            style={{ backgroundImage: `url(${croppedLogo})` }}
          ></div>
          <div
            className="swiper-button-next slider-arrow2023"
            style={{ backgroundImage: `url(${croppedLogo})` }}
          ></div>
          <div className="swiper-pagination2023"></div>
        </div>
      </Swiper>
    );
};

export default ImageGallery2023;