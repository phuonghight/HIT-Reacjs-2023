import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ButtonGotoTop.css";

const ButotnGotoTop = () => {
  return (
    <div className="goto-top">
      <a href="#">
        <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
      </a>
    </div>
  );
};

export default ButotnGotoTop;
