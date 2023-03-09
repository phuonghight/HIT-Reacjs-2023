import React from "react";
import HeaderLogo from "./HeaderLogo";
function Header() {
  return (
    <header className="header" style={{ background: "#37517E" }}>
      <div className="contaier">
        <HeaderLogo></HeaderLogo>
      </div>
    </header>
  );
}

export default Header;
