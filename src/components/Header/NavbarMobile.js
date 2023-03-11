import React, { useState } from "react";
import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarMobile = ({ listNav }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show || (
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </button>
      )}

      {show && (
        <div>
          <button
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
