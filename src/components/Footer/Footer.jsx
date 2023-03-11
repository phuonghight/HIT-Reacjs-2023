import React from "react";
import FooterBottom from "./FooterBottom";
import FooterNewsletter from "./FooterNewsletter";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterNewsletter />
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
