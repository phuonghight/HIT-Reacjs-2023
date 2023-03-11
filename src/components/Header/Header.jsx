import React, { useEffect, useState } from "react";
import "./Header.css";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

function Header() {
  const listNav = [
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
    {
      name: "Get Started",
      path: "#about",
      isActive: false,
      isNavbarButton: true,
    },
  ];

  const [isScrollHeader, setIsScrollHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrollHeader(window.scrollY > 1);
    });
  }, [isScrollHeader]);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  return (
    <header
      className="header"
      style={isScrollHeader ? { background: "rgba(40, 58, 90, 0.9)" } : {}}
    >
      <div className="container">
        <HeaderLogo />
        {width > 1024 ? (
          <Navbar listNav={listNav} />
        ) : (
          <NavbarMobile listNav={listNav} />
        )}
      </div>
    </header>
  );
}

export default Header;
