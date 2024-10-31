import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.module.css';
import './NavBar.css'
import croppedLogo from '../Images/2025Logo.webp';

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">
        <img src={croppedLogo} alt="Logo" className='logo'/>
        </Link>
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
               <button className="PastProjects">Past Projects</button>
            </Link>
          </li>
          <li>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfKXfQ-5Ppt3dTxJjdI4FfmHuOhnEx1qB4oLgkKqYK_mLal0Q/viewform?embedded=true">
              <button className="HelpOrganize">Help Organize</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar