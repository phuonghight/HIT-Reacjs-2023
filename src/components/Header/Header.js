import React, { useEffect, useState } from "react";
import "./Header.css";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";
function Header() {
  const [isScrollHeader, setIsScrollHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrollHeader(window.scrollY > 1);
    });
  }, [isScrollHeader]);

  return (
    <header
      className="header"
      style={isScrollHeader ? { background: "rgba(40, 58, 90, 0.9)" } : {}}
    >
      <div className="container">
        <HeaderLogo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
