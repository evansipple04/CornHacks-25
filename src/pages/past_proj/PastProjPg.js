import React from 'react'
import { useState } from 'react';
// import { Link } from 'react-scroll';
import NavBar from '../../features/NavBar';
import ImageGallery2024 from '../../components/ImageGallery2024/ImageGallery2024.js';
import ImageGallery2023 from '../../components/imageGallery2023/imageGallery2023.js';
import ImageGallery2022 from '../../components/imageGallery2022/imageGallery2022.js';
import ImageGallery2021 from '../../components/ImageGallery2021/ImageGallery2021.js';
import ImageGallery2020 from '../../components/ImageGallery2020/ImageGallery2020.js';
import ImageGallery2019 from '../../components/ImageGallery2019/ImageGallery2019.js';
import './PastProjPg.css';
import ppLogos from '../../Images/2025Logo.webp';
import logo19 from "../../Images/cropped_raw.webp";
import logo20 from "../../Graphics/cornhacks.svg";
import logo21 from "../../Graphics/logo21.svg";
import logo22 from "../../Images/logo22.webp";
import logo23 from "../../Images/2023_final_logo_only.webp";
import logo24 from "../../Graphics/corn3d.svg";
import Blobs from "../../components/blobs/blobs";

const PastProjPg = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isButtonClickedProj2024, setIsButtonClickedProj2024] = useState(false);
  const [isButtonClickedProj2023, setIsButtonClickedProj2023] = useState(false);
  const [isButtonClickedProj2022, setIsButtonClickedProj2022] = useState(false);
  const [isButtonClickedProj2021, setIsButtonClickedProj2021] = useState(false);
  const [isButtonClickedProj2020, setIsButtonClickedProj2020] = useState(false);
  const [isButtonClickedProj2019, setIsButtonClickedProj2019] = useState(false);

  const handleClick2024 = () => {
    setIsButtonClicked(true); // Set the state to true when a button is clicked
    setIsButtonClickedProj2024(true);
    setIsButtonClickedProj2023(false);
    setIsButtonClickedProj2022(false);
    setIsButtonClickedProj2021(false);
    setIsButtonClickedProj2020(false);
    setIsButtonClickedProj2019(false);
  }

  const handleClick2023 = () => {
    setIsButtonClicked(true); // Set the state to true when a button is clicked
    setIsButtonClickedProj2023(true);
    setIsButtonClickedProj2024(false);
    setIsButtonClickedProj2022(false);
    setIsButtonClickedProj2021(false);
    setIsButtonClickedProj2020(false);
    setIsButtonClickedProj2019(false);
  }

  const handleClick2022 = () => {
    setIsButtonClicked(true); // Set the state to true when a button is clicked
    setIsButtonClickedProj2022(true);
    setIsButtonClickedProj2024(false);
    setIsButtonClickedProj2023(false);
    setIsButtonClickedProj2021(false);
    setIsButtonClickedProj2020(false);
    setIsButtonClickedProj2019(false);
  }

  const handleClick2021 = () => {
    setIsButtonClicked(true); // Set the state to true when a button is clicked
    setIsButtonClickedProj2021(true);
    setIsButtonClickedProj2024(false);
    setIsButtonClickedProj2023(false);
    setIsButtonClickedProj2022(false);
    setIsButtonClickedProj2020(false);
    setIsButtonClickedProj2019(false);
  }

  const handleClick2020 = () => {
    setIsButtonClicked(true); // Set the state to true when a button is clicked
    setIsButtonClickedProj2020(true);
    setIsButtonClickedProj2024(false);
    setIsButtonClickedProj2023(false);
    setIsButtonClickedProj2022(false);
    setIsButtonClickedProj2021(false);
    setIsButtonClickedProj2019(false);
  }

  const handleClick2019 = () => {
    setIsButtonClicked(true); // Set the state to true when a button is clicked
    setIsButtonClickedProj2019(true);
    setIsButtonClickedProj2024(false);
    setIsButtonClickedProj2023(false);
    setIsButtonClickedProj2022(false);
    setIsButtonClickedProj2021(false);
    setIsButtonClickedProj2020(false);
  }


  return (
    <div>
      <Blobs />
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
          <button className='proj2024' type="button" onClick={handleClick2024}>
            <img src={logo24} alt="Logo" className='PastProjectLogo2024' />2024: Beat the Odds
          </button>
          <button className='proj2023' type="button" onClick={handleClick2023}>
          <img src={logo23} alt="Logo" className='PastProjectLogo2023' />2023: CyberSecurity
          </button>
          <button className='proj2022' type="button" onClick={handleClick2022}>
          <img src={logo22} alt="Logo" className='PastProjectLogo2022' />2022: Retro
          </button>
          <button className='proj2021' type="button" onClick={handleClick2021}>
            <img src={logo21} alt="Logo" className='PastProjectLogo2021' />2021: Looking Forward
          </button>
          <button className='proj2020' type="button" onClick={handleClick2020}>
            <img src={logo20} alt="Logo" className='PastProjectLogo2020' />2020: Going Green
          </button>
          <button className='proj2019' type="button" onClick={handleClick2019}>
            <img src={logo19} alt="Logo" className='PastProjectLogo2024' />2019: CornHacks 1
          </button>
        </div>
      </body>

      <div className={`PPgallery-container ${isButtonClickedProj2024 ? 'opacity' : ''}`}>
          <ImageGallery2024 />
      </div>
      <div className={`PPgallery-container ${isButtonClickedProj2023 ? 'opacity' : ''}`}>
          <ImageGallery2023 />
      </div>
      <div className={`PPgallery-container ${isButtonClickedProj2022 ? 'opacity' : ''}`}>
          <ImageGallery2022 />
      </div>
      <div className={`PPgallery-container ${isButtonClickedProj2021 ? 'opacity' : ''}`}>
          <ImageGallery2021 />
      </div>
      <div className={`PPgallery-container ${isButtonClickedProj2020 ? 'opacity' : ''}`}>
          <ImageGallery2020 />
      </div>
      <div className={`PPgallery-container ${isButtonClickedProj2019 ? 'opacity' : ''}`}>
          <ImageGallery2019 />
      </div>
    </div>
    
  )
}

export default PastProjPg