import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './imageGallery2022.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../Images/1st_Place_Winners.webp';
import image2 from '../../Images/2nd_Place_Winners.webp';
import image3 from '../../Images/3rd_Place_Winners.webp';
import image4 from '../../Images/Story_Track_Winners.webp';
import image5 from '../../Images/02cornhacks24.webp';
import image6 from'../../Images/03cornhacks24.webp';
import croppedLogo from '../../Images/cropped_raw.webp';


const ImageGallery2022 = () => {
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
        className="swiper-container2022"
      >
        <SwiperSlide>
          <div className="slide-content2022">
            <img src={image1} alt="image1" className="slide-img2022" />
            <div className="slide-text2022">
            <a
              href="https://github.com/BracciaCJ/2022-CornHacks"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>1. Ha11y</h2>
            </a>
              <h3>Colton Braccia, Tommy Braccia, Emma Hubka, Danny Tran</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2022">
            <img src={image2} alt="image2" className="slide-img2022" />
            <div className="slide-text2022">
            <a
              href="https://github.com/picrossin/Weevil-Warrior-GB"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>2. Weevil Warrior</h2>
            </a>
                <h3>Jaden Goter, Camden Obertop, Erik Skoog</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2022">
            <img src={image3} alt="image3" className="slide-img2022" />
            <div className="slide-text2022">
              <h2>3. MusuCLI 2.0</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2022">
            <img src={image4} alt="image4" className="slide-img2022" />
            <div className="slide-text2022">\
            <a
              href="https://github.com/Dillon-Howell/cornhacks-2022"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>4. BigBrother</h2>
            </a>
              <h3>Nathan Kolbas, Dillon Howell</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2022">
            <img src={image5} alt="image5" className="slide-img2022" />
            <div className="slide-text2022">
              <h1>Retro</h1>
              <h2>Retro Rerun</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2022">
            <img src={image6} alt="image6" className="slide-img2022" />
            <div className="slide-text2022">
            <h1>Hardware</h1>
            <a
              href="https://github.com/RyanOrth/Signos"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>Signos</h2>
            </a>
            <h3>Eric Dundas, Zach Stanczyk, Ryan Orth, Garret Parker</h3>
            </div>
          </div>
        </SwiperSlide>

        <div className="slider-controller2022">
          <div
            className="swiper-button-prev slider-arrow2022"
            style={{ backgroundImage: `url(${croppedLogo})` }}
          ></div>
          <div
            className="swiper-button-next slider-arrow2022"
            style={{ backgroundImage: `url(${croppedLogo})` }}
          ></div>
          <div className="swiper-pagination2022"></div>
        </div>
      </Swiper>
    );
};

export default ImageGallery2022;