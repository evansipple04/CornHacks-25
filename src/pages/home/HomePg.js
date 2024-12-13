import React from "react";
import Countdown from "../../components/countdown/countdown";
import Blobs from "../../components/blobs/blobs";
import NavBar from "../../features/NavBar";
import croppedLogo from "../../Images/cropped_raw.webp";
import "./HomePg.css";
import ImageGallery from "../../components/imageGallery/ImageGallery";
import Socialpage from "../../components/socialButtons/socials";
import { Link } from "react-router-dom";
// import Numbers from "../../components/numbers/numbers";
import Sponsors24 from "../../components/sponsors/sponsors24";

const HomePg = () => {
  return (
    <>
    <div>
      <Blobs />
    </div>
      <div>
        <NavBar />
      </div>
      <div>
        <Countdown />
      </div>

      <div>
        <div className="floating-image-container">
          <img
            src={croppedLogo}
            alt="Logo"
            className="floating-image-container__img"
          />
        </div>

        <div className="information-container">
          <h1>Cornhacks 2025</h1>
          <h2>2100: A Corn Odyssey</h2> 
            <a
              href="https://docs.google.com/forms/d/1lFRqsOFMe788vaKo2DP9sigcea3-csNHV5RO8uOkwN0/prefill"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="home-buttons">
                Register
              </button>
            </a>{" "}
          <Link to="/sponsors">
            <button type="button" className="home-buttons">
              Sponsor
            </button>
          </Link>
        </div>

        <div className="gallery-container">
          <ImageGallery />
        </div>
      </div>
      
      <div>
        <Sponsors24 />
      </div>
      
      <div>
        <Socialpage />
      </div>
    </>
  );
};

export default HomePg;
