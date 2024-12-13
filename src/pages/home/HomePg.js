import React from "react";
import Countdown from "../../components/countdown/countdown";
import NavBar from "../../features/NavBar";
import croppedLogo from "../../Images/cropped_raw.webp";
import "./HomePg.css";
import ImageGallery from "../../components/imageGallery/ImageGallery";
import Socialpage from "../../components/socialButtons/socials";
import { Link } from "react-router-dom";
import Numbers from "../../components/numbers/numbers";
import Sponsors24 from "../../components/sponsors/sponsors24";

const HomePg = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Countdown />

        <div className="floating-image-container">
          <img
            src={croppedLogo}
            alt="Logo"
            className="floating-image-container__img"
          />
        </div>

        <div className="blob">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F1EE8E">
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="M37.3,-67.6C47.8,-58.5,55.4,-47.4,63.8,-35.9C72.3,-24.3,81.5,-12.1,83.1,0.9C84.7,14,78.7,28,69.1,37.5C59.4,47,46.1,51.9,34,59.1C21.9,66.2,11,75.6,-1.4,77.9C-13.7,80.3,-27.4,75.7,-41.2,69.6C-55,63.4,-69,55.6,-77.7,43.8C-86.4,31.9,-89.8,16,-86.6,1.8C-83.4,-12.3,-73.7,-24.6,-66.2,-38.6C-58.8,-52.6,-53.6,-68.3,-43,-77.3C-32.3,-86.3,-16.2,-88.6,-1.4,-86.2C13.4,-83.8,26.8,-76.7,37.3,-67.6Z;
                        M35.7,-67.9C44.9,-56.5,49.9,-44.2,57.1,-32.7C64.3,-21.2,73.5,-10.6,78.3,2.7C83,16.1,83.3,32.2,74.8,41.3C66.3,50.5,49.1,52.8,35.1,57C21.2,61.2,10.6,67.2,-0.8,68.6C-12.2,70,-24.4,66.7,-38.2,62.5C-52.1,58.3,-67.5,53.1,-73.6,42.5C-79.8,31.9,-76.7,16,-75.5,0.7C-74.2,-14.5,-74.7,-28.9,-69.6,-41.4C-64.5,-53.9,-53.9,-64.4,-41.3,-73.8C-28.8,-83.2,-14.4,-91.5,-0.6,-90.5C13.3,-89.6,26.5,-79.2,35.7,-67.9Z;
                        M44.8,-72.8C58.4,-69.9,69.7,-58.3,75.5,-44.8C81.3,-31.2,81.6,-15.6,78.5,-1.8C75.4,12,69,24.1,62.9,37.3C56.9,50.5,51.3,64.8,40.9,72.3C30.5,79.8,15.2,80.4,0.4,79.7C-14.4,79,-28.8,76.9,-41.4,70.7C-54,64.4,-64.7,54,-70.3,41.5C-75.9,29,-76.3,14.5,-73.9,1.4C-71.6,-11.8,-66.4,-23.5,-61.8,-37.8C-57.2,-52,-53.2,-68.6,-43,-73.5C-32.8,-78.3,-16.4,-71.4,-0.4,-70.8C15.7,-70.1,31.3,-75.8,44.8,-72.8Z;
                        M37.3,-67.6C47.8,-58.5,55.4,-47.4,63.8,-35.9C72.3,-24.3,81.5,-12.1,83.1,0.9C84.7,14,78.7,28,69.1,37.5C59.4,47,46.1,51.9,34,59.1C21.9,66.2,11,75.6,-1.4,77.9C-13.7,80.3,-27.4,75.7,-41.2,69.6C-55,63.4,-69,55.6,-77.7,43.8C-86.4,31.9,-89.8,16,-86.6,1.8C-83.4,-12.3,-73.7,-24.6,-66.2,-38.6C-58.8,-52.6,-53.6,-68.3,-43,-77.3C-32.3,-86.3,-16.2,-88.6,-1.4,-86.2C13.4,-83.8,26.8,-76.7,37.3,-67.6Z"
              ></animate>
            </path>
          </svg>
        </div>

        {/* <div className="blob2">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#24A148">
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="M44.8,-72.8C58.4,-69.9,69.7,-58.3,75.5,-44.8C81.3,-31.2,81.6,-15.6,78.5,-1.8C75.4,12,69,24.1,62.9,37.3C56.9,50.5,51.3,64.8,40.9,72.3C30.5,79.8,15.2,80.4,0.4,79.7C-14.4,79,-28.8,76.9,-41.4,70.7C-54,64.4,-64.7,54,-70.3,41.5C-75.9,29,-76.3,14.5,-73.9,1.4C-71.6,-11.8,-66.4,-23.5,-61.8,-37.8C-57.2,-52,-53.2,-68.6,-43,-73.5C-32.8,-78.3,-16.4,-71.4,-0.4,-70.8C15.7,-70.1,31.3,-75.8,44.8,-72.8Z;
                        M37.3,-67.6C47.8,-58.5,55.4,-47.4,63.8,-35.9C72.3,-24.3,81.5,-12.1,83.1,0.9C84.7,14,78.7,28,69.1,37.5C59.4,47,46.1,51.9,34,59.1C21.9,66.2,11,75.6,-1.4,77.9C-13.7,80.3,-27.4,75.7,-41.2,69.6C-55,63.4,-69,55.6,-77.7,43.8C-86.4,31.9,-89.8,16,-86.6,1.8C-83.4,-12.3,-73.7,-24.6,-66.2,-38.6C-58.8,-52.6,-53.6,-68.3,-43,-77.3C-32.3,-86.3,-16.2,-88.6,-1.4,-86.2C13.4,-83.8,26.8,-76.7,37.3,-67.6Z;
                        M35.7,-67.9C44.9,-56.5,49.9,-44.2,57.1,-32.7C64.3,-21.2,73.5,-10.6,78.3,2.7C83,16.1,83.3,32.2,74.8,41.3C66.3,50.5,49.1,52.8,35.1,57C21.2,61.2,10.6,67.2,-0.8,68.6C-12.2,70,-24.4,66.7,-38.2,62.5C-52.1,58.3,-67.5,53.1,-73.6,42.5C-79.8,31.9,-76.7,16,-75.5,0.7C-74.2,-14.5,-74.7,-28.9,-69.6,-41.4C-64.5,-53.9,-53.9,-64.4,-41.3,-73.8C-28.8,-83.2,-14.4,-91.5,-0.6,-90.5C13.3,-89.6,26.5,-79.2,35.7,-67.9Z;
                        M44.8,-72.8C58.4,-69.9,69.7,-58.3,75.5,-44.8C81.3,-31.2,81.6,-15.6,78.5,-1.8C75.4,12,69,24.1,62.9,37.3C56.9,50.5,51.3,64.8,40.9,72.3C30.5,79.8,15.2,80.4,0.4,79.7C-14.4,79,-28.8,76.9,-41.4,70.7C-54,64.4,-64.7,54,-70.3,41.5C-75.9,29,-76.3,14.5,-73.9,1.4C-71.6,-11.8,-66.4,-23.5,-61.8,-37.8C-57.2,-52,-53.2,-68.6,-43,-73.5C-32.8,-78.3,-16.4,-71.4,-0.4,-70.8C15.7,-70.1,31.3,-75.8,44.8,-72.8Z"
              ></animate>
            </path>
          </svg>
        </div> */}

        <div className="information-container">
          <h1>Cornhacks 2025</h1>
          <h2>2100: A Corn Odyssey</h2>
          <button type="button" className="home-buttons">
            Register
          </button>
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
      <p className="labels">Participants by Major (Includes Double-Majors):</p>
      <section className="numbers-container">
        <div className="littlebox CompSci">
          <h4 className="labelText">Computer</h4>
          <Numbers end={67} duration={8} />
          <h4 className="labelText">Science</h4>
        </div>
        <div className="littlebox SoftwareEng">
          <h4 className="labelText">Software</h4>
          <Numbers end={17} duration={8} />
          <h4 className="labelText">Engineering</h4>
        </div>
        <div className="littlebox Math">
          <h4 className="labelText">Math</h4>
          <Numbers end={10} duration={8} />
          <h4 style={{ color: "#f23b3d"}}> Eng</h4>
        </div>
        <div className="littlebox CompEng">
          <h4 className="labelText">Computer</h4>
          <Numbers end={6} duration={8} />
          <h4 className="labelText">Engineering</h4>
        </div>
        <div className="littlebox ElectricalEng">
          <h4 className="labelText">Electrical</h4>
          <Numbers end={5} duration={8} />
          <h4 className="labelText">Engineering</h4>
        </div>
        <div className="littlebox DataSci">
          <h4 className="labelText">Data</h4>
          <Numbers end={3} duration={8} />
          <h4 className="labelText">Science</h4>
        </div>
        <div className="littlebox IT">
          <h4 className="labelText">Information</h4>
          <Numbers end={3} duration={8} />
          <h4 className="labelText">Technology</h4>
        </div>
      </section>
      <section className="numbers-container">
        <div className="littlebox MechEng">
          <h4 className="labelText">Mechanical</h4>
          <Numbers end={3} duration={8} />
          <h4 className="labelText">Engineering</h4>
        </div>
        <div className="littlebox Cybersecurity">
          <h4 className="labelText">Cybersecurity</h4>
          <Numbers end={2} duration={8} />
          <h4 style={{ color: "#6c3ac5"}}> Eng</h4>
        </div>
        <div className="littlebox Sociology">
          <h4 className="labelText">Sociology</h4>
          <Numbers end={1} duration={8} />
          <h4 style={{ color: "#57a863"}}> Eng</h4>
        </div>
        <div className="littlebox Psychology">
          <h4 className="labelText">Psychology</h4>
          <Numbers end={1} duration={8} />
          <h4 style={{ color: "#eb98e9"}}> Eng</h4>
        </div>
        <div className="littlebox HealthSci">
          <h4 className="labelText">Health</h4>
          <Numbers end={1} duration={8} />
          <h4 className="labelText">Science</h4>
        </div>
        <div className="littlebox ChemEng">
          <h4 className="labelText">Chemical</h4>
          <Numbers end={1} duration={8} />
          <h4 className="labelText">Engineering</h4>
        </div>
        <div className="littlebox Economics">
          <h4 className="labelText">Economics</h4>
          <Numbers end={1} duration={8} />
          <h4 style={{ color: "#5175eb"}}> Eng</h4>
        </div>
      </section>

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
