import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FooterLinks.css";

function FooterLinks({ data }) {
  return (
    <div className="footer-links">
      <h4>{data.title}</h4>

      {data.des && <p>{data.des}</p>}

      {data.links && (
        <ul>
          {data.links.map((link) => (
            <li key={link.name}>
              <FontAwesomeIcon icon="fa-solid fa-angle-right" />
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}

      {data.socialNetworks && (
        <div className="social-links">
          {data.socialNetworks.map((item) => (
            <a key={item.class} className={item.class} href={item.path}>
              {item.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default FooterLinks;
