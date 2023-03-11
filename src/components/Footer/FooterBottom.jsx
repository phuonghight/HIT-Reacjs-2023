import React from "react";
import "./FooterBottom.css";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="copyright">
          {"© Copyright "}
          <strong>{"Arsha."}</strong>
          {" All Rights Reserved "}
        </div>
        <div className="credits">
          {" Designed by "}
          <a href="#">{"BootstrapMade"}</a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
