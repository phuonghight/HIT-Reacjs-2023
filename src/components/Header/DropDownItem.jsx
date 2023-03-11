import React from "react";

const DropDownItem = ({ path, name, isDeepDropDown = false }) => {
  return (
    <li className="dropdown__item">
      <a href={path}>{name}</a>
    </li>
  );
};

export default DropDownItem;
