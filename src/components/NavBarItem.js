import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarItem(props) {
  return (
    <div>
      <NavLink
        to={props.path}
        className="bg-gradient-to-br nav hover:from-pink-200 hover:via-indigo-200 hover:to-indigo-400 text-gray-600 hover:text-white px-3 py-2 rounded-md text-sm"
      >
        {props.text}
      </NavLink>
    </div>
  );
}
