import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../../Images/01cornhacks24.webp';
import image2 from '../../../Images/02cornhacks24.webp';
import image3 from'../../../Images/03cornhacks24.webp';
import image4 from '../../../Images/1st_Place_Winners.webp';
import image5 from '../../../Images/2nd_Place_Winners.webp';
import image6 from '../../../Images/3rd_Place_Winners.webp';
import croppedLogo from '../../../Images/cropped_raw.webp';

import "./ImageGallery.css";

const ImageGallery = () => {
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
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="24slide-content">
            <img src={image1} alt="image1" className="24slide-img" />
            <div className="24slide-text">
              <h2>What is CornHacks?</h2>
              <h3>CornHacks is a coding/design</h3>
              <h3>competition where individuals or</h3>
              <h3>teams of up to four people compete</h3>
              <h3>over a 24-Hour period to see who can</h3>
              <h3>create the best project. Like most</h3>
              <h3>hackathons, CornHacks is focused</h3>
              <h3>on giving participants a chance to show</h3>
              <h3>off their skills while meeting people with</h3>
              <h3>similar interests and networking with</h3>
              <h3>local businesses.</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="24slide-content">
            <img src={image2} alt="image2" className="24slide-img" />
            <div className="24slide-text">
            <h2>When and where is CornHacks?</h2>
              <h3>The upcoming CornHacks</h3>
              <h3>will be from February</h3>
              <h3>15th-16th, 2025. It will</h3>
              <h3>be in the Johnny Carson Center</h3>
              <h3>for Emerging Media Arts on</h3>
              <h3>1300 Q Street, Lincoln Nebraska.</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="24slide-content">
            <img src={image3} alt="image3" className="24slide-img" />
            <div className="24slide-text">
            <h2>Why CornHacks?</h2>
              <h3>CornHacks is an excellent</h3>
              <h3>experience for a variety of reasons.</h3>
              <h3>It gives young aspiring programmers</h3>
              <h3>a chance to apply their skills through</h3>
              <h3>building a project of their choice</h3>
              <h3>which is creative and fun. You will</h3>
              <h3>be given a chance to work with friends</h3>
              <h3>and network with local businesses.</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="24slide-content">
            <img src={image4} alt="image4" className="24slide-img" />
            <div className="24slide-text">
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
          <div className="24slide-content">
            <img src={image5} alt="image5" className="24slide-img" />
            <div className="24slide-text">
            <h2>What can I win?</h2>
              <h3>Last year people won</h3>
              <h3>Ipads. money too</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="24slide-content">
            <img src={image6} alt="image6" className="24slide-img" />
            <div className="24slide-text">
            <h2>What if I have more questions?</h2>
              <h3>If anyone has more questions</h3>
              <h3>about the event, plese feel</h3>
              <h3>free to email us!</h3>
              <h3>Contact Us: cornhacks@unl.edu</h3>
            </div>
          </div>
        </SwiperSlide>

        <div className="24slider-controller">
          <div
            className="24swiper-button-prev slider-arrow"
            style={{ backgroundImage: `url(${croppedLogo})` }}
          ></div>
          <div
            className="24swiper-button-next slider-arrow"
            style={{ backgroundImage: `url(${croppedLogo})` }}
          ></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    );
};

export default ImageGallery;