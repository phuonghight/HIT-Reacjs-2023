import React, { useState } from "react";
import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarMobile = ({ listNav }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show || (
        <button
          style={{
            border: "none",
            background: "none",
            padding: "10px 15px",
            cursor: "pointer",
            appearance: "none",
            
          }}
          onClick={() => {
            setShow(true);
          }}
        >
          <FontAwesomeIcon
            style={{ color: "white", fontSize: "24px" }}
            icon="fa-solid fa-bars"
          />
        </button>
      )}

      {show && (
        <div>
          <button
            style={{
              border: "none",
              background: "none",
              padding: "10px 15px",
              cursor: "pointer",
              appearance: "none",
              
              color: "white",
              fontSize: "24px",
            }}
            onClick={() => {
              setShow(false);
            }}
          >
            X
          </button>
          <Navbar listNav={listNav} />
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
