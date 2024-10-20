import React from 'react'
import Countdown from '../../components/countdown'
import NavBar from '../../features/NavBar'
import croppedLogo from '../../Images/cropped_raw.png'
import './HomePg.css'
const HomePg = () => {
  return (
    <><div>
      <NavBar />
      <Countdown />
    </div><div className="floating-image-container">
        <img src={croppedLogo} alt="Logo" className='img' />
        <span id="shadow"></span>
      </div></>
  )
}

export default HomePg