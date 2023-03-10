import React from "react";

const NavbarButton = ({ path, name, className }) => {
  return (
    <a href={path} className={className}>
      {name}
    </a>
  );
};

export default NavbarButton;
