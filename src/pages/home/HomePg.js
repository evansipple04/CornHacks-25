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

        <div className="information-container">
          <h1>Cornhacks 2025</h1>
          <h2>2100: A Corn Odyssey</h2>
          <button type="button" className="home-buttons">Register</button>
          <button type="button" className="home-buttons">Sponsor</button>
        </div>
        
        <div className="gallery-container">
          <ImageGallery />
        </div>

      </div>
      </>
  )
}

export default HomePg