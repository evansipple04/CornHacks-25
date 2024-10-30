import React from "react";
import insta from "../../Images/insta.webp";
import gmail from "../../Images/gmail.webp"
import outlook from "../../Graphics/outlook.svg"
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
var Gmaillink = () => {
  const recipient = 'cornhacks@unl.edu';
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}`;
  window.open(gmailURL, '_blank');
}
var Outlooklink = () => {
  const recipient = 'cornhacks@unl.edu';
  const outlookURL = `https://outlook.office.com/mail/deeplink/compose?to=${recipient}`;
  window.open(outlookURL, '_blank');
}

const Socialpage = () => {
  return (
  <socialbar>

    <button onClick={Instagramlink} className="invis-button">
      <img src={insta} alt={"Couldn't Load"} className="image-resize">
      </img>
    </button>

    <a
    href="https://www.instagram.com/unl_cornhacks" 
    target="_blank" 
    rel="noreferrer"
    className="font-resize">
      @unl_cornhacks
    </a>

    <button onClick={Outlooklink} className="invis-button">
      <img src={outlook} alt={"Couldn't Load"} className="image-resize">
      </img>
    </button>

    <a
    href="https://outlook.office.com/mail/deeplink/compose?to=cornhacks@unl.edu" 
    target="_blank" 
    rel="noreferrer"
    className="font-resize">
      cornhacks@unl.edu
    </a>

    <button onClick={Gmaillink} className="invis-button">
      <img src={gmail} alt={"Couldn't Load"} className="image-resize-gmail">
      </img>
    </button>

    <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=cornhacks@unl.edu" 
    target="_blank" 
    rel="noreferrer" 
    className="font-resize">
      cornhacks@unl.edu
    </a>

  </socialbar>
  );
};

export default Socialpage