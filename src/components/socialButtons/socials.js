import React from "react";
import insta from "../../Images/instagram-black.webp";
import emailimage from "../../Images/email-icon-121.webp"
import './socials.css'

/* 
  Change recipient if we have a new email or account 
  Make sure to change the links aswell within the JSX (href) 

  <Socialpage> is the react element
    <socialbar> is a container within it that holds everything
*/

var Instagramlink = () => {
  const recipient = 'unl_cornhacks';
  const instagramURL = `https://www.instagram.com/${recipient}/`;
  window.open(instagramURL, '_blank');
}

var Emaillink = () => {
  const recipient = 'cornhacks@unl.edu';
  const EmailURL = `mailto:${recipient}`;
  window.open(EmailURL, '_blank');
}

const Socialpage = () => {
  return (
  <socialbar>

    <button onClick={Instagramlink} className="invis-button">
      <img src={insta} alt={"Couldn't Load"} className="image-resize-instagram">
      </img>
    </button>

    <a
    href="https://www.instagram.com/unl_cornhacks" 
    target="_blank" 
    rel="noreferrer"
    className="font-resize">
      @unl_cornhacks
    </a>

    <button onClick={Emaillink} className="invis-button">
      <img src={emailimage} alt={"Couldn't Load"} className="image-resize">
      </img>
    </button>

    <a
    href="mailto:cornhacks@unl.edu" 
    target="_blank" 
    rel="noreferrer"
    className="font-resize">
      cornhacks@unl.edu
    </a>

  </socialbar>
  );
};

export default Socialpage