import React, { useRef, useEffect } from 'react'
import NavBar from '../../features/NavBar';
import nelnet from '../../Images/nelnet.webp';
import olson from '../../Images/olsson.webp'
import sandhills from '../../Images/sandhills.webp'
import conagra from '../../Images/conagra.webp'
import spreetail from '../../Images/spreetail.webp'
import './spawn.css';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Sponsor = () => {
  const scroller = useRef();
  useEffect(() => {    
    let areas = gsap.utils.toArray('.spawnArea');
    areas.forEach(area => {
      gsap.fromTo(area,{x: -600, opacity: 0}, {
        opacity: 1,
        x: 0,
        ease: "power3",
        scrollTrigger: {
          trigger: area,
          start:'center 50%',
          end: '+=100px',
          //pin: true,
          scrub: 3,
          toggleActions: "play none none",
        },
      })
    })
}, {scope: '.sponsor-container'});

  return (
    <div className="sponsor-background">

    
    <section className='mainHold'>
      <NavBar/>
      <div className='title'>
        <label>
            Our 2025 Sponsors
        </label>
      </div>
      <div className='divSpace'/>
      <section className='sponsor-container' ref={scroller}>
        <div className='spawnArea'>
          <div className='title colored-box platinum'>
            <label>Our 2025 Platinum Sponsors</label>
            <div className='Plat'>
              <Link to={"https://www.olsson.com/"}>
                <img src={olson} alt='olson' className='imagePlatinum' />
              </Link>
              <Link to={"https://www.conagrabrands.com/"}>
                <img src={conagra} alt='conagrabrands' className='imagePlatinum' />
              </Link>
              <Link to={"https://www.spreetail.com/"}>
                <img src={spreetail} alt='spreetail' className='imagePlatinum' />
              </Link>
              <Link to={"https://www.olsson.com/"}>
                <img src={olson} alt='olson' className='imagePlatinum' />
              </Link>
          </div> 
            </div>
          </div>
        <div className='spawnArea'>
          <div className='title colored-box gold'>
          <label>Our 2025 Gold Sponsors</label>
          <div className='Gold'>
            <Link to={"https://www.nelnet.com/"}>
              <img src={nelnet} alt='nelnet' className='imageGold' />
            </Link>
          </div>
          </div>
        </div>
        <div className='spawnArea'>
          <div className='title colored-box silver'>
            <label>Our 2025 Gold Sponsors</label>
            <div className='Silver'>
              <Link to={"https://www.sandhills.com/"}>
                <img src={sandhills} alt='SandHills' className='imageGold' />
              </Link>
            </div>
          </div>
        </div>
        <div className='divSpace'/>
        </section>
    </section>
    </div>
  )
}

export default Sponsor;