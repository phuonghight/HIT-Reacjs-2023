import React from "react";
import NavbarItem from "./NavbarItem";
import "./Navbar.css";

const Navbar = ({ listNav }) => {
  return (
    <ul className="navbar">
      {listNav.map((item) => (
        <NavbarItem
          name={item.name}
          path={item.path}
          dropdow={item?.dropdow}
          isActive={item.isActive}
          key={item.name}
          isNavbarButton={item?.isNavbarButton}
        />
      ))}
    </ul>
  );
};

export default Navbar;
