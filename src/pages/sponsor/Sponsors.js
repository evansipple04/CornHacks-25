import React from 'react'
import NavBar from '../../features/NavBar';
import nelnet from '../../Images/nelnet.png';
import olson from '../../Images/olsson.png'
import './spawn.css';


const Sponsor = () => {
  return (
    <section>
      <NavBar/>
      <div className='title'>
        <label>
            Our Sponsors
        </label>
        <div className='Plat'>
          <label>Platnium Sponsors 2025</label>
          <img className='platImg' src={nelnet} alt='nelnet'/>
        </div>
        <div className='Gold'>
          <label>Gold Sponsors 2025</label>
          <img className='goldImg' src={olson} alt='olson'/>
        </div>
        <div className='Silver'>
          <label>Silver Spon</label>
        </div>
      </div>
    </section>
  )
}

export default Sponsor;