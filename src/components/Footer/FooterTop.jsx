import React, { useState } from "react";
import FooterLinks from "./FooterLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterTop() {
  const [usefulLinks, setUsefulLiknks] = useState({
    title: "Useful Links",
    links: [
      {
        name: "Home",
        path: "#",
      },
      {
        name: "About us",
        path: "#",
      },
      {
        name: "Services",
        path: "#",
      },
      {
        name: "Terms of service",
        path: "#",
      },
      {
        name: "Privacy policy",
        path: "#",
      },
    ],
  });

  const [ourServices, setOueServices] = useState({
    title: "Our Services",
    links: [
      {
        name: "Web Design",
        path: "#",
      },
      {
        name: "Web Development",
        path: "#",
      },
      {
        name: "Product Management",
        path: "#",
      },
      {
        name: "Marketing",
        path: "#",
      },
      {
        name: "Graphic Design",
        path: "#",
      },
    ],
  });

  const [ourSocialNetworks, setOurSocialNetwoks] = useState({
    title: "Our Social Networks",
    des: "Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies",
    socialNetworks: [
      {
        class: "twitter",
        path: "#",
        icon: <FontAwesomeIcon icon="fa-brands fa-twitter" />,
      },
      {
        class: "facebook",
        path: "#",
        icon: <FontAwesomeIcon icon="fa-brands fa-facebook-f" />,
      },
      {
        class: "instagram",
        path: "#",
        icon: <FontAwesomeIcon icon="fa-brands fa-instagram" />,
      },
      {
        class: "skype",
        path: "#",
        icon: <FontAwesomeIcon icon="fa-brands fa-skype" />,
      },
      {
        class: "linkedin",
        path: "#",
        icon: <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />,
      },
    ],
  });

  return (
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="footer-contact">
            <h3>ARSHA</h3>
            <p>
              A108 Adam Street
              <br />
              New York, NY 535022
              <br />
              United States
              <br />
              <br />
              <strong>Phone: </strong> +1 5589 55488 55
              <br />
              <strong>Email: </strong> info@example.com
            </p>
          </div>
          <FooterLinks data={usefulLinks} />
          <FooterLinks data={ourServices} />
          <FooterLinks data={ourSocialNetworks} />
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
