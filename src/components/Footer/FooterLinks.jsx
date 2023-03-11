import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterLinks({ data }) {
  console.log(data);
  return (
    <div className="footer-links">
      <h4>{data.title}</h4>
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
    </div>
  );
}

export default FooterLinks;
