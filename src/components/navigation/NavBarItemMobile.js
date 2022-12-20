import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarItem(props) {
  return (
    <div>
      <NavLink
        to={props.path}
        className="bg-gradient-to-br hover:from-pink-200 hover:via-indigo-200 hover:to-indigo-400 text-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        {props.text}
      </NavLink>
    </div>
  );
}
