import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownList from "./DropDownList";
import "./DropDown.css";

const DropDown = ({ className }) => {
  return (
    <a className={className}>
      DropDown
      <FontAwesomeIcon icon="fa-solid fa-angle-down" />
    </a>
  );
};

export default DropDown;
