import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.module.css';
import croppedLogo from '../Images/cropped_raw.png';

const NavBar = () => {
  return (
    <div>
      <nav>
        <img src={croppedLogo} alt="Logo" className='logo'/>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sponsors">Sponsors</Link>
          </li>
          <li>
            <Link to="/pastProjects">Past Projects</Link>
          </li>
          <li>
            <Link to="/helporganize">Help Organize</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar