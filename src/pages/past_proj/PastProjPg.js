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
      </div>
      <div className='btns'>
        <button className='proj2024' type="button">
          <label>2024: Beat The Odds</label>
        </button>
        <button className='proj2023' type="button">
          <label>2023: CyberSecurity</label>
        </button>
        <button className='proj2022' type="button">
          <label>2022: Retro</label>
        </button>
        <button className='proj2021' type="button">
          <label>2021: Looking Forward</label>
        </button>
        <button className='proj2020' type="button">
          <label>2020: Going Green</label>
        </button>
        <button className='proj2019' type="button">
          <label>2019: CornHacks 1</label>
        </button>
      </div>
    </body>
  )
}

export default PastProjPg