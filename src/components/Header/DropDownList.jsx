import React, { useState } from "react";
import DropDownItem from "./DropDownItem";

const DropDownList = () => {
  const [list, setList] = useState([
    {
      path: "#",
      name: "Drop Down 1",
    },
    {
      path: "#",
      name: "Deep Drop Down",
      isDeepDropDown: true,
    },
    {
      path: "#",
      name: "Drop Down 2",
    },
    {
      path: "#",
      name: "Drop Down 3",
    },
    {
      path: "#",
      name: "Drop Down 4",
    },
  ]);

  return (
    <ul className="dropdown__list">
      {list.map((item) => (
        <DropDownItem
          key={item.name}
          path={item.path}
          name={item.name}
          isDeepDropDown={item?.isDeepDropDown}
        />
      ))}
    </ul>
  );
};

export default DropDownList;
