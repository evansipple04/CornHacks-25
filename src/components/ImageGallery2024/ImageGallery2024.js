import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../Images/1st_Place_Winners.webp';
import image2 from '../../Images/2nd_Place_Winners.webp';
import image3 from '../../Images/3rd_Place_Winners.webp';
import image4 from '../../Images/01cornhacks24.webp';
import image5 from '../../Images/02cornhacks24.webp';
import image6 from'../../Images/03cornhacks24.webp';
import croppedLogo from '../../Images/cropped_raw.webp';

import "./ImageGallery2024.css";

const ImageGallery2024 = () => {
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
        className="swiper-container2024"
      >
        <SwiperSlide>
          <div className="slide-content2024">
            <img src={image1} alt="image1" className="slide-img2024" />
            <div className="slide-text2024">
            <a
              href="https://github.com/BALD-rs/lucky-liars"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>1. Lucky Liars</h2>
            </a>
              <h3>Blaine Traudt, Anton Angeletti, Louis Quattrocchi, Dawson McGahan</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2024">
            <img src={image2} alt="image2" className="slide-img2024" />
            <div className="slide-text2024">
            <a
              href="https://github.com/Zohair-Khan/CornHacks2024"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>2. Even Steven Beats the Odds</h2>
            </a>
                <h3>Sebastian Wysocki, Zohair Khan, Joey Ng, Mayank Sharma</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2024">
            <img src={image3} alt="image3" className="slide-img2024" />
            <div className="slide-text2024">
            <a
              href="https://github.com/landrygeiger/cornhacks2024"
              target="_blank"
              rel="noopener noreferrer"
              className='projectLink'
            >
              <h2>3. Black Jack Optimal</h2>
            </a>
              <h3>Landry Geiger, John Post, Roy Dumblauskas, Zach Wallenburg</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2024">
            <img src={image4} alt="image4" className="slide-img2024" />
            <div className="slide-text2024">
            <h2>What will I make?</h2>
              <h3>Well, anything you'd like!</h3>
              <h3>This years theme will be "2100: A Corn Odyssey".</h3>
              <h3>You have 24 hours to create something</h3>
              <h3>that could be science fiction, dystopian,</h3>
              <h3>or futuristic. Create anything</h3>
              <h3>as long as it is appropriate and </h3>
              <h3>fits the theme. If you are curious</h3>
              <h3>on what student have built in the past,</h3>
              <h3>check out the "Past Projects" tab!</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2024">
            <img src={image5} alt="image5" className="slide-img2024" />
            <div className="slide-text2024">
            <h2>What can I win?</h2>
              <h3>Last year people won</h3>
              <h3>Ipads. money too</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content2024">
            <img src={image6} alt="image6" className="slide-img2024" />
            <div className="slide-text2024">
            <h2>What if I have more questions?</h2>
              <h3>If anyone has more questions</h3>
              <h3>about the event, plese feel</h3>
              <h3>free to email us!</h3>
              <h3>Contact Us: cornhacks@unl.edu</h3>
            </div>
          </div>
        </SwiperSlide>

        <div className="slider-controller2024">
          <div
            className="swiper-button-prev slider-arrow2024"
            style={{ backgroundImage: `url(${croppedLogo})` }}
          ></div>
          <div
            className="swiper-button-next slider-arrow2024"
            style={{ backgroundImage: `url(${croppedLogo})` }}
          ></div>
          <div className="swiper-pagination2024"></div>
        </div>
      </Swiper>
    );
};

export default ImageGallery2024;