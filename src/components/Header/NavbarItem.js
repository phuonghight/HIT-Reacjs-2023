import React from "react";
import DropDown from "./DropDown";
import DropDownList from "./DropDownList";
import NavbarButton from "./NavbarButton";
import "./NavbarItem.css";

const NavbarItem = ({
  name,
  path,
  dropdow = false,
  isActive,
  isNavbarButton = false,
}) => {
  return (
    <li
      className={
        isActive ? "navbar__item navbar__item--active" : "navbar__item"
      }
    >
      {dropdow ? (
        <div className="dropdown" style={{ position: "relative" }}>
          <DropDown className="nav__link" />
          <DropDownList />
        </div>
      ) : isNavbarButton ? (
        <NavbarButton className="nav__link navbarBtn" name={name} path={path} />
      ) : (
        <a className="nav__link" href={path}>
          {name}
        </a>
      )}
    </li>
  );
};

export default NavbarItem;
