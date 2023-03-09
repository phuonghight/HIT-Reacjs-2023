import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const list = [
    {
      name: "Home",
      path: "#hero",
      isActive: true,
    },
    {
      name: "About",
      path: "#about",
      isActive: false,
    },
    {
      name: "Services",
      path: "#services",
      isActive: false,
    },
    {
      name: "Portfolio",
      path: "#porfolio",
      isActive: false,
    },
    {
      name: "Team",
      path: "#team",
      isActive: false,
    },
    {
      name: "Drop Down",
      path: "#",
      dropdow: true,
      isActive: false,
    },
    {
      name: "Contact",
      path: "#contact",
      isActive: false,
    },
  ];
  return (
    <ul className="navbar" style={{ display: "flex" }}>
      {list.map((item) => (
        <NavbarItem
          name={item.name}
          path={item.path}
          dropdow={item?.dropdow}
          isActive={item.isActive}
          key={item.name}
        />
      ))}
    </ul>
  );
};

export default Navbar;
