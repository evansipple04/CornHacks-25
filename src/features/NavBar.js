import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.module.css';
import './NavBar.css'
import croppedLogo from '../Images/cropped_raw.png';

const NavBar = () => {
  return (
    <div>
      <nav>
        <img src={croppedLogo} alt="Logo" className='logo'/>
        <ul>
          <li>
            <Link to="/">
            <button className="Home">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/sponsors">
              <button className="Sponsors">Sponsors</button>
            </Link>
          </li>
          <li>
            <Link to="/pastProjects">
               <button className="PastProjects">PastProjects</button>
            </Link>
          </li>
          <li>
            <Link to="/helporganize">
              <button className="HelpOrganize">Help Organize</button>
            </Link>
          </li>
          <li>
            <Link to="/aboutus">
              <button className="AboutUs">About Us</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar