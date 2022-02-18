import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import WicsLogo from "../img/roundLogo.png";
import { NavLink } from "react-router-dom";

export default function NavBarItem(props) {
  return (
    <div>
      <NavLink
        to={props.path}
        className="bg-gradient-to-br hover:from-pink-200 hover:via-indigo-200 hover:to-indigo-400 text-gray-600 hover:text-white px-3 py-2 rounded-md text-sm nav"
      >
        {props.text}
      </NavLink>
    </div>
  );
}
