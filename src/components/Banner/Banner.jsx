import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="banner-content">
            <h1>Better Solutions For Your Business</h1>
            <h2>
              We are team of talented designers making websites with Bootstrap
            </h2>
            <div>
              <a href="#about" className="btn-get-started">
                Get Started
              </a>
              <a href="#" className="btn-watch-video">
                <FontAwesomeIcon icon="fa-regular fa-circle-play" />
                Watch Video
              </a>
            </div>
          </div>
          <div className="banner-img">
            <img
              src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
