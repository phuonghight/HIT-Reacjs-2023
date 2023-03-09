import React from "react";
import DropDown from "./DropDown";
import "./NavbarItem.css";

const NavbarItem = ({ name, path, dropdow = false, isActive }) => {
  return (
    <li
      className={
        isActive ? "navbar__item navbar__item--active" : "navbar__item"
      }
    >
      {dropdow ? <DropDown /> : <a href={path}>{name}</a>}
    </li>
  );
};

export default NavbarItem;
