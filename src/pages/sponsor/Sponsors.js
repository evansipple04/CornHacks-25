import React, { useRef, useEffect } from 'react'
import NavBar from '../../features/NavBar';
import nelnet from '../../Images/nelnet.png';
import olson from '../../Images/olsson.png'
import './spawn.css';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Sponsor = () => {
  const platy = useRef();
  const scroller = useRef();
  const ref = useRef();

  useEffect(() => {    
    let areas = gsap.utils.toArray('.spawnArea');
    areas.forEach(area => {
      gsap.fromTo(area,{x: -600, opacity: 0}, {
        opacity: 1,
        x: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: area,
          start:'center 70%',
          toggleActions: "play none none reverse",
        },
      })
    })
});

  return (
    <>
      <NavBar/>
      <div className='title'>
        <label>
            Our 2025 Sponsors
        </label>
      </div>
      <div className='divSpace'/>
      <div className='sponsor-container' ref={scroller}>
        <div className='spawnArea' ref={platy}>
          <label className='title colored-box platinum'>Our 2025 Platinum Sponsors</label>
          <div className='Plat'>
            <Link to={"https://www.olsson.com/"}>
              <img src={olson} alt='olson' className='imagePlatinum' />
            </Link>
          </div>
          </div>
        <div className='spawnArea' ref={ref}>
          <label className='title colored-box gold'>Our 2025 Gold Sponsors</label>
          <div className='Gold'>
            <Link to={"https://www.nelnet.com/"}>
              <img src={nelnet} alt='nelnet' className='imageGold' />
            </Link>
          </div>
        </div>
        </div>
    </>
  )
}

export default Sponsor;