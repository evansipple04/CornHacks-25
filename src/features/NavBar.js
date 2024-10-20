import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.module.css';
const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"><button>Home</button></Link>
          </li>
          <li>
            <Link to="/sponsors"><button>Sponsors</button></Link>
          </li>
          <li>
            <Link to="/pastProjects"><button>Past Projects</button></Link>
          </li>
          <li>
            <Link to="/helporganize"><button>Help Organize</button></Link>
          </li>
          <li>
            <Link to="/aboutus"><button>About Us</button></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar