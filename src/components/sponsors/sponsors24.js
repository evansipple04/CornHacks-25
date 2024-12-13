import React from "react";
import olsson from "../../Graphics/olsson.svg"
import conagra from "../../Images/conagra.webp"
import DPL from "../../Images/DPL_logo_2018_rgb.webp"
import belcan from "../../Images/belcan.webp"
import licor from "../../Images/licor.webp"

import "./sponsors24.css";
import { Link } from "react-router-dom";

function Sponsor24() {
  return (
    <div className="sponsor-container">
      <div className="color-box gold">
        <h2>2024 Gold Sponsors</h2>
      </div>
      <div className="GoldSponsor">
        <Link to={'https://www.olsson.com/'}>
          <img src={olsson} className="imageGold" alt="Olsson" />
        </Link>
        <Link to={'https://www.conagrabrands.com/'}>
        <img src={conagra} className="imageGold" alt="Conagra" />
        </Link>
      </div>
      <div className="color-box bronze">
        <h4>2024 Bronze Sponsors</h4>
      </div>
      <div className="BronzeSponsor">
        <Link to={'https://dontpaniclabs.com/'}>
          <img src={DPL} className="imageBronze" alt="DPL" />
        </Link>
        <Link to={'https://www.belcan.com/'}>
          <img src={belcan} className="imageBronze" alt="Belcan" />
        </Link>
        <Link to={'https://www.licor.com/'}>
          <img src={licor} className="imageBronze" alt="Licor" />
        </Link>
      </div>
    </div>
  );
}

export default Sponsor24