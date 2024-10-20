import React from 'react'
import NavBar from '../../features/NavBar';
import nelnet from '../../Images/nelnet.png'


const Sponsor = () => {
  return (
    <div>
      <NavBar/>
      <div>
        <header>
          <label>
            Our Sponsors
          </label>
          <div>
            <img src={nelnet} alt='nelnet' />
          </div>
        </header>
      </div>
    </div>
  )
}

export default Sponsor;