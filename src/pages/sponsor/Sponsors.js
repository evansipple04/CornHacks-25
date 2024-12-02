import React, { useRef, useEffect } from 'react'
import NavBar from '../../features/NavBar';
import nelnet from '../../Images/nelnet.webp';
import olson from '../../Images/olsson.webp'
import sandhills from '../../Images/sandhills.webp'
import conagra from '../../Images/conagra.webp'
import spreetail from '../../Images/spreetail.webp'
import sponsorsChart from '../../Images/sponsorsChart.png'
import './spawn.css';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Sponsor = () => {
  const scroller = useRef();
  const becomeSpon = useRef();
  useEffect(() => {    
    let areas = gsap.utils.toArray('.spawnArea');
    areas.forEach(area => {
      gsap.fromTo(area,{x: -550, opacity: 0}, {
        opacity: 1,
        x: 0,
        ease: "power3",
        scrollTrigger: {
          trigger: area,
          start:'center 50%',
          end: '+=100px',
          //pin: true,
          scrub: 2,
          toggleActions: "play none none reverse",
        },
        immediateRender: true,
      })
    })
}, [{scope: '.sponsor-container'}]);
  useEffect(() => {
    gsap.fromTo(
      becomeSpon.current,
      {x: 600, opacity: 0},
      {
        opacity: 1, 
        x:0,
        ease: 'power2',
        scrollTrigger: {
          trigger: becomeSpon.current,
          start: 'center 70%',
          end: 'bottom center',
          scrub: 2,
          toggleActions: "play non none reverse",
        },
        immediateRender: true,
    }
    )
  }, [])

  return (
    <div className="sponsor-background">
    <section className='mainHold'>
      <div>
      <NavBar/>
      </div>
      <div className='mainTitle'>
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
        <div className='smalldivSpace'/>
        <div className='becomeSec' ref={becomeSpon}>
          <a href="https://marketplace.unl.edu/default/cornhacks-sponsorship.html" target="_blank" rel="noopener noreferrer">
            <label>
              Become a Sponsor!
            </label>
          </a>
          <p>
            Short paragraph on how
          </p>
          <a href='https://marketplace.unl.edu/default/cornhacks-sponsorship.html' target="_blank" rel="noopener noreferrer" className='tierChart'>
            <img src={sponsorsChart} alt="Our Sponsor tiers"/>
          </a>
        </div>
        <div className='smalldivSpace'/>
        </section>
    </section>
    </div>
  )
}

export default Sponsor;