import React from 'react'
import { useState } from 'react';
// import { Link } from 'react-scroll';
import NavBar from '../../features/NavBar';
import ImageGallery from '../../features/ImageGallery'
import './PastProjPg.css';
import ppLogos from '../../Images/2025Logo.png';
import logo19 from "../../Images/cropped_raw.png";
import logo20 from "../../Graphics/cornhacks.svg";
import logo21 from "../../Graphics/logo21.svg";
import logo22 from "../../Images/logo22.png";
import logo23 from "../../Images/2023_final_logo_only.png";
import logo24 from "../../Graphics/corn3d.svg";

const PastProjPg = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick = () => {
    setIsButtonClicked(true); // Set the state to true when a button is clicked
  }

  return (
    <div>
      <body>
        <NavBar/>
        <div className="PPfloating-image-container">
            <img src={ppLogos} alt="PPLogo" className='PPimg' />
            <span id="shadow"></span>
        </div>
        
        {!isButtonClicked && (
          <div className='title'>
            <h1>
              <span className="past">Past</span> <span className="projects">Projects</span>
            </h1>
          </div>
        )}

        <div className={`btns ${isButtonClicked ? 'shift-left' : ''}`}>
          <button className='proj2024' type="button" onClick={handleClick}>
            <img src={logo24} alt="Logo" className='PastProjectLogo2024' />2024: Beat the Odds
          </button>
          <button className='proj2023' type="button" onClick={handleClick}>
          <img src={logo23} alt="Logo" className='PastProjectLogo2023' />2023: CyberSecurity
          </button>
          <button className='proj2022' type="button" onClick={handleClick}>
          <img src={logo22} alt="Logo" className='PastProjectLogo2022' />2022: Retro
          </button>
          <button className='proj2021' type="button" onClick={handleClick}>
            <img src={logo21} alt="Logo" className='PastProjectLogo2021' />2021: Looking Forward
          </button>
          <button className='proj2020' type="button" onClick={handleClick}>
            <img src={logo20} alt="Logo" className='PastProjectLogo2020' />2020: Going Green
          </button>
          <button className='proj2019' type="button" onClick={handleClick}>
            <img src={logo19} alt="Logo" className='PastProjectLogo2024' />2019: CornHacks 1
          </button>
        </div>
      </body>

      <div className={`PPgallery-container ${isButtonClicked ? 'opacity' : ''}`}>
          <ImageGallery />
        </div>
    </div>
    
  )
}

export default PastProjPg