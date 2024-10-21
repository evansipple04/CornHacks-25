import React from 'react'
import Countdown from '../../components/countdown'
import NavBar from '../../features/NavBar'
import croppedLogo from '../../Images/cropped_raw.png'
import './HomePg.css'
import ImageGallery from '../../features/ImageGallery'

const HomePg = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
      <Countdown />
      
        <div className="floating-image-container">
          <img src={croppedLogo} alt="Logo" className='img' />
          <span id="shadow"></span>
        </div>
        
        <div className="gallery-container">
          <ImageGallery />
        </div>

      </div>
      </>
  )
}

export default HomePg