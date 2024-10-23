import React from 'react'
import NavBar from '../../features/NavBar';
import './PastProjPg.css';

const PastProjPg = () => {
  return (
    <body>
      <NavBar/>
      <div className='title'>
        <h1>
          Past Projects
        </h1>
        <button className='proj2024'>
          <label>2024 - Beat The Odds</label>
        </button>
        <button className='proj2023'>
        <label>2023 - CyberSecurity</label>
        </button>
        <button className='proj2022'>
        <label>2022 - Retro</label>
        </button>
        <button className='proj2021'>
        <label>2021 - Looking Forward</label>
        </button>
        <button className='proj2020'>
        <label>2020 - Going Green</label>
        </button>
        <button className='proj2019'>
        <label>2019 - CornHacks 1</label>
        </button>
      </div>
    </body>
  )
}

export default PastProjPg